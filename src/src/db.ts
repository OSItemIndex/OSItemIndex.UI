import Dexie, { Table } from "dexie";
import { propertiesOf } from "ts-reflection";
import { ItemsService, OsrsBoxItem } from "./api";

const dbName = "OsItemIndexDb";

export class OsItemIndexDb extends Dexie {
  items!: Table<OsrsBoxItem, number>;
  private static _db: OsItemIndexDb | null = null;

  constructor() {
    super(dbName);
  }

  private async sync(): Promise<Dexie> {
    const freshSchema = OsItemIndexDb.getDbSchema();

    if (!(await Dexie.exists(dbName))) {
      // No Db, define it, no need to sync
      this.version(1).stores({
        items: freshSchema,
      });
      return await this.open();
    }

    // open so we can read db schema info
    await this.open();

    const dbVerno = this.verno;
    const dbSchemaSet = this.tables.reduce(
      (_result, { schema }) =>
        new Set<string>(schema.indexes.map((idx) => idx.src)).add(schema.primKey.src),
      {}
    ) as Set<string>;

    this.close(); // close so we can operate if needed
    this.on("blocked", () => false); // Silence console warning of blocked event.

    // If the schema is different, delete the database and increase the version.
    // No reason to migrate/upgrade, since we're storing all new data regardless
    // TODO: This only compares two strings (the prop names of our interface as a full string, and the dexie schema)

    const currentSchemaSet = new Set(freshSchema.split(","));
    if (!setsEqual(dbSchemaSet, currentSchemaSet)) {
      this.delete();
      this.version(dbVerno + 1).stores({ items: freshSchema });
    } else {
      this.version(dbVerno).stores({ items: freshSchema }); // give dexie our table schema
    }

    return await this.open();
  }

  private static getDbSchema(): string {
    const interfaceProps = propertiesOf<OsrsBoxItem>();
    return interfaceProps.join(",");
  }

  static async getDb(): Promise<OsItemIndexDb> {
    if (this._db !== null && this._db.isOpen) {
      return this._db;
    }

    this._db = new OsItemIndexDb();

    await this._db.sync();
    return this._db;
  }

  static async getItems(): Promise<Table<OsrsBoxItem, number>> {
    const db = await this.getDb();
    return db.items;
  }

  private async seed() {
    await this.items.clear();
    await this.items.bulkPut(await ItemsService.getItemsSimple());
  }
}

function setsEqual<T>(a: Set<T>, b: Set<T>): boolean {
  return a.size === b.size && Array.from(a).every((value) => b.has(value));
}
