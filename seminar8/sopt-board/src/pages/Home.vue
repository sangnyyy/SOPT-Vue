<template>
<v-container grid-list-lg>
    <v-layout row wrap justify-start>
        <v-flex xs12 sm6 md6 lg3 offset-sm-1 offset-md-2 offset-lg-1 v-for="board in boards" :key="board.board_idx">
            <v-card hover router :to="{ name : 'Detail', params : {board : board}}">
                <v-card-media contain height="140" :src="board.board_photo" />
                    <v-card-title primary-title>
                        <div>
                            <h3>{{board.board_title}}</h3>
                            <div>{{board.board_content}}</div>
                        </div>
                    </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  
  computed: {
    ...mapGetters({
      boards: "allBoards"
    })
  },
  created() {
    if (this.boards.length === 0) {
      this.$store.dispatch("getAllBoards");
    }
    
  },
  methods:{
      routing(){
          router.push({
              path : '/detail'
          })
      }
  }
};
</script>

<style scoped>

</style>
