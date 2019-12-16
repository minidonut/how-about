import { Context } from "./Context";
import generators from "../generators";

export const generate = (ctx: Context) => {

  // TOOD pre, post command 실행
  const listToGenerate: [string, string[]][] = Object.entries(ctx.template.struct.root);
  listToGenerate.forEach(([fn, [varient, ...args]]) => {
    (generators as any)[fn][varient](ctx, ...args);
  });
};
