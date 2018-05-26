<template>
    <div>
        <div class="items">
            <div class="container">
                <template v-for="item in getItems">
                  <item :item="item"></item>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Item from "./Item";
import {mapGetters} from 'vuex'
export default {
  name: "item-list",
  components: {
    item: Item
  },
  computed:{
    ...mapGetters([
    'getItems'
   ])
  },
  created(){
    if(this.getItems.length == 0){
      this.$store.dispatch("getAllBoards")
    }
  }
};
</script>

<style scoped>
    
    li{
        list-style-type: none;
        width: 100px
    }
    a{
        color: black;
    }
  
    template{
      float: left;
    }
    .container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 85vw;
      margin-left: auto;
      margin-right: auto;
    }
    div.inner-container{
      display: inline-block;
      width: 290px;
      margin-bottom: 10vh;
      background-color: white;
      text-align:center;
    }
    @media only screen and (max-width: 320px){
      div.inner-container{
      width: 260px;
      }
    }
    @media only screen and (max-width: 682px){
      .container{
        justify-content: center; 
      }
    }
</style>
