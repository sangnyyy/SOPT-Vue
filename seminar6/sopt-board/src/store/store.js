import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters } from './getters'
import { productMutations } from './mutations'
import { productActions} from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        products:[]
    },
    getters : productGetters,
    mutations : productMutations,
    // actions: Object.assign({}, productActions)
    actions: productActions
})