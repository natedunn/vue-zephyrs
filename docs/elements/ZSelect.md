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

## Examples

<z-select label="Example">
  <option value="test">
    This is going to be a test
  </option>
  <option value="thing">
    This thing is also a test
  </option>
</z-select>

<z-select label="Example 2" :options="[
  { value: true, text: 'this will be true' },
  { value: 'a string', text: 'this will be a string' }
]" />

## Quick notes

There are two ways to pass options to a `<z-select>` element. The best way is to pass an array of options through props:

```js
const options = [
  {
    text: "Option 1"
    value: true,
  }
  {
    text: "Option 2"
    value: 'option 2 value',
  },
  {
    text: "Option 3"
    value: 'option 3 value'
  },
];

<z-select :options="options" />
```

<br/>

You can also directly pass `<option>` elements into the default slot.

```js
<z-select>
  <option :value="true">
    Option 1
  </option>
  <option value="option 2 value">
    Option 2
  </option>
  <option value="option 3 value">
    Option 3
  </option>
</z-select>
```
