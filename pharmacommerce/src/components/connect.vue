<template>
<div class="hello">


  <br></br>
  <br></br>



  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs3 offset-xs5 class="card">
        <v-btn flat value="1" v-on:click="log('login')" color="green accent-3">Login</v-btn>
        <v-btn flat value="2" v-on:click="log('insc')" color="green accent-3">Inscription</v-btn>
      </v-flex>
    </v-layout>
  </v-container>



  <v-container grid-list-md text-xs-center v-if="colog==='login'">
    <v-layout row wrap>
      <v-flex xs3 offset-xs5 class="card">
        <v-form>
          <h6>Connexion</h6>
          <v-text-field label="E-mail" v-model="login.email" required></v-text-field>
          <v-text-field label="Password" v-model="login.password" :counter="10" required></v-text-field>
          <v-btn flat v-on:click="connect">Submit</v-btn>
        </v-form>
        {{login}} {{getuserdata}}
      </v-flex>
    </v-layout>
  </v-container>


  <v-container grid-list-md text-xs-center v-else>
    <v-layout row wrap>
      <v-flex xs3 offset-xs5 class="card">
        <v-form>
          <h6>Inscription</h6>
          <v-text-field prepend-icon="person" label="Nom" v-model="insc.nom" required></v-text-field>
          <v-text-field label="Prenom" v-model="insc.prenom" :counter="10" required></v-text-field>
          <v-text-field prepend-icon="local_post_office" label="E-mail" v-model="insc.email" required></v-text-field>
          <v-text-field prepend-icon="lock" label="Password" v-model="insc.password" :counter="10" required></v-text-field>
          <v-text-field prepend-icon="phone" label="phone" v-model="insc.phone" required></v-text-field>
          <v-text-field label="street" v-model="insc.address.street" :counter="10" required></v-text-field>
          <v-text-field label="zipcode" v-model="insc.address.zipcode" required></v-text-field>
          <v-text-field label="city" v-model="insc.address.city" :counter="10" required></v-text-field>

          <v-btn flat v-on:click="connect">Submit</v-btn>
        </v-form>
        {{getuserdata}}
      </v-flex>
    </v-layout>
  </v-container>

</div>
</template>

<script>
import Vuex from 'vuex'
import Store from '../store/store'

export default {
  name: 'connect',
  store: Store,
  data() {
    return {
      img: "logo.png",
      colog: '',
      login: {
        email: '',
        password: '',
      },
      insc: {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        phone: '',
        address: {
          street: '',
          zipcode: '',
          city: '',
        }
      }
    }
  },
  //
  created() {
    this.$store.dispatch('GetMangas')
  },
  methods: {
    connect() {
      this.$store.dispatch('SetUsers', this.login).then(response => {
        this.$router.push('/')
      }, error => {
        console.error("fail")
      })
    },
    imagePath: function() {
      return require('./../assets/' + this.img)
    },
    log: function(log) {
      this.colog = log;
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'getstate',
      'getuserdata'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
