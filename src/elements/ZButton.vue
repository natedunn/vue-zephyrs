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
    variant: {
      type: String,
      default: "primary",
      validator: value => {
        return Object.keys(ZButton.variant).includes(value);
      }
    },
    removeClass: {
      type: [Array, String],
      default: () => []
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

      const removeClass = Array.isArray(this.removeClass)
        ? this.removeClass
        : this.removeClass.split(" ");

      return [
        this.checkBase(),
        this.checkDisabled(),
        this.checkVariant(),
        this.className
      ]
        .flat(Infinity)
        .filter(Boolean)
        .filter(className => !removeClass.includes(className));
    }
  },
  methods: {
    checkBase() {
      return ZButton.base.split(" ");
    },
    checkDisabled() {
      return this.disabled ? ZButton.state.disabled.split(" ") : null;
    },
    checkVariant() {
      if (this.checkDisabled()) return null;
      return ZButton.variant[this.variant] || null;
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