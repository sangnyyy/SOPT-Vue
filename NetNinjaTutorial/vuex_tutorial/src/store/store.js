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
    },
    getters:{
        saleProducts:state=>{
            var saleProducts = state.products.map(product =>{
                return {
                    name:'**'+product.name+'**',
                    price:product.price/2
                }
            });
            return saleProducts
        }
    }
});