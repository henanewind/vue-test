<template>
  <div>
    <h2>*****. {{msg}}</h2>
    <slot>插槽内容被根组件填充覆盖</slot>
    <p>这是一个嵌套组件：{{message}}</p>
    <button @click="btnSend">发送消息到父组件</button>
  </div>
</template>

<script>
export default {
  name: 'UserAddress',
  data () {
    return {
      message: 'OK.'
    }
  },
  methods: {
    btnSend () {
      this.$emit('myclick', 'who are you?')
    }
  },
  props: ['msg']
}
</script>

<style scoped>

</style>
