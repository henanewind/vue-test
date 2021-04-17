import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount (state) {
      return state.count + 1
    },
    getCount2 (state) {
      return state.count + 3
    },
    getCount3 (state) {
      return state.count + 4
    }
  },
  mutations: {
    ADD (state, n) {
      state.count += n
    },
    REDUCTION (state) {
      state.count -= 1
    }
  },
  actions: {
    addFun (context, n) { // 与store实例具有相同方法的属性的上下文对象
      context.commit('ADD', n)
    },
    reductionFun (context) {
      context.commit('REDUCTION')
    }
  }
})

export default store
