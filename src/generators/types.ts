import { Context } from "../modules/Context";

export type GenFn = (ctx: Context, ...args: string[]) => void;
