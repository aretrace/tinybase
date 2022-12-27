# Command Line

TinyBase v2.2 includes a command line tool to assist with common actions in a
non-programmatic tool chain.

While this tool may add more functionality in the future, for now it is
essentially limited to code generation, creating APIs from a file-based Schema.

You can run the `tinybase` CLI using node's `npx` command:

```bash
npx tinybase
```

This will emit a list of the commands that are available:

```bash
tinybase <command>

Usage:

 tinybase help
 - print this message

 tinybase version
 - get the current TinyBase version

 tinybase getStoreApi <schemaFile> <storeName> <outputDir>
 - generate .d.ts and .ts files from a schema file
```

Currently there are three commands. `help` generates this message and `version`
prints out the version of the installed tinybase module.

More interestingly, `getStoreApi` takes a Schema from a file and emits `.d.ts`
and `.ts` files for it (much as described in the Generating APIs guide).

For example, imagine if you have defined a TinyBase Schema in a file called
`schema.json`:

```json
{
  "pets": {
    "species": {
      "type": "string",
      "default": "dog"
    },
    "price": {
      "type": "number"
    }
  }
}
```

The `getStoreApi` command takes a reference to that file, a name for the wrapped
store (and file names), and an output directory (which must already exist):

```bash
npx tinybase getStoreApi schema.json shop api
```

This will list out the two files that have been generated:

```bash
    Definition: [...]/api/shop.d.ts
Implementation: [...]/api/shop.ts
```

These will contain the definition of the API:

```ts yolo
//...
/**
 * Represents the 'pets' Table.
 */
export type PetsTable = {[rowId: Id]: PetsRow};

/**
 * Represents a Row when getting the content of the 'pets' Table.
 */
export type PetsRow = {species: string; price?: number};
//...
```

And the implementation:

```ts yolo
//...
export const createShop: typeof createShopDecl = () => {
  // ...
  const store = createStore().setSchema({
    pets: {
      species: {type: 'string', default: 'dog'},
      price: {type: 'number'},
    },
  });
  return {
    hasPetsTable: (): boolean => store.hasTable('pets'),
    getPetsTable: (): PetsTable => store.getTable('pets') as PetsTable,
    // ...
  };
};
```

Both of these files, of course, you can now use to build and implement your own
app.