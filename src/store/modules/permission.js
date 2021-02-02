import { asyncRouterMap, constantRouterMap } from '@/router'
console.log(asyncRouterMap)
console.log(constantRouterMap)
// import route from '@/router'

/**
 * 通过meta.perms判断是否与当前用户权限匹配
 * @param perms
 * @param route
 */
function hasPermission (perms, route) {
  if (route.meta && route.meta.roles) {
    // console.log(route)
    return perms.some(perm => route.meta.roles.includes(perm))
  } else {
    return false
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param perms
 */
function filterAsyncRouter (routes, perms) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (tmp.children) {
      tmp.children = filterAsyncRouter(tmp.children, perms)
      if (tmp.children && tmp.children.length > 0) {
        res.push(tmp)
      }
    } else {
      if (hasPermission(perms, tmp)) {
        res.push(tmp)
      }
    }
  })
  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    roles: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { perms } = data
        // if (perms.includes('*')) {
        //   accessedRouters = asyncRouterMap
        // } else {
        //   accessedRouters = filterAsyncRouter(asyncRouterMap, perms)
        // }
        const accessedRouters = filterAsyncRouter(asyncRouterMap, perms)
        // accessedRouters.forEach(item => {
        //   console.log(item.meta.title)
        // })
        commit('SET_ROUTERS', accessedRouters)
        commit('SET_ROLES', perms)
        resolve()
      })
    }
  }
}

export default permission
