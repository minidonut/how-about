import * as program from "commander";
import main from "./main";
const version = require("../package.json").version;

program.version(version, "-v, --version");

program
  .arguments("<target> [type]")
  .option("-v, --version", "Copy sprint key to system clipboard")
  .option("-b, --describe", "Checkout git branch of issue-key at current directory")
  .description("Add a issue into current sprint")
  .action(main);

program.parse(process.argv);
