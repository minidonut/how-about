import * as ora from "ora";
const chalk = require("chalk");

export const logGenerator = (target: string) => {
  const spinner = ora(`generate ${chalk.yellow(target)}`).start();
  return () => {
    spinner.succeed();
  };
};
