import SignIn from '../pages/SignIn.vue'
import SignUp from '../pages/SignUp.vue'
import { signUpAuth } from './authGuard'

export const SignInRoutes = {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn
}

export const SignUpRoutes = {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: signUpAuth.doAuth
}

