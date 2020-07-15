<template>
  <multipane-resizer>
    ||
  </multipane-resizer>
</template>

<script>
import { MultipaneResizer } from "vue-multipane";
export default {
  components: {
    MultipaneResizer
  }
};
</script>

<style lang="postcss">
.multipane-resizer {
  @apply justify-center items-center;
  display: flex !important;
  height: auto !important;
  margin: 0 !important;
  left: 0 !important;
  width: 15px !important;
}
.multipane-resizer:hover {
  @apply bg-gray-200;
}
</style>