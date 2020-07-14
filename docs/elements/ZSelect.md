---
title: Select
lang: en-US
---

# Select

> 🚨 This is a working draft.

## Playground

<z-select-playground />

## Props

| Name            |         Type          | Description                          | Default |
| --------------- | :-------------------: | ------------------------------------ | ------- |
| classAppend     | String, Array, Object | Append class to existing class list. | `null`  |
| classRemove     | String, Array, Object | Remove class from theme classes.     | `null`  |
| theme           | String, Array, Object | Get any theme value for component.   | `null`  |
| isThemeDisabled |        Boolean        | Completely turn off theme classes.   | `false` |

## Events

| Name | Params | Description |
| ---- | ------ | ----------- |
| x    | x      | x           |

## Examples

### Using `<option>` elements

---

<br/>
<z-select value="one" label="Example 1">
  <option value="one">
    Option 1
  </option>
  <option value="two">
    Option 2
  </option>
</z-select>

<br/>

```js
<z-select value="one" label="Example 1">
  <option value="one">Option 1</option>
  <option value="two">Option 2</option>
</z-select>
```

### Custom icon

---

<br/>
<z-select
  value="two"
  label="Example 2"
  :options="[
    {
      text: 'Option 1',
      value: 'one',
    },
    {
      text: 'Option 2',
      value: 'two'
    }]"
>
  <template v-slot:icon>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </template>
</z-select>

<br/>

```js
<z-select
  value="one"
  label="Example 2"
  :options="[
    {
      text: 'Option 1',
      value: 'one',
    },
    {
      text: 'Option 2',
      value: 'two'
    }]"
>
  <template v-slot:icon>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
  </template>
</z-select>
```
