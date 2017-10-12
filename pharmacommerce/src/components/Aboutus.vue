<template>
<div class="hello">


  <br></br>
  <br></br>

  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs3 offset-xs5 class="card">
        <p>lorem ipsum</p>
        <template>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="imagePath(item.src)" :key="i"></v-carousel-item>
          </v-carousel>
        </template>
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
      msg: 'Welcome to Your Vue.js App',
      items: [
          {
            src: 'logo.png'
          },
          {
            src: 'logo.png'
          },
          {
            src: 'logo.png'
          },
          {
            src: 'logo.png'
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
