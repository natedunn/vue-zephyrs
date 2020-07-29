<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <z-select
          v-model="value"
          :options="options"
          :size="size"
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
        <z-select
          v-model="size"
          :options="sizeOptions"
          label="size"
          size="sm"
        />
      </pg-option>
      <pg-option>
        <z-input
          v-model="classAppend.wrapper"
          label="classAppend.wrapper"
          size="sm"
        />
      </pg-option>
      <pg-option>
        <z-input
          v-model="classAppend.select"
          label="classAppend.select"
          size="sm"
        />
      </pg-option>
      <pg-option>
        <z-select
          label="status"
          v-model="status"
          size="sm"
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
      size: "md",
      sizeOptions: [
        {
          text: "sm",
          value: "sm"
        },
        {
          text: "md",
          value: "md"
        },
        {
          text: "lg",
          value: "lg"
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