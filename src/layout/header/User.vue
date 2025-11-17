<script setup>
import Avatar from "@/assets/avatar.jpg";
import { useUserStore } from "@/store/userStore.js";
import { Setting, SwitchButton } from "@element-plus/icons-vue";
import router from "@/router/index.js";

const userStore = useUserStore();
const userInfo = userStore.userInfo;

//个人信息
const updateUserInfo = () => {
  console.log("个人信息");
};

//退出登录
const logout = () => {
  userStore.logout();
  router.push("/login");
};
</script>

<template>
  <el-dropdown class="header">
    <div class="el-dropdown-link">
      <el-avatar :src="Avatar" :size="35" class="mr-2" @error="() => true">
        {{ userInfo.username }}
      </el-avatar>
      <span class="user-name">{{ userInfo.username }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="Setting" @click="updateUserInfo">
          个人信息
        </el-dropdown-item>
        <el-dropdown-item :icon="SwitchButton" @click="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
@reference "tailwindcss";
.header {
  @apply pr-5;
  .el-dropdown-link {
    @apply flex cursor-pointer items-center;
  }
  .user-name {
    @apply font-medium;
  }
}
</style>
