<template>
  <playground>
    <template v-slot:preview>
      <z-button
          @click="testClick"
          @focus="testFocus"
          @blur="testBlur"
          :className="className"
          :themeDisabled="themeDisabled"
          :disabled="disabled"
          :removeClass="removeClass"
        >
          {{ text }}
        </z-button>
        <span
          v-if="focused"
          class="inline-block mt-4 border border-green-500 bg-green-200 py-2 px-4 rounded"
          >Button is focused!</span
        >
    </template>
    <template v-slot:code>
      {{ code }}
    </template>
    <template v-slot:options>
      <pg-section>
        <pg-header>
          Slots
          <a class="text-base" href="#slots">Read more</a>
        </pg-header>
        <pg-option>
          <z-input label="default (button text)" v-model="text" />
        </pg-option>
      </pg-section>
      <pg-section>
        <pg-header
          >Component Props
          <a class="text-base" href="#component-specific-props">Read more</a></pg-header
        >
        <pg-option>
          <z-input label="className" v-model="className" />
        </pg-option>
        <pg-option>
          <z-input label="removeClass" v-model="removeClass" />
        </pg-option>
        <pg-option>
          <z-checkbox v-model="themeDisabled" id="themeDisabled">
            themeDisabled
          </z-checkbox>
        </pg-option>
      </pg-section>
      <pg-section>
        <pg-header>HTML Props
          <a class="text-base" href="#html-specific-props">Read more</a></pg-header
        </pg-header>
        <pg-option>
          <z-checkbox v-model="disabled" id="disabled">Disabled</z-checkbox>
        </pg-option>
      </pg-section>
    </template>
  </playground>
</template>

<script>
import { MultipaneResizer } from "vue-multipane";
export default {
  components: { MultipaneResizer },
  data() {
    return {
      // name: "z-button",
      text: "Button",
      className: "font-bold",
      disabled: false,
      removeClass: "",
      themeDisabled: false,
      // Test purposes
      focused: false
    };
  },
  computed: {
    code() {
      return `<z-button
      :className="${this.className}"
      :themeDisabled="${this.themeDisabled}"
      :disabled="${this.disabled}"
      :removeClass="${this.removeClass}"
    >
      ${this.text}
    </z-button>`;
    }
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