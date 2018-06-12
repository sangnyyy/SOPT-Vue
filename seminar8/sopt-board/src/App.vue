<template>
<v-app>
  <v-toolbar>
    <v-toolbar-title>
      SOPT 게시판
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="items in toolbarItems" :key="items.icon" router :to="items.link">
        <v-icon left>
          {{items.icon}}
        </v-icon>
        <div class="hidden-sm-only">
        {{items.title}}
        </div>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat router :to="logInItem.link" v-if="!this.$store.state.user">
        <v-icon left>
          {{logInItem.icon}}
        </v-icon>
        <div class="hidden-sm-only">
          {{logInItem.title}}
        </div>
      </v-btn>
      <v-btn flat @click="logOutFunc" v-if="this.$store.state.user">
        <v-icon left>
          {{logOutItem.icon}}
        </v-icon>
        <div class="hidden-sm-only">
          {{logOutItem.title}}
        </div>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <router-view/>
</v-app>
</template>

<script>
// import {store} from './store/store'
export default {
  data() {
    return {
      toolbarItems: [{
          icon: 'list',
          title: '글 리스트',
          link: '/'
        },
        {
          icon: 'face',
          title: '회원가입',
          link: '/signUp'
        },
        {
          icon: 'create',
          title: '글 작성',
          link: '/board/new'
        }
      ],
      logInItem : {
        icon: 'lock_open',
        title: '로그인',
        link: '/signIn'
      },
      logOutItem : {
          icon: 'lock',
          title: '로그아웃',
          link: '/logOut'
      }
      
    }
  },
  name: 'App',
  methods : {
    logOutFunc(to, from, next){
      //store.state.canSignUp = true;
      if(this.$store.state.user){
        // this.$store.state.user = null;
        this.$store.dispatch('logOut')
      }else{
        alert("You need to login");
      }
    }
  }
}
</script>

<style>

</style>

