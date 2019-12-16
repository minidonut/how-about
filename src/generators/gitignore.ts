import { GenFn } from "./types";

const v1: GenFn = (ctx, ...args) => {
  console.log("generate .gitignore");
};

export default {
  v1,
};
