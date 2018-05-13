<template>
  <div id="app">
    <router-link :to="{ name : 'username' }">User Name</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import User from "./components/User"
import Userpost from "./components/Userpost"
import UserProfile from "./components/UserProfile"
import UserName from "./components/UserName"
export default {
  name: 'App',
  components : {
    User, Userpost, UserProfile, UserName
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
