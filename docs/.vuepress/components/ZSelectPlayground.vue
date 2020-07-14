<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <!-- <z-select :options="options" v-model="value" /> -->
        <z-select
          v-model="value"
          :classAppend="{
            wrapper: classAppend.wrapper,
            select: classAppend.select
          }"
        >
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
      <pg-header>Component Props</pg-header>
      <pg-option>
        <z-input label="classAppend.wrapper" v-model="classAppend.wrapper" />
      </pg-option>
      <pg-option>
        <z-input label="classAppend.select" v-model="classAppend.select" />
      </pg-option>
      <pg-option>
        <z-input label="classRemove" v-model="classRemove" />
      </pg-option>
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
      value: "test",
      classAppend: {
        wrapper: "foo",
        select: "bar"
      },
      classRemove: null
    };
  }
};
</script>

<style>
</style>