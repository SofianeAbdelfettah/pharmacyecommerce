import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

// axios.defaults.baseURL = 'http://c02059d2.ngrok.io'
// axios.defaults.headers.common['X-Mashape-Key'] = 'HHhcsH4Q5fmsh1xv3j8eX2oSJP7tp1Ua2UhjsnORPU02apPB5m'

const state = {
  main: {
    mlist: 'lala',
  }
}

const getters = {
  // Main page
  getstate: state => store.state.main.mlist

}
const mutations = {
  // Home page
  SET_MLIST: (state, name) => {
    store.state.main.mlist = name
  }
}

const actions = {

  // addTodo: (store, name) => {
  //   store.commit('ADD_TEST', name)
  // }
  // Main page
  GetMangas: _ => {
    store.commit('SET_MLIST', "ok")
    // axios.get(`mangafox/mangas/1`)
    //   .then(response => {
    //     store.commit('SET_MLIST', response.data)
    //   })
    //   .catch(e => {
    //     this.errors.push(e)
    //   })


  }

}

const store = new Vuex.Store({

  state: state,

  getters: getters,

  mutations: mutations,

  actions: actions

})

export default store
