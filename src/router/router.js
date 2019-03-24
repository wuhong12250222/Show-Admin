import Vue from 'vue'
import Router from 'vue-router'
import Login from '..//views/Login/Login.vue'
import Layout from '../views/Layout/Layout.vue'
import Home from '../views/Home/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  //  如果路由路径是/login。则直接通过
  //  否则检验登录状态
  if (to.path === '/login') {
    return next()
  }
  const token = window.localStorage.getItem('token')
  if (!token) {
    next('/login')
  }
  next()
})
export default router
