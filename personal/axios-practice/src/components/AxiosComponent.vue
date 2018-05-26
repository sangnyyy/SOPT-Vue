<template>
    <div v-if="hasResult">
        <div v-for="post in posts" v-bind:key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </div>
    </div>
    <button v-else v-on:click="searchTerm">Click</button>
</template>

<script>
export default {
    data: function(){
        return {
            posts: []
        }
    },
    computed: {
        hasResult: function(){
            return this.posts.length > 0
        }
    },
    methods:{
        searchTerm: function(){
            let baseURI = 'https://jsonplaceholder.typicode.com';
            this.$http.get(baseURI+'/posts')
            .then((result) => {
                console.log(result)
                this.posts = result.data
            })
        }
    }
}
</script>

<style>

</style>
