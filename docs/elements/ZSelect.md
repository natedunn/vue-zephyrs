---
title: Select
lang: en-US
---

# Select

> 🚨 This is a working draft.

## Playground

<z-select-playground />

## Props

| Name          |  Type   | Description                              | Default |
| ------------- | :-----: | ---------------------------------------- | ------- |
| classAppend   | String  | Append class to existing class list      | null    |
| themeDisabled | Boolean | Completely turn off Tailwind CSS classes | false   |
| v-model       |   Any   |                                          | null    |

## Events

| Name | Params | Description |
| ---- | ------ | ----------- |
| x    | x      | x           |

## Quick notes

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
  <option value="{ value: 'A string', text: 'Option 1' }">Option 2</option>
</z-select>
```
