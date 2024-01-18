<template>
  <header class="header">
    <nav>
      <RouterLink
        v-for="menu in menus"
        :key="menu.path"
        :to="menu.path"
        style="padding: 0 10px 0 10px"
      >
        {{ menu.meta.title }}
      </RouterLink>
    </nav>
  </header>

  <main class="main">
    <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
      <NMessageProvider>
        <router-view></router-view>
      </NMessageProvider>
    </NConfigProvider>
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { NConfigProvider, zhCN, dateZhCN, NMessageProvider } from 'naive-ui'

const router = useRouter()
const menus = router.getRoutes()
</script>

<style scoped>
.header {
  height: 100px;
  background-color: rgba(228, 243, 201, 0.6);
}
.main {
  height: calc(100% - 100px);
  background-color: #fff;
}
</style>
