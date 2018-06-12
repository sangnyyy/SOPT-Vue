import axios from 'axios'

export const boardActions = {
    getAllBoards({ commit }) {
        commit('allBoards') // 네트워킹 시작을 알림 (mutationss)
        axios.get('http://13.125.118.111:3008/board').then(response => {
            commit('allBoardsSuccess', response.data)
        })
    },
    signUp({commit}, payload){
        axios.post('http://13.125.118.111:3008/signup',payload)
        .then(response=>{
            commit('signUpSuccess', response);
            console.log(response);
        })
        .catch(()=>{
            alert("회원가입 실패");
        })
    },
    signIn({commit}, payload){
        axios.post('http://13.125.118.111:3008/signin', payload)
        .then(response=>{
            console.log(response)
            commit('signInSuccess', response.data);
        })
    },
    writeBoard({commit}, payload){
        axios.post('http://13.125.118.111:3008/board',payload)
        .then(response=>{
            console.log(response);
            location.href= '/';
        })
    },
    logOut({commit}){
        commit('logOutSuccess');
    }
}