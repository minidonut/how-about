import * as  path from "path";
import * as YAML from "yaml";
import * as fs from "fs";
const dirTree = require("directory-tree");

interface DirTree {
  path: string;
  name: string;
  size: number;
  type: "directory" | "file";
  children: DirTree[];
}

export class Context {
  args: {
    type: string;
    target: string;
    describe: boolean;
    version: string;
  };
  env: {
    cwd: string;
    root: string;
    tree: any;
  };
  template: {
    struct: any;
    config: any;
    target: any;
  }


  constructor(type: string, target: string, describe: boolean, version: string) {
    this.args = {
      describe,
      target,
      type,
      version,
    };
    this.env.cwd = process.cwd();
  }

  load() {
    const root = path.join(__dirname, ...Array(process.env.NODE_ENV === "production" ? 1 : 2).fill(".."));
    const tree = dirTree(path.join(root, "data")) as DirTree;

    // Check type
    const typeTree = tree.children
      .filter(x => x.type === "directory" && x.name[0] !== "_")
      .find(x => x.name === this.args.type);
    if (!typeTree) {
      console.error(`invalid <type> arguments provided.
choose one of\n
${tree.children.filter(x => x.type === "directory").map(x => "- " + x.name).join("\n")}\n
given: ${this.type}\n`);
      process.exit(1);
    }

    // Check target
    const targetTree = typeTree.children
      .filter(x => x.type === "directory" && x.name[0] !== "_")
      .find(x => x.name === this.args.target);
    if (!targetTree) {
      console.error(`invalid <target> arguments provided.
choose one of\n
${typeTree.children.filter(x => x.type === "directory").map(x => "- " + x.name).join("\n")}\n
given: ${this.args.target}\n`);
      process.exit(1);
    }

    // Load configurations
    const generalConfigs = YAML.parse(
      fs.readFileSync(
        targetTree
          .children
          .find(x => /^config.yaml$/.test(x.name)).path,
        "utf-8")
    );

    // Check version
    const versionTree = targetTree.children
      .filter(x => x.type === "directory" && x.name[0] !== "_")
      .find(x => (this.args.version ?? generalConfigs.default) == x.name);
    if (!versionTree && this.args.version !== "default") {
      console.error(`invalid [version] optional arguments provided.
choose one of\n
${targetTree.children.filter(x => x.type === "directory").map(x => "- " + x.name).join("\n")}\n
given: ${this.version}\n`);
      process.exit(1);
    }

    // Load template structure
    const templateStructure = YAML.parse(
      fs.readFileSync(
        versionTree
          .children
          .find(x => /^struct.yaml$/.test(x.name)).path,
        "utf-8")
    );

    this.env = {
      ...this.env,
      root,
      tree,
    };

    this.template = {
      config: generalConfigs,
      struct: templateStructure,
      target: versionTree,
    }

    return this;
  }

}
