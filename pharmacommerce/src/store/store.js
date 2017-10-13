import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
// axios.defaults.headers.common['X-Mashape-Key'] = 'HHhcsH4Q5fmsh1xv3j8eX2oSJP7tp1Ua2UhjsnORPU02apPB5m'

const state = {
  profile: {
    userid: 'lala',
    userdata: JSON.parse(localStorage.getItem('userdata'))
  },
  products: {
    allproducts: null,
  },
  panier:localStorage.getItem('panier'),
}

const getters = {
  // profile page
  getstate: state => store.state.profile.mlist,
  getuserdata: state => store.state.profile.userdata,
  getallproducts: state => store.state.products.allproducts,
  getpanier: state => store.state.panier,
}

const mutations = {
  // Home page
  SET_MLIST: (state, name) => {
    store.state.profile.mlist = name
  },
  SET_USER_DATA: (state, name) => {
    store.state.profile.userdata = name;
  },
  SET_ALL_PRODUCTS: (state, name) => {
    store.state.products.allproducts = name;
  },
  SET_PANIER: (state, number) => {
    store.state.panier = number;
  }
}

const actions = {
  SetPanier: (store,number) => {
    localStorage.setItem('panier', number)
    store.commit('SET_PANIER', localStorage.getItem('panier'))
  },
  GetAllProducts: _ => {
    axios.get(`/users`)
      .then(response => {
        // localStorage.setItem('userdata', JSON.stringify(response.data[0]))
        store.commit('SET_ALL_PRODUCTS', response)
        resolve(response)
      }).catch(e => {
        reject(e);
      })
  },
  Login: (store, name) => {
    return new Promise((resolve, reject) => {
      axios.get(`/users`)
        .then(response => {
          localStorage.setItem('userdata', JSON.stringify(response.data[0]))
          store.commit('SET_USER_DATA', JSON.parse(localStorage.getItem('userdata')))
          resolve(response)
        }).catch(e => {
          reject(e);
        })
    })
  },
  Inscription: (store, user) => {

    // return new Promise((resolve, reject) => {
    //   axios.post('/user', {
    //     email: user.email,
    //     password: user.password,
    //     nom: user.nom,
    //     prenom: user.prenom,
    //     adresse: user.address.adresse,
    //     city: user.address.city,
    //     cp: user.address.cp,
    //     telephone: user.phone
    //   }).then(function(response) {
    //     console.log(response);
    //     localStorage.setItem('userdata', JSON.stringify(response.data[0]))
    //     store.commit('SET_USER_DATA', JSON.parse(localStorage.getItem('userdata')))
    //     resolve(response)
    //   }).catch(e => {
    //     reject(e);
    //   })
    // })

  },
  Disconnect: _ => {
    return new Promise((resolve, reject) => {
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
