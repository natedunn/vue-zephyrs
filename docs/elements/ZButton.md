---
title: Button
lang: en-US
---

# Button

> 🚨 This is a working draft.

> Note: Due to [accessibility reason](https://a11y-101.com/design/button-vs-link) you cannot change the tag of this button component.

## Playground

<z-button-playground />

## How to use

Text here.

## Component-specific Props

| Name          |  Type   | Description                              | Default |
| ------------- | :-----: | ---------------------------------------- | ------- |
| className     | String  | Append class to existing class list      | null    |
| themeDisabled | Boolean | Completely turn off Tailwind CSS classes | false   |

## HTML-specific Props

> Each of the follow props are HTML standard attributes that are accessible through props. For more information you can [read more at MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)

| Name                               | Type    | Description                             | Default |
| ---------------------------------- | ------- | --------------------------------------- | ------- |
| [disabled](https://mzl.la/2vTstkx) | Boolean | Add HTML attribute 'disabled' to button | false   |
| [type](https://mzl.la/3bRXh5T)     | String  | The default behavior of the button      | null    |

## Methods

| Name    | Params | Description |
| ------- | ------ | ----------- |
| method1 |        |

## Events

| Name  | Returns    | Description                                    |
| ----- | ---------- | ---------------------------------------------- |
| click | ClickEvent | Emitted when the button is clicked             |
| focus | FocusEvent | Emitted when the button is focused             |
| blur  | BlurEvent  | Emitted when the button is blurred (unfocused) |
