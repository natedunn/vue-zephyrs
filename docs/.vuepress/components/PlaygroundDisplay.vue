<template>
  <div :style="{ width: '60%', maxWidth: '85%', minWidth: '25%' }">
    <div
      class="flex flex-col h-full rounded border border-gray-300 overflow-hidden"
    >
      <div
        class="flex items-center justify-between w-full top-0 sticky py-4 px-8 font-bold text-gray-100 bg-gray-800 border-r border-gray-700"
      >
        Live Preview
        <a role="button" @click="toggleCode">Toggle Code</a>
      </div>
      <div class="flex h-full flex-col justify-between">
        <div class="flex-auto flex justify-center items-center ">
          <slot name="preview"></slot>
        </div>
        <div
          v-if="codeIsOpen"
          class="flex flex-col px-8 py-8 bg-gray-200 border-t border-gray-300 justify-center "
        >
          <Prism language="js">{{ code }}</Prism>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import strip from "strip-indent";
import { MultipaneResizer } from "vue-multipane";
export default {
  components: {
    Prism,
    MultipaneResizer
  },
  data() {
    return {
      codeIsOpen: true
    };
  },
  computed: {
    code() {
      return strip(this.$slots.code[0].text).trim();
    }
  },
  methods: {
    toggleCode() {
      this.codeIsOpen = !this.codeIsOpen;
    }
  }
};
</script>

<style lang="postcss" scoped>
</style>