<template>
  <playground>
    <template v-slot:preview>
      <div class="py-12">
        <z-select :options="options" v-model="value" />
        <span
          v-if="value"
          class="block mt-4 text-sm py-2 px-3 rounded bg-gray-200 border border-gray-300"
        >
          Value: {{ value.value }}
          <br />
          Text: {{ value.text }}
        </span>
      </div>
    </template>
    <template v-slot:options>
      Testing
    </template>
  </playground>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: false,
          text: "This will return a boolean"
        },
        {
          value: "Hello I am a string",
          text: "This returns a string"
        }
      ],
      value: null
    };
  }
};
</script>

<style>
</style>