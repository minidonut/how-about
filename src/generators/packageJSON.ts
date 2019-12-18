import { GenFn } from "./types";
import * as path from "path";
import * as fs from "fs";
import { findFileFromTargetTree } from "../utils/findFile";
import { popd, pushd } from "../modules/pushd";
import { logGenerator } from "../modules/logger";
import * as execa from "execa";

// policy is either "latest" or "inherit"
const v1: GenFn = async (ctx, policy = "latest") => {
  const logDone = logGenerator("package.json");
  pushd(ctx.env.projectPath);

  const filePath = findFileFromTargetTree("package.json", ctx).path;
  const pastePath = path.join(ctx.env.projectPath, "package.json");
  const pkgJSON = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Initialize name, version
  pkgJSON.name = ctx.env.projectName;
  pkgJSON.version = "0.0.0";

  logDone();
  const logDone2 = logGenerator("install deps");
  if (policy === "latest") {
    // Reinstall packages with latest version while regenerating lock file.
    const deps = Object.keys(pkgJSON.dependencies || {});
    const ddeps = Object.keys(pkgJSON.devDependencies || {});
    const pdeps = Object.keys(pkgJSON.peerDependencies || {});

    delete pkgJSON.dependencies;
    delete pkgJSON.devDependencies;
    delete pkgJSON.peerDependencies;

    fs.writeFileSync(pastePath, JSON.stringify(pkgJSON, undefined, 2));

    try {
      deps.length && await execa("yarn", ["add", ...deps]);
      ddeps.length && await execa("yarn", ["add", "-D", ...ddeps]);
      pdeps.length && await execa("yarn", ["add", "-P", ...pdeps]);
    } catch (e) {
      console.log(e);
    }

  } else {
    fs.writeFileSync(pastePath, JSON.stringify(pkgJSON, undefined, 2));
    await execa("yarn");
  }

  logDone2();
  popd();
};

export default {
  v1,
};
