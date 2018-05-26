<template>
  <div id="app">
    <axios-conponent></axios-conponent>
  </div>
</template>

<script>
import AxiosConponent from './components/AxiosComponent'

export default {
  name: 'App',
  components: {
    AxiosConponent
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
