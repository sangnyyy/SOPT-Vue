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
    
    .container{
      display: block;
      width: 85vw;
      margin-left: auto;
      margin-right: auto;
    }
</style>
