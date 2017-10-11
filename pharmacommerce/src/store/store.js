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
    axios.get(`/users`)
      .then(response => {
        console.log(email);
        localStorage.setItem('userdata', JSON.stringify(response.data[0]))
        store.commit('SET_USER_DATA', localStorage.getItem("userdata"))
        window.location = "profile";

      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  Disconnect: _ => {
    localStorage.removeItem('userdata')
    window.location = "/";
  }

}

const store = new Vuex.Store({

  state: state,

  getters: getters,

  mutations: mutations,

  actions: actions

})

export default store
