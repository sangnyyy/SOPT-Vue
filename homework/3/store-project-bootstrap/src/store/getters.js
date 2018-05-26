export const getters = {
    getItems:(state)=>{
        let items = state.items.map(item=>{
            return {
                image_url:item.image_url,
                company:item.company,
                name:item.name,
                price:item.price
            }
        });
        return items
        }
};