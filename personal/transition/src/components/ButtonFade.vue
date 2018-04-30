<template>
  <div>

      <transition name="fade">
          <p v-if="show">Fade</p>
      </transition>
      <button @click="show = !show">Fade Button</button>
  </div>
</template>

<script>
export default {
    data : function(){
        return {
            show : true
        }
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active{
        transition: all 1s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>
