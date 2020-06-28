import { app, PORT, HOST } from "./app.js";

await app.listen(`${HOST}:${PORT}`);
console.log(`Server running on port ${PORT}...`);
