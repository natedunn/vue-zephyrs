---
title: "Checkbox"
lang: en-US
---

# Input

> 🚨 This is a working draft.

## Playground

<z-checkbox-playground />

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

## More Examples

<div class="flex items-start">
  <z-checkbox size="sm" label="This is a test" />
  <z-input size="sm" value="Testing" />
</div>
<br/>

## Quick Notes

...
