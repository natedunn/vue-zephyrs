<template>
  <Prism language="js" :code="code" />
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import Strip from "strip-indent";
import Theme from "../../../z.theme";
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
      const code = this.$utils.stringToDot(this.input, Theme) || null;
      return Theme ? JSON.stringify(code, null, 1) : null;
    }
  }
};
</script>

<style>
</style>