import { describeVersion } from "./describe";
import { Context } from "../modules/Context";

const checkType = ({ type }: Context) => {
  if (!["append", "typescript"].includes(type)) {
    console.error("invalid <type> arguments provided. should be 'append' or 'typescript'");
    console.error(`given: ${type}`);
    process.exit(1);
  }
};

const checkTarget = ({ type, target }: Context) => {
  return;
};

export const command = (type: string, target: string, { describe, version }: any) => {
  const ctx = new Context(
    type,
    target,
    !!describe,
    typeof version === "string" ? version : "default",
  );
  checkType(ctx);
  checkTarget(ctx);

  if (describe) {
    describeVersion(ctx);
  }

  console.log(type, target, describe, typeof version);
};
