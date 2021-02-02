import router from './router'
// import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
// import { Message } from 'element-ui'
// import Spider from '@/api/spider'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next()
      // next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      next('/dashboard')
      console.log(router)
      // store.dispatch('GetInfo').then(res => { // 拉取用户信息
      //   const { code, data } = res.data
      //   if (code === '0000') {
      //   }
      //   next()
      // }).catch((err) => {
      //   store.dispatch('FedLogOut').then(() => {
      //     Message.error(err || 'Verification failed, please login again')
      //     next({ path: '/' })
      //   })
      // })
      // Spider.userInfo().then(({ data }) => {
      //   const { code, msg } = data
      //   if (code === 200) {
      //     next()
      //   } else {
      //     Message.error(msg)
      //     next('/login')
      //   }
      // })
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
