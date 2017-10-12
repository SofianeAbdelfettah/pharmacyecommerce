<template>
<div class="hello">


  <br></br>
  <br></br>


  <v-layout wrap>
    <v-flex md3 v-for="number in 10" :key="number" class="cards">
      <v-card>
        <v-card-media :src="la" height="200px">
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
  name: 'Products',
  store: Store,
  data() {
    return {
      la:"http://www.drogues-dependance.fr/wp-content/uploads/2015/09/m%C3%A9dicaments-psychoactifs.jpg",
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
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
.cards {
padding-top: 100px;
padding-right: 30px;
padding-left: 30px;

}
</style>
