export const productGetters = {
    getItems:(state)=>{
        // let items = state.products.map(item=>{
        //     return {
        //         board_idx: item.board_idx,
        //         board_title: item.board_title,
        //         board_content: item.board_content,
        //         board_views: item.board_views,
        //         board_photo: item.board_photo,
        //         board_writetime: item.board_writetime,
        //         board_pw: item.board_pw,
        //         user_id: item.user_id
        //       }
        // });
        // return items
        return state.products
    }
};