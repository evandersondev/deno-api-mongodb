import { Database } from "https://deno.land/x/denodb/mod.ts";

const db = new Database("mongo", {
  uri: "mongodb://127.0.0.1:27017",
  database: "denodb",
});

export default db;
