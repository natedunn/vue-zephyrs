<template>
  <playground>
    <template v-slot:preview>
      <z-button
        :className="className"
        :themeDisabled="themeDisabled"
        :status="status.value"
        :removeClass="removeClass"
        :variant="variant"
        @click=""
        @focus="testFocus"
        @blur="testBlur"
      >
        {{ text }}
      </z-button>
      <span
        v-if="focused"
        class="inline-block mt-4 border border-gray-300 bg-green-200 py-2 px-4 rounded"
      >
        Button is focused!
      </span>
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
          <a class="text-base" href="#component-specific-props"
            >Read more</a
          ></pg-header
        >
        <pg-option>
          <z-input label="variant" v-model="variant" />
        </pg-option>
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
        <pg-option>
          <z-select :options="statusOptions" v-model="status" />
        </pg-option>
      </pg-section>
    </template>
  </playground>
</template>

<script>
import { MultipaneResizer } from "vue-multipane";
import Theme from "../../../z.theme";
const { Button } = Theme.elements;
export default {
  components: { MultipaneResizer },
  data() {
    return {
      // Component state
      text: "Button",
      className: "foo",
      // disabled: false,
      status: { value: "", text: "Default" },
      statusOptions: [
        { value: "", text: "Default" },
        { value: "disabled", text: "Disabled" }
      ],
      removeClass: "",
      themeDisabled: false,
      // Just-for-playgrounds state
      focused: false,
      variant: "fill.primary"
    };
  },
  computed: {
    code() {
      return `<z-button
      :className="${this.className}"
      :themeDisabled="${this.themeDisabled}"
      :status="${this.status.value}"
      :removeClass="${this.removeClass}"
      :variant="${this.variant}"
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