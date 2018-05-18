import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        persons : [
            {name:"lee", score:100},
            {name:"kim", score: 80},
            {name:"park", score: 50},
            {name:"shawn", score: 40},
        ]
    },
    getters:{
        reduceScore:(state)=>{
            let reduceScore = state.persons.map(person=>{
                    return {
                        name: "***"+person.name+"***",
                        score: person.score*4/5
                    }
                });
            
            return reduceScore
        }
    },
    mutations:{
        increaseScore:(state, payload)=>{
            state.persons.forEach(person=>{
                person.score = person.score + payload;
            });
        }
    },
    actions:{
        increaseScore:(context, payload)=>{
            setTimeout(function(){
                context.commit('increaseScore', payload)
            }, 3000)
        }
    }
});

