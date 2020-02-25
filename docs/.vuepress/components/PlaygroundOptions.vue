<template>
  <div
    class="flex-auto overflow-y-scroll rounded border border-gray-300"
    :style="{ width: '30%', maxWidth: '100%' }"
  >
    <div class="relative">
      <div
        class="w-full top-0 sticky py-4 px-8 font-bold text-gray-100 bg-gray-800"
      >
        Options
      </div>
      <div class="py-10 px-8">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
</style>