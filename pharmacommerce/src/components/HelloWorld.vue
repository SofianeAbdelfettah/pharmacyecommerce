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


<v-layout wrap>
  <v-flex md3 v-for="a in 10" :key="a" class="cards">
    <v-card>
      <v-card-media :src="lala" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
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
      lala:'http://www.drogues-dependance.fr/wp-content/uploads/2015/09/m%C3%A9dicaments-psychoactifs.jpg',
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
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'getstate',
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
padding-top: 100px;
padding-right: 30px;
padding-left: 30px;

}
</style>
