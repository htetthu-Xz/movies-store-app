import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import Nprogress from 'nprogress'
import { createPinia } from 'pinia'

import 'nprogress/nprogress.css'

const pinia = createPinia()

Nprogress.configure({
    easing: 'ease',
    speed: 500,
    trickleSpeed: 200
})
const app = createApp(App)
app.use(router);
app.use(Nprogress)
app.use(pinia)
app.mount('#app')
