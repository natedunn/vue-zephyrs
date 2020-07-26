<template>
  <div class="flex theme-container">
    <!-- Sidebar -->
    <div class="w-3/12 flex justify-end bg-cool-gray-100">
      <div class="pr-24 flex flex-col">
        <h1 class="font-bold mt-12">
          <img class="w-48" src="../public/logo.png" :alt="this.$site.title" />
        </h1>
        <div class="mt-6 sticky">
          <ul v-for="parent in this.$site.locales['/'].sidebar">
            <li class="mb-4 font-bold" :key="parent.title">
              {{ parent.title }}
              <ul v-for="child in parent.children" class="mt-1 ml-2">
                <li class="mb-1 font-normal" :key="child.title">
                  <router-link :to="`/${child.path}`">
                    {{ child.title }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overflow-auto w-9/12">
      <div class="h-screen w-full max-w-6xl mx-auto px-12">
        <div class="py-4 border-b flex items-center justify-between">
          <z-input
            :classRemove="{ input: 'rounded-l rounded-r px-3' }"
            :classAppend="{ input: 'rounded-full px-4' }"
            placeholder='Search (Press "/" to focus)'
          />
          <div>
            <ul>
              <li class="inline-block ml-3">
                <z-select value="unselected" status="disabled">
                  <option value="unselected" disabled>
                    Theme
                  </option>
                  <option value="default">
                    Tailwind
                  </option>
                  <option value="bootstrap">
                    Bootstrap
                  </option>
                </z-select>
              </li>
              <li
                v-for="item in this.$site.themeConfig.nav"
                class="inline-block ml-3"
                :key="item.text"
              >
                <router-link :to="item.link">
                  {{ item.text }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <main class="prose max-w-none py-16">
          <Content />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.sticky {
  top: theme("spacing.8");
}
</style>