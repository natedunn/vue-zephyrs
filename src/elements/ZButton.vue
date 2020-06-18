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
  >
    <z-spinner
      v-if="status ? status.includes('loading') : false"
      class="mr-2"
    ></z-spinner>
    <div v-else-if="hasImage"></div>
    <Fragment
      v-if="(status ? status.includes('loading') : false) && loadingText"
    >
      {{ loadingText }}
    </Fragment>
    <slot v-else></slot>
  </button>
</template>

<script>
import { Fragment } from "vue-fragment";
import ZSpinner from "../components/ZSpinner";
export default {
  components: {
    Fragment,
    ZSpinner
  },
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
    classAppend: {
      type: String,
      default: null
    },
    isThemeDisabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: null
    },
    variant: {
      type: [String, Array],
      default: "fill.primary"
    },
    status: {
      type: [String, Array],
      default: null,
      validator: value => {
        const validated = ["disabled", "loading"];
        return typeof value === "string"
          ? validated.includes(value)
          : validated.some(r => value.includes(r));
      }
    },
    size: {
      type: String,
      default: "_default"
    },
    removeClass: {
      type: [Array, String],
      default: () => []
    },
    loadingText: {
      type: String,
      default: null
    },
    hasImage: {
      type: Boolean,
      default: false
    }
    // Built-in HTML attributes
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    // type: {
    //   type: String,
    //   default: null,
    //   validator: value => ["submit", "reset", "button", null].includes(value)
    // },
    // autocomplete: {
    //   type: String,
    //   default: "on",
    //   validator: value => ["on", "off"].includes(value)
    // },
    // autofocus: {
    //   type: Boolean,
    //   default: false
    // }
  },
  computed: {
    buttonClasses() {
      const {
        isThemeDisabled,
        classAppend,
        variant,
        $utils,
        size,
        removeClass,
        theme,
        status
      } = this;
      const { filterClasses, themer } = $utils;

      if (isThemeDisabled) return classAppend || null;

      const classes = [
        status && status.includes("disabled")
          ? themer("ZButton.button.status.disabled")
          : null,
        status && status.includes("loading")
          ? themer("ZButton.button.status.loading")
          : null,
        !status ? themer(`ZButton.button.variant.${variant}`) : null,
        theme ? themer(`ZButton.button.${theme}`) : null,
        themer(`ZButton.button.size.${size}`),
        classAppend
      ];

      return filterClasses(classes, removeClass);
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