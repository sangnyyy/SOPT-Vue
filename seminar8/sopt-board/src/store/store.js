import Vue from 'vue'
import Vuex from 'vuex'
import { boardActions } from './actions'
import { boardGetters } from './getters'
import { boardMutations } from './mutations'
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        boards: [],
        user: null
    },
    mutations: Object.assign({}, boardMutations),
    getters: Object.assign({}, boardGetters),
    actions: Object.assign({}, boardActions),
    plugins: [
        createPersistedState({
          storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) =>
              Cookies.set(key, value, { expires: 3 /*, secure: true  https사용시에만!*/ }),
            removeItem: key => Cookies.remove(key)
          }
        })
    ]
})