import { GenFn } from "./types";

const v1: GenFn = (ctx, ...args) => {
  console.log("generate readme");
};

export default {
  v1,
};
