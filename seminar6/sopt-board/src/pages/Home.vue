<template>
    <div>
        <header>
            <p>Products</p>
        </header>   
        <item-list></item-list>     
    </div>
</template>

<script>
import ItemList from '../components/ItemList'
export default {
    // name:'Home',

    components:{
        'item-list':ItemList
    }
}
</script>

<style scoped>
    *{
        background-color: #F8F8FF;
        
    }
    header{
        text-align: center;
        line-height:25vh;
    }
    p{
        
        margin: 0;
        font-size: 8rem;
    }
    @media only screen and (max-width: 320px){
        p{
            
            margin: 0;
            font-size: 6rem;
        }
    }
    
</style>
