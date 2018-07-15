<template>
    <div class="mixin-container" :style="containerStyle">

    </div>
</template>
<script>
import {original} from "../mixin/original"
export default {
    mixins : [original],
    mounted(){
        this.containerStyle = "blue"
    }
    
}
</script>
<style scoped>

</style>
