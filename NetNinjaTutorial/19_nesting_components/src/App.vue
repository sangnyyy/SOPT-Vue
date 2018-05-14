<template>
  <div>
    <h1>{{ title }}</h1>
    <persons></persons>
  </div>
</template>

<script>

import Persons from "./components/Persons"

export default {
  data(){
    return {
      title : "ninja app"
    }
  },
  components : {
    Persons
  }
}
</script>

<style>
  h1{
    color : red;
  }
</style>
