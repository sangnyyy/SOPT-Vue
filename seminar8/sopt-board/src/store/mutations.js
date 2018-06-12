export const boardMutations = {

    allBoards(state) {
        console.log('all boards start');
    },
    allBoardsSuccess(state, payload) {
        console.log('all boards success');
        state.boards = payload.data
    },
    signInSuccess(state, payload){
        console.log('login success');
        console.log(payload);
        state.user = payload.user_idx;  
         
           
        // location.href="/";
    },
    logOutSuccess(state){
        state.user = null;
        alert("logout success");
        // location.href="/";
    },
    signUpSuccess(state, payload){
        if(payload) alert("가입 성공");
        
    }
    
}