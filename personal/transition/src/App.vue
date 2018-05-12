<template>
  <div id="app">
    <button-fade></button-fade>
    <button-slide-fade></button-slide-fade>
    <button-bounce></button-bounce>
    <custom-classes></custom-classes>
    <javascript-hook></javascript-hook>
  </div>
</template>

<script>

import ButtonFade from "./components/ButtonFade"
import ButtonSlideFade from "./components/ButtonSlideFade"
import ButtonBounce from "./components/ButtonBounce"
import CustomClasses from "./components/CustomClasses"
import JavascriptHook from "./components/JavascriptHook"


export default {
  name: 'App',
  components: {
    ButtonFade, ButtonSlideFade, ButtonBounce, CustomClasses, JavascriptHook
  }
}
</script>

<style>

</style>
