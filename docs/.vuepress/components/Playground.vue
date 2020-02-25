<template>
  <Multipane class="flex w-full playground">
    <playground-display>
      <template v-slot:preview>
        <slot name="preview"></slot>
      </template>
      <template v-slot:code>
        <slot name="code"></slot>
      </template>
    </playground-display>
    <pg-resizer />
    <playground-options>
      <slot name="options"></slot>
    </playground-options>
  </Multipane>
</template>

<script>
import { Multipane, MultipaneResizer } from "vue-multipane";
export default {
  components: { Multipane, MultipaneResizer },
  props: {
    test: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="postcss" scoped>
@screen md {
  .playground {
    max-height: 38rem;
  }
}
</style>