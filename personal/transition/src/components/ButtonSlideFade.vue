<template>
  <div>
      <transition name="slide-fade">
          <p v-show="show">Slide-Fade</p>
      </transition>
      <button @click="show=!show">Slide Fade Button</button>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    };
  }
};
</script>

<style>
.slide-fade-enter-active {
    transition: all 5s ease;
}
.slide-fade-leave-active {
    transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} 
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100px);
    opacity: 0;
}
</style>
