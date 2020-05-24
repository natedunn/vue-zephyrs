---
title: Button
lang: en-US
---

# Button

> 🚨 This is a working draft.

## Playground

<z-button-playground />

## Props

### Component Props

| Name            |      Type      | Description                                                 | Default        |
| --------------- | :------------: | ----------------------------------------------------------- | -------------- |
| variant         | String, Object | Choose variant and sub-variant                              | `fill.primary` |
| className       |     String     | Append class to existing class list                         | null           |
| removeClass     |     String     | Remove class from theme classes                             | null           |
| status          | String, Array  | Sets component status from options: `loading`, `disabled`   | null           |
| loadingText     |     String     | Set custom text when component's status is set to `loading` | null           |
| isThemeDisabled |    Boolean     | Completely turn off theme classes                           | false          |

## Events

| Name  | Returns    | Description                                    |
| ----- | ---------- | ---------------------------------------------- |
| click | ClickEvent | Emitted when the button is clicked             |
| focus | FocusEvent | Emitted when the button is focused             |
| blur  | BlurEvent  | Emitted when the button is blurred (unfocused) |

## **More Examples**

### With Images

<div class="flex items-center">
  <z-button variant="fill" className="mr-4" size="lg"><heroicons-external-link-solid class="w-6 h-6 mr-1"/>With Icon</z-button>
  <z-button variant="outline" className="mr-4"><heroicons-archive-solid class="w-5 h-5 mr-1"/>With Icon</z-button>
  <z-button variant="fill.secondary" size="sm">😎 With Emoji</z-button>
</div>
<br/>

```js
// Using vue-heroicons by @bytegem (github.com/bytegem/vue-heroicons)

<div class="flex items-center">
  <z-button variant="fill" className="mr-4" size="lg">
    <heroicons-external-link-solid class="w-6 h-6 mr-1" />
    With Icon
  </z-button>
  <z-button variant="outline" className="mr-4">
    <heroicons-archive-solid class="w-5 h-5 mr-1" />
    With Icon
  </z-button>
  <z-button variant="fill.secondary" size="sm">
    😎 With Emoji
  </z-button>
</div>
```

### Loading Status

<!-- <z-button :variant="false">Test</z-button> -->

<z-button variant="fill.primary" status="loading" size="sm" loadingText="Custom Loading Message">Loading</z-button>
<br/>
<br/>

```js
<z-button
  variant="fill.primary"
  status="loading"
  size="sm"
  loadingText="Custom Loading Message"
>
  Loading
</z-button>
```

### Group

<div class="flex justify-start items-center">
  <z-button variant="fill.secondary" removeClass="rounded-r-md">Save</z-button>
  <z-button variant="fill.secondary" removeClass="rounded-l-md rounded-r-md" status="disabled">Delete</z-button>
  <z-button variant="outline" removeClass="rounded-l-md rounded-r-md"><heroicons-document-add-solid class="w-5 h-5 mr-1" />Add New</z-button>
  <z-button variant="fill.secondary" removeClass="rounded-l-md" status="loading" loadingText="Loading profile">Profile</z-button>
</div>
<br/>

```js
<div class="flex justify-start items-center">
  <z-button variant="fill.secondary" removeClass="rounded-r-md">
    Save
  </z-button>
  <z-button
    variant="fill.secondary"
    removeClass="rounded-l-md rounded-r-md"
    status="disabled"
  >
    Delete
  </z-button>
  <z-button variant="outline" removeClass="rounded-l-md rounded-r-md">
    <heroicons-document-add-solid class="w-5 h-5 mr-1" />
    Add New
  </z-button>
  <z-button
    variant="fill.secondary"
    removeClass="rounded-l-md"
    status="loading"
    loadingText="Loading profile"
  >
    Profile
  </z-button>
</div>
```

## Default Theme Values

<z-theme-default input="components.Button" />

## Quick notes

- Due to [accessibility reasons](https://a11y-101.com/design/button-vs-link) you cannot change the tag of this button component.
- This component allows for _inherited attributes_, or [non-prop attributes](https://bit.ly/2ATVq2y). This means you may pass any attributes to `<button>` element, including [HTML-standard attributes](https://mzl.la/3gefwo9).
