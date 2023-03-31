import { createRouter,createWebHashHistory } from 'vue-router'

const router = createRouter({
       history: createWebHashHistory(),
    routes:[
		 {path: '/',component: () => import('../components/LoginPage.vue')  },
    {path: '/addInfo',component: () => import('../components/addInfo.vue')  },
    {path: '/alterInfo',component: () => import('../components/alterInfo.vue')  },
  ]
}) 

export default router