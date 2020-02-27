<template>
  <Prism language="js" :code="code" />
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import Strip from "strip-indent";
import * as ThemeDefault from "../../../theme";
export default {
  components: {
    Prism,
    Strip
  },
  props: {
    export: {
      type: String,
      required: true
    }
  },
  computed: {
    code() {
      return ThemeDefault.ZButton
        ? Strip(JSON.stringify(ThemeDefault[this.export], null, 1)).trim()
        : null;
    }
  }
};
</script>

<style>
</style>