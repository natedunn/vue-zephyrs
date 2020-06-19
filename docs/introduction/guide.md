# Installation

> 🚨 This project is in _early_ alpha and it is not recommended to use until a beta is released.

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install vue-zephyrs@alpha --save
```

<br/>

or Yarn:

```bash
$ yarn add vue-zephyrs@alpha
```

<br/>

Then register `vue-zephyrs` components and directives all at once in your app's entry:

```js
// main.js
import Vue from "vue";
import * as Zephyrs from "vue-zephyrs";

Vue.use(Zephyrs);
```
