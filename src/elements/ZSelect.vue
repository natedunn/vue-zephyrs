<template>
  <div class="inline-block">
    <label
      v-if="label && !labelDisabled"
      class="block mb-2 text-sm font-bold text-gray-900"
      :for="inputId"
    >
      {{ label }}
    </label>
    <div class="relative">
      <select :class="selectClasses" v-model="currentValue" :id="inputId">
        <slot>
          <!-- If passed by `options` prop -->
          <option v-for="option in options" :key="option.value" :value="option">
            {{ option.text }}
          </option>
        </slot>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ZSelect } from "../../theme";
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
    labelDisabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: ""
    }
  },
  data() {
    return {
      currentValue: "",
      sloted: null
    };
  },
  computed: {
    selectClasses() {
      return this.$theme.components.ZSelect.select._default;
    },
    inputId() {
      if (this.id) return this.id;
      if (this.label && !this.labelDisabled)
        return this.$utils.slugify(this.label);
      return null;
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
    this.sloted = this.$slots.default ? true : false;
    this.currentValue = this.value;
  }
};
</script>

<style>
</style>