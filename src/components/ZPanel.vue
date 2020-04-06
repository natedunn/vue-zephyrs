<template>
  <div :class="panelClasses">
    <slot></slot>
  </div>
</template>

<script>
import Theme from "../../z.theme";
const { Panel } = Theme.elements;
export default {
  data() {
    return {
      events: []
    };
  },
  props: {
    className: {
      type: String,
      default: null
    },
    themeDisabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: [String, Object],
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
      if (this.themeDisabled) return this.className || null;

      return this.$utils
        .filterClasses(
          this.$utils.themeClasses(
            Panel.panel,
            this.status,
            this.variant,
            this.events
          ),
          this.removeClass
        )
        .concat(this.className);
    }
  }
};
</script>

<style>
</style>