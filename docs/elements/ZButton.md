---
title: Button
lang: en-US
---

# Button

<DraftWarning />

## Playground

<z-button-playground />

## Props

| Name            |         Type          | Description                                                 | Default          |
| --------------- | :-------------------: | ----------------------------------------------------------- | ---------------- |
| variant         |     String, Array     | Choose variant and sub-variant from theme.                  | `"fill.primary"` |
| size            |        String         | Set component size from theme.                              | `"_default"`     |
| status          |     String, Array     | Set component status. Options: `loading`, `disabled`        | `null`           |
| loadingText     |        String         | Set custom text when component's status is set to `loading` | `null`           |
| classAppend     | String, Array, Object | Append class to existing class list.                        | `null`           |
| classRemove     | String, Array, Object | Remove class from theme classes.                            | `null`           |
| theme           | String, Array, Object | Get any theme value for component.                          | `null`           |
| isThemeDisabled |        Boolean        | Completely turn off theme classes.                          | `false`          |

## Events

| Name  | Returns    | Description                                    |
| ----- | ---------- | ---------------------------------------------- |
| click | ClickEvent | Emitted when the button is clicked             |
| focus | FocusEvent | Emitted when the button is focused             |
| blur  | BlurEvent  | Emitted when the button is blurred (unfocused) |

## **More Examples**

### With Images

---

<br/>
<div class="flex items-center">
  <z-button variant="fill" classAppend="mr-4" size="lg"><svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 mr-2"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>With Icon</z-button>
  <z-button variant="outline" classAppend="mr-4"><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>With Icon</z-button>
  <z-button variant="fill.secondary" size="sm">😎 With Emoji</z-button>
</div>
<br/>

```js
<div class="flex items-center">
  <z-button variant="fill" classAppend="mr-4" size="lg">
    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1">
      <path
        fill-rule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd"
      ></path>
    </svg>
    With Icon
  </z-button>
  <z-button variant="outline" classAppend="mr-4">
    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1">
      <path
        fill-rule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd"
      ></path>
    </svg>
    With Icon
  </z-button>
  <z-button variant="fill.secondary" size="sm">
    😎 With Emoji
  </z-button>
</div>
```

### Loading Status

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
  <z-button variant="fill.secondary" classRemove="rounded-r-md">Save</z-button>
  <z-button variant="fill.secondary" classRemove="rounded-l-md rounded-r-md" status="disabled">Delete</z-button>
  <z-button variant="outline" classRemove="rounded-l-md rounded-r-md"><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>Add New</z-button>
  <z-button variant="fill.secondary" classRemove="rounded-l-md" status="loading" loadingText="Loading profile">Profile</z-button>
</div>
<br/>

```js
<div class="flex justify-start items-center">
  <z-button variant="fill.secondary" classRemove="rounded-r-md">
    Save
  </z-button>
  <z-button
    variant="fill.secondary"
    classRemove="rounded-l-md rounded-r-md"
    status="disabled"
  >
    Delete
  </z-button>
  <z-button variant="outline" classRemove="rounded-l-md rounded-r-md">
    <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-1">
      <path
        fill-rule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd"
      ></path>
    </svg>
    Add New
  </z-button>
  <z-button
    variant="fill.secondary"
    classRemove="rounded-l-md"
    status="loading"
    loadingText="Loading profile"
  >
    Profile
  </z-button>
</div>
```

### Using `theme` prop

The `theme` prop can be used to get any Button theme value. This allows for easy access of custom theme values.

<z-button size="lg">Using size prop</z-button>
<z-button theme="size.lg">Using theme prop</z-button>
<br/>
<br/>

```js
<z-button size="lg">Using size prop</z-button>
<z-button theme="size.lg">Using theme prop</z-button>
```

## Default Button Theme Values

<z-theme-default input="components.ZButton" />

## Quick notes

- Due to [accessibility reasons](https://a11y-101.com/design/button-vs-link) you cannot change the tag of this button component.
- This component allows for _inherited attributes_, or [non-prop attributes](https://bit.ly/2ATVq2y). This means you may pass any attributes to `<button>` element, including [HTML-standard attributes](https://mzl.la/3gefwo9).
