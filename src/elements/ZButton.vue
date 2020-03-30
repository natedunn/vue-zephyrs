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
      // validator: () => {}, // ? Can we validate based on string/object in theme.js?
    },
    status: {
      type: String,
      default: `default`
      // validator: value => ["loading", "disabled"].includes(value)
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
      if (this.themeDisabled) {
        return this.className || null;
      }

      const removeClass = Array.isArray(this.removeClass)
        ? this.removeClass
        : this.$utils.splitString(this.removeClass);

      return [this.getThemeClasses()]
        .map(item => {
          return typeof item === "string"
            ? this.$utils.splitString(item)
            : item;
        })
        .flat(Infinity)
        .filter(Boolean)
        .filter(function(el) {
          return el != null;
        })
        .filter(className => !removeClass.includes(className));
    }
  },
  methods: {
    getThemeClasses() {
      // Get/set variables
      const themeVariants = Button.button.variants;
      const { status, variant: variants, events } = this;
      let value = "";
      let variantBase = "";

      // Functions
      function isolateObject(string, object, limit = true) {
        const keys = string.split(".");
        let newObject = {};
        newObject[keys[0]] = object[keys[0]];

        const finalObject = keys.reduce((o, i) => o[i], newObject);

        // if (limit) {
        //   Object.keys(finalObject).forEach(key => {
        //     if (typeof finalObject[key] === "object") {
        //       finalObject[key] = "Unreachable Object";
        //     }
        //   });
        // }

        return newObject;
      }

      function arrayMerge(firstArray, secondArray) {
        firstArray.push(secondArray);
        return firstArray;
      }

      function checkEvents(variantBase, variantEnd) {
        return events
          .map(event => {
            return (
              variantBase[variantEnd][`$${event}`] || variantBase[`$${event}`]
            );
          })
          .flat(Infinity)
          .filter(Boolean);
      }
      function findAllBases(obj) {
        const foundBases = Object.entries(obj).reduce(
          (acc, [key, value]) =>
            key === "base"
              ? acc.concat(value)
              : typeof value === "object"
              ? acc.concat(findAllBases(value, "base"))
              : acc,
          []
        );
        const rootBase = themeVariants["base"] || null;
        return rootBase ? rootBase + " " + foundBases : foundBases;
      }

      function checkDefault(variantBase) {
        if (typeof variantBase === "string") return variantBase;
        return variantBase["default"];
      }

      function checkStatuses(variantBase, variantEnd, status) {
        if (variantBase[variantEnd][`_${status}`]) {
          return variantBase[variantEnd][`_${status}`];
        } else {
          return checkDefault(variantBase[`_${status}`]);
        }
      }

      // NEW --------

      function isType(item, string) {
        return typeof item === string ? true : false;
      }

      // END NEW ----

      // Get each variant (seperated by +)
      const variantClasses = variants.split("+").map(variantString => {
        if (variantString.includes(".")) {
          // old
          // var variantStart = variant.substring(0, variant.lastIndexOf("."));
          // var variantEnd = variant.substring(variant.lastIndexOf(".") + 1);

          // new variables?
          var variantObj = isolateObject(variantString, themeVariants);
          const variants = variantString.split(".");
          const end = variants[variants.length - 1];
          const start = variantString.replace(`.${end}`, "");

          // NEW -------

          if (typeof this.$utils.stringToDot(variantString, variantObj) === 'string') {
            value = this.$utils.stringToDot(variantString, variantObj);
          } else {
            if(this.$utils.stringToDot(
                `${variantString}.${status}`,
                variantObj
              ) )
          }

          console.log(
            this.$utils.stringToDot(`${variantString}.${status}`, variantObj)
          );

          if (
            isType(this.$utils.stringToDot(variantString, variantObj), "object")
          ) {
            value = this.$utils.stringToDot(
              `${variantString}._${status}`,
              variantObj
            );
          } else {
            value = this.$utils.stringToDot(variantString, variantObj);
          }

          // 1. check for event, override

          // END NEW -------

          // variantBase =
          //   this.$utils.stringToDot(variantStart, variantObj) || null;

          // // If there is a status override...
          // value = status
          //   ? checkStatuses(variantBase, variantEnd, status)
          //   : checkDefault(variantBase[variantEnd]);
        }

        // if (!variant.includes(".")) {
        //   variantBase = this.$utils.stringToDot(variant, themeVariants) || null;
        //   value = checkDefault(variantBase);
        // }

        // // Return base classes && variant values || click event values
        // return arrayMerge(
        //   findAllBases(variantObj),
        //   checkEvents(variantBase, variantEnd).length
        //     ? checkEvents(variantBase, variantEnd)
        //     : value
        // );
      });

      return arrayMerge(variantClasses, this.className);
    },
    checkDisabled() {
      return this.disabled ? Button.state.disabled.split(" ") : null;
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