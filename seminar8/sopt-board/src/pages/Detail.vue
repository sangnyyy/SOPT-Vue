<template>
    <v-container grid-list-lg>
    <v-layout row wrap justify-start="true">
        <v-flex xs12 sm12 md12 lg12 >
            <v-card>
                <v-card-media contain height="500" :src="photo" />
                    <v-card-title primary-title>
                        <div>
                            
                            <h3>제목 : {{$route.params.board.board_title}}</h3>
                            <div class="content">작성자 : {{$route.params.board.user_idx}}</div>
                            <div class="content">내용 : {{$route.params.board.board_content}}</div>
                            <!-- <div class="content">작성시간 : {{$route.params.board.writetime}}</div> -->
                            <div class="content">조회수 : {{$route.params.board.board_views}}</div>
                        </div>
                    </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data(){
        return {
            photo : this.$route.params.board.board_photo
        }
    }
};
</script>

<style scoped>
h3{
    font-size : 50px;
}
.content{
    font-size : 30px;
}
</style>
