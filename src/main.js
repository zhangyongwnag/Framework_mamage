import Vue from 'vue'
import App from './App'
import router from '@/router'
import title from '@/plugin/title'
import store from '@/store'
import request from '@/api/request'
import iview from 'iview'
import '@/assets/css/iview.css'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'

Vue.config.productionTip = false
Vue.prototype.httpCli = request

Vue.use(title)
Vue.use(iview)

importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render:h => h(App)
})

router.beforeEach((to, from, next) => {
  iview.LoadingBar.start();
  next();
});

router.afterEach(route => {
  window.scrollTo(0, 0)
  iview.LoadingBar.finish();
});
