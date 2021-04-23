import { login } from '@/api/testApi'
import {getQuestion} from '../../api/testApi'

const state = {
  contents: [],
  question: []
}

const mutations = {
  GETLIST (state, contents) {
    state.contents = contents
  },
  GETQUEST (state, question) {
    state.question = question
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
  },
  GetQuest (context) {
    return new Promise((resolve, reject) => {
      getQuestion().then(res => {
        const data = res
        console.log('==========' + data)
        if (Array.isArray(data.rows)) {
          context.commit('GETQUEST', data.rows)
        }
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
