import { GenFn } from "./types";
import * as path from "path";
import {
  findFileFromTargetTree,
} from "../utils/findFile";
import { logGenerator } from "../modules/logger";
const copyDir = require("copy-dir");

const v1: GenFn = (ctx) => {
  const { projectPath } = ctx.env;
  const logDone = logGenerator("/src/**/*");

  const copyPath = findFileFromTargetTree("src", ctx, true)?.path;
  const pastePath = path.join(projectPath, "src");

  copyDir.sync(copyPath, pastePath);
  logDone();
};

export default {
  v1,
};
