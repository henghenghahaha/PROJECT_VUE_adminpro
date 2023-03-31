import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

// eslint-disable-next-line no-unused-vars
/* eslint-disable */


createApp(App).use(Layui).use(router).mount('#app')

