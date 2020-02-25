---
title: Button
lang: en-US
---

# Button

> 🚨 This is a working draft.

## Playground

<z-button-playground />

## How to use

Text here.

> Note: Due to [accessibility reasons](https://a11y-101.com/design/button-vs-link) you cannot change the tag of this button component.

## Theme Defaults

```js
{
  'base': `inline-block py-2 px-3 rounded hover:${config.colors.primaryHover} focus:${config.colors.primaryHover}`,
  'variant': {
    'primary': `${config.colors.primary} text-white`
  },
  'state': {
    'disabled': `bg-gray-300 text-gray-500 cursor-not-allowed`,
  }
}
```

## Props

### Component-specific Props

| Name          |  Type   | Description                              | Default |
| ------------- | :-----: | ---------------------------------------- | ------- |
| className     | String  | Append class to existing class list      | null    |
| themeDisabled | Boolean | Completely turn off Tailwind CSS classes | false   |

### HTML-specific Props

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

## Examples

### Secondary Variant

```js
<z-button variation="secondary">Testing</z-button>
```
