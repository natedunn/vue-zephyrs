<template>
  <Prism language="js" :code="code" />
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import Strip from "strip-indent";
export default {
  components: {
    Prism,
    Strip
  },
  props: {
    input: {
      type: String,
      default: ""
    }
  },
  computed: {
    code() {
      const code = this.$utils.stringToDot(this.$theme, this.input) || null;
      return this.$theme ? JSON.stringify(code, null, 1) : null;
    }
  }
};
</script>

<style>
</style>