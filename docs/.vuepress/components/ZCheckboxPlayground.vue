<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <z-checkbox v-model="value" :label="label" />
        <div class="text-center">
          <z-panel size="sm" v-if="value" classAppend="inline-block mt-4">
            Checked!
          </z-panel>
        </div>
      </div>
    </template>
    <template v-slot:code>
      {{ code }}
    </template>
    <template v-slot:options>
      <pg-header>Component Props</pg-header>
      <pg-option>
        <z-select
          label="value"
          v-model="value"
          :options="[
            {
              text: 'True',
              value: true
            },
            {
              text: 'False',
              value: false
            }
          ]"
        />
      </pg-option>
      <pg-option>
        <z-input label="label" v-model="label" />
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
      value: false,
      label: "Checkbox"
    };
  },
  computed: {
    code() {
      return `<z-checkbox
      :value="${this.value}"
      label="${this.label}"
    />`;
    }
  }
};
</script>

<style>
</style>