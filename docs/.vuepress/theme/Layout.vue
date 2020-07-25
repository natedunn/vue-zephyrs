<template>
  <div class="theme-container">
    <!-- Sidebar -->
    <ul v-for="parent in this.$site.locales['/'].sidebar">
      <li :key="parent.title">
        Parent: {{ parent.title }}
        <ul v-for="child in parent.children">
          <li>
            <router-link :to="`/${child.path}`">
              {{ child.title }}
            </router-link>
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