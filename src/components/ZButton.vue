<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "z-button",
  props: {
    text: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss" scoped>
.button {
  background-color: red;
  padding: 10px;
}
</style>