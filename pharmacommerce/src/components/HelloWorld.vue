<template>
  <div class="hello">
    {{getstate}}


  </div>
</template>

<script>
import Vuex from 'vuex'
import Store from '../store/store'
import Vuetify from 'vuetify'

export default {
  name: 'HelloWorld',
  store: Store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //
  created () {
    this.$store.dispatch('GetMangas')
  },
  computed: {
  ...Vuex.mapGetters([
    'getstate'
  ])
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
