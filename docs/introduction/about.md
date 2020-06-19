# About

> 🚨 This is a working draft.

Zephyrs is a component library for Vue. That's all for now.

## Elements

Much of the building blocks for Zephyrs are what we call *elements*. Many of these elements are recognizable as standard HTML elements. While they may include more options than your standard HTML elements, they still utilize most standard HTML API's. Below is an example.

Lets look at a standard button element in plain HTML. There are two tags with some text in-between. We've also utilized the HTML standard API, `disabled`.
```html
<button disabled>I am a disabled button</button>
```
<br/>

Achieving this with Zephyrs' button element is extremely similar:
```html
<z-button disabled>I am a disabled button<z-button>
```
<br/>

## Statuses
When you come across a prop of `status`, Zephyrs treats this as a finite state. While a component can have multiple options through props, a component can only have one status.
