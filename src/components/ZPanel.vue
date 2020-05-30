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
      const { $utils, $theme, variant, size, className, removeClass } = this;
      const { panel } = $theme.components.ZPanel;

      if (this.isThemeDisabled) return this.className || null;

      const classes = [
        $utils.getVariantClasses(panel, variant),
        $utils.getThemeClasses(panel, `size.${size}`),
        className
      ];

      return $utils.filterClasses(classes, removeClass);
    }
  }
};
</script>

<style>
</style>