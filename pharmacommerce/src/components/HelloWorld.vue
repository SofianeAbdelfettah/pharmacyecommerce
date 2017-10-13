<template>
<div class="hello">

<v-container grid-list-md fluid text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel hide-controls>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="imagePath(item.src)" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs12>
          <v-card-text class="px-0">Produits</v-card-text>
        </v-flex>
      </v-layout>
</v-container>



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
  name: 'HelloWorld',
  store: Store,
  data () {
    return {
      ordonnance: true,
      items: [
        {
          src: 'image1.jpg'
        },
        {
          src: 'image2.jpg'
        },
        {
          src: 'image3.jpg'
        },
        {
          src: 'image4.jpg'
        }
      ]
    }
  },
  methods: {
    ...Vuex.mapActions([
      'Disconnect'
    ]),
    imagePath: function(img) {
      return require('./../assets/' + img)
    },
    log: function(log) {
      this.ordonnance = log;
    }
  },
  created () {
    this.$store.dispatch('GetAllProducts')
  },
  computed: {
    ...Vuex.mapGetters([
      'getallproducts',
      'getconnect'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container.grid-list-md {
  padding: 0px;
}
.px-0{
  font-size: 2.5em;
}
.hello{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.cards {
padding-top: 50px;
padding-right: 30px;
padding-left: 30px;
padding-bottom: 50px;
}
</style>
