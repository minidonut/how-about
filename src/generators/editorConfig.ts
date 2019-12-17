import { GenFn } from "./types";
import * as path from "path";
import { popd, pushd } from "../modules/pushd";
import {
  findFileFromCustomTree,
  findFileFromTargetTree,
} from "../utils/findFile";

const v1: GenFn = (ctx, varient) => {
  const { projectPath, root, tree } = ctx.env;
  pushd(projectPath);

  // Search .editorconfig inside targetPath first
  // than recursively try to find the file from ctx.env.root/append/editorconfig/*
  // if command type is 'append', get selected version
  // if not, choose default version of editorconfig respectively
  const filePath = findFileFromTargetTree(".editorconfig", ctx, true) ||
    findFileFromCustomTree(".editorconfig", path.join(root, "data", "append", "editorconfig"), varient);

  console.log(filePath);

  popd();
};

export default {
  v1,
};
