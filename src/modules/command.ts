import { describeVersion } from "./describe";
import { Context } from "../modules/Context";


export const command = (type: string, target: string, { describe, version }: any) => {
  const ctx = new Context(
    type,
    target,
    !!describe,
    typeof version === "string" ? version : undefined,
  );
  ctx.load();

  if (describe) {
    describeVersion(ctx);
  }

  console.log(type, target, describe, typeof version);
};
