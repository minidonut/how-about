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
  const logDone = logGenerator(".editorconfig");
  // Search .editorconfig inside targetPath first
  // than recursively try to find the file from ctx.env.root/append/editorconfig/*
  // if command type is 'append', get selected version
  // if not, choose default version of editorconfig respectively
  const filePath = findFileFromTargetTree(".editorconfig", ctx, true)?.path ||
    findFileFromCustomTree(".editorconfig", path.join(root, "data", "append", "editorconfig"), varient).path;

  fs.copyFileSync(filePath, path.join(projectPath, ".editorconfig"));
  logDone();
};

export default {
  v1,
};
