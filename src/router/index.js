import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/Layout.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: "/home",
    component: Layout,
  },
  { path: "/login", component: () => import("@/views/Login.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
