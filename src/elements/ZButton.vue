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
  // inheritAttrs: false,
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
    className: {
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
      type: [String, Object],
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
        className,
        variant,
        $utils,
        $theme,
        size,
        removeClass,
        status,
        statusClasses
        // events
      } = this;
      const { button } = $theme.components.Button;

      if (isThemeDisabled) return className || null;

      const classes = [
        statusClasses(button, "disabled"),
        statusClasses(button, "loading"),
        !status ? $utils.getThemeClasses(button, `variant.${variant}`) : null,
        $utils.getThemeClasses(button, `size.${size}`),
        className
      ];

      return $utils.filterClasses(classes, removeClass);
    },
    reducedAttrs() {
      return Object.assign({}, this.$attrs);
    }
  },
  methods: {
    statusClasses(element, statusToCheck) {
      return this.status && this.status.includes(statusToCheck)
        ? this.$utils.getThemeClasses(element, `status.${statusToCheck}`)
        : false;
    },
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