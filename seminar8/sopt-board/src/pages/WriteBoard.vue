<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
            <h2>글 작성</h2>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs12>
            <form @submit.prevent="onUploadBoard">
                <v-layout row wrap>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field name="title" label="제목" id="title" v-model="title" required></v-text-field>
                    </v-flex>
                     <v-flex height="250" xs12 sm6 offset-sm3>
                        <v-text-field name="description" label="글" id="description" v-model="description" multi-line></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 offset-sm3>
                        <!-- accept는 특정 파일만 사용 가능하게 해줌 -->
                        <h4>이미지</h4>
                        <div class="dropbox" v-if="!img">
                            <input class="input-image" type="file" :multiple="false" @change="onFileChange" accept="image/*">    
                            <p>Drag your image</p>
                        </div>
                        <img :src="img" v-if="img" alt="">
                    </v-flex>
                    <v-flex xs12 sm6 offset-sm3>
                      <v-btn type="submit" color="success">글쓰기</v-btn>
                    </v-flex>
                </v-layout>
            </form>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            title:'',
            description:'',
            file: null,
            img: null
        }
    },
methods:{
    onUploadBoard(){
        const data = new FormData();
        data.append('user_idx',this.$store.state.user);
        data.append('board_title',this.title);
        data.append('board_content',this.description);
        data.append('photo',this.file)

        this.$store.dispatch('writeBoard',data)
    },
    onFileChange(event){
        if(event.target.files[0]['type'].split('/')[0] == 'image'){
            this.file = event.target.files[0]
            this.getImage(this.file)
        }
    },
    getImage(file){
        const fileReader = new FileReader()
        fileReader.onload = ()=>{
            this.img = fileReader.result;
        }
        fileReader.readAsDataURL(file);
    }

}
}
</script>

<style>
.dropbox{
    background-color: gold;
    outline: 2px dashed grey;
    min-height: 200px;
}

.dropbox p{
    text-align: center;
    line-height: 200px;
}

.input-image{
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
}
</style>
