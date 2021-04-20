<template>
  <div>
    <div>User {{ $route.params.id }}</div>
    <router-link to="profile" append>职位</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style scoped>

</style>
