<template>
  <playground-wrapper>
    <playground-display>
      <div>
        <z-input
          v-model="value"
          :label="label"
          :labelDisabled="labelDisabled"
        />
      </div>
    </playground-display>
    <playground-options>
      <playground-header>Props</playground-header>
      <z-input label="v-model" v-model="value" />
      <div class="h-6"></div>
      <z-input
        label="label"
        v-model="label"
        placeholder="No label (removes <label> element)"
      />
      <div class="h-6"></div>
    </playground-options>
  </playground-wrapper>
</template>

<script>
export default {
  data() {
    return {
      value: "Default Value",
      name: "Default Name",
      label: "Default Label",
      labelDisabled: false
    };
  }
};
</script>

<style>
</style>