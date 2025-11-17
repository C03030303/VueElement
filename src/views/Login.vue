<script setup>
import { loginApi } from "@/apis/user.js";
import { useUserStore } from "@/store/userStore.js";
import router from "@/router/index.js";

const userStore = useUserStore();

const { run: login } = useRequest(
  () => loginApi({ username: "1", password: "11" }),
  {
    manual: true,
    onSuccess: (data) => {
      console.log(data);
      userStore.setToken(data.token);
      userStore.setUserInfo(data.userInfo);
      router.push("/");
    },
  },
);
</script>

<template>
  <el-button @click="login">登录</el-button>
</template>

<style scoped></style>
