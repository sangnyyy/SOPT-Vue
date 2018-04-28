<template>
  <div>
    <div class="inputBox">
          <input type="text" v-model="newToDoItem" @keyup.enter="addTodo">
          <span class="addContainer">
              <i class="fas fa-plus" aria-hidden="true"></i>
          </span>
    </div>
      
  </div>
  
</template>

<script>
export default {
    data:function(){
        return {
            newToDoItem: ""
        }
    },
    methods:{
        addTodo: function(){
            if(this.newToDoItem !== ""){
                const item = this.newToDoItem;
                //Storage Procedure at Chrome Local Storage
                this.$emit("addItem", item);
                this.newToDoItem = "";
            }
        }
    }

};
</script>

<style scoped>
.inputBox{
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    
}
.input:focus{
    outline:none;
}
.inputBox input{
    border-style:none;
    font-size : 0.9rem;
}

.addContainer{
    float: right;
    background: blue;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addbtn{
    color:white;
    vertical-align: middle;
}
</style>
