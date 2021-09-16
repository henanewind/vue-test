// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import Element from 'element-ui'
// 引入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'
import {WaitFor} from '@/api/global'
// 通过这个命令使所有的element-ui标签(<el-*></el-*>)可被解析
Vue.use(Element)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

// NProgress.configure({ showSpinner: false })
NProgress.set(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 4000,
  showSpinner: false,
  trickle: false
})
// NProgress.configure({
//   template: `<div class="bar" role="bar" style="background: white">
//                 <div class="peg" style="box-shadow: 0 0 10px #fff, 0 0 5px #fff;">
//                     <div class="spinner" role="spinner">
//                         <div class="spinner-icon" style="border-top-color:white;border-left-color: white">
//                         </div>
//                     </div>
//                 </div>
//             </div>`
// })

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log('from:' + from.fullPath)
  console.log('to:' + to.fullPath)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {
  console.log('执行完成.......')
  NProgress.done()
  // WaitFor(2, () => NProgress.done())
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
