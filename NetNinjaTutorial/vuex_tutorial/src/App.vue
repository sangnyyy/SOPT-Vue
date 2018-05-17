<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import productListOne from './components/productListOne'
import productListTwo from './components/productListTwo'

export default {
  name: 'App',
  components: {
    'product-list-one': productListOne,
    'product-list-two' : productListTwo
  },
  data(){
    return {
      products:[
        {name:"banana", price:20},
        {name:"apple", price:5},
        {name:"kiwi", price:10},
        {name:"pear", price:1}
      ]
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
