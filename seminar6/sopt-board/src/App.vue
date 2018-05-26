<template>
  <div id="app">
    <nav>
      <router-link :to="{name:'Home'}"><p id="home">HOME</p></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>

* {
      margin: 0px;
      padding: 0px;
      
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: white;
}
a:visited {
  text-decoration: none;
}
p{
  vertical-align: middle;
  font-size: 3rem;
  margin-left : 2vw;
  transition: font-size .5s;
  display: inline;
  
}
nav{
  top: 0;
  text-align: left;
  background-color: black;
  color: white;
  line-height: 8vh;
  
}

p#home:hover{
  color: gray;
}
</style>
