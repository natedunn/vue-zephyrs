<template>
  <div :class="panelClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: {
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
    removeClass: {
      type: [Array, String],
      default: () => []
    }
  },
  computed: {
    panelClasses() {
      const { $utils, variant, size, className, removeClass } = this;
      const { themer, filterClasses } = $utils;

      if (this.isThemeDisabled) return this.className || null;

      const classes = [
        themer(`ZPanel.panel.variant.${variant}`),
        themer(`ZPanel.panel.size.${size}`),
        className
      ];

      return filterClasses(classes, removeClass);
    }
  }
};
</script>

<style>
</style>