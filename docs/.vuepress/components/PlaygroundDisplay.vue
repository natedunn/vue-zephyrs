<template>
  <div :style="{ width: '60%', maxWidth: '85%', minWidth: '25%' }">
    <div
      class="flex flex-col h-full rounded border border-gray-300 overflow-hidden"
    >
      <div
        class="flex items-center justify-between w-full top-0 z-10 sticky py-4 px-8 font-bold text-gray-100 bg-gray-800 border-r border-gray-700"
      >
        <div class="flex items-center">
          <svg
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Live Preview
        </div>
        <a role="button" @click="toggleCode">Toggle Code</a>
      </div>
      <div class="flex h-full flex-col justify-between">
        <div class="flex-auto flex justify-center items-center ">
          <slot name="preview"></slot>
        </div>
        <div
          v-if="codeIsOpen && code"
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
      return this.$slots.code ? strip(this.$slots.code[0].text).trim() : null;
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