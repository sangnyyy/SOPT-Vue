import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // strict:true,
    state:{
        products:[
            {name:"banana", price:2000},
            {name:"apple", price:5000},
            {name:"kiwi", price:10000},
            {name:"pear", price:1000}
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
    },
    // Vue devtools 에서 tracking이 가능하다!
    mutations:{ 
        reducePrice:(state, payload)=>{
            // 트래킹이 어렵다. Action을 써야함!
            // setTimeout(function(){
            //     state.products.forEach( product => {
            //         product.price -= 1;
            //     })
            // }, 3000)
            state.products.forEach( product => {
                product.price -= payload;
            })
        }
    },
    actions:{
        reducePrice: (context, payload)=>{
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 3000)
        }
    }
});