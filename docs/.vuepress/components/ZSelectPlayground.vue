<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <z-select :options="options" v-model="value" />
        <span v-if="value && value.value !== 'default'" class="block mt-4">
          <Prism
            class="mt-4"
            language="js"
            :code="JSON.stringify(value, null, 1)"
          />
        </span>
      </div>
    </template>
    <template v-slot:options>
      Testing
    </template>
  </playground>
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
  data() {
    return {
      options: [
        {
          value: "default",
          text: "Test Me"
        },
        {
          value: false,
          text: "This value is a boolean"
        },
        {
          value: "Hello, I am a string!",
          text: "This value is a string"
        }
      ],
      value: {
        value: "default",
        text: "Test Me"
      }
    };
  }
};
</script>

<style>
</style>