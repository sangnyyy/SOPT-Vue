export const boardMutations = {
    allBoards(state){
        console.log("Get all of boards from rest api!")
    },
    allBoardsSuccess(state, payload){
        state.boards = payload
        console.log("Get all of boards from rest api success!!")
    }
}