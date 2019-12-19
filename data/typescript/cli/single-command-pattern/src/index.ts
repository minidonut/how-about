import * as program from "commander";
const version = require("../package.json").version;

const command = (args: string[]) => {
  console.log(args);
};

program
  .version(version, "-v, --version")
  .arguments("<type> [target]")
  .option("-d, --describe", "show information of selected project")
  .description("Scaffold a project with selected configurations")
  .action(command);


// if need more help text,
// program.on("--help", function() {
//   console.log("");
// });

program.parse(process.argv);
