<template>
  <div>
    <input type='text' v-model.trim='message'>
    <p>{{ message }}</p>
    <br>
<!--    实现 多选-->
<!--    <input type="checkbox" id="html" v-model="checked" value="html">-->
<!--    <label for="html">HTML</label>-->
<!--    <br>-->
<!--    <input type="checkbox" id="java" v-model="checked" value="java">-->
<!--    <label for="java">Java</label>-->
<!--    <br>-->
<!--    <input type="checkbox" id="csharp" v-model="checked" value="c#">-->
<!--    <label for="csharp">csharp</label>-->
<!--    <br>-->
    <!--    实现互斥-->
    <input type="radio" id="html" v-model="checked" value="html">
    <label for="html">HTML</label>
    <br>
    <input type="radio" id="java" v-model="checked" value="java">
    <label for="java">Java</label>
    <br>
    <input type="radio" id="csharp" v-model="checked" value="c#">
    <label for="csharp">csharp</label>
    <br>
    <input type="radio" v-model="picked" :value="value">
    <label>单选按钮</label>
    <p>{{ picked }}</p>
    <p>{{ value }}</p>
    <br>
    <input type="checkbox"
           v-model="toggle"
          :true-value="value1"
          :false-value="value2">
    <label>复选框</label>
    <p>{{ toggle }}</p>
    <p>{{ value1 }}</p>
    <p>{{ value2 }}</p>
    <br>
    <select v-model="selected">
      <option :value="{number: 123}">123</option>
    </select>
    <p>{{ selected.number }}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      message: '我的第一个Vue应用...',
      // checked: [], // 复选框 可以多选
      checked: 'java',// 单选 radio 一次只能选一个值
      picked: false,
      value: 123,
      toggle: false,
      value1: 'a',
      value2: 'b',
      selected: ''
    }
  }
}
</script>

<style scoped>
input, p {
  font-weight: normal;
}
</style>
