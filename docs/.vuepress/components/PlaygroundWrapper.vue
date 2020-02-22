<template>
  <div
    class="flex w-full border border-gray-700 rounded overflow-hidden playground-wrapper"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
@screen md {
  .playground-wrapper {
    max-height: 38rem;
    /* max-height: 20rem; */
  }
  .playground-wrapper > * {
    width: 50%;
  }
}
</style>