<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    className: {
      type: String,
      default: null
    },
    isThemeDisabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: [String, Object],
      default: "_default"
    },
    classRemove: {
      type: [Array, String],
      default: () => []
    }
  }
};
</script>

<style lang="postcss">
.spinner {
  pointer-events: none;
  width: 1em;
  height: 1em;
  border: 0.15em solid transparent;
  border-color: transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}
@keyframes spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>