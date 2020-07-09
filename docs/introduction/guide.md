# Installation

<draft-warning>This project is in early development. Please do not use in production. <a href="/introduction/roadmap.html">Read More</a></draft-warning>

If you are using module bundlers such as Webpack, you can directly include package into your project via:

NPM:

```bash
$ npm install vue-zephyrs --save
```

<br/>

or Yarn:

```bash
$ yarn add vue-zephyrs
```

<br/>

Then register `vue-zephyrs` components and directives all at once in your app's entry:

```js
// main.js
import Vue from "vue";
import * as Zephyrs from "vue-zephyrs";

Vue.use(Zephyrs);
```
