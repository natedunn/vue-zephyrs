<template>
  <playground>
    <template v-slot:preview>
      <div class="flex flex-col items-center w-full">
        <div>
          <z-button
            :variant="variant"
            :size="size.value"
            :className="className"
            :removeClass="removeClass"
            :status="status.value"
            :loadingText="loadingText"
            :isThemeDisabled="themeDisabled"
            @click="!status.value ? testClick() : null"
            @focus="testFocus"
            @blur="testBlur"
          >
            {{ text }}
            <Fragment v-if="count > 0">
              (clicked {{ count }} time{{ count > 1 ? "s" : "" }})
            </Fragment>
          </z-button>
        </div>
        <span
          v-if="focused"
          class="inline-block mt-4 border border-gray-300 bg-green-200 py-2 px-4 rounded"
        >
          Button is focused!
        </span>
      </div>
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
          <z-checkbox v-model="themeDisabled" id="theme-disabled">
            themeDisabled
          </z-checkbox>
        </pg-option>
        <pg-option>
          <z-select label="Button Size" :options="sizeOptions" v-model="size" />
        </pg-option>
        <pg-option>
          <z-select
            label="Button Status"
            :options="statusOptions"
            v-model="status"
          />
        </pg-option>
        <pg-option>
          <z-input label="loadingText" v-model="loadingText" />
        </pg-option>
      </pg-section>
    </template>
  </playground>
</template>

<script>
import { Fragment } from "vue-fragment";
import { MultipaneResizer } from "vue-multipane";
export default {
  components: { MultipaneResizer, Fragment },
  data() {
    return {
      // Component state
      text: "Button",
      className: "foo",
      // disabled: false,
      status: { value: null, text: "Default" },
      statusOptions: [
        { value: null, text: "Default" },
        { value: "disabled", text: "Disabled" },
        { value: "loading", text: "Loading" }
      ],
      size: { value: "md", text: "md" },
      sizeOptions: [
        { value: "sm", text: "sm" },
        { value: "md", text: "md" },
        { value: "lg", text: "lg" }
      ],
      removeClass: "",
      themeDisabled: false,
      loadingText: "",
      // Just-for-playgrounds state
      focused: false,
      variant: "fill.primary",
      count: 0
    };
  },
  computed: {
    code() {
      return `<z-button
      :variant="${this.variant}"
      :className="${this.className}"
      :themeDisabled="${this.themeDisabled}"
      :removeClass="${this.removeClass}"
      :status="${this.status.value}"
      :loadingText="${this.loadingText}"
    >
      ${this.text}
    </z-button>`;
    }
  },
  methods: {
    testClick(event) {
      this.count++;
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