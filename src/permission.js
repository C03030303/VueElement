import router from "./router/index.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useUserStore } from "@/store/userStore.js";
import { getRouterApi } from "@/apis/user.js";
import NotFound from "@/views/NotFound.vue";

NProgress.configure({ showSpinner: false });

const whitePath = ["/login"]; //白名单

const parseRoutes = (routes) => {
  return routes.map((route) => {
    return {
      ...route,
      component: route.component
        ? () => import(/* @vite-ignore */ `/src${route.component}.vue`)
        : "",
    };
  });
};

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = useUserStore();
  const token = userStore.getToken;
  if (token) {
    if (userStore.menus.length) {
      if (to.path === "/login") {
        next("/");
      } else {
        next();
      }
    } else {
      const routes = await getRouterApi();
      userStore.setMenus(routes);
      const parent = router.getRoutes().find((r) => r.name === "Layout");
      const flatRoutes = parseRoutes(routes);
      flatRoutes.forEach((item) => {
        router.addRoute(parent.name, item);
      });
      const notFound = {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
      };
      router.addRoute(notFound);
      next({ ...to, replace: true });
    }
  } else {
    if (whitePath.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
