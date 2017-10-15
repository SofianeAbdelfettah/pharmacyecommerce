import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

axios.defaults.baseURL = 'http://23.101.74.230/pharmacie'
// axios.defaults.headers.common['X-Mashape-Key'] = 'HHhcsH4Q5fmsh1xv3j8eX2oSJP7tp1Ua2UhjsnORPU02apPB5m'

const state = {
  profile: {
    userid: null,
    userdata: JSON.parse(localStorage.getItem('userdata'))
  },
  products: {
    allproducts: [],
  },
  panier: {
    numb: localStorage.getItem('paniernumb'),
    panier: [],
  },
}

const getters = {
  // profile page
  getstate: state => store.state.profile.mlist,
  getuserid: state => store.state.profile.userid,
  getuserdata: state => store.state.profile.userdata,
  getallproducts: state => store.state.products.allproducts,
  getpaniernumb: state => store.state.panier.numb,
  getpanier: state => store.state.panier.panier,
}

const mutations = {
  // Home page
  SET_MLIST: (state, name) => {
    store.state.profile.mlist = name
  },
  SET_USER_ID: (state, id) => {
    store.state.profile.userid = id;
  },
  SET_USER_DATA: (state, name) => {
    store.state.profile.userdata = name;
  },
  SET_ALL_PRODUCTS: (state, name) => {
    store.state.products.allproducts = name;
  },
  SET_PANIER_NUMB: (state, number) => {
    store.state.panier.numb = number;
  },
  SET_PANIER: (state, data) => {
    store.state.panier.panier = data;
  }
}

const actions = {
  SetPanier: (store, data) => {
    let array = store.getters.getpanier
    if (array.includes(data) === true) {
      array.splice(array.indexOf(data), 1);
    } else {
      let a = array.push(data)
    }
    localStorage.setItem('panier', JSON.stringify(store.getters.getpanier))
    store.commit('SET_PANIER', JSON.parse(localStorage.getItem('panier')))
    store.dispatch('SetPanierNumb', array.length)

  },
  SetPanierNumb: (store, number) => {
    localStorage.setItem('paniernumb', number)
    store.commit('SET_PANIER_NUMB', localStorage.getItem('paniernumb'))
  },
  GetAllProducts: _ => {
    axios.get(`/products`)
      .then(response => {
        localStorage.setItem('allproducts', JSON.stringify(response.data))
        store.commit('SET_ALL_PRODUCTS', JSON.parse(localStorage.getItem('allproducts')))
      }).catch(e => {
        throw (e);
      })
  },
  Login: (store, user) => {
    return new Promise((resolve, reject) => {
      axios.post('/login', {
        email: user.email,
        password: user.password,
      }).then(function(response) {
        localStorage.setItem('userid', response.data.id)
        store.commit('SET_USER_ID', localStorage.getItem('userid'))
        store.dispatch('GetUserData', store.getters.getuserid)
        resolve(response)
      }).catch(e => {
        reject(e);
      })
    })

  },
  Inscription: (store, user) => {
    //
    return new Promise((resolve, reject) => {
      axios.post('/users', {
        email: user.email,
        password: user.password,
        nom: user.nom,
        prenom: user.prenom,
        adresse: user.address.adresse,
        city: user.address.city,
        cp: user.address.cp,
        telephone: user.phone
      }).then(function(response) {
        console.log(response.data);
        localStorage.setItem('userid', JSON.stringify(response.data.id_user))
        store.commit('SET_USER_ID', JSON.parse(localStorage.getItem('userid')))
        store.dispatch('GetUserData', store.getters.getuserid)
        resolve(response)
      }).catch(e => {
        reject(e);
      })
    })
  },
  GetUserData: (store, id) => {
      axios.get(`/users/`+id)
        .then(response => {
          localStorage.setItem('userdata', JSON.stringify(response.data))
          store.commit('SET_USER_DATA', JSON.parse(localStorage.getItem('userdata')))
        }).catch(e => {
          throw(e);
      })
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
