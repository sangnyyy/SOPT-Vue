<template>
    <div>
        <div class="items">
            <div class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <template v-for="item in getItems">
                  <item :key="item.id" :product="item"></item>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Item from "./Item";
import {mapGetters} from 'vuex'
var count = 0
export default {
  name: "item-list",
  data:
    function(){
      return {
        count: 0,
        data: [],
        busy: false
      }
    }
  ,
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
      this.$store.dispatch('getAllProducts')
    }
  },
  methods: {
    loadMore: function() {
      this.busy = true;
      
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
          console.log(count)
        }
        this.busy = false;
      }, 1000);
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
    p{
      font-size: 1.8rem;
      display: inline;
      margin-left: 0px; 
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
    .list-left{
      float:left;
      margin-left: 20px;
      display: inline-block;
      width: 150px;
      height : 80px;
    }
    .list-right{
      display: inline-block;
      float:right;
      margin-top: 5px;
      margin-right: 20px;
    }
    .list-right p{
      font-size: 3rem;
      color: cyan;
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
