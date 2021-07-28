<template>
  <div style="height: 200px">
<!--    <el-scrollbar style="height:100%">-->
<!--      <div style="width:700px;height:700px;border:solid;" >-->
<!--        ....... blabla.....-->
<!--      </div>-->
<!--    </el-scrollbar>-->
    <el-scrollbar style="height:100%" wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
      <div v-for="value in num" :key="value">
        {{value}}
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'scrollbar',
  data () {
    return {
      num: 30
    }
  }
}
</script>

<style scoped>
.el-scrollbar__wrap {
  overflow-x: hidden;
}

/*展示列表的区域，超过200px出现滚动条*/
.list {
  max-height: 200px;
}
</style>
