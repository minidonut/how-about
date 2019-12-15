import * as program from "commander";
import { command } from "./modules/command";
const version = require("../package.json").version;

program
  .arguments("<type> [target]")
  .option("-v, --version <version>", "select version of scaffolded project")
  .option("-d, --describe", "show information of selected project")
  .description("Scaffold a project with selected configurations")
  .action(command);

program.on("--help", function() {
  console.log("\n");
  console.log(`Hbout cli - version ${version}`);
  console.log("\n");
  console.log("\n");
});

program.parse(process.argv);
