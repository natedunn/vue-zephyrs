<template>
  <playground>
    <template v-slot:preview>
      <z-button
          :className="className"
          :themeDisabled="themeDisabled"
          :disabled="disabled"
          :removeClass="removeClass"
          :variant="{ variant: variantSelected.value, subVariant: subVariantSelected.value }"
          @click="testClick"
          @focus="testFocus"
          @blur="testBlur"
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
          <z-select label="variant" :options="variantOptions" v-model="variantSelected" />
        </pg-option>
        <pg-option>
          <z-select label="subVariant" :options="subVariantOptions" v-model="subVariantSelected" />
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
import { ZButton } from "../../../theme";
import { MultipaneResizer } from "vue-multipane";
export default {
  components: { MultipaneResizer },
  data() {
    return {
      // Component state
      text: "Button",
      className: "foo",
      disabled: false,
      removeClass: "",
      themeDisabled: false,
      // Just-for-playgrounds state
      focused: false,
      variantOptions: {},
      variantSelected: null,
      subVariantSelected: null
    };
  },
  computed: {
    code() {
      return `<z-button
      :className="${this.className}"
      :themeDisabled="${this.themeDisabled}"
      :disabled="${this.disabled}"
      :removeClass="${this.removeClass}"
      :variant="${this.variantSelected.value}.${this.subVariantSelected.value}"
    >
      ${this.text}
    </z-button>`;
    },
    variant() {
      return {
        variant: "primary",
        subVariant: "full"
      };
    },
    subVariantOptions() {
      if (this.variantSelected) {
        return Object.keys(ZButton.variant[this.variantSelected.value]).map(
          subVariant => ({
            value: subVariant,
            text: subVariant
          })
        );
      }
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
    },
    getVariantOptions() {
      return Object.keys(ZButton.variant).map(variant => ({
        value: variant,
        text: variant
      }));
    }
  },
  created() {
    this.variantSelected = {
      value: Object.keys(ZButton.variant)[0],
      text: Object.keys(ZButton.variant)[0]
    };
    this.subVariantSelected = {
      value: Object.keys(ZButton.variant[this.variantSelected.value])[0],
      text: Object.keys(ZButton.variant[this.variantSelected.value])[0]
    };
    this.variantOptions = this.getVariantOptions();
  },
  watch: {
    variantSelected() {
      if (
        !ZButton.variant[this.variantSelected.value][
          this.subVariantSelected.value
        ]
      ) {
        this.subVariantSelected = {
          value: Object.keys(ZButton.variant[this.variantSelected.value])[0],
          text: Object.keys(ZButton.variant[this.variantSelected.value])[0]
        };
      }
    }
  }
};
</script>

<style>
</style>