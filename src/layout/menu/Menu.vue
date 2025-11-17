<script setup>
import Avatar from "@/assets/avatar.jpg";
import MenuItem from "@/layout/menu/MenuItem.vue";
import { useUserStore } from "@/store/userStore.js";

const route = useRoute();
const userStore = useUserStore();
const isCollapse = defineModel("isCollapse");

const createMenu = (
  list,
  { idKey = "path", childrenKey = "children", parentKey = "parent" } = {},
) => {
  const map = new Map(); // id -> 节点本身
  const result = []; // 根节点数组
  // 1. 初始化 map 并给每一项挂上 children
  for (const item of list) {
    map.set(item[idKey], {
      ...item,
      title: item.meta.title,
      icon: item.meta.icon,
      index: item.path,
      [childrenKey]: [],
    });
  }
  // 2. 挂父子关系
  for (const item of list) {
    const node = map.get(item[idKey]);
    const parent = map.get(item[parentKey]);
    if (parent) {
      parent[childrenKey].push(node);
    } else if (!item[parentKey]) {
      result.push(node); // 收集根节点
    }
  }
  return result;
};
const menu = ref([]);
const defaultActive = ref("");
onMounted(() => {
  menu.value = createMenu(userStore.menus);
  console.log(route);
  defaultActive.value = route.path;
});
</script>

<template>
  <div class="menu">
    <div class="logo">
      <el-avatar :src="Avatar" :size="40" class="mr-2" @error="() => true" />
      <span v-if="!isCollapse">后台管理系统</span>
    </div>
    <div class="menu-content">
      <el-menu
        :default-active="defaultActive"
        :collapse="isCollapse"
        class="el-menu hide-scrollbar"
        :popper-offset="10"
        :collapse-transition="false"
        unique-opened
        router
      >
        <MenuItem v-for="(item, index) in menu" :key="index" :menu="item" />
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.logo {
  @apply flex items-center justify-center text-white;
  height: 60px;
}

.menu {
  @apply overflow-hidden px-2.5;
  .menu-content {
    height: calc(100vh - 60px);
    .el-menu {
      @apply h-full overflow-scroll;
    }
  }
}

.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome Safari Edge */
}
</style>
