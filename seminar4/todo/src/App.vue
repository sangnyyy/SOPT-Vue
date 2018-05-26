<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addItem="addOneItem"></todo-input>
    <todo-list :propsdata="todoItemList"></todo-list>
  </div>
</template>

<script>

import TodoHeader from "./components/TodoHeader"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


export default {
  name: 'App',
  components: {
    TodoHeader, TodoInput, TodoList
  },
  methods:{
    addOneItem(todoItem){
      //console.log(todoItem);
      //localStorage at Web browser
      localStorage.setItem(todoItem, todoItem); //Parameters = Key, Value
      this.todoItemList.push(todoItem);
    }
  },
  data: function(){
    return {
      todoItemList: []
    }
  },
  created(){  //This is a kind of Life Cycle.
    if(localStorage.length > 0){
      for(let i =0; i<localStorage.length; i++){
        this.todoItemList.push(localStorage.getItem(localStorage.key(i)));
      }
    }
  }
}
</script>

<style>

  body{
    text-align: center;
    background-color: white;
  }
  input{
    border-style:groove;
    width:200px;
  }
  button{
    border-style: groove;
  }
</style>
