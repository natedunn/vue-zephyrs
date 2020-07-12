<template>
  <div :class="wrapperClasses" @click="toggleValue">
    <z-input
      v-model="value"
      :id="inputId"
      :classAppend="{
        input: checkboxClasses
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
      return {
        thing: "test this thing",
        other: "other"
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