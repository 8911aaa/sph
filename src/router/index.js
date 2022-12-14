
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/Home/home'
import login from '../pages/Login/login'
import register from '../pages/Register/register'
import sertch from '../pages/Search/sertch'
// 重写push|replace，第一个参数：告诉原来的的push你往哪里调（传递哪些参数）第二个：成功回调，第三个失败回调
// call和apply区别，相同点：都可以调用函数一次都可以窜才上下文一次，不同点：call传递参数用逗号隔开，applu方法执行传递数组
const orgiginpush = VueRouter.prototype.push
const orgiginreplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (localtion, resolive, reject) {
  if (resolive && reject) {
    orgiginpush.call(this, localtion, resolive, reject)
  } else {
    orgiginpush.call(this, localtion, () => {}, () => {})
  }
}
VueRouter.prototype.replace = function (localtion, resolive, reject) {
  if (resolive && reject) {
    orgiginreplace.call(this, localtion, resolive, reject)
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: login,
    meta: { requiresAuth: false }
  },
  {
    path:
    '/register',
    component: register,
    meta: { requiresAuth: false }
  },
  {
    path: '/sertch/:keydown',
    component: sertch,
    meta: { requiresAuth: true },
    name: 'sertch',
    props: true
  },
  // 页面重定向打开网页默认显示home首页
  {
    path: '/',
    redirect: '/home'

  }
]

const router = new VueRouter({

  routes
})

export default router
