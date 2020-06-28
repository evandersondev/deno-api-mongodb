import { Model, DataTypes } from "https://deno.land/x/denodb/mod.ts";
import db from "../database/config.js";

class User extends Model {
  static table = "user";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.string(150),
    email: DataTypes.string(150),
  };
}

db.link([User]);

export default User;
