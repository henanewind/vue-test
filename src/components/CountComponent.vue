<template>
  <div>
    <p>count的原值：{{ this.$store.state.count }}, count = {{ count }}</p>
    <p>count的getter.getCounter计算值：{{ this.$store.getters.getStateCount }}</p>
    <p>mapState.count值：{{ count1 }}</p>
    <p>mapGetters.count值：{{ count2 }}</p>
    <p>mapGetters.getCount3：{{ getCount3 }}</p>
    <button @click="addCount(5)">+5</button>
    <button @click="reductionCount">-1</button>
    <button @click="ADD(2)">+2</button>
    <button @click="reductionFun">-1</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'CountComponent',
  computed: {
    ...mapState(['count']),
    ...mapState({
      count1: state => state.count + 2
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
      addCount: 'ADD'
    }),
    ...mapActions({
      // 把方法this.reductionCount() 映射为 this.$store.dispatch('reductionFun')
      reductionCount: 'reductionFun'
    })
  }
}
</script>

<style scoped>

</style>
