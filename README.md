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
yarn add global how-about
npm install -g how-about
```

### With github
``` shell
git clone https://github.com/minidonut/how-about && cd how-about
yarn install
yarn build
yarn link
```

## Usage
``` shell
hbout <type> <target> [options]

hbout --help

hbout append .editorconfig
hbout append tslint.json
hbout append circleci
hbout append npm
hbout append readme

hbout typescript cli
hbout typescript stub
hbout typescript package
hbout typescript server
hbout typescript aws-lambda
hbout typescript react
hbout typescript ui-module
hbout typescript nextjs

hbout go      ...  ##TBD
hbout haskell ...  ##TBD
hbout python  ...  ##TBD

hbout typescript cli --version=default
hbout typescript cli --describe
```


## Contributing

We'd love to have your helping hand on `how-about`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

## License

How About is open source software [licensed as MIT](https://github.com/minidonut/how-about/blob/master/LICENSE).
