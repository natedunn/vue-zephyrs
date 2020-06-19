<template>
  <component :is="element" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
// import { ZH } from "../../theme";
export default {
  props: {
    level: {
      type: [Number, String],
      required: true,
      validator: value => {
        const stringValues = ["1", "2", "3", "4", "5", "6"];
        const numberValues = stringValues.map(Number);
        return stringValues.includes(value) || numberValues.includes(value);
      }
    },
    el: {
      type: String,
      default: ""
    }
  },
  computed: {
    element() {
      return this.el || `h${this.level}`;
    },
    classes() {
      return [this.getBase(), this.getVariation()];
    }
  },
  methods: {
    getBase() {
      // return ZH.base;
    },
    getVariation() {
      // return ZH.variant[`h${this.level}`];
    }
  }
};
</script>

<style>
</style>