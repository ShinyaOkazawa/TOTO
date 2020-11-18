import { MongoClient } from "https://deno.land/x/mongo@v0.13.0/mod.ts";

export class DatabaseConnection {
  public client: MongoClient;
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }
  public connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;

  }
  public getDatabase() {
    return this.client.database(this.dbName);
  }
}

const dbName = "toto";
const dbHostUrl = "mongodb://root:example@mongo:27017";
const db = new DatabaseConnection(dbName, dbHostUrl);
db.connect();
export { 
  db
}