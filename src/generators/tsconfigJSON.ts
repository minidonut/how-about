import { GenFn } from "./types";

const v1: GenFn = (ctx, ...args) => {
  console.log("generate tsconfig.json");
};

export default {
  v1,
};
