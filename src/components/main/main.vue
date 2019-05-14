<template>
  <Layout style="height: 100vh" class="main">
    <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
        </div>
      </side-menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
          <user :message-unread-count="0" :user-avatar="userAvatar"/>
          <language  @on-lang-change="setLocal" style="margin-right: 10px;" :lang="local"/>
          <error-store></error-store>
          <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
        </header-bar>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <div class="tag-nav-wrapper">
            <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag"/>
          </div>
          <Content class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
            <ABackTop :height="100" :bottom="80" :right="50" container=".content-wrapper"></ABackTop>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu/side-menu.vue'
import HeaderBar from './components/header-bar/header-bar.vue'
import TagsNav from './components/tags-nav/tags-nav.vue'
import User from './components/user/user.vue'
import ABackTop from './components/a-back-top/index.vue'
import Fullscreen from './components/fullscreen/fullscreen.vue'
import Language from './components/language/language.vue'
import ErrorStore from './components/error-store/error-store.vue'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { getNewTagList, routeEqual } from '@/libs/util'
import routers from '@/router/routers'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import userAvatar from '@/assets/images/avater.png'
export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderBar,
    Language,
    TagsNav,
    Fullscreen,
    ErrorStore,
    User,
    ABackTop
  },
  data () {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      userAvatar,
      isFullscreen: false,
    }
  },
  computed: {
    ...mapGetters([
      'errorCount'
    ]),
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    cacheList () {
      const list = ['ParentView', ...this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []]
      return list
    },
    menuList () {
      return this.$store.getters.menuList
    },
    local () {
      return this.$store.state.app.local
    },
    hasReadErrorPage () {
      return this.$store.state.app.hasReadErrorPage
    },
//    unreadCount () {
////      return this.$store.state.user.unreadCount
//    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'addTag',
      'setLocal',
      'setHomeRoute',
      'closeTag'
    ]),
    ...mapActions([
      'handleLogin',
      'getUnreadMessageCount'
    ]),
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleCollapsedChange (state) {
      this.collapsed = state
    },
    handleCloseTag (res, type, route) {
      if (type !== 'others') {
        if (type === 'all') {
          this.turnToPage('Home')
        } else {
          if (routeEqual(this.$route, route)) {
            this.closeTag(route)
          }
        }
      }
      this.setTagNavList(res)
    },
    handleClick (item) {
      this.turnToPage(item)
    }
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta } = newRoute
      this.addTag({
        route: { name, query, params, meta },
        type: 'push'
      })
      this.setBreadCrumb(newRoute)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
      this.$refs.sideMenu.updateOpenName(newRoute.name)
    }
  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航和标签导航
     */
    this.setTagNavList()
    this.setHomeRoute(routers)
    const { name, params, query, meta } = this.$route
    this.addTag({
      route: { name, params, query, meta }
    })
    this.setBreadCrumb(this.$route)
    // 设置初始语言
//    this.setLocal(this.$i18n.locale)
    // 如果当前打开页面不在标签栏中，跳到homeName页
    if (!this.tagNavList.find(item => item.name === this.$route.name)) {
      this.$router.push({
        name: 'Home'
      })
    }
    // 获取未读消息条数
//    this.getUnreadMessageCount()
  }
}
</script>
<style scoped>
  .main .logo-con {
    height: 64px;
    padding: 10px;
  }
  .main .logo-con img {
    height: 44px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
  .main .header-con {
    background: #fff;
    padding: 0 20px;
    width: 100%;
  }
  .main .main-layout-con {
    height: 100%;
    overflow: hidden;
  }
  .main .main-content-con {
    height: calc(100% - 60px);
    overflow: hidden;
  }
  .main .tag-nav-wrapper {
    padding: 0;
    height: 40px;
    background: #F0F0F0;
  }
  .main .content-wrapper {
    padding: 18px;
    height: calc(100vh - 110px);
    overflow: auto;
  }
  .main .left-sider .ivu-layout-sider-children {
    overflow-y: scroll;
    margin-right: -18px;
  }
  .ivu-menu-item > i {
    margin-right: 12px !important;
  }
  .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
    margin-right: 8px !important;
  }
  .collased-menu-dropdown {
    width: 100%;
    margin: 0;
    line-height: normal;
    padding: 7px 0 6px 16px;
    clear: both;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
  .collased-menu-dropdown:hover {
    background: rgba(100, 100, 100, 0.1);
  }
  .collased-menu-dropdown * {
    color: #515a6e;
  }
  .collased-menu-dropdown .ivu-menu-item > i {
    margin-right: 12px !important;
  }
  .collased-menu-dropdown .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
    margin-right: 8px !important;
  }
  .ivu-select-dropdown.ivu-dropdown-transfer {
    max-height: 400px;
  }

</style>
