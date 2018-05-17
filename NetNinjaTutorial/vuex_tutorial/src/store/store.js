import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:"banana", price:20},
            {name:"apple", price:5},
            {name:"kiwi", price:10},
            {name:"pear", price:1}
          ]
    }
});