import Vue from 'vue'
import Vuex from 'vuex'
import { getters } from './getters'
import * as mutations from './mutations'
// import * as actions from './actions'
import {aaaActions, bbbActions} from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        items:[
              {
                image_url: "https://i.imgur.com/C7Vkk0l.jpg",
                company: "Google",
                name: "One Plus 3T",
                price: 455
              },
              {
                image_url: "../../static/iphone7.png",
                company: "Apple",
                name: "iPhone7",
                price: 850
              },
              {
                image_url: "../../static/iphonex2.png",
                company: "Apple",
                name: "iPhoneX",
                price: 1200
              },
              {
                image_url: "../../static/galaxys92.png",
                company: "Samsung",
                name: "Galaxy S9",
                price: 900
              },
              {
                image_url: "https://i.imgur.com/C7Vkk0l.jpg",
                company: "Google",
                name: "One Plus 3T",
                price: 455
              },
              {
                image_url: "../../static/iphone7.png",
                company: "Apple",
                name: "iPhone7",
                price: 850
              },
              {
                image_url: "../../static/iphonex2.png",
                company: "Apple",
                name: "iPhoneX",
                price: 1200
              },
              {
                image_url: "../../static/galaxys92.png",
                company: "Samsung",
                name: "Galaxy S9",
                price: 900
              },
              {
                image_url: "https://i.imgur.com/C7Vkk0l.jpg",
                company: "Google",
                name: "One Plus 3T",
                price: 455
              }
        ]
    },
    getters : getters,
    mutations,
    actions: Object.assign({}, aaaActions, bbbActions)
})