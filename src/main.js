import {createApp} from 'vue'
import '@/styles/tailwind.css'
import '@/styles/style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './permission.js'
import {createPinia} from "pinia";


const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
