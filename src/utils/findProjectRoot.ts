import { Context } from "../modules/Context";
import * as fs from "fs";

export const getParentPath = (path: string) => {
  if (path === "/") {
    console.error("Can't get parent directory of root");
    process.exit(1);
  }
  return path.split("/").slice(0, -1).join("/");
};

export const findProjectRoot = (ctx: Context) => {
  console.log("find project root..");

  const homedir = require("os").homedir();
  const findRoot = (path: string): string => {
    if (path === homedir) {
      console.error("Can't find project.");
      process.exit(1);
    }

    const files = fs.readdirSync(path, { withFileTypes: true }).map(x => x.name);
    if (files.includes("package.json")) {
      console.log("package.json found at", path);
      return path;
    } else if (files.includes(".gitignore")) {
      console.log(".gitignore found at", path);
      return path;
    } else {
      return findRoot(getParentPath(path));
    }
  };

  return findRoot(ctx.env.cwd);
};
