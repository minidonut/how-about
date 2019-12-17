import { Context, DirTree } from "../modules/Context";
const dirTree = require("directory-tree");

export const findFileFromTargetTree = (name: string, ctx: Context, nullable?: boolean) => {
  const { versionTree, targetTree } = ctx.env;

  const fromVersion = versionTree.children.find(x => x.name === name);
  if (fromVersion) return fromVersion;

  const fromTarget = targetTree.children.find(x => x.name === name);
  if (!fromTarget && !nullable) throw new Error(`ENOENT. cannot find '${name}'`);

  return fromTarget;
};

export const findFileFromCustomTree = (name: string, path: string, version?: string) => {
  const tree: DirTree = dirTree(path);
  if (version) {
    const fromVersion = tree
      .children
      .find(x => x.type === "directory" && x.name === version)
      ?.children
      .find(x => x.name === name);

    if (!fromVersion) throw new Error(`ENOENT. cannot find version '${version}' of '${name}'`);
    return fromVersion;
  } else {
    const fromDefault = tree.children.find(x => x.name === name);
    if (!fromDefault) throw new Error(`ENOENT. cannot find '${name}'`);
    return fromDefault;
  }
};
