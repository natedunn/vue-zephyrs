<template>
  <playground>
    <template v-slot:preview>
      <!-- Wrapper for display purposes only -->
      <div>
        <z-input
          v-model="value"
          :label="label"
          :hasLabel="hasLabel"
          :isThemeDisabled="isThemeDisabled"
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
      <z-checkbox v-model="isThemeDisabled" id="isThemeDisabled">
        isThemeDisabled
      </z-checkbox>
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
      hasLabel: true,
      isThemeDisabled: false
    };
  },
  computed: {
    code() {
      return `<z-input
      v-model="${this.value}"
      :label="${this.label}"
      :hasLabel="${this.hasLabel}"
      :isThemeDisabled="${this.isThemeDisabled}"
    />`;
    }
  }
};
</script>

<style>
</style>