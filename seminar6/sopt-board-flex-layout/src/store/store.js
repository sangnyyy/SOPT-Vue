import Vue from 'vue'
import Vuex from 'vuex'
import { boardGetters } from './getters'
import { boardMutations} from './mutations'
import { boardAction } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        boards:[]
    },
    getters : boardGetters,
    mutations : boardMutations,
    actions: Object.assign({}, boardAction)
})