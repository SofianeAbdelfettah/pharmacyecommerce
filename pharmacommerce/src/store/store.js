import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['X-Mashape-Key'] = 'HHhcsH4Q5fmsh1xv3j8eX2oSJP7tp1Ua2UhjsnORPU02apPB5m'

const state = {
  main: {
    mlist: 'lala',
    userdata: JSON.parse(localStorage.getItem('userdata'))
  }
}

const getters = {
  // Main page
  getstate: state => store.state.main.mlist,
  getuserdata: state => store.state.main.userdata,
}

const mutations = {
  // Home page
  SET_MLIST: (state, name) => {
    store.state.main.mlist = name
  },
  SET_USER_DATA: (state, name) => {
    store.state.main.userdata = name;
  }
}

const actions = {

  GetMangas: _ => {
    store.commit('SET_MLIST', "ok")
  },
  SetUsers: (email) => {
    console.log(email);
    return new Promise((resolve, reject) => {
    axios.get(`/users`)
      .then(response => {
        localStorage.setItem('userdata', JSON.stringify(response.data[0]))
        store.commit('SET_USER_DATA',  JSON.parse(localStorage.getItem('userdata')))
        resolve(response)
      }).catch(e => {
        reject(e);
      })
    })

  },
  Disconnect: _ => {
    return new Promise((resolve,reject) => {
        localStorage.removeItem('userdata')
        store.commit('SET_USER_DATA', null)
        resolve('response')
    })
  }

}

const store = new Vuex.Store({

  state: state,

  getters: getters,

  mutations: mutations,

  actions: actions

})

export default store
