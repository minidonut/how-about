import { describeVersion } from "./describe";
import { Context } from "./Context";
import { generate } from "./generate";
import { findProjectRoot } from "../utils/findProjectRoot";
import { popd, pushd } from "./pushd";


export const command = (type: string, target: string, { describe, version }: any): void => {
  const ctx = new Context(
    type,
    target,
    !!describe,
    typeof version === "string" ? version : undefined,
  ).load();

  findProjectRoot(ctx);
  if (describe) {
    describeVersion(ctx);
  } else {
    generate(ctx);
    generate
  }
};
