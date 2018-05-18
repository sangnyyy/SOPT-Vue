<template>
    <div>
        <ul>
            <li v-for="person in persons">
                <span class="name">{{ person.name }}</span>
                <span class="score">{{ person.score }}</span>    
            </li>    
        </ul>    
    </div>    
</template>

<script>
export default {
    computed:{
        persons: function(){
            return this.$store.state.persons
        }
    }
}
</script>

<style>

</style>
