<template>
  <div :class="classes.wrapper()">
    <label v-if="label && hasLabel" :class="classes.label()" :for="inputId">{{
      label
    }}</label>
    <input
      :class="classes.input()"
      :type="type"
      :id="inputId"
      :placeholder="placeholder"
      v-model="currentValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "_default"
    },
    hasLabel: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      required: ""
    },

    // HTML attributes
    id: {
      type: String,
      required: null
    },
    value: {
      type: null,
      default: null
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: "text"
    },
    classAppend: {
      type: Object,
      default: () => {
        return {
          label: null,
          input: null
        };
      }
    },
    removeClass: {
      type: Object,
      default: () => {
        return {
          label: null,
          input: null
        };
      }
    },
    theme: {
      type: String,
      default: null
    },
    isThemeDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: ""
    };
  },
  computed: {
    classes() {
      const { $utils, size, removeClass, classAppend, isThemeDisabled } = this;
      const { filterClasses, themer } = $utils;

      return {
        wrapper: () => {
          if (isThemeDisabled) return classAppend.wrapper || null;
          return filterClasses(
            [
              themer(`ZInput.wrapper`),
              classAppend.wrapper ? classAppend.wrapper : null
            ],
            removeClass.wrapper ? removeClass.wrapper : null
          );
        },
        label: () => {
          if (isThemeDisabled) return classAppend.label || null;
          return filterClasses(
            [
              themer(`ZInput.label`),
              classAppend.label ? classAppend.label : null
            ],
            removeClass.label ? removeClass.label : null
          );
        },
        input: () => {
          if (isThemeDisabled) return classAppend.input || null;
          return filterClasses(
            [
              themer(`ZInput.input`),
              themer(`ZInput.input.size.${size}`),
              classAppend.input ? classAppend.input : null
            ],
            removeClass.input ? removeClass.input : null
          );
        }
      };
    },
    inputId() {
      if (this.id) return this.id;
      if (this.label && this.hasLabel) return this.slugify(this.label);
      return null;
    }
  },
  methods: {
    checkBase() {
      return this.$theme.components.ZInput.input._default;
    },
    slugify(string) {
      return this.$utils.slugify(string);
    }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    },
    currentValue(value) {
      this.$emit("input", value);
    }
  },
  created() {
    this.currentValue = this.value;
  }
};
</script>

<style>
</style>