# About

> 🚨 This is a working draft.

## Themeable

Zephyrs uses a class-based system, instead of having the styles built directly into the components using a CSS-in-JS method. This means that Zephyrs uses theming system to assign classes to components.

```js
export default Theme {
  ZCheckbox: {
    wrapper: "py-2 px-4 bg-gray-100 rounded inline-flex items-center hover:bg-gray-200 cursor-pointer",
    input: "mr-2 cursor-pointer",
    label: "block pointer-events-none cursor-pointer"
  },
}
```

<br/>
<a href="/introduction/theme">Learn more about theming.</a>

> 🕐 _More coming soon._

## Accessible

Accessibility is first-class concern in Zephyrs. Development is still in the early stages, but `v1.0` will not ship without a thorough review of accessibility features.

> 🕐 _More coming soon._

## BYOF (coming soon)

Already use Bootstrap? Want to use Bulma instead of Tailwind? No problem. Create your own theme, with your own framework. Or use one of our own pre-built themes as a starter.

> 🕐 _More coming soon._
