import { GenFn } from "./types";

const v1: GenFn = (ctx, ...args) => {
  console.log("generate .edtiorconfig");
};

export default {
  v1,
};
