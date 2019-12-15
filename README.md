# How About

How-About is universal scaffolder.
How-About works on macOS

## Quick Overview

```sh
npx how-about my-app
cd my-app
npm start
```

### Get Started Immediately

### With package manager
``` shell
yarn add global @minidonut/init-cli
npm install -g @minidonut/init-cli
```

### With github
``` shell
git clone https://github.com/minidonut/init-cli && cd init-cli
yarn install
yarn build
yarn link
```

## Usage
``` shell
init <type> <target> [options]

init --help

init append .editorconfig
init append tslint.json
init append circleci
init append npm
init append readme

init typescript cli
init typescript stub
init typescript package
init typescript server
init typescript aws-lambda
init typescript react
init typescript ui-module
init typescript nextjs

init go      ...  ##TBD
init haskell ...  ##TBD
init python  ...  ##TBD

init typescript cli --version=default
init typescript cli --describe
```


## Contributing

We'd love to have your helping hand on `how-about`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

## License

How About is open source software [licensed as MIT](https://github.com/minidonut/how-about/blob/master/LICENSE).
