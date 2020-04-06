---
title: Panel
lang: en-US
---

# Panel

> 🚨 This is a working draft.

## Playground

<z-panel-playground />

## Examples

### Combining Panels

<z-panel variant="well+outline">
  <div class="lg:py-12 py-8 px-8 max-w-4xl mx-auto">
    <z-panel variant="wrapper+shadow" className="bg-white">
      <z-panel variant="header" className="bg-gray-800 text-white">
        <span>Something important!</span>
        <z-button variant="fill.primary" className="px-3 font-bold" size="sm">×</z-button>
      </z-panel>
      <z-panel variant="body">
        <p class="mb-2">Cupiditate cum velit. Repellat est beatae dolorum. Libero commodi inventore nobis ipsum esse cum.</p>
        <p>Veritatis voluptate officiis aliquid. Iste ducimus quasi eligendi quaerat expedita. Esse officiis suscipit cum provident eum vitae.</p>
      </z-panel>
      <z-panel variant="footer" className="bg-white">
        <span class="inline-block mr-4 italic text-gray-700">Please make sure you acknowledge.</span>
        <z-button variant="fill.secondary" size="sm">Ok, sounds good!</z-button>
      </z-panel>
    </z-panel>
  </div>
</z-panel>
<br/>

```js
<z-panel variant="wrapper">
  <z-panel variant="header+well">
    <span>Something important!</span>
    <z-button variant="fill.primary" className="px-3 font-bold" size="sm">
      ×
    </z-button>
  </z-panel>
  <z-panel variant="body">
    <p class="mb-2">
      Cupiditate cum velit. Repellat est beatae dolorum. Libero commodi
      inventore nobis ipsum esse cum.
    </p>
    <p>
      Veritatis voluptate officiis aliquid. Iste ducimus quasi eligendi quaerat
      expedita. Esse officiis suscipit cum provident eum vitae.
    </p>
  </z-panel>
  <z-panel variant="footer+well">
    <span class="inline-block mr-4 italic text-gray-700">
      Please make sure you acknowledge.
    </span>
    <z-button variant="fill.secondary" size="sm">
      Ok, sounds good!
    </z-button>
  </z-panel>
</z-panel>
```
