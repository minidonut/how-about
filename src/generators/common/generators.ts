import { Context } from "../../modules/Context";
import * as path from "path";
import * as fs from "fs";
import {
  findFileFromCustomTree,
  findFileFromTargetTree,
} from "../../utils/findFile";
import { logGenerator } from "../../modules/logger";

export const justSingleFile = (name: string) => (ctx: Context) => {
  const { projectPath } = ctx.env;
  const logDone = logGenerator(name);

  const copyPath = findFileFromTargetTree(name, ctx, true)?.path;
  const pastePath = path.join(projectPath, name);

  fs.copyFileSync(copyPath, pastePath);
  logDone();
};


export const justAppendableFile = (name: string, cname: string) => (ctx: Context, varient: string) => {
  const { projectPath, root } = ctx.env;
  const logDone = logGenerator(name);
  // Search .editorconfig inside targetPath first
  // than recursively try to find the file from ctx.env.root/append/editorconfig/*
  // if command type is 'append', get selected version
  // if not, choose default version of editorconfig respectively
  const filePath = findFileFromTargetTree(name, ctx, true)?.path ||
    findFileFromCustomTree(name, path.join(root, "data", "append", cname), varient).path;

  fs.copyFileSync(filePath, path.join(projectPath, name));
  logDone();
};
