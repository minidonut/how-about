import { describeVersion } from "./describe";
import { Context } from "./Context";
import { generate } from "./generate";


export const command = (type: string, target: string, { describe, version }: any): void => {
  const ctx = new Context(
    type,
    target,
    !!describe,
    typeof version === "string" ? version : undefined,
  ).load();

  if (describe) {
    describeVersion(ctx);
  } else {
    generate(ctx);
  }
};
