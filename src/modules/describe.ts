import { Context } from "./Context";
import * as fs from "fs";

export const describeVersion = (context: Context) => {
  // TODO
  console.log(fs.readFileSync(
    context
      .env
      .targetTree
      .children
      .find(x => /^config.yaml$/.test(x.name))
      ?.path,
    "utf-8"
  ));
};
