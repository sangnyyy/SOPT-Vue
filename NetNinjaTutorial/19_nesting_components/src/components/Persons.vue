<template>
<div>
    <h1>List of Persons</h1>
    <ul>
        <li v-for="person in persons">{{ person }}</li>
    </ul>
</div>
    
</template>

<script>
export default {
    data : function(){
        return {
            persons : ['lee', 'wow', 'hello']
        }
    }
}
</script>

<style scoped>
    h1{
        color : green;
    }
</style>
