<template>
  <button
    @click="onClick"
    @blur="onBlur"
    @focus="onFocus"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
import Theme from "../../z.theme";
const { Button } = Theme.newElements;
export default {
  data() {
    return {
      isClicked: false,
      isFocused: false,
      componentVariant: "",
      variants: {},
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
      default: "fill.primary"
    },
    status: {
      type: String,
      default: null,
      validator: value => ["disabled"].includes(value)
    },
    size: {
      type: String,
      default: "_default"
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
    buttonClasses() {
      const {
        themeDisabled,
        className,
        $utils,
        removeClass,
        status,
        size,
        events
      } = this;
      const { button } = Button;

      if (themeDisabled) return className || null;

      // todo: this should be better, replaced
      const variant = `${this.variant}+size.${size}`;

      return $utils
        .filterClasses(
          $utils.themeClasses(button, status, variant, events),
          removeClass
        )
        .concat(className);
    }
  },
  methods: {
    onBlur(event) {
      this.isFocused = false;
      this.$emit("blur", event);
    },
    onFocus(event) {
      this.isFocused = true;
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
    },
    onMouseDown() {
      this.events.push("click");
    },
    onMouseUp() {
      this.events = this.events.filter(event => event !== "click");
    },
    onMouseOver() {
      this.events.push("hover");
    },
    onMouseLeave() {
      this.events = this.events.filter(event => event !== "hover");
    }
  }
};
</script>

<style lang="postcss">
</style>