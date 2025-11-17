<script setup>
import User from "./User.vue";
import { Icon } from "@iconify/vue";

const isCollapse = defineModel("isCollapse");
const icon = computed(() => (isCollapse.value ? "expand" : "fold"));

const toggle = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<template>
  <div class="header">
    <el-icon :size="24" class="cursor-pointer" @click="toggle">
      <Icon :icon="`ep:${icon}`" width="1.2em" height="1.2em" />
    </el-icon>
    <div>
      <User />
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.header {
  @apply flex h-12 items-center justify-between pl-2.5;
}
</style>
