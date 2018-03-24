import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import "firebase/firestore"

import App from './App.vue'

import JobBoard from './components/JobBoard'
import NewJob from './components/NewJob'
import EditJob from './components/EditJob'

import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig);

/* Routing */

Vue.use(Router)

const routes = [
  { path: '/', component: JobBoard },
  { path: '/new', component: NewJob, name: 'NewJob' },
  { path: '/edit/:id', component: EditJob, name: 'EditJob'}
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
    errors: [],
    db: null
  },
  created() {
    this.db = firebase.firestore();
  },
  render: h => h(App)
})
