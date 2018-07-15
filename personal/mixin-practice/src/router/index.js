import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import {mixInComponent1, mixInComponent2} from './mixinComponent'

Vue.use(Router)

export default new Router({
  routes: [
    mixInComponent1, mixInComponent2
  ],
  mode : 'history'
})
