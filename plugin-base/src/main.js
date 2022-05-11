import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './plugins/router'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app
.use(router)
.use(Antd)
.mount('#app')
