<template>
<div class="hello">

  <!-- {{getallproducts}} -->

  <br></br>
  <br></br>

  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4 class="card">
        <v-btn flat value="1" v-on:click="log(false)" color="green accent-3">Sans ordonnance</v-btn>
        <v-btn flat value="2" v-on:click="log(true)" color="green accent-3">Avec ordonnance</v-btn>
      </v-flex>
    </v-layout>
  </v-container>



  <v-layout wrap>
    <v-flex md3 v-for="number in getallproducts" :key="number.id" class="cards" v-if="number.ordonnance === ordonnance">
      <v-card>
        <v-card-media :src="number.image" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{number.name.substr(0,30)}}</h3>
            <div>{{number.description.substr(0,100)}} ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" v-on:click='SetPanier(number.id)'>Ajouter au panier</v-btn>
          <div>
            {{number.unit_price}}€ &nbsp Produit restant:{{number.unit_stock}}
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import Vuex from 'vuex'
import Store from '../store/store'

export default {
  name: 'Products',
  store: Store,
  data() {
    return {
      ordonnance:false,
    }
  },
   created () {
      this.$store.dispatch('GetAllProducts')
    },
  methods: {
    ...Vuex.mapActions([
      'SetPanier'
    ]),
    log: function(log) {
      this.ordonnance = log;
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'getallproducts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
padding-top: 30px;
padding-right: 30px;
padding-left: 30px;
padding-bottom: 50px;
}
</style>
