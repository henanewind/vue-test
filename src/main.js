// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'

import Element from 'element-ui'
// 引入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'
// 通过这个命令使所有的element-ui标签(<el-*></el-*>)可被解析
Vue.use(Element)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('from:' + from.fullPath)
  console.log('to:' + to.fullPath)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
