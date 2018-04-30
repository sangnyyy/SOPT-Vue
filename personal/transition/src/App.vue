<template>
  <div id="app">
    <button-fade></button-fade>
    <button-slide-fade></button-slide-fade>
  </div>
</template>

<script>

import ButtonFade from "./components/ButtonFade"
import ButtonSlideFade from "./components/ButtonSlideFade"


export default {
  name: 'App',
  components: {
    ButtonFade, ButtonSlideFade
  }
}
</script>

<style>

</style>
