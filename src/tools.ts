import {Cell, Schema, Store} from './store.d';
import {DEFAULT, TYPE} from './common/strings';
import {IdMap, mapEnsure, mapNew, mapSet} from './common/map';
import {StoreStats, Tools, createTools as createToolsDecl} from './tools.d';
import {arrayEvery, arrayLength} from './common/array';
import {objFreeze, objIsEmpty} from './common/obj';
import {collForEach} from './common/coll';
import {getCellType} from './common/cell';
import {getCreateFunction} from './common/definable';
import {jsonParse} from './common/other';

type CellMeta = [string, IdMap<number>, [number, Cell?], number];

export const createTools: typeof createToolsDecl = getCreateFunction(
  (store: Store): Tools => {
    const getStoreStats = (detail?: boolean): StoreStats => {
      let totalTables = 0;
      let totalRows = 0;
      let totalCells = 0;
      const tables: any = {};

      store.forEachTable((tableId, forEachRow) => {
        totalTables++;
        let tableRows = 0;
        let tableCells = 0;
        const rows: any = {};

        forEachRow((rowId, forEachCell) => {
          tableRows++;
          let rowCells = 0;

          forEachCell(() => rowCells++);

          tableCells += rowCells;
          if (detail) {
            rows[rowId] = {rowCells};
          }
        });

        totalRows += tableRows;
        totalCells += tableCells;
        if (detail) {
          tables[tableId] = {tableRows, tableCells, rows};
        }
      });

      return {
        totalTables,
        totalRows,
        totalCells,
        jsonLength: store.getJson().length,
        ...(detail ? {detail: {tables}} : {}),
      };
    };

    const getStoreSchema = (): Schema => {
      const schema: Schema = jsonParse(store.getSchemaJson());
      if (
        !objIsEmpty(schema) ||
        arrayEvery(store.getTableIds(), (tableId): any => {
          const rowIds = store.getRowIds(tableId);
          const cellsMeta: IdMap<CellMeta> = mapNew();
          if (
            arrayEvery(rowIds, (rowId) =>
              arrayEvery(store.getCellIds(tableId, rowId), (cellId) => {
                const value = store.getCell(tableId, rowId, cellId) as Cell;
                const cellMeta: CellMeta = mapEnsure(cellsMeta, cellId, () => [
                  getCellType(value) as string,
                  mapNew(),
                  [0],
                  0,
                ]);
                const [type, values, [maxCount]] = cellMeta;
                const count = (mapEnsure(values, value, () => 0) as number) + 1;
                if (count > maxCount) {
                  cellMeta[2] = [count, value];
                }
                mapSet(values, value, count);
                cellMeta[3]++;
                return type == getCellType(value);
              }),
            )
          ) {
            schema[tableId] = {};
            collForEach(cellsMeta, ([type, , [, maxValue], count], cellId) => {
              const cellSchema: any = {[TYPE]: type};
              if (count == arrayLength(rowIds)) {
                cellSchema[DEFAULT] = maxValue;
              }
              schema[tableId][cellId] = cellSchema;
            });
            return 1;
          }
        })
      ) {
        return schema;
      }
      return {};
    };

    const tools: Tools = {
      getStoreStats,
      getStoreSchema,
    };

    return objFreeze(tools);
  },
);