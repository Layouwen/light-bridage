import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/Home')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('views/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('views/Detail')
  },
  {
    path: '*',
    name: 'notFound',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes,
  // 切换页面自动滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
