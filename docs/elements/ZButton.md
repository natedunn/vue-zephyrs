---
title: Button
lang: en-US
---

# Button

> 🚨 This is a working draft.

## Playground

<z-button-playground />

## Theme Defaults

<!-- <z-theme-default input="elements" /> -->

## Props

### Component-specific Props

| Name          |      Type      | Description                              | Default        |
| ------------- | :------------: | ---------------------------------------- | -------------- |
| className     |     String     | Append class to existing class list      | null           |
| themeDisabled |    Boolean     | Completely turn off Tailwind CSS classes | false          |
| variant       | String, Object | Choose variant and sub-variant           | `fill.primary` |

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

<z-button variant="fill.secondary">Secondary</z-button>
<br/>
<br/>

```js
<z-button variant="fill.secondary">Secondary</z-button>
```

### Disabled

<z-button variant="fill.primary" status="disabled">Secondary</z-button>
<br/>
<br/>

```js
<z-button variant="fill.primary" status="disabled">Secondary</z-button>
```

## Quick notes

- Due to [accessibility reasons](https://a11y-101.com/design/button-vs-link) you cannot change the tag of this button component.