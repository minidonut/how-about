import { GenFn } from "./types";

const v1: GenFn = (ctx, ...args) => {
  console.log("generate package.json");
};

export default {
  v1,
};
