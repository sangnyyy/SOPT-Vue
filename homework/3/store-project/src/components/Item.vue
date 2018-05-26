<template>
    <div class="item-content">
        <ul>
            <li><img :src="item.image_url" alt=""></li>
            <div class="list-left">
                <li><p>{{ item.company }}</p></li>
                <li><p>{{ item.name }}</p></li>
            </div>
            <div class="list-right">    
                <li><p>${{ item.price }}</p></li>
            </div>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["item"]
};
</script>

<style scoped>
div.item-content{
  display: inline-block;
  width: 290px;
  margin-bottom: 10vh;
  background-color: white;
  text-align: center;
  max-height: 370px;
}
img {
  width: 240px;
  height: 280px;
  transition: width 0.5s, height 0.5s;
}
p{
      font-size: 1.8rem;
      display: inline;
      margin-left: 0px; 
}
.list-left {
  float: left;
  margin-left: 20px;
  display: inline-block;
  width: 150px;
  height: 80px;
}
.list-right {
  display: inline-block;
  float: right;
  margin-top: 5px;
  margin-right: 20px;
}
.list-right p {
  font-size: 3rem;
  color: cyan;
}
img:hover {
  width: 270px;
  height: 310px;
}
</style>
