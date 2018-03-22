import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'

import JobBoard from './components/JobBoard'
import NewJob from './components/NewJob'

import firebaseConfig from './config'

/* Routing */

Vue.use(Router)

const routes = [
  { path: '/', component: JobBoard },
  { path: '/new', component: NewJob, name: 'NewJob' }
]

const router = new Router({
  routes,
  mode: 'history'
})

/* Main Entry Point */

new Vue({
  el: '#app',
  router,
  data: {
    messages: [],
    errors: []
  },
  render: h => h(App)
})
