<template>
  <div :class="classes.wrapper()" @click="toggleValue">
    <z-input
      v-model="value"
      :id="inputId"
      :classAppend="{
        input: classes.input(),
      }"
      type="checkbox"
      :isThemeDisabled="true"
      :hasLabel="false"
    />
    <label
      v-if="hasLabel && (this.$slots.default || label)"
      :class="labelClasses"
      :for="inputId"
    >
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "_default"
    },
    variant: {
      type: String,
      default: "_default"
    },
    labelDisabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: null
    },
    value: {
      type: Boolean,
      default: false
    },
    hasLabel: {
      type: Boolean,
      default: true
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
      currentValue: null
    };
  },
  computed: {
    classes() {
      const {
        $utils,
        size,
        variant,
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
              themer(`ZCheckbox.wrapper`),
              themer(`ZCheckbox.wrapper.size.${size}`),
              themer(`ZCheckbox.wrapper.variant.${variant}`),
              classAppend.wrapper ? classAppend.wrapper : null
            ],
            classRemove.wrapper ? classRemove.wrapper : null
          );
        },
        input: () => {
          if (isThemeDisabled) return classAppend.input || null;
          return filterClasses(
            [
              themer(`ZCheckbox.input`),
              themer(`ZCheckbox.input.size.${size}`),
              classAppend.input ? classAppend.input : null
            ],
            classRemove.input ? classRemove.input : null
          );
        }
      };
    },
    wrapperClasses() {
      return this.$utils.themer("ZCheckbox.wrapper");
    },
    checkboxClasses() {
      return this.$utils.themer("ZCheckbox.input");
    },
    labelClasses() {
      return this.$utils.themer("ZCheckbox.label");
    },
    inputId() {
      if (this.id) return this.id;
      if (this.label && !this.labelDisabled) return this.slugify(this.label);
      return null;
    }
  },
  methods: {
    toggleValue() {
      this.currentValue = !this.currentValue;
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