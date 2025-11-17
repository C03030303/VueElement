import { createApp } from "vue";
import "@/styles/tailwind.css";
import "@/styles/element.css";
import "@/styles/global.css";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import "./permission.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
