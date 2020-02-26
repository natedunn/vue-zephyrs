---
title: Select
lang: en-US
---

# Select

> 🚨 This is a working draft.

## Playground

<z-select-playground />

## How to Use

There are two ways to pass options to a `<z-select>` element. The best way is to pass an array of options through props:

```js
const options = [
  {
    value: "A very long value",
    text: "This is a a very long string of text that will overflow."
  }
  { value: 1, text: "Option 1" },
  { value: 2, text: "Option 2" },
];

<z-select :options="options" />
```
<br/>

You can also directly pass `<option>` elements into the default slot. Be sure to include an object as the value as exampled:

```js
<z-select>
  <option value="{ value: true, text: "Option 1" }">
    This is a a very long string of text that will overflow.
  </option>
  <option value="{ value: false, text: "Option 1" }">Option 1</option>
  <option value="{ value: 'A string', text: "Option 1" }">Option 2</option>
</z-select>
```

## Component-specific Props

| Name          |  Type   | Description                              | Default |
| ------------- | :-----: | ---------------------------------------- | ------- |
| className     | String  | Append class to existing class list      | null    |
| themeDisabled | Boolean | Completely turn off Tailwind CSS classes | false   |
| v-model       |   Any   |                                          | null    |

## HTML-specific Props

> Each of the follow props are HTML standard attributes that are accessible through props. For more information you can [read more at MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

| Name                               |  Type   | Description                             | Default |
| ---------------------------------- | :-----: | --------------------------------------- | ------- |
| [disabled](https://mzl.la/2vTstkx) | Boolean | Add HTML attribute 'disabled' to button | false   |
| [type](https://mzl.la/3bRXh5T)     | String  | The default behavior of the button      | null    |

## Methods

| Name    | Params | Description |
| ------- | ------ | ----------- |
| method1 |        |

## Events

| Name  | Params     | Description |
| ----- | ---------- | ----------- |
| input | InputValue |
