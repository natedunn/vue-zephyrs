---
title: "Input"
lang: en-US
---

# Input

> 🚨 This is a working draft.

## Playground

<z-input-playground />

## How to use

### Labels

For accessibility reasons, inputs should almost almost always have an included `<label>` element. However there are some circumstances in which an input must be without and label. In this case pass the prop `label` as `false` or an empty string.

### Access core input

To use `<input type="checkbox">` please use the component `<z-checkbox>`

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
