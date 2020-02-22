<template>
  <button
    @click="onClick"
    @blur="onBlur"
    @focus="onFocus"
    :class="classes"
    :disabled="disabled"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
import { ZButton } from "../../theme";
export default {
  props: {
    className: {
      type: String,
      default: null
    },
    themeDisabled: {
      type: Boolean,
      default: false
    },
    variation: {
      type: String,
      default: "primary"
    },
    // Built-in HTML attributes
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null,
      validator: value => ["submit", "reset", "button", null].includes(value)
    },
    autocomplete: {
      type: String,
      default: "on",
      validator: value => ["on", "off"].includes(value)
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      if (this.themeDisabled) {
        return this.className || null;
      }

      return [
        this.checkBase(),
        this.checkDisabled(),
        this.checkVariation(),
        this.className
      ];
    }
  },
  methods: {
    checkBase() {
      return ZButton.base;
    },
    checkDisabled() {
      return this.disabled ? ZButton.state.disabled : null;
    },
    checkVariation() {
      if (this.checkDisabled()) return null;
      switch (this.variation) {
        case "primary":
          return ZButton.variant.primary;
        default:
          return null;
      }
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onClick(event) {
      this.$emit("click", event);
    },
    blur() {
      this.$el.blur();
    },
    focus() {
      this.$el.focus();
    }
  }
};
</script>

<style lang="postcss">
</style>