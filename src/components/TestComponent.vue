<template>
  <div>
    <input type='text' v-model='message'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data () {
    return {
      message: '我的第一个Vue应用...'
    }
  }
}
</script>

<style scoped>

</style>
