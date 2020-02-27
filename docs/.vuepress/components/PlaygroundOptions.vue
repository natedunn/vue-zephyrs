<template>
  <div
    class="flex-auto overflow-y-scroll rounded border border-gray-300"
    :style="{ width: '30%', maxWidth: '100%' }"
  >
    <div class="relative">
      <div
        class="w-full top-0 sticky z-10 py-4 px-8 font-bold text-gray-100 bg-gray-800"
      >
        <div class="flex items-center">
          <svg
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>

          Options
        </div>
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