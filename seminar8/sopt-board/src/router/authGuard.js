import { store } from '../store/store'

export const signUpAuth = {
    doAuth :  (to, from, next)=>{
        if(!store.state.user){
            next();
        }else{
            alert("You already login");
            next('/');
        }
    }
}

export const boardAuth = {
    doAuth : (to, from, next)=>{
        if(store.state.user){
            next();
        }else{
            alert("You need to login")
            next('/');
        }
    }
}
