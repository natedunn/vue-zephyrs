# Installation

> 🚨 This isn't even alpha ready yet. Please do not use.

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install vue-zephyrs --save
```

or Yarn:

```bash
$ yarn add vue-zephyrs
```

Then register `my-lib` components and directives all at once in your app's entry:

```js
// main.js
import Vue from "vue";
import * as Zephyrs from "vue-zephyrs";

Vue.use(Zephyrs);
```
