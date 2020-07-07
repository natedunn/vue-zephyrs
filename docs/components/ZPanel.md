---
title: Panel
lang: en-US
---

# Panel

> 🚨 This is a working draft.

## Playground

<z-panel-playground />

## **Examples**

### Badges

<z-panel><z-panel className="inline-block bg-green-500 text-xs uppercase font-bold text-white border-white" size="xs">New!</z-panel><span class="inline-block leading-tight w-full font-bold text-3xl">Exciting Feature</span></z-panel>
<br/>

```js
<z-panel>
  <z-panel
    className="inline-block bg-green-500 text-xs uppercase font-bold text-white border-white"
    size="xs"
  >
    New!
  </z-panel>
  <span class="inline-block leading-tight w-full font-bold text-3xl">
    Exciting Feature
  </span>
</z-panel>
```

### Combining Panels

<z-panel variant="border" size="">
  <z-panel :variant="['header', 'well']" size="md" removeClass="rounded-b-md"><span>Something important!</span><z-button variant="outline" classAppend="font-bold text-lg" size="xs" removeClass="px-1"><feather type="alert-circle" class="w-5 h-5" /></z-button>
  </z-panel>
  <z-panel removeClass="rounded-t-md border" size="md"><p class="mb-2">Cupiditate cum velit. Repellat est beatae dolorum. Libero commodi inventore nobis ipsum esse cum.</p><p>Veritatis voluptate officiis aliquid. Iste ducimus quasi eligendi quaerat expedita. Esse officiis suscipit cum provident eum vitae.</p></z-panel>
  <z-panel :variant="['footer', 'well']" size="md" removeClass="rounded-t-md"><span class="inline-block mr-4 italic text-gray-700">Please make sure you acknowledge.</span><div><z-button variant="fill.secondary" size="sm">Ok, sounds good!</z-button></div></z-panel>
</z-panel>
<br/>

```js
<z-panel variant="border" size="">
  <z-panel :variant="['header', 'well']" size="md" removeClass="rounded-b-md">
    <span>Something important!</span>
    <z-button variant="outline" classAppend="font-bold text-lg" size="xs" removeClass="px-1">
      <feather type="alert-circle" class="w-6 h-6 mr-1" />
    </z-button>
  </z-panel>
  <z-panel removeClass="rounded-t-md border" size="md">
    <p class="mb-2">Cupiditate cum velit. Repellat est beatae dolorum. Libero commodi inventore nobis ipsum esse cum.</p>
    <p>Veritatis voluptate officiis aliquid. Iste ducimus quasi eligendi quaerat expedita. Esse officiis suscipit cum provident eum vitae.</p>
  </z-panel>
  <z-panel :variant="['footer', 'well']" size="md" removeClass="rounded-t-md">
    <span class="inline-block mr-4 italic text-gray-700">Please make sure you acknowledge.</span>
    <div>
      <z-button variant="fill.secondary" size="sm">Ok, sounds good!</z-button>
    </div>
  </z-panel>
</z-panel>
```
