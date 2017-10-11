import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import connect from '@/components/connect'
import Profile from '@/components/Profile'
import Vuex from 'vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'Hello',component: HelloWorld },
    {path: '/connect',name: 'Connect',component: connect},
    {path: '/profile',name: 'Profile',component: Profile}
  ]
})
