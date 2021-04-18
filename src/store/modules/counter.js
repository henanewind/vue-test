
const person = {
  state: {
    count: 1
  },
  // getters: {
  //   getStateCount (state) {
  //     return state.count + 1
  //   },
  //   getCount2 (state) {
  //     return state.count + 3
  //   },
  //   getCount3 (state) {
  //     return state.count + 4
  //   }
  // },
  mutations: {
    ADD (state, n) {
      state.count += n
    },
    REDUCTION (state) {
      state.count -= 1
    }
    // GETLIST (state, contents) {
    //   state.contents = contents
    // }
  },
  actions: {
    addFun (context, n) { // 与store实例具有相同方法的属性的上下文对象
      context.commit('ADD', n)
    },
    reductionFun (context) {
      context.commit('REDUCTION')
    }
    // GetList (context) {
    //   return new Promise((resolve, reject) => {
    //     login().then(res => {
    //       const data = res
    //       console.log('==========' + data)
    //       context.commit('GETLIST', data)
    //       resolve(res)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default person
