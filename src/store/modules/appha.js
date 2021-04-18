import { login } from '@/api/testApi'

const state = {
  contents: []
}

const mutations = {
  GETLIST (state, contents) {
    state.contents = contents
  }
}

const actions = {
  GetList (context) {
    return new Promise((resolve, reject) => {
      login().then(res => {
        const data = res
        console.log('==========' + data)
        context.commit('GETLIST', data)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
