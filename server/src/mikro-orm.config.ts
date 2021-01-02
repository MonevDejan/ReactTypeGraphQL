import { __prod__ } from "./constatns";
import { Post } from "./enteties/post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./enteties/user";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  password: "DONTMESS92EVA",
  user: "postgres"
} as Parameters<typeof MikroORM.init>[0];
