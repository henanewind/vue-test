<template>
  <div>
    <todo-list :todos="filteredTodos">
      <template v-slot:heihua="{ todo }">
        父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </todo-list>
    <hr>
    <todo-list :todos="filteredTodos">
      <!--v-slot:default 和 v-slot 等价-->
      <template v-slot:heihua="{ todo: data }">
        <span v-if="data.isComplete">✓</span>
        {{ data.text }} --
      </template>
      <template #default="{slotProps}">
        {{ slotProps.id }}:{{ slotProps.text }}
      </template>
<!--      <template v-slot="{ user = { firstName: 'Guest' } }">-->
<!--        {{ user.firstName }}-->
<!--      </template>-->
    </todo-list>
    <br>
    <submit-button></submit-button>
    <br>
    <submit-button>Save</submit-button>
    <br>
    <base-layout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <ul>
      <li
        v-for="todo in filteredTodos"
        v-bind:key="todo.id"
      >
        <!--
        我们为每个 todo 准备了一个插槽，
        将 `todo` 对象作为一个插槽的 prop 传入。
        -->
        <slot name="todo" v-bind:todo="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>

let todoList = {
  template: '<ol><li v-for="item in todos" :key="item.id"><slot name="heihua" :todo="item">后备内容：{{item.text}} -- </slot><slot v-bind:slotProps="item"></slot></li></ol>',
  props: ['todos']
}

let submitButton = {
  template: `<button type="submit">Your Profile
                <slot>Submit</slot>
              </button>`
}

let baseLayout = {
  template: `
    <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot>默认插槽</slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  `
}

export default {
  name: 'SlotComponent',
  components: {
    'todo-list': todoList,
    'submit-button': submitButton,
    'base-layout': baseLayout
  },
  data () {
    return {
      filteredTodos: [
        {
          id: 1,
          text: '郑州',
          isComplete: true
        },
        {
          id: 2,
          text: '北京',
          isComplete: false
        },
        {
          id: 3,
          text: '上海',
          isComplete: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
