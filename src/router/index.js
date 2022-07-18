import Vue from "vue"
import Router from "vue-router"
import store from '../store'
import { showtime } from '@utils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: 'index',
      component: () => import("@views/index/index.vue")
    },
    {
      path: "/configure",
      name: 'configure',
      component: () => import("@views/configure/index.vue")
    },
    {
      path: "/record",
      name: 'record',
      component: () => import("@views/record/index.vue")
    },
  ]
})
router.beforeEach((to, from, next) => { //路由守卫
  if(from.name != null){ //保存记录
    let data ={
      url: from.path,
      name: from.name,
      date: showtime()
    }
    store.commit('AddRecord', data)
  }

  next()
})
export default router