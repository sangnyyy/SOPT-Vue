<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import User from "./components/User"
import Userpost from "./components/Userpost"


export default {
  name: 'App',
  components : {
    User, Userpost
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
