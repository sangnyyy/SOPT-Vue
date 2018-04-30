
<template>
  <div>
      <transition 
      name="custom-classes-transition"
      enter-active-class="animated flipInX"
      leave-active-class="animated bounceOutRight"
      >
          <p v-if="show">Customizing!</p>
      </transition>
      <button @click="show = !show">Customized Button</button>
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

</style>
