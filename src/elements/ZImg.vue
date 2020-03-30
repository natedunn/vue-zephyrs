<template>
  <img :src="src" :alt="alt" />
</template>te

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: [String, Boolean],
      required: true,
      validator: value => typeof value === "string" || value === false
    }
  }
};
</script>

<style>
</style>