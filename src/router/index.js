import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'
import CountComponent from '@/components/CountComponent'
import ComboBox from '@/components/ComboBox'
import Container from '../components/ContainerComponent'
import ElementComponent from '@//components/ElementComponent'
import scrollbar from '@//components/scrollbar'
import SlotComponent from '@//components/SlotComponent'
import Navigate from '../components/Navigate'
import InnterComponent from '@/components/InnterComponent'
import User from '@/components/User'
import UserPosts from '../components/UserPosts'
import Icons from '../components/Icons'
import selects from '../components/selects'
import cascader from '../components/cascader'
import MyMenu from '@/components/MyMenu'

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
    },
    {
      path: '/select',
      name: 'ComboBox',
      component: ComboBox,
      meta: {
        title: 'ComboBox'
      }
    },
    {
      path: '/container',
      name: 'Container',
      component: Container,
      meta: {
        title: 'ContainerComponent'
      }
    },
    {
      path: '/element',
      name: 'ElementComponent',
      component: ElementComponent,
      meta: {
        title: 'ElementComponent'
      }
    },
    {
      path: '/scrollbar',
      name: 'scrollbar',
      component: scrollbar,
      meta: {
        title: 'scrollbar'
      }
    },
    {
      path: '/slot',
      name: 'slot',
      component: SlotComponent,
      meta: {
        title: 'slot'
      }
    },
    {
      path: '/icon',
      name: 'Icons',
      component: Icons,
      meta: {
        title: 'icon'
      }
    },
    {
      path: '/selects',
      name: 'selects',
      component: selects,
      meta: {
        title: 'selects'
      }
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: cascader,
      meta: {
        title: cascader
      }
    },
    {
      path: '/menu',
      name: 'MyMenu',
      component: MyMenu,
      meta: {
        title: MyMenu
      }
    }
  ]
})
