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
      const { $utils, $theme, input } = this;
      const code = $utils.stringToDot($theme, input) || null;
      return $theme ? JSON.stringify(code, null, 1) : null;
    }
  }
};
</script>

<style>
</style>