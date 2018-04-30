<template>
  <div>
    <transition name="bounce">
        <p v-if="show">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </transition>
    <button @click="show =!show">Bounce Button</button>
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
    .bounce-enter-active{
        animation: bounce-in .5s;
    }

    .bounce-leave-active{
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }

        50%{
            transform: scale(2);
        }

        100%{
            transform: scale(1);
        }
    }
</style>
