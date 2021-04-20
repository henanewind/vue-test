<template>
  <div>
    <h1><p>{{ msg }}</p></h1>
    <router-link to="/hello">hello</router-link>
    <router-link to="/test">test</router-link>
    <router-link to="/user/100">user</router-link>
    <router-link to="/count">count</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigate',
  data () {
    return {
      msg: 'Vue 导航界面'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
}

</style>
