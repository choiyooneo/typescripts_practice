{
  interface Database<T, K> {
    get(id: K): T;
    set(id: K, value: T): void;
  }

  interface Persistable {
    saveToString(): string;
    restoredFromString(storedState: string): void;
  }

  type DBKeyType = string | number | symbol;

  class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
    protected db: Record<K, T> = {} as Record<K, T>;

    get(id: K): T {
      return this.db[id];
    }
    set(id: K, value: T): void {
      this.db[id] = value;
    }
  }

  class PersistentMemoryDB<T, K extends DBKeyType>
    extends InMemoryDatabase<T, K>
    implements Persistable
  {
    saveToString(): string {
      return JSON.stringify(this.db);
    }
    restoredFromString(storedState: string): void {
      this.db = JSON.parse(storedState);
    }
  }

  const myDB = new PersistentMemoryDB<number, string>();
  myDB.set("50", 25);

  const oldDb = myDB.saveToString();
  myDB.set("two", 50);

  console.log(myDB);

  myDB.restoredFromString(oldDb);
  console.log(myDB);
}
