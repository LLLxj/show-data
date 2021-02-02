import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login'
// import Spider from '@/views/spider/index'
import Layout from '@/layout'
import pagesRouter from './pagesRouter'

Vue.use(VueRouter)

export const constantRouterMap = [
  { path: '/login', name: 'login', component: () => import('@/views/login/index'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      meta: {
        title: '首页',
        icon: 'table'
      },
      component: () => import('@/views/dashboard/index')
    }]
  }
]
export const asyncRouterMap = [...pagesRouter]
// export const asyncRouterMap = [
//   {
//     path: '/data',
//     component: Layout,
//     redirect: 'noredirect', // 当设置 noredirect 的时候该路由在面包屑导航中不可被点击
//     name: 'data',
//     meta: {
//       title: '流量突围',
//       icon: 'category'
//     },
//     children: [
//       {
//         path: 'dataInfo',
//         name: 'dataInfo',
//         component: () => import('@/views/data/dataInfo'),
//         meta: { title: '大盘流量分析' }
//       },
//       {
//         path: 'info',
//         name: 'info',
//         component: () => import('@/views/data/dataInfo'),
//         meta: { title: '频道流量分析' }
//       }
//     ]
//   },
//   {
//     path: '/dataInfo',
//     name: 'dataInfo',
//     component: Layout,
//     children: [
//       {
//         path: 'info',
//         name: 'info',
//         component: () => import('@/views/data/dataInfo'),
//         meta: { title: '频道流量分析' }
//       }
//     ]
//   }
//   // {
//   //   path: '/login',
//   //   name: 'login',
//   //   component: Login
//   // },
//   // {
//   //   path: '/spider',
//   //   name: 'spider',
//   //   // component: Spider
//   //   component: () => import('@/views/spider/index')
//   // },
//   // {
//   //   path: '/showDataList',
//   //   name: 'dataList',
//   //   component: () => import('@/views/data/list')
//   // },
// ]

// const allRoyterMap = constantRouterMap.concat(asyncRouterMap)
const allRoyterMap = constantRouterMap.concat(asyncRouterMap)
export default new VueRouter({
  mode: 'hash', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  // routes: constantRouterMap
  routes: allRoyterMap
})
