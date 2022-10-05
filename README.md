# Momoclouq personal blog

## A site created with CRA and MDX to tell you about my journey

### Technologies
- create-react-app
- MDX
- typescript
- react-router
- styled-components

### Note on how to install a package
Because the current `create-react-app` version (5.x) is not compatible with `@mdx-js/loader`, I must use craco as the [documentation](https://mdxjs.com/docs/getting-started/#create-react-app-cra) suggest. But it currently does not support create-react-app ver 5.x at the moment -> must install with `--legacy-peer-deps` flag
- An example: `npm install --save styled-components --legacy-peer-deps`

### How to run the app locally
1. run `npm install` to install all the dependencies
2. run `npm start` to start the app at `localhost:3000`

