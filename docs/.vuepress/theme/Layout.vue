<template>
  <div class="theme-container">
    <!-- Sidebar -->
    <ul v-for="parent in this.$site.locales['/'].sidebar">
      <li :key="parent.title">
        Parent: {{ parent.title }}
        <ul v-for="child in parent.children">
          <li>
            <a :href="`/${child.path}`">
              {{ child.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <Content />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>