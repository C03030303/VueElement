<script setup>
import AppMain from "@/layout/AppMain.vue";
import Header from "@/layout/header/Header.vue";
import Menu from "@/layout/menu/Menu.vue";
import Breadcrumb from "@/layout/Breadcrumb.vue";

const isCollapse = ref(false); //菜单展开收起
</script>

<template>
  <el-container>
    <el-aside :width="isCollapse ? '84px' : '180px'" class="el-aside">
      <Menu v-model:isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="el-header">
        <Header v-model:isCollapse="isCollapse" />
        <Breadcrumb />
      </el-header>
      <el-main class="el-main">
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
@reference "tailwindcss";
.el-aside {
  @apply h-screen;
  background-color: var(--primary-color);
}
.el-header {
  @apply flex h-20 flex-col px-0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
.el-main {
  @apply bg-[#F2F3F5];
}
</style>
