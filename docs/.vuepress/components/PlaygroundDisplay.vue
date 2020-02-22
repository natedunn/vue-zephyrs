<template>
  <div class="flex flex-col">
    <div
      class="w-full top-0 sticky py-4 px-4 font-bold text-gray-100 bg-gray-800 border-r border-gray-600"
    >
      Playground Preview
    </div>
    <div
      class="flex h-full flex-col items-center justify-center bg-gray-100 border-r border-gray-700"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
</style>