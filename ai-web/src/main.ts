import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "amfe-flexible"
import vantPlugin from '@/plugins/vant-plugin';  // 引入自定义插件
const app=createApp(App)
app.use(vantPlugin);  // 使用插件
app.use(router)
app.mount('#app')
