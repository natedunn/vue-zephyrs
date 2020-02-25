<template>
  <Multipane class="flex w-full playground-wrapper">
    <slot></slot>
  </Multipane>
</template>

<script>
import { Multipane } from "vue-multipane";
export default {
  components: {
    Multipane
  }
};
</script>

<style>
@screen md {
  .playground-wrapper {
    max-height: 38rem;
    /* max-height: 20rem; */
  }
  /* .playground-wrapper > * {
    width: 50%;
  } */
}
</style>