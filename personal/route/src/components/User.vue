<template>
    <div>
        {{ $route.params.id }}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    watch : {
        '$route' (to, from){

        }
        // beforeRouteUpdate (to, from, next) {
            // react to route changes...
            // don't forget to call next()
        // }
    }
}
</script>

<style>

</style>
