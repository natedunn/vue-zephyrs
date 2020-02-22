<template>
  <playground-wrapper>
    <playground-display>
      <z-button
        @click="testClick"
        @focus="testFocus"
        @blur="testBlur"
        :className="className"
        :disabled="disabled"
      >
        {{ text }}
      </z-button>
      <span
        v-if="focused"
        class="inline-block mt-4 border border-green-500 bg-green-200 py-2 px-4 rounded"
        >Button is focused!</span
      >
    </playground-display>
    <playground-options>
      <playground-header>Slots</playground-header>
      <z-input label="default (button text)" v-model="text" />
      <div class="h-10"></div>
      <playground-header>Component-specific Props</playground-header>
      <z-input label="className" v-model="className" />
      <div class="h-10"></div>
      <playground-header>HTML-specific Props</playground-header>
      <z-checkbox v-model="disabled" id="testing-here">Disabled</z-checkbox>
    </playground-options>
  </playground-wrapper>
</template>

<script>
export default {
  data() {
    return {
      text: "Button",
      className: "font-bold",
      disabled: false,
      // Test purposes
      focused: false
    };
  },
  methods: {
    testClick(event) {
      alert("This is a playground of the @click event working");
    },
    testFocus() {
      this.focused = true;
    },
    testBlur() {
      this.focused = false;
    }
  }
};
</script>

<style>
</style>