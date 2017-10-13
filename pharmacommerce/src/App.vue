<template>
<div id="app">
    <v-toolbar light>
      <router-link flat :to="{ path: '/' }" style="text-decoration: none;color: black;">
        <v-toolbar-title>Accueil</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat :to="{ path: 'aboutus' }" color="green accent-3">About us</v-btn>
        <v-btn flat :to="{ path: 'products' }" color="green accent-3">Products</v-btn>
        <v-btn v-if="getuserdata" :to="{ path: 'profile' }" flat color="green accent-3">Profile</v-btn>
        <v-btn v-if="!getuserdata" :to="{ path: 'connect' }" flat color="green accent-3">Connect</v-btn>
        <v-btn icon>
           <v-badge >
             <span slot="badge" v-if="getpanier">{{getpanier}}</span>
             <span slot="badge" v-else>0</span>
             <v-icon color="grey lighten-1">shopping_cart</v-icon>
           </v-badge>
         </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  <router-view/>

  <v-footer class="pa-3 footer" color="green accent-2">
    <v-spacer></v-spacer>
    <div>© {{ new Date().getFullYear() }}</div>
  </v-footer>


</div>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex'
import Store from './store/store'

Vue.use(Vuetify);

export default {
  name: 'app',
  // created() {
  //   this.$store.dispatch('GetMangas')
  // },
  store: Store,
  computed: {
    ...Vuex.mapGetters([
      'getpannier',
      'getuserdata'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  margin: 0;
}

.header {
  background-color: red;
  height: 95px;
}

.child {
  color: white;
  padding: 70px 0;

}


.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  background: #999;
  color: white;
}
</style>
