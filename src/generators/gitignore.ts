import { GenFn } from "./types";
import * as path from "path";
import * as fs from "fs";
import {
  findFileFromCustomTree,
  findFileFromTargetTree,
} from "../utils/findFile";
import { logGenerator } from "../modules/logger";

const v1: GenFn = (ctx, varient) => {
  const { projectPath, root } = ctx.env;
  const logDone = logGenerator(".gitignore");
  // Search .gitignore inside targetPath first
  // than recursively try to find the file from ctx.env.root/append/gitignore/*
  // if command type is 'append', get selected version
  // if not, choose default version of gitignore respectively
  const filePath = findFileFromTargetTree(".gitignore", ctx, true)?.path ||
    findFileFromCustomTree(".gitignore", path.join(root, "data", "append", "gitignore"), varient).path;

  fs.copyFileSync(filePath, path.join(projectPath, ".gitignore"));
  logDone();
};

export default {
  v1,
};
