import axios from 'axios'

export const boardAction={
    getAllBoards({commit}){
        commit("allBoards")
        axios.get("http://13.125.118.111:3009/board").then(res=>{
            commit("allBoardsSuccess", res.data.data)
        })
    }
}