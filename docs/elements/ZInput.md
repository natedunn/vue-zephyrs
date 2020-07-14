---
title: "Input"
lang: en-US
---

# Input

> 🚨 This is a working draft.

## Playground

<z-input-playground />

## Props

| Name            |     Type      | Description                                          | Default                                       |
| --------------- | :-----------: | ---------------------------------------------------- | --------------------------------------------- |
| v-model         |    String     | Bind input value                                     | `null`                                        |
| id              |    String     | Set input id attribute                               | `null`                                        |
| hasLabel        |    Boolean    | Explicitly remove label component                    | `true`                                        |
| label           |    String     | Edit label text (also sets id attribute if none set) | `null`                                        |
| classAppend     |    Object     | Append class to existing class list.                 | `{ wrapper: null, label: null, input: null }` |
| classRemove     |    String     | Remove class from theme classes.                     | `{ wrapper: null, label: null, input: null }` |
| theme           | String, Array | Get any theme value for component.                   | `{ wrapper: null, label: null, input: null }` |
| isThemeDisabled |    Boolean    | Completely turn off theme classes.                   | `false`                                       |

## Events

| Name | Params | Description |
| ---- | ------ | ----------- |
| x    | x      | x           |

## More Examples

### Inline Form

<z-panel size="lg" class="inline-flex items-end bg-blue-50">
  <z-input label="First Name" placeholder="John" :classAppend="{ wrapper: '-mr-1', label: 'text-blue-700' }" :classRemove="{ input: 'rounded-r' }" />
  <z-input label="Last Name" placeholder="Doe" :classAppend="{ wrapper: '-mr-1', label: 'text-blue-700' }" :classRemove="{ input: 'rounded-l rounded-r' }" />
  <z-input label="Email" placeholder="john@acme.com" :classAppend="{ label: 'text-blue-700' }" :classRemove="{ input: 'rounded-l rounded-r' }" />
  <div>
    <z-button classRemove="rounded-l-md" classAppend="relative z-10">Subscribe</z-button>
  </div>
</z-panel>
<br/>
<br/>

```js
<z-panel size="lg" class="inline-flex items-end bg-blue-50">
  <z-input label="First Name" placeholder="John" :classAppend="{ wrapper: '-mr-1', label: 'text-blue-700' }" :classRemove="{ input: 'rounded-r' }" />
  <z-input label="Last Name" placeholder="Doe" :classAppend="{ wrapper: '-mr-1', label: 'text-blue-700' }" :classRemove="{ input: 'rounded-l rounded-r' }" />
  <z-input label="Email" placeholder="john@acme.com" :classAppend="{ label: 'text-blue-700' }" :classRemove="{ input: 'rounded-l rounded-r' }" />
  <div>
    <z-button classRemove="rounded-l-md" classAppend="relative z-10">Subscribe</z-button>
  </div>
</z-panel>
```

## Quick Notes

### Labels

For accessibility reasons, inputs should almost almost always have an included `<label>` element. However there are some circumstances in which an input must be without and label. In this case pass the prop `label` as `false` or an empty string.

### Access core input

To use `<input type="checkbox">` please use the component `<z-checkbox>`
