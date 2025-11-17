<script setup>
import { Icon } from "@iconify/vue";
const menu = defineModel("menu");
</script>

<template>
  <el-sub-menu :index="menu.index" v-if="menu.children?.length">
    <template #title>
      <el-icon v-if="menu.icon">
        <Icon :icon="`ep:${menu.icon}`" width="1.2em" height="1.2em" />
      </el-icon>
      <span>{{ menu.title }}</span>
    </template>
    <MenuItem
      v-for="(item, index) in menu.children"
      :key="index"
      :menu="item"
    />
  </el-sub-menu>
  <el-menu-item :index="menu.index" v-else>
    <el-icon v-if="menu.icon">
      <Icon :icon="`ep:${menu.icon}`" width="1.2em" height="1.2em" />
    </el-icon>
    <span>{{ menu.title }}</span>
  </el-menu-item>
</template>

<style scoped></style>
