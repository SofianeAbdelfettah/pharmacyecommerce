<template>
<div id="app">

      <v-layout row>
  <v-flex d-flex xs12 sm6 md12>
    <v-card color="theme--dark green accent-2" dark>

      <v-flex xs6 order-lg2>
        <v-card>
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
    <v-flex xs6 order-lg2>
      <v-card>
        <v-card-text>#1</v-card-text>
      </v-card>
    </v-flex>
  </v-card>
  </v-flex>
</v-layout>



  <router-view/>
</div>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  margin: 0;
}
</style>
