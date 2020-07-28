<template>
  <div :class="classes.wrapper()">
    <label
      :class="classes.label()"
      v-if="label && !labelDisabled"
      class=""
      :for="inputId"
    >
      {{ label }}
    </label>
    <div :class="classes.selectWrapper()">
      <select
        @change="onChange"
        :class="classes.select()"
        v-model="currentValue"
        :id="inputId"
        :disabled="isDisabled"
      >
        <slot v-if="options">
          <!-- If passed by `options` prop -->
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </slot>
        <slot v-else></slot>
      </select>
      <div :class="classes.iconWrapper()">
        <slot name="icon">
          <svg
            v-if="!this.$slots.icon"
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: null,
      default: null
    },
    size: {
      type: String,
      default: "_default"
    },
    status: {
      type: [String, Array],
      default: "_default"
    },
    labelDisabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: ""
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
      sloted: null,
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
        classAppend,
        classRemove,
        isThemeDisabled
      } = this;
      const { filterClasses, themer } = $utils;

      return {
        wrapper: () => {
          if (isThemeDisabled) return classAppend.wrapper || null;
          return filterClasses(
            [themer("ZSelect.wrapper"), classAppend.wrapper],
            classRemove.wrapper
          );
        },
        label: () => {
          if (isThemeDisabled) return classAppend.label || null;
          return filterClasses(
            [themer("ZSelect.label"), classAppend.label],
            classRemove.label
          );
        },
        selectWrapper: () => {
          if (isThemeDisabled) return classAppend.selectWrapper || null;
          return filterClasses(
            [themer("ZSelect.selectWrapper"), classAppend.selectWrapper],
            classRemove.selectWrapper
          );
        },
        select: () => {
          if (isThemeDisabled) return classAppend.select || null;
          return filterClasses(
            [
              themer("ZSelect.select"),
              themer(`ZSelect.select.size.${size}`),
              themer(`ZSelect.select.status.${status}`),
              classAppend.select
            ],
            classRemove.select
          );
        },
        iconWrapper: () => {
          if (isThemeDisabled) return classAppend.iconWrapper || null;
          return filterClasses(
            [themer("ZSelect.iconWrapper"), classAppend.iconWrapper],
            classRemove.iconWrapper
          );
        }
      };
    },
    inputId() {
      if (this.id) return this.id;
      if (this.label && !this.labelDisabled)
        return this.$utils.slugify(this.label);
      return null;
    }
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
    change() {
      this.$el.change();
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
    this.sloted = this.$slots.default ? true : false;
    this.currentValue = this.value;
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
  }
};
</script>

<style>
</style>