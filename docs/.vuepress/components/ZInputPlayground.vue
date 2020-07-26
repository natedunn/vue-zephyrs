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
      <pg-section>
        <pg-header>Props</pg-header>
        <pg-option>
          <z-input label="v-model" v-model="value" />
        </pg-option>
        <pg-option>
          <z-input
            label="label"
            v-model="label"
            placeholder="No label (removes <label> element)"
          />
        </pg-option>
        <pg-option>
          <z-checkbox v-model="isThemeDisabled" id="isThemeDisabled">
            isThemeDisabled
          </z-checkbox>
        </pg-option>
      </pg-section>
      <pg-section></pg-section>
    </template>
  </playground>
</template>

<script>
export default {
  data() {
    return {
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