import * as fs from "fs";

export const getParentPath = (path: string) => {
  if (path === "/") {
    console.error("Can't get parent directory of root");
    process.exit(1);
  }
  return path.split("/").slice(0, -1).join("/");
};

export const findProjectRoot = () => {
  console.log("find project root..");

  const homedir = require("os").homedir();
  const findRoot = (path: string): string => {
    if (path === homedir) {
      console.error("Can't find project.");
      process.exit(1);
    }

    const files = fs.readdirSync(path);
    if (files.includes(".git")) {
      console.log(".git directory found at", path);
    }
    if (files.includes("package.json")) {
      console.log("package.json found at", path);
      return path;
    } else if (files.includes(".gitignore")) {  // .git으로 변경
      console.log(".gitignore found at", path);
      return path;
    } else {
      return findRoot(getParentPath(path));
    }
  };

  return findRoot(process.cwd());
};
