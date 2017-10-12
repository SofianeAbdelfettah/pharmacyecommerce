<template>
<div class="hello">
<v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
</v-container>


</div>
</template>

<script>
import Vuex from 'vuex'
import Store from '../store/store'

export default {
  name: 'HelloWorld',
  store: Store,
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$store.dispatch('GetMangas')
  },
  data () {
    return {
      items: [
        {
          src: '/src/assets/image1.jpg'
        },
        {
          src: '/src/assets/image2.jpg'
        },
        {
          src: '/src/assets/image3.jpg'
        },
        {
          src: '/src/assets/image4.jpg'
        }
      ]
    }
  },
  methods:{
      imgpath:function () {
        return require("./../assets/"+this.img)
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

</style>
