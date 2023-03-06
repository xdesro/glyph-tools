# 🔠 Glyph.Tools

A tiny website for generating meme text to send to your silly little friends in your silly little group chats

https://glyph.tools

## Getting started for development

This README assumes you have Node and NPM installed. We’re using `v18.7.0`.

1. 📦 Install dependencies.

```sh
npm i
```

2. 🚧 Run the app for local development.

```sh
npm run start # runs sass, rollup.js, and eleventy side-by-side.
```

3. 🚢 Build the app for deployment.

```sh
npm run build # runs sass and then rollup.js and then eleventy lol
```

## Adding a glyph transformer

1. In `/transforms`, add a file `{transform}.js`. The file should export an object with the following signature:

```js
export default {
    name: '',
    transform: (str) => transformedString;
}
```

2. In `src/_data/transforms.js`, add the value you used as the `exports.name` above in the order you want it to be rendered in the Glyph.Tools UI.
