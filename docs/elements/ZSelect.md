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

## Examples

<br/>

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

### Inline Form

---

<br/>

<z-panel size="lg" class="inline-flex items-end bg-green-50">
  <div class="flex items-end">
    <z-input value="Today I did..." size="lg" label="Status" :classRemove="{ input: 'rounded-r' }" :classAppend="{ input: '-mr-1' }" />
    <z-select value="public" size="lg" label="Audience" :classRemove="{ select: 'rounded-l rounded-r' }">
      <option value="private">
        Private
      </option>
      <option value="public">
        Public
      </option>
    </z-select>
    <div>
      <z-button variant="fill.secondary" size="lg" classRemove="rounded-l-md">Post</z-button>
    </div>
  </div>
</z-panel>

<br/>
<br/>

```js
<z-panel size="lg" class="inline-flex items-end bg-green-50">
  <div class="flex items-end">
    <z-input value="Today I saw the craziest thing..." label="Status" :classRemove="{ input: 'rounded-r' }" :classAppend="{ input: '-mr-1' }" />
    <z-select value="public" label="Audience" :classRemove="{ select: 'rounded-l rounded-r' }">
      <option value="private">
        Private
      </option>
      <option value="public">
        Public
      </option>
    </z-select>
    <div>
      <z-button variant="fill.secondary" classRemove="rounded-l-md">Post</z-button>
    </div>
  </div>
</z-panel>
```
