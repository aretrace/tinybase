import {
  A_FUNCTION_FOR,
  EXPORT,
  LISTENER,
  OR_UNDEFINED,
  REGISTERS_A_LISTENER,
  REPRESENTS,
  RETURNS_VOID,
  THE_END_OF_THE_TRANSACTION,
  THE_STORE,
  VERBS,
  getCallbackDoc,
  getCellContentDoc,
  getForEachDoc,
  getIdsDoc,
  getListenerDoc,
  getListenerTypeDoc,
  getRowContentDoc,
  getRowDoc,
  getRowTypeDoc,
  getTableContentDoc,
  getTableDoc,
  getTheContentOfTheStoreDoc,
  getValueContentDoc,
} from '../common/strings';
import {
  BOOLEAN,
  CELL,
  DEFAULT,
  EMPTY_STRING,
  ROW,
  ROW_IDS,
  SORTED_ROW_IDS,
  TABLE,
  TABLES,
  TYPE,
} from '../../common/strings';
import {
  IdMap,
  mapForEach,
  mapGet,
  mapMap,
  mapNew,
  mapSet,
} from '../../common/map';
import {
  LINE,
  LINE_TREE,
  camel,
  comment,
  flat,
  getCodeFunctions,
  join,
  mapUnique,
  snake,
} from '../common/code';
import {TablesSchema, ValuesSchema} from '../../store.d';
import {arrayForEach, arrayPush, arrayUnshift} from '../../common/array';
import {isString, isUndefined} from '../../common/other';
import {Id} from '../../common.d';
import {collValues} from '../../common/coll';
import {getSchemaFunctions} from '../common/schema';
import {objIsEmpty} from '../../common/obj';

export type TableTypes = [string, string, string, string, string, string];
export type SharedTableTypes = [string, string, IdMap<TableTypes>];

const METHOD_PREFIX_VERBS = ['get', 'has', 'set', 'del', 'set'];
const COMMON_IMPORTS = ['DoRollback', 'Id', 'IdOrNull', 'Ids', 'Json', 'Store'];

const storeMethod = (
  method: string,
  parameters = EMPTY_STRING,
  cast = EMPTY_STRING,
) => `store.${method}(${parameters})${cast ? ` as ${cast}` : EMPTY_STRING}`;
const fluentStoreMethod = (method: string, parameters = EMPTY_STRING) =>
  `fluent(() => ${storeMethod(method, parameters)})`;

const storeListener = (
  method: string,
  beforeParameters = EMPTY_STRING,
  afterParameters = EMPTY_STRING,
) =>
  `store.${method}(${
    beforeParameters ? `${beforeParameters}, ` : EMPTY_STRING
  }proxy(${LISTENER})${
    afterParameters ? `, ${afterParameters}` : EMPTY_STRING
  })`;

export const getStoreCoreApi = (
  tablesSchema: TablesSchema,
  valuesSchema: ValuesSchema,
  module: string,
): [string, string, SharedTableTypes | []] => {
  const [
    build,
    addImport,
    addType,
    addInternalFunction,
    addConstant,
    getImports,
    getTypes,
    getConstants,
  ] = getCodeFunctions();

  const [mapTablesSchema, mapCellSchema, mapValuesSchema] = getSchemaFunctions(
    tablesSchema,
    valuesSchema,
    addConstant,
  );

  const methods: IdMap<
    [
      parameters: LINE,
      returnType: string,
      body: LINE,
      doc: string,
      generic: string,
    ]
  > = mapNew();

  const getMethods = (location: 0 | 1 = 0): LINE_TREE =>
    mapMap(methods, ([parameters, returnType, body, doc, generic], name) => {
      const lines = location
        ? [`${name}: ${generic}(${parameters}): ${returnType} => ${body},`]
        : [`${name}${generic}(${parameters}): ${returnType};`];
      if (!location) {
        arrayUnshift(lines, comment(doc));
      }
      arrayPush(lines, EMPTY_STRING);
      return lines;
    });

  const addMethod = (
    name: Id,
    parameters: LINE,
    returnType: string,
    body: LINE,
    doc: string,
    generic = '',
  ): Id =>
    mapUnique(methods, name, [parameters, returnType, body, doc, generic]);

  const addProxyMethod = (
    prefixVerb: number,
    prefix: string,
    underlyingName: string,
    returnType: string,
    doc: string,
    params = EMPTY_STRING,
    paramsInCall = EMPTY_STRING,
    generic = EMPTY_STRING,
  ): Id =>
    addMethod(
      `${METHOD_PREFIX_VERBS[prefixVerb]}${prefix}${
        prefixVerb == 4 ? 'Partial' : ''
      }${underlyingName}` as string,
      params,
      returnType,
      (returnType == storeType ? fluentStoreMethod : storeMethod)(
        `${METHOD_PREFIX_VERBS[prefixVerb]}${
          prefixVerb == 4 ? 'Partial' : ''
        }${underlyingName}`,
        paramsInCall,
        prefixVerb ? undefined : returnType,
      ),
      doc,
      generic,
    );

  const moduleDefinition = `./${camel(module)}.d`;
  const storeType = camel(module, 1);
  const storeInstance = camel(storeType);
  const createSteps: any[] = [];

  let sharedTableTypes: SharedTableTypes | [] = [];

  // --

  addImport(
    1,
    moduleDefinition,
    storeType,
    `create${storeType} as create${storeType}Decl`,
  );

  if (!objIsEmpty(tablesSchema)) {
    const tablesTypes: IdMap<TableTypes> = mapNew();
    mapTablesSchema((tableId: Id, tableName: string) => {
      const tableTypes = [
        addType(
          `${tableName}Table`,
          `{[rowId: Id]: ${tableName}Row}`,
          `${REPRESENTS} the '${tableId}' Table`,
        ),
        addType(
          `${tableName}Row`,
          `{${join(
            mapCellSchema(
              tableId,
              (cellId, type, defaultValue) =>
                `'${cellId}'${
                  isUndefined(defaultValue) ? '?' : EMPTY_STRING
                }: ${type};`,
            ),
            ' ',
          )}}`,
          getRowTypeDoc(tableId),
        ),
        addType(
          `${tableName}RowWhenSet`,
          `{${join(
            mapCellSchema(tableId, (cellId, type) => `'${cellId}'?: ${type};`),
            ' ',
          )}}`,
          getRowTypeDoc(tableId, 1),
        ),
        addType(
          `${tableName}CellId`,
          join(
            mapCellSchema(tableId, (cellId) => `'${cellId}'`),
            ' | ',
          ),
          `A Cell Id for the '${tableId}' Table`,
        ),
        addType(
          `${tableName}CellCallback`,
          `(...[cellId, cell]: ${join(
            mapCellSchema(
              tableId,
              (cellId, type) => `[cellId: '${cellId}', cell: ${type}]`,
            ),
            ' | ',
          )})${RETURNS_VOID}`,
          getCallbackDoc(
            `a Cell Id and value from a Row in the '${tableId}' Table`,
          ),
        ),
        addType(
          `${tableName}RowCallback`,
          `(rowId: Id, forEachCell: (cellCallback: ${tableName}CellCallback)` +
            `${RETURNS_VOID})${RETURNS_VOID}`,
          getCallbackDoc(
            `a Row Id from the '${tableId}' Table, and a Cell iterator`,
          ),
        ),
      ];
      mapSet(tablesTypes, tableId, tableTypes);
      addImport(1, moduleDefinition, ...tableTypes);
    });

    const tablesType = addType(
      TABLES,
      `{${join(
        mapTablesSchema(
          (tableId) => `'${tableId}'?: ${mapGet(tablesTypes, tableId)?.[0]};`,
        ),
        ' ',
      )}}`,
      getTheContentOfTheStoreDoc(1, 5),
    );
    const tableIdType = addType(
      'TableId',
      join(
        mapTablesSchema((tableId) => `'${tableId}'`),
        ' | ',
      ),
      `A Table Id in ${THE_STORE}`,
    );
    const tableCallbackType = addType(
      'TableCallback',
      `(...[tableId, rowCallback]: ${join(
        mapTablesSchema(
          (tableId) =>
            `[tableId: '${tableId}', ` +
            `forEachRow: (rowCallback: ${
              mapGet(tablesTypes, tableId)?.[5]
            })${RETURNS_VOID}]`,
        ),
        ' | ',
      )})${RETURNS_VOID}`,
      getCallbackDoc('a Table Id, and a Row iterator'),
    );
    const getCellChangeType = addType(
      'GetCellChange',
      `(...[tableId, rowId, cellId]: ${join(
        mapTablesSchema(
          (tableId) =>
            `[tableId: '${tableId}', rowId: Id, cellId: ${
              mapGet(tablesTypes, tableId)?.[3]
            }]`,
        ),
        ' | ',
      )}) => CellChange`,
      `${A_FUNCTION_FOR} returning information about any Cell's changes ` +
        'during a transaction',
    );
    const tablesListenerType = addType(
      'TablesListener',
      `(${storeInstance}: ${storeType}, ` +
        `getCellChange: ${getCellChangeType}${OR_UNDEFINED})${RETURNS_VOID}`,
      getListenerTypeDoc(1),
    );
    const tableIdsListenerType = addType(
      'TableIdsListener',
      `(${storeInstance}: ${storeType})${RETURNS_VOID}`,
      getListenerTypeDoc(2),
    );
    const tableListenerType = addType(
      'TableListener',
      `(${storeInstance}: ${storeType}, tableId: ${tableIdType}, ` +
        `getCellChange: ${getCellChangeType}${OR_UNDEFINED})${RETURNS_VOID}`,
      getListenerTypeDoc(3),
    );
    const rowIdsListenerType = addType(
      'RowIdsListener',
      `(${storeInstance}: ${storeType}, tableId: ${tableIdType})` +
        RETURNS_VOID,
      getListenerTypeDoc(4, 3),
    );
    const rowListenerType = addType(
      'RowListener',
      `(${storeInstance}: ${storeType}, tableId: ${tableIdType}, rowId: Id, ` +
        `getCellChange: ${getCellChangeType}${OR_UNDEFINED})${RETURNS_VOID}`,
      getListenerTypeDoc(5, 3),
    );
    const cellIdsListenerType = addType(
      'CellIdsListener',
      `(${storeInstance}: ${storeType}, tableId: ${tableIdType}, rowId: Id)` +
        RETURNS_VOID,
      getListenerTypeDoc(6, 5),
    );
    const cellListenerType = addType(
      'CellListener',
      `(...[${storeInstance}, tableId, rowId, cellId, newCell, oldCell, ` +
        `getCellChange]: ${join(
          flat(
            mapTablesSchema((tableId) =>
              mapCellSchema(
                tableId,
                (cellId, type) =>
                  `[${storeInstance}: ${storeType}, tableId: '${tableId}', ` +
                  `rowId: Id, cellId: '${cellId}', ` +
                  `newCell: ${type}${OR_UNDEFINED}, ` +
                  `oldCell: ${type}${OR_UNDEFINED}, ` +
                  `getCellChange: ${getCellChangeType} ` +
                  '| undefined]',
              ),
            ),
          ),
          ' | ',
        )})${RETURNS_VOID}`,
      getListenerTypeDoc(7, 5),
    );
    const invalidCellListenerType = addType(
      'InvalidCellListener',
      `(${storeInstance}: ${storeType}, tableId: Id, rowId: Id, cellId: Id, ` +
        `invalidCells: any[])${RETURNS_VOID}`,
      getListenerTypeDoc(8),
    );

    arrayForEach(
      [
        [TABLES],
        [BOOLEAN],
        [storeType, `tables: ${tablesType}`, 'tables'],
        [storeType],
      ],
      ([returnType, params, paramsInCall], verb) =>
        addProxyMethod(
          verb,
          EMPTY_STRING,
          TABLES,
          returnType,
          getTheContentOfTheStoreDoc(1, verb),
          params,
          paramsInCall,
        ),
    );
    addMethod(
      `getTableIds`,
      EMPTY_STRING,
      `${tableIdType}[]`,
      storeMethod('getTableIds', EMPTY_STRING, `${tableIdType}[]`),
      getIdsDoc('Table', THE_STORE),
    );
    addMethod(
      'forEachTable',
      `tableCallback: ${tableCallbackType}`,
      'void',
      storeMethod('forEachTable', 'tableCallback as any'),
      getForEachDoc('Table', THE_STORE),
    );

    const mapCellTypes: IdMap<string> = mapNew();
    sharedTableTypes = [tablesType, tableIdType, tablesTypes];

    mapTablesSchema((tableId, tableName, TABLE_ID) => {
      const [
        tableType,
        rowType,
        rowWhenSetType,
        cellIdType,
        cellCallbackType,
        rowCallbackType,
      ] = mapGet(tablesTypes, tableId) as TableTypes;

      arrayForEach(
        [
          [tableType],
          [BOOLEAN],
          [storeType, `table: ${tableType}`, ', table'],
          [storeType],
        ],
        ([returnType, params, paramsInCall = EMPTY_STRING], verb) =>
          addProxyMethod(
            verb,
            tableName,
            TABLE,
            returnType,
            getTableContentDoc(tableId, verb),
            params,
            `${TABLE_ID}${paramsInCall}`,
          ),
      );
      addMethod(
        `get${tableName}${ROW_IDS}`,
        EMPTY_STRING,
        'Ids',
        storeMethod(`get${ROW_IDS}`, TABLE_ID),
        getIdsDoc('Row', getTableDoc(tableId)),
      );
      addMethod(
        `get${tableName}${SORTED_ROW_IDS}`,
        `cellId?: ${cellIdType}, descending?: boolean, ` +
          'offset?: number, limit?: number',
        'Ids',
        storeMethod(
          `get${SORTED_ROW_IDS}`,
          `${TABLE_ID}, cellId, descending, offset, limit`,
        ),
        getIdsDoc('Row', getTableDoc(tableId), 1),
      );
      addMethod(
        `forEach${tableName}Row`,
        `rowCallback: ${rowCallbackType}`,
        'void',
        storeMethod('forEachRow', `${TABLE_ID}, rowCallback as any`),
        getForEachDoc('Row', getTableDoc(tableId)),
      );

      arrayForEach(
        [
          [rowType],
          [BOOLEAN],
          [storeType, `, row: ${rowWhenSetType}`, ', row'],
          [storeType],
          [storeType, `, partialRow: ${rowWhenSetType}`, ', partialRow'],
        ],
        (
          [returnType, params = EMPTY_STRING, paramsInCall = EMPTY_STRING],
          verb,
        ) =>
          addProxyMethod(
            verb,
            tableName,
            ROW,
            returnType,
            getRowContentDoc(tableId, verb),
            `rowId: Id${params}`,
            `${TABLE_ID}, rowId${paramsInCall}`,
          ),
      );
      addMethod(
        `add${tableName}Row`,
        `row: ${rowWhenSetType}`,
        `Id${OR_UNDEFINED}`,
        storeMethod('addRow', `${TABLE_ID}, row`),
        `Adds a new Row to ${getTableDoc(tableId)}`,
      );
      addMethod(
        `get${tableName}CellIds`,
        'rowId: Id',
        `${cellIdType}[]`,
        storeMethod('getCellIds', `${TABLE_ID}, rowId`, `${cellIdType}[]`),
        getIdsDoc('Cell', getRowDoc(tableId)),
      );
      addMethod(
        `forEach${tableName}Cell`,
        `rowId: Id, cellCallback: ${cellCallbackType}`,
        'void',
        storeMethod('forEachCell', `${TABLE_ID}, rowId, cellCallback as any`),
        getForEachDoc('Cell', getRowDoc(tableId)),
      );

      mapCellSchema(
        tableId,
        (cellId, type, defaultValue, CELL_ID, cellName) => {
          const mapCellType = `Map${camel(type, 1)}`;
          mapSet(mapCellTypes, type, mapCellType);

          const returnCellType = `${type}${
            isUndefined(defaultValue) ? OR_UNDEFINED : EMPTY_STRING
          }`;

          arrayForEach(
            [
              [returnCellType],
              [BOOLEAN],
              [storeType, `, cell: ${type} | ${mapCellType}`, ', cell as any'],
              [storeType],
            ],
            (
              [returnType, params = EMPTY_STRING, paramsInCall = EMPTY_STRING],
              verb,
            ) =>
              addProxyMethod(
                verb,
                `${tableName}${cellName}`,
                CELL,
                returnType,
                getCellContentDoc(tableId, cellId, verb),
                `rowId: Id${params}`,
                `${TABLE_ID}, rowId, ${CELL_ID}${paramsInCall}`,
              ),
          );
        },
      );
    });

    addMethod(
      'getTablesJson',
      EMPTY_STRING,
      'Json',
      storeMethod('getTablesJson'),
      getTheContentOfTheStoreDoc(1, 6),
    );
    addMethod(
      'setTablesJson',
      'tablesJson: Json',
      storeType,
      fluentStoreMethod('setTablesJson', 'tablesJson'),
      getTheContentOfTheStoreDoc(1, 7),
    );

    addMethod(
      'addTablesListener',
      `${LISTENER}: ${tablesListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addTablesListener', EMPTY_STRING, 'mutator'),
      getTheContentOfTheStoreDoc(1, 8) + ' changes',
    );
    addMethod(
      'addTableIdsListener',
      `${LISTENER}: ${tableIdsListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addTableIdsListener', EMPTY_STRING, 'mutator'),
      getListenerDoc('the Table Ids', THE_STORE, 1),
    );
    addMethod(
      'addTableListener',
      `tableId: ${tableIdType} | null, ${LISTENER}: ${tableListenerType}, ` +
        'mutator?: boolean',
      'Id',
      storeListener('addTableListener', 'tableId', 'mutator'),
      getListenerDoc('a Table', THE_STORE),
    );
    addMethod(
      'addRowIdsListener',
      `tableId: ${tableIdType} | null, ${LISTENER}: ${rowIdsListenerType}, ` +
        'mutator?: boolean',
      'Id',
      storeListener('addRowIdsListener', 'tableId', 'mutator'),
      getListenerDoc('the Row Ids', 'a Table', 1),
    );
    addMethod(
      'addRowListener',
      `tableId: ${tableIdType} | null, rowId: IdOrNull, ` +
        `${LISTENER}: ${rowListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addRowListener', 'tableId, rowId', 'mutator'),
      getListenerDoc('a Row', 'a Table'),
    );
    addMethod(
      'addCellIdsListener',
      `tableId: ${tableIdType} | null, rowId: IdOrNull, ` +
        `${LISTENER}: ${cellIdsListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addCellIdsListener', 'tableId, rowId', 'mutator'),
      getListenerDoc('the Cell Ids', 'a Row', 1),
    );
    addMethod(
      'addCellListener',
      `tableId: ${tableIdType} | null, rowId: IdOrNull, cellId: ${join(
        mapTablesSchema((tableId) => mapGet(tablesTypes, tableId)?.[3] ?? ''),
        ' | ',
      )} | null, ${LISTENER}: ${cellListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addCellListener', 'tableId, rowId, cellId', 'mutator'),
      getListenerDoc('a Cell', 'a Row'),
    );
    addMethod(
      'addInvalidCellListener',
      `tableId: IdOrNull, rowId: IdOrNull, cellId: IdOrNull, ${LISTENER}: ` +
        `${invalidCellListenerType}, mutator?: boolean`,
      'Id',
      storeListener(
        'addInvalidCellListener',
        'tableId, rowId, cellId',
        'mutator',
      ),
      `${REGISTERS_A_LISTENER} whenever an invalid Cell change was attempted`,
    );

    mapForEach(mapCellTypes, (type, mapCellType) =>
      addType(
        mapCellType,
        `(cell: ${type}${OR_UNDEFINED}) => ${type}`,
        `Takes a ${type} Cell value and returns another`,
      ),
    );

    addImport(
      1,
      moduleDefinition,
      tablesType,
      tableIdType,
      tableCallbackType,
      tablesListenerType,
      tableIdsListenerType,
      tableListenerType,
      rowIdsListenerType,
      rowListenerType,
      cellIdsListenerType,
      cellListenerType,
      invalidCellListenerType,
      ...collValues(mapCellTypes),
    );
    addImport(0, 'tinybase', 'CellChange');

    arrayPush(
      createSteps,
      '.setTablesSchema({',
      flat(
        mapTablesSchema((tableId, _, TABLE_ID) => [
          `[${TABLE_ID}]: {`,
          ...mapCellSchema(
            tableId,
            (_, type, defaultValue, CELL_ID) =>
              `[${CELL_ID}]: {[${addConstant(
                snake(TYPE),
                `'${TYPE}'`,
              )}]: ${addConstant(snake(type), `'${type}'`)}${
                isUndefined(defaultValue)
                  ? EMPTY_STRING
                  : `, [${addConstant(snake(DEFAULT), `'${DEFAULT}'`)}]: ${
                      isString(defaultValue)
                        ? addConstant(snake(defaultValue), `'${defaultValue}'`)
                        : defaultValue
                    }`
              }},`,
          ),
          `},`,
        ]),
      ),
      '})',
    );
  }

  if (!objIsEmpty(valuesSchema)) {
    const valuesType = addType(
      'Values',
      `{${join(
        mapValuesSchema(
          (valueId, type, defaultValue) =>
            `'${valueId}'${
              isUndefined(defaultValue) ? '?' : EMPTY_STRING
            }: ${type};`,
        ),
        ' ',
      )}}`,
      getTheContentOfTheStoreDoc(2, 5),
    );
    const valuesWhenSetType = addType(
      'ValuesWhenSet',
      `{${join(
        mapValuesSchema((valueId, type) => `'${valueId}'?: ${type};`),
        ' ',
      )}}`,
      getTheContentOfTheStoreDoc(2, 5, 1),
    );
    const valueIdType = addType(
      'ValueId',
      join(
        mapValuesSchema((valueId) => `'${valueId}'`),
        ' | ',
      ),
      `A Value Id in ${THE_STORE}`,
    );
    const valueCallbackType = addType(
      'ValueCallback',
      `(...[valueId, rowCallback]: ${join(
        mapValuesSchema(
          (valueId, type) => `[valueId: '${valueId}', value: ${type}]`,
        ),
        ' | ',
      )})${RETURNS_VOID}`,
      getCallbackDoc('a Value Id, and value'),
    );
    const getValueChangeType = addType(
      'GetValueChange',
      `(valueId: ${valueIdType}) => ValueChange`,
      `${A_FUNCTION_FOR} returning information about any Value's changes ` +
        'during a transaction',
    );
    const valuesListenerType = addType(
      'ValuesListener',
      `(${storeInstance}: ${storeType}, ` +
        `getValueChange: ${getValueChangeType}${OR_UNDEFINED})` +
        RETURNS_VOID,
      getListenerTypeDoc(9),
    );
    const valueIdsListenerType = addType(
      'ValueIdsListener',
      `(${storeInstance}: ${storeType})${RETURNS_VOID}`,
      getListenerTypeDoc(10),
    );
    const valueListenerType = addType(
      'ValueListener',
      `(...[${storeInstance}, valueId, newValue, oldValue, ` +
        `getValueChange]: ${join(
          mapValuesSchema(
            (valueId, type) =>
              `[${storeInstance}: ${storeType}, valueId: '${valueId}', ` +
              `newValue: ${type}${OR_UNDEFINED}, ` +
              `oldValue: ${type}${OR_UNDEFINED}, ` +
              `getValueChange: ${getValueChangeType} ` +
              '| undefined]',
          ),
          ' | ',
        )})${RETURNS_VOID}`,
      getListenerTypeDoc(11),
    );
    const invalidValueListenerType = addType(
      'InvalidValueListener',
      `(${storeInstance}: ${storeType}, valueId: Id, ` +
        `invalidValues: any[])${RETURNS_VOID}`,
      getListenerTypeDoc(12),
    );

    addMethod(
      `hasValues`,
      EMPTY_STRING,
      BOOLEAN,
      storeMethod('hasValues'),
      getTheContentOfTheStoreDoc(2, 1),
    );
    addMethod(
      `getValues`,
      EMPTY_STRING,
      valuesType,
      storeMethod('getValues', EMPTY_STRING, valuesType),
      getTheContentOfTheStoreDoc(2, 0),
    );
    addMethod(
      `setValues`,
      `values: ${valuesWhenSetType}`,
      storeType,
      fluentStoreMethod('setValues', 'values'),
      getTheContentOfTheStoreDoc(2, 2),
    );
    addMethod(
      `setPartialValues`,
      `partialValues: ${valuesWhenSetType}`,
      storeType,
      fluentStoreMethod('setPartialValues', 'partialValues'),
      getTheContentOfTheStoreDoc(2, 4),
    );
    addMethod(
      `delValues`,
      EMPTY_STRING,
      storeType,
      fluentStoreMethod('delValues'),
      getTheContentOfTheStoreDoc(2, 3),
    );
    addMethod(
      `getValueIds`,
      EMPTY_STRING,
      `${valueIdType}[]`,
      storeMethod('getValueIds', EMPTY_STRING, `${valueIdType}[]`),
      getIdsDoc('Value', THE_STORE),
    );
    addMethod(
      'forEachValue',
      `valueCallback: ${valueCallbackType}`,
      'void',
      storeMethod('forEachValue', 'valueCallback as any'),
      getForEachDoc('Value', THE_STORE),
    );

    mapValuesSchema((valueId, type, _, VALUE_ID, valueName) => {
      addMethod(
        `has${valueName}Value`,
        EMPTY_STRING,
        BOOLEAN,
        storeMethod('hasValue', VALUE_ID),
        getValueContentDoc(valueId, 1),
      );
      addMethod(
        `get${valueName}Value`,
        EMPTY_STRING,
        type,
        storeMethod('getValue', VALUE_ID, type),
        getValueContentDoc(valueId),
      );
      addMethod(
        `set${valueName}Value`,
        `value: ${type}`,
        storeType,
        fluentStoreMethod('setValue', `${VALUE_ID}, value`),
        getValueContentDoc(valueId, 2),
      );
      addMethod(
        `del${valueName}Value`,
        EMPTY_STRING,
        storeType,
        fluentStoreMethod('delValue', VALUE_ID),
        getValueContentDoc(valueId, 3),
      );
    });

    addMethod(
      'getValuesJson',
      EMPTY_STRING,
      'Json',
      storeMethod('getValuesJson'),
      getTheContentOfTheStoreDoc(2, 6),
    );
    addMethod(
      'setValuesJson',
      'valuesJson: Json',
      storeType,
      fluentStoreMethod('setValuesJson', 'valuesJson'),
      getTheContentOfTheStoreDoc(2, 7),
    );

    addMethod(
      'addValuesListener',
      `${LISTENER}: ${valuesListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addValuesListener', EMPTY_STRING, 'mutator'),
      getTheContentOfTheStoreDoc(2, 8) + ' changes',
    );
    addMethod(
      'addValueIdsListener',
      `${LISTENER}: ${valueIdsListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addValueIdsListener', EMPTY_STRING, 'mutator'),
      getListenerDoc('the Value Ids', THE_STORE, 1),
    );
    addMethod(
      'addValueListener',
      `valueId: ${valueIdType} | null, ${LISTENER}: ${valueListenerType}, ` +
        'mutator?: boolean',
      'Id',
      storeListener('addValueListener', 'valueId', 'mutator'),
      getListenerDoc('a Value', THE_STORE),
    );
    addMethod(
      'addInvalidValueListener',
      `valueId: IdOrNull, ${LISTENER}: ` +
        `${invalidValueListenerType}, mutator?: boolean`,
      'Id',
      storeListener('addInvalidValueListener', 'valueId', 'mutator'),
      `${REGISTERS_A_LISTENER} whenever an invalid Cell change was attempted`,
    );

    addImport(
      1,
      moduleDefinition,
      valuesType,
      valuesWhenSetType,
      valueIdType,
      valueCallbackType,
      valuesListenerType,
      valueIdsListenerType,
      valueListenerType,
      invalidValueListenerType,
    );
    addImport(0, 'tinybase', 'ValueChange');

    arrayPush(
      createSteps,
      '.setValuesSchema({',
      mapValuesSchema((valueId, type, defaultValue, VALUE_ID) => [
        `[${VALUE_ID}]: {[${addConstant(
          snake(TYPE),
          `'${TYPE}'`,
        )}]: ${addConstant(snake(type), `'${type}'`)}${
          isUndefined(defaultValue)
            ? EMPTY_STRING
            : `, [${addConstant(snake(DEFAULT), `'${DEFAULT}'`)}]: ${
                isString(defaultValue)
                  ? addConstant(snake(defaultValue), `'${defaultValue}'`)
                  : defaultValue
              }`
        }},`,
      ]),
      '})',
    );
  }

  addImport(0, 'tinybase', ...COMMON_IMPORTS);

  const transactionListenerType = addType(
    'TransactionListener',
    `(${storeInstance}: ${storeType}, cellsTouched: boolean, ` +
      `valuesTouched: boolean)${RETURNS_VOID}`,
    `${A_FUNCTION_FOR} listening to the completion of a transaction`,
  );

  addMethod(
    'getJson',
    EMPTY_STRING,
    'Json',
    storeMethod('getJson'),
    getTheContentOfTheStoreDoc(0, 6),
  );
  addMethod(
    'setJson',
    'json: Json',
    storeType,
    fluentStoreMethod('setJson', 'json'),
    getTheContentOfTheStoreDoc(0, 7),
  );

  addMethod(
    'transaction',
    'actions: () => Return, doRollback?: DoRollback',
    'Return',
    storeMethod('transaction', 'actions, doRollback'),
    'Execute a transaction to make multiple mutations',
    '<Return>',
  );
  addMethod(
    'startTransaction',
    EMPTY_STRING,
    storeType,
    fluentStoreMethod('startTransaction'),
    'Explicitly starts a transaction',
  );
  addMethod(
    'finishTransaction',
    'doRollback?: DoRollback,',
    storeType,
    fluentStoreMethod('finishTransaction', 'doRollback'),
    'Explicitly finishes a transaction',
  );

  addMethod(
    'addWillFinishTransactionListener',
    `${LISTENER}: ${transactionListenerType}`,
    'Id',
    storeListener('addWillFinishTransactionListener'),
    `${REGISTERS_A_LISTENER} just before ${THE_END_OF_THE_TRANSACTION}`,
  );
  addMethod(
    'addDidFinishTransactionListener',
    `${LISTENER}: ${transactionListenerType}`,
    'Id',
    storeListener('addDidFinishTransactionListener'),
    `${REGISTERS_A_LISTENER} just after ${THE_END_OF_THE_TRANSACTION}`,
  );

  addMethod(
    'callListener',
    `${LISTENER}Id: Id`,
    storeType,
    fluentStoreMethod('callListener', `${LISTENER}Id`),
    `Manually provoke a ${LISTENER} to be called`,
  );
  addMethod(
    'delListener',
    `${LISTENER}Id: Id`,
    storeType,
    fluentStoreMethod('delListener', `${LISTENER}Id`),
    `Remove a ${LISTENER} that was previously added to ${THE_STORE}`,
  );

  addMethod(
    'getStore',
    EMPTY_STRING,
    'Store',
    'store',
    `${VERBS[0]} the underlying Store object`,
  );

  addImport(1, 'tinybase', 'createStore', ...COMMON_IMPORTS);
  addImport(
    1,
    moduleDefinition,
    storeType,
    `create${storeType} as create${storeType}Decl`,
    transactionListenerType,
  );

  addConstant('store', ['createStore()', ...createSteps]);

  addInternalFunction('fluent', 'actions: () => Store', [
    'actions();',
    `return ${storeInstance};`,
  ]);
  addInternalFunction(
    'proxy',
    `${LISTENER}: any`,
    `(_: Store, ...args: any[]) => ${LISTENER}(${storeInstance}, ...args)`,
  );

  addConstant(storeInstance, ['{', ...getMethods(1), '}']);

  // --

  return [
    build(
      ...getImports(0),
      ...getTypes(),
      `${EXPORT} interface ${storeType} {`,
      ...getMethods(0),
      `}`,
      EMPTY_STRING,
      comment(`Creates a ${storeType} object`),
      `${EXPORT} function create${storeType}(): ${storeType};`,
    ),
    build(
      ...getImports(1),
      `${EXPORT} const create${storeType}: ` +
        `typeof create${storeType}Decl = () => {`,
      ...getConstants(),
      `return Object.freeze(${storeInstance});`,
      `};`,
    ),
    sharedTableTypes,
  ];
};
