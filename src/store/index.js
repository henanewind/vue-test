import Vue from 'vue'
import Vuex from 'vuex'
import appha from './modules/appha'
import person from './modules/counter'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appha,
    person
  },
  getters
})

export default store
