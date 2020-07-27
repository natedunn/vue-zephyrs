<template>
  <div :class="classes.wrapper()">
    <label v-if="label && hasLabel" :class="classes.label()" :for="inputId">{{
      label
    }}</label>
    <input
      v-model="currentValue"
      :class="classes.input()"
      :type="type"
      :id="inputId"
      :placeholder="placeholder"
      :disabled="isDisabled"
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
    status: {
      type: [String, Array],
      default: null
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
    disabled: {
      type: [String, Boolean],
      default: false
    },
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
    classRemove: {
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
      currentValue: "",
      isDisabled: false,
      currentStatus: []
    };
  },
  computed: {
    classes() {
      const {
        $utils,
        size,
        currentStatus: status,
        classRemove,
        classAppend,
        isThemeDisabled
      } = this;
      const { filterClasses, themer } = $utils;

      return {
        wrapper: () => {
          if (isThemeDisabled) return classAppend.wrapper || null;
          return filterClasses(
            [
              themer(`ZInput.wrapper`),
              classAppend.wrapper ? classAppend.wrapper : null
            ],
            classRemove.wrapper ? classRemove.wrapper : null
          );
        },
        label: () => {
          if (isThemeDisabled) return classAppend.label || null;
          return filterClasses(
            [
              themer(`ZInput.label`),
              classAppend.label ? classAppend.label : null
            ],
            classRemove.label ? classRemove.label : null
          );
        },
        input: () => {
          if (isThemeDisabled) return classAppend.input || null;
          return filterClasses(
            [
              themer(`ZInput.input`),
              themer(`ZInput.input.size.${size}`),
              status && status.includes("disabled")
                ? themer("ZInput.input.status.disabled")
                : null,
              classAppend.input ? classAppend.input : null
            ],
            classRemove.input ? classRemove.input : null
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
    },
    status(value) {
      this.currentStatus = !Array.isArray(value) ? [value] : this.status;
      value && value.includes("disabled")
        ? (this.isDisabled = true)
        : (this.isDisabled = false);
    }
  },
  created() {
    this.currentStatus =
      typeof this.status === "string" ? [this.status] : this.status;
    this.status && this.status.includes("disabled")
      ? (this.isDisabled = true)
      : null;
    this.isDisabled =
      this.disabled && (this.disabled === true || this.disabled === "disabled")
        ? true
        : false;
    if (this.isDisabled) {
      !this.currentStatus.includes("disabled")
        ? this.currentStatus.push("disabled")
        : null;
    }
    this.currentValue = this.value;
  }
};
</script>

<style>
</style>