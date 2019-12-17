import * as path from "path";

const makeChangeDirectoryFn = () => {
  const stack: string[] = [];

  const pushd = (...paths: string[]) => {
    const currentDirectory = process.cwd();
    stack.push(currentDirectory);

    const nextDirectory = paths[0].startsWith("/") ? paths[0] : path.join(currentDirectory, ...paths);
    process.chdir(nextDirectory);
  };

  const popd = (count = 1) => {
    if (stack.length === 0) return;

    const nextDirectory = stack.pop();
    if (count === 1) {
      process.chdir(nextDirectory);
      return;
    }

    popd(count - 1);
  };

  return { pushd, popd };
};


export const { pushd, popd } = makeChangeDirectoryFn();
