<template>
  <Fragment>
    <label
      v-if="label && !labelDisabled"
      class="block mb-2 text-sm font-bold text-gray-900"
      :for="inputId"
      >{{ label }}</label
    >
    <input
      :class="classes"
      :type="type"
      :id="inputId"
      :placeholder="placeholder"
      v-model="currentValue"
    />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { ZInput } from "../../theme";
export default {
  components: {
    Fragment
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
    hasLabel: {
      type: Boolean,
      default: true
    },
    labelDisabled: {
      type: Boolean,
      default: false
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
    }
  },
  data() {
    return {
      currentValue: ""
    };
  },
  computed: {
    classes() {
      if (this.themeDisabled) {
        return this.className || null;
      }

      return [
        this.checkBase(),
        // this.checkDisabled(),
        // this.checkVariation(),
        this.className
      ];
    },
    inputId() {
      if (this.id) return this.id;
      if (this.label && !this.labelDisabled) return this.slugify(this.label);
      return null;
    }
  },
  methods: {
    checkBase() {
      return ZInput.base;
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