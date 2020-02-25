<template>
  <playground>
    <template v-slot:preview>
      <!-- Wrapper for display purposes only -->
      <div>
        <z-input
          v-model="value"
          :label="label"
          :labelDisabled="labelDisabled"
          :themeDisabled="themeDisabled"
        />
      </div>
    </template>
    <template v-slot:code>
      {{ code }}
    </template>
    <template v-slot:options>
      <pg-header>Props</pg-header>
      <z-input label="v-model" v-model="value" />
      <div class="h-6"></div>
      <z-input
        label="label"
        v-model="label"
        placeholder="No label (removes <label> element)"
      />
      <div class="h-6"></div>
      <z-checkbox v-model="themeDisabled" id="themeDisabled"
        >themeDisabled</z-checkbox
      >
    </template>
  </playground>
</template>

<script>
export default {
  data() {
    return {
      componentTag: "v-input",
      value: "Default Value",
      name: "Default Name",
      label: "Default Label",
      labelDisabled: false,
      themeDisabled: false
    };
  },
  computed: {
    code() {
      return `<v-input
      v-model="value"
      :label="${this.label}"
      :labelDisabled="${this.labelDisabled}"
      :themeDisabled="${this.themeDisabled}"
    />`;
    }
  }
};
</script>

<style>
</style>