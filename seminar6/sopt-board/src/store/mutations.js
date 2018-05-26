export const productMutations = {
    allProduct(state){
        console.log("product start")
    }
    ,
    allProductsSuccess(state, payload){
        state.products = payload
        console.log("product success")
    }
}