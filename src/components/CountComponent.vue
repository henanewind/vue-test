<template>
  <div>
<!--    <p>count的原值：{{ this.$store.state.count }}, count = {{ count }}</p>-->
    <p>count的原值：{{ this.$store.getters.count }}, count = {{ count }}</p>
    <p>count的模块化后：{{ this.$store.state.person.count }}</p>
    <p>count的getter.getCounter计算值：{{ this.$store.getters.getStateCount }}</p>
    <p>mapState.count值：{{ count1 }}</p>
    <p>mapGetters.count值：{{ count2 }}</p>
    <p>mapGetters.getCount3：{{ getCount3 }}</p>
    <button @click="addCount(5)">+5</button>
    <button @click="reductionCount">-1</button>
    <button @click="ADD(2)">+2</button>
    <button @click="reductionFun">-1</button>
    <br>
    <button @click="getData">getData</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
// import { login } from '@/api/testApi'
export default {
  name: 'CountComponent',
  computed: {
    // ...mapState(['count']), // 如果是在模块person中需要使用下面的对象的表示形式
    ...mapState({
      count: state => state.person.count,
      // count1: state => state.count + 2
      count1: state => state.person.count + 2
    }
    ),
    ...mapGetters({
      count2: 'getCount2'
    }),
    ...mapGetters(['getCount3'])
  },

  methods: {
    // addCount (n) {
    //   console.log(n)
    //   // this.$store.commit('ADD', n)
    //   this.$store.dispatch('addFun', n)
    // },
    // reductionCount () {
    //   this.$store.dispatch('reductionFun')
    // },
    ...mapMutations([
      // 把 ADD 映射为 this.$store.commit('ADD', n)
      'ADD'
    ]),
    ...mapActions([
      // 把方法this.reductionFun() 映射为 this.$store.dispatch('reductionFun')
      'reductionFun'
    ]),
    ...mapMutations({
      // 把 addCount 映射为 this.$store.commit('ADD', n)
      // addCount: 'ADD'
      // 把方法this.reductionCount() 映射为 this.$store.commit('REDUCTION')
      reductionCount: 'REDUCTION'
    }),
    ...mapActions({
      // 把 addCount 映射为 this.$store.dispatch('addFun', n)
      addCount: 'addFun'
      // 把方法this.reductionCount() 映射为 this.$store.dispatch('reductionFun')
      // reductionCount: 'reductionFun'
    }),
    getData () {
      // let data = login()
      // console.log(data)
      // console.log('11111111')
      // this.$store.dispatch('GetList').then(value => {
      //   console.log(value)
      //   console.log('-----------------')
      //   console.log(this.$store.state.contents)
      //   console.log('-----------------')
      //   console.log(this.$store.state.getList)
      // })
      // 增加状态模块化处理后取值，需要加模块名称
      this.$store.dispatch('appha/GetList').then(value => {
        console.log(value)
        console.log('-----------------')
        console.log(this.$store.state.appha.contents)
        console.log('-----------------')
        console.log(this.$store.state.appha.getList)
      })
    }
  }
}
</script>

<style scoped>

</style>
