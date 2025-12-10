import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
import TictactoeRoutes from '@/router/tictactoe';
import PlayGame from '@/router/playGame';
import Environmental from '@/router/environmental';

import Home from '@/container/Home/index.vue';
<<<<<<< HEAD
import BlocklyGui from '@/container/PythonCode/index.vue';
=======
import BlocklyGui from '@/container/BlocklyGui/index.vue';
>>>>>>> b24584f (HighLight)
import NotFound from '@/container/NotFound.vue';
import faceRoutes from '@/container/NewFace/router.js'; // ✅ 1. 引入新项目路由

const routes = [
  // ✅ 访问根路径时重定向到 /xxx
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/tictactoe',
    component: RouterView,
    children: TictactoeRoutes,
  },
  {
    path: '/play-game',
    component: RouterView,
    children: PlayGame,
  },
  {
    path: '/blockly-gui',
    component: BlocklyGui
  },
  {
    path: '/environmental',
    component: RouterView,
    children: Environmental
  },

  ...faceRoutes, // ✅ 2. 展开新路由数组，将其加入到路由表中

  // ⚠️ 404 必须放在最后
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
]


const router = createRouter({
  history: createWebHashHistory(), // ✅ 使用 HTML5 History 模式
  routes,
})

export default router