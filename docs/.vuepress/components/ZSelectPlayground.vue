<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <!-- <z-select :options="options" v-model="value" /> -->
        <z-select v-model="value">
          <option value="test">
            This is going to be a test
          </option>
          <option value="thing">
            This thing is also a test
          </option>
        </z-select>
        <span v-if="value" class="block mt-4">
          <Prism
            class="mt-4"
            language="js"
            :code="JSON.stringify(value, null, 1)"
          />
        </span>
      </div>
    </template>
    <template v-slot:options>
      <z-panel variant="well" classAppend="text-center italic">
        Options Coming Soon
      </z-panel>
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
          text: "Default Text",
          value: "default value"
        },
        {
          text: "Alternate Text",
          value: "alternate value"
        }
      ],
      // value: {
      //   text: "Default Text",
      //   value: "default value"
      // }
      value: "test"
    };
  }
};
</script>

<style>
</style>