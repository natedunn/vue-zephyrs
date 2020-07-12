<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <z-panel :variant="variant">
          {{ text }}
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
        <pg-option>
          <z-input label="variant" v-model="variant" />
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
      text: "Card Content Here",
      className: "foo",
      status: {},
      classRemove: "",
      themeDisabled: false,
      variant: "_default"
    };
  },
  computed: {
    code() {
      return `<z-panel
      :className="${this.className}"
      :themeDisabled="${this.themeDisabled}"
      :status="${this.status.value}"
      :classRemove="${this.classRemove}"
      :variant="${this.variant}"
    >
      ${this.text}
    </z-panel>`;
    }
  }
};
</script>

<style>
</style>