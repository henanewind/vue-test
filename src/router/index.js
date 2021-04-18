import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'
import CountComponent from '@/components/CountComponent'

Vue.use(Router)

export default new Router({
  mode: 'history', // 路由默认采用 hash 模式，切换为history 消除url后面的 #
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld'
      }
    },
    {
      path: '/test',
      name: 'demo',
      component: TestComponent,
      meta: {
        title: 'TestComponent'
      }
    },
    {
      path: '/count',
      name: 'CountComponent',
      component: CountComponent,
      meta: {
        title: 'CountComponent'
      }
    }
  ]
})
