import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, getUser, createUser } from "./controllers/UserController.js";
const router = new Router();

router.get("/user", getUsers)
  .get("/user/:id", getUser)
  .post("/user", createUser);

export default router;
