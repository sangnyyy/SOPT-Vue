// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
const User = App.components.User
const Userpost = App.components.Userpost

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User },
    { path: '/user/:id/post/:post', component: Userpost }
  ],
  mode : 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
