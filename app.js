import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import db from "./database/config.js";

import router from "./routes.js";

const HOST = config().HOST;
const PORT = config().PORT;

db.sync();
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

export { app, HOST, PORT };
