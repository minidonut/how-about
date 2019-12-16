import { GenFn } from "./types";

const v1: GenFn = (ctx, ...args) => {
  console.log("generate src folder");
};

export default {
  v1,
};
