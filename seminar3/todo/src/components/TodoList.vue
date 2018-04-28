<template>
  <div>
      <section>
          
          <transition-group name="list" tag="ul">
              <li v-for="(todoItem, index) in propsdata" :key="todoItem">{{index+1}}.{{todoItem}}</li>
          </transition-group>
          <!-- <ul>
              <li v-for="(todoItem, index) in propsdata" :key="todoItem">{{index+1}}.{{todoItem}}</li>
          </ul> -->
      </section>
  </div>
</template>

<script>
export default {
props: ['propsdata'],
methods:{

}
}
</script>

<style>
ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top:0;
    text-align: left;
}

li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background : white;
    border-radius: 5px;
}

/* transition css */
/* enter = 진입, leave = 진출*/
/* enter -> enter to, leave -> leave to*/
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
