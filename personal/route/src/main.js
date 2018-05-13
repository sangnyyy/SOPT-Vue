// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
const User = App.components.User
const Userpost = App.components.Userpost
const UserProfile = App.components.UserProfile

const UserChildren = { template : '<div>Children</div>' }

const router = new VueRouter({
  routes: [
    { path: '/user/:id/post/:post', component: Userpost },
    { path : '/user/:id', component : User, children : [
      {
        path : 'children', component : UserChildren
      },
      {
        path : 'profile', component : UserProfile
      }
    ] }
  ],
  mode : 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')