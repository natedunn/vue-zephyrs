<template>
  <playground>
    <template v-slot:preview>
      <div class="flex flex-col items-center w-full">
        <div>
          <z-button
            :variant="variant"
            :size="size.value"
            :classAppend="classAppend"
            :removeClass="removeClass"
            :status="status.value"
            :loadingText="loadingText"
            :isThemeDisabled="isThemeDisabled"
            @click="!status.value ? testClick() : null"
            @focus="testFocus"
            @blur="testBlur"
          >
            {{ text }}
          </z-button>
        </div>
        <z-panel v-if="focused" size="sm" class="bg-green-100 mt-2">
          Button is focused!
        </z-panel>
        <z-panel
          v-if="count > 0"
          size="sm"
          class="border-gray-300 bg-gray-100 mt-2"
        >
          Clicked {{ count }} time{{ count > 1 ? "s" : "" }}
        </z-panel>
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
          <z-input label="classAppend" v-model="classAppend" />
        </pg-option>
        <pg-option>
          <z-input label="removeClass" v-model="removeClass" />
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
        <pg-option>
          <z-checkbox v-model="isThemeDisabled" id="is-theme-disabled">
            isThemeDisabled
          </z-checkbox>
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
      classAppend: "foo",
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
      isThemeDisabled: false,
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
      :classAppend="${this.classAppend}"
      :removeClass="${this.removeClass}"
      :status="${this.status.value}"
      :loadingText="${this.loadingText}"
      :isThemeDisabled="${this.isThemeDisabled}"
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