<template>
<div class="hello">


<br></br>
<br></br>

<v-container grid-list-md text-xs-center>
   <v-layout row wrap>
     <v-flex xs3 offset-xs5 class="card">


       <p>{{getuserdata.name}}</p>
       <p>{{getuserdata.lastname}}</p>

       <h6><v-icon>email</v-icon>Email:</h6><p>{{getuserdata.email}}</p>
       <h6><v-icon>phone</v-icon>Telephone:</h6><p>{{getuserdata.phone}}</p>
       <h6><v-icon>home</v-icon>Adresse:</h6><p>{{getuserdata.address.street}}</p>
       <p>{{getuserdata.address.zipcode}}</p>
       <p>{{getuserdata.address.city}}</p>

       <v-btn v-on:click="Disconnect()">Disconnect</v-btn>

     </v-flex>
   </v-layout>
 </v-container>


</div>
</template>

<script>
import Vuex from 'vuex'
import Store from '../store/store'

export default {
  name: 'profile',
  store: Store,
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
   ...Vuex.mapActions([
      'Disconnect'
  ])
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
.card{
  border-color: #7dfbbe;
}




</style>
