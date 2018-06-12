import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import {DetailRoutes} from './detail'
import { SignInRoutes, SignUpRoutes } from './sign'
import { Write, WriteBoardRoutes } from './board'


Vue.use(Router)

export default new Router({
    routes: [
        HomeRoutes, SignInRoutes, SignUpRoutes, WriteBoardRoutes, DetailRoutes
    ],
    mode: 'history'
})