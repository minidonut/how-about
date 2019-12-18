import packageJSON from "./packageJSON";
import src from "./src";

/**
 * import only from targetTree
 */
import tsconfigJSON from "./tsconfigJSON";
import tslintJSON from "./tslintJSON";
import readme from "./readme";

/**
 * Import from targetTree and appendTree
 */
import editorConfig from "./editorConfig";
import gitignore from "./gitignore";
import license from "./license";
import changelog from "./changelog";
import codeofconduct from "./codeOfConduct";
import contributing from "./contributing";

export default {
  "package.json": packageJSON,
  "src": src,

  "tslint.json": tslintJSON,
  "tsconfig.json": tsconfigJSON,
  "README.md": readme,

  ".gitignore": gitignore,
  ".editorconfig": editorConfig,
  "LICENSE": license,
  "CHANGELOG.md": changelog,
  "CODE_OF_CONDUCT.md": codeofconduct,
  "CONTRIBUTING.md": contributing,
};
