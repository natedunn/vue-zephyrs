<template>
  <Fragment>
    <div :class="wrapperClasses" @click="toggleValue">
      <z-input
        :id="inputId"
        :className="checkboxClasses"
        v-model="value"
        type="checkbox"
        themeDisabled
        labelDisabled
      />
      <label
        v-if="!labelDisabled && (this.$slots.default || label)"
        :class="labelClasses"
        :for="inputId"
      >
        <slot>
          {{ label }}
        </slot>
      </label>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: { Fragment },
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
    }
  },
  data() {
    return {
      currentValue: null
    };
  },
  computed: {
    wrapperClasses() {
      return "py-2 px-4 bg-gray-200 rounded inline-flex items-center hover:bg-gray-300 cursor-pointer";
    },
    checkboxClasses() {
      return "bg-red-500 mr-2 cursor-pointer";
    },
    labelClasses() {
      return "block pointer-events-none cursor-pointer";
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