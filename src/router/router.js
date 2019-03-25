import Vue from 'vue'
import Router from 'vue-router'
import Login from '..//views/Login/Login.vue'
import Layout from '../views/Layout/Layout.vue'
import Home from '../views/Home/Home.vue'
import UserList from '../views/User/UserList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: '/userlist', component: UserList }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  if (!window.localStorage.getItem('token')) {
    return router.replace('/login')
  }
  next()
})
export default router
