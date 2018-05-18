<template>
    <div>
        <h2>Scores</h2>
        <ul>
            <li v-for="person in reduceScore">
                <span class="name">{{ person.name }}</span>
                <span class="score">{{ person.score }}</span>    
            </li>    
        </ul>    
        <button @click="increaseScore(2)">Increase Score</button>
    </div>    
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    computed:{
        persons: function(){
            return this.$store.state.persons
        },
        ...mapGetters([
            'reduceScore'
        ])
    },
    methods:{
        ...mapActions([
            'increaseScore'
        ])
    }
}
</script>

<style>

</style>
