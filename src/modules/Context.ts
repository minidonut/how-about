import * as  path from "path";

export class Context {
  type: string;
  target: string;
  describe: boolean;
  version: string;
  cwd: string;
  root: string;

  constructor(type: string, target: string, describe: boolean, version: string) {
    console.log("node_env:: ", process.env.NODE_ENV);
    this.type = type;
    this.target = target;
    this.describe = describe;
    this.version = version;
    this.cwd = process.cwd();
  }

}
