<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import router from '@/router'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'routers'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  data () {
    return {
      // routers: []
    }
  },
  created () {
    console.log(router)
    // this.routers = router.options.routes.map(item => {
    //   if (!item.hidden) {
    //     return item
    //   }
    // })
  }
}
</script>
