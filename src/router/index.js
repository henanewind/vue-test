import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'
import CountComponent from '@/components/CountComponent'
import Navigate from '../components/Navigate'
import InnterComponent from '@/components/InnterComponent'
import User from '@/components/User'
import UserPosts from '../components/UserPosts'

Vue.use(Router)

export default new Router({
  mode: 'history', // 路由默认采用 hash 模式，切换为history 消除url后面的 #
  routes: [
    {
      path: '/',
      name: 'Navigate',
      component: Navigate
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserPosts
        }
      ]
    },
    {
      path: '/hello',
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
      },
      children: [
        {
          path: 'profile',
          name: 'InnterComponent',
          component: InnterComponent
        }
      ]
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
