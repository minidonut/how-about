import { Context } from "./Context";
import generators from "../generators";
import * as fs from "fs";
import * as path from "path";
import * as  inquirer from "inquirer";
import { findProjectRoot } from "../utils/findProjectRoot";

/**
 * Generate files specified in data source. in order
 */
export const generate = async (ctx: Context) => {

  // directory creation
  if (ctx.args.type === "append") {
    const projectPath = findProjectRoot();
    ctx.env.projectPath = projectPath;
    ctx.env.projectName = projectPath.split("/").slice(-1)[0];
  } else {
    const { projectName } = await inquirer.prompt({
      message: "Enter the name of project(more than 4 letters):",
      name: "projectName",
      validate: (projectName: string) => projectName.length > 3,
    });

    const projectPath = path.join(process.cwd(), projectName);
    console.log(projectPath);
    process.chdir(ctx.env.cwd);

    if (ctx.args.target === "cra") {
      // TODO implement cra
    } else {
      fs.mkdirSync(projectName);
    }

    process.chdir(projectPath);
    ctx.env.projectName = projectName;
    ctx.env.projectPath = projectPath;
  }

  // TOOD pre, post command
  const listToGenerate: [string, string[]][] = Object.entries(ctx.template.struct.root);

  listToGenerate.forEach(([fn, [varient, ...args]]) => {
    (generators as any)[fn][varient](ctx, ...args);
  });
};
