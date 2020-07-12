<template>
  <div :class="panelClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    classAppend: {
      type: String,
      default: null
    },
    isThemeDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "_default"
    },
    variant: {
      type: [String, Array],
      default: "_default"
    },
    status: {
      type: String,
      default: null,
      validator: value => ["disabled", ""].includes(value)
    },
    classRemove: {
      type: [Array, String],
      default: () => []
    }
  },
  computed: {
    panelClasses() {
      const { $utils, variant, size, classAppend, classRemove } = this;
      const { themer, filterClasses } = $utils;

      if (this.isThemeDisabled) return this.classAppend || null;

      const classes = [
        themer(`ZPanel.panel.variant.${variant}`),
        themer(`ZPanel.panel.size.${size}`),
        classAppend
      ];

      return filterClasses(classes, classRemove);
    }
  }
};
</script>

<style>
</style>