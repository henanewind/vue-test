<template>
  <div>
    <div>User {{ $route.params.id }}</div>
    <label>子组件嵌套示例：</label>
<!--    <user-address msg="Hello World.">=========</user-address>-->
    <!--动态传递数据-->
<!--    <user-address @myclick="showMsg" :msg="message">///////////</user-address>-->
<!--    <p v-for="(item, i) in list" :key="item.id">索引值{{ i }} -&#45;&#45; 每一项 {{ item }}</p>-->
    <user-address v-for="(item, i) in list" :key="item.id" :msg="item.id">索引值{{ i }} --- 每一项 {{item.name}}</user-address>
    <router-link to="profile" append>职位</router-link>
    <router-view/>
  </div>
</template>

<script>
import UserAddress from './UserAddress'

export default {
  name: 'User',
  components: {UserAddress},
  data () {
    return {
      message: '来自User的消息.',
      list: [
        {id: 1, name: 'a'},
        {id: 2, name: 'b'},
        {id: 3, name: 'c'},
        {id: 4, name: 'd'},
        {id: 5, name: 'e'}
      ]
    }
  },
  methods: {
    showMsg (str) {
      this.message = str
    }
  }
}
</script>

<style scoped>

</style>
