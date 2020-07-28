<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <z-select
          v-model="value"
          :options="options"
          :classAppend="{
            wrapper: classAppend.wrapper,
            select: classAppend.select,
          }"
          :status="status"
        />
        <span v-if="value" class="block mt-4">
          <Prism
            class="mt-4"
            language="js"
            :code="JSON.stringify(value, null, 1)"
          />
        </span>
      </div>
    </template>
    <template v-slot:options>
      <pg-header>Component Props</pg-header>
      <pg-option>
        <z-input label="classAppend.wrapper" v-model="classAppend.wrapper" />
      </pg-option>
      <pg-option>
        <z-input label="classAppend.select" v-model="classAppend.select" />
      </pg-option>
      <pg-option>
        <z-input label="classRemove" v-model="classRemove" />
      </pg-option>
      <pg-option>
        <z-select
          label="classRemove"
          v-model="status"
          :options="statusOptions"
        />
      </pg-option>
    </template>
  </playground>
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import Strip from "strip-indent";
export default {
  components: {
    Prism,
    Strip
  },
  data() {
    return {
      value: "default",
      options: [
        {
          text: "Default Option",
          value: "default"
        },
        {
          text: "Secondary Option",
          value: "secondary"
        }
      ],
      status: "_default",
      statusOptions: [
        {
          text: "Default",
          value: "_default"
        },
        {
          text: "Disabled",
          value: "disabled"
        }
      ],
      classAppend: {
        wrapper: "foo",
        select: "bar"
      },
      classRemove: null
    };
  }
};
</script>

<style>
</style>