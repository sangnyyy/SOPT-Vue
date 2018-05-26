<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="product">
          <div class="product__image">
            <img :src="item.image_url" alt="">
          </div>
          <div class="product__description">
            <ul>
                  <li><h4>{{ item.company }}</h4></li>
                  <li><h4>{{ item.name }}</h4></li>
                  <li><h4>${{ item.price }}</h4></li>
            </ul>
          </div>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["item"]
};
</script>

<style scoped>
.product {
  background: #fff;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  max-height:340px;
  /* height: 370px; */
}
.product .product__image {
  width: 100%;
}
.product__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 225px;
}
  .product__description h4 {
    margin: 3px 0 5px 0;
  }
.product__description {
  width: 100%;
  display: flex;
  padding: 20px 20px 15px;
  background: #fff;
}
div.item-content {
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
p {
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
  transition:height 0.5s;
  height: 240px;
}
</style>
