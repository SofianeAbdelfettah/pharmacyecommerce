<template>
<div class="hello">


  <br></br>
  <br></br>

  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>


      <v-flex xs3 offset-xs5 class="card">
        <v-form>
          <v-text-field label="E-mail" v-model="email" required></v-text-field>
          <v-text-field label="Password" v-model="password" :counter="10" required></v-text-field>
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
      email: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //
  created() {
    this.$store.dispatch('GetMangas')
  },
  methods: {
    connect() {
      this.$store.dispatch('SetUsers', this.email)
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
.card {
  border-color: #7dfbbe;
}
</style>
