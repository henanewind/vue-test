<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <transition name="fade">
      <router-view/>
    </transition>
    <!--命名视图-->
    <router-view name="topView"/>
    <hr>
    <router-view name="bottomView"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
