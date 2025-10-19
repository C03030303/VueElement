import router from "./router/index.js";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})

const whitePath = ['/login'] //白名单

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
