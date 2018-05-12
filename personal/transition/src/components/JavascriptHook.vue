<template>
  <div>
      <transition name="hook" v-bind:css="false">
          <p v-if="show">Javascript Hook</p>
      </transition>
      <button @click="show=!show">JS Hook</button>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

<script>

export default {
   
  
  data: function(){
      return {
          show : true
      }
  },
methods: {
    beforeEnter: function (hook) {
      hook.style.opacity = 0
    },
    enter: function (hook, done) {
      Velocity(hook, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(hook, { fontSize: '1em' }, { complete: done })
    },
    leave: function (hook, done) {
      Velocity(hook, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(hook, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(hook, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  }


}
</script>

<style>
    .hook-enter, .hook-leave-to{
        opacity: 0;
    }
    .hook-enter-active{
        opacity: 1;
        animation:  duration timing-function delay iteration-count direction fill-mode;   
    }
</style>
