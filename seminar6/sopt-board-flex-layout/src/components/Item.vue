<template>
    <div class="item-content">
        <ul>
            <li><img :src="item.board_photo" alt=""></li>
            <div class="board__description">
                <li><p>제목: {{ item.board_title }}</p></li>
                <li><p>내용: {{ item.board_content }}</p></li>
                <li><p>작성시간: {{ item.board_writetime }}</p></li>
                <li><p>조회수: {{ item.board_views }}</p></li>
            </div>  
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["item"]
};
</script>

<style scoped>
div.item-content {
  display: inline-block;
  width: 290px;
  margin-bottom: 10vh;
  background-color: white;
  text-align: center;
  max-height: 400px;
}
img {
  width: 240px;
  height: 280px;
  transition: width 0.5s, height 0.5s;
}
p {
  font-size: 1.3rem;
  display: inline;
  margin-left: 6px;
}
div.board__description{
  display: block;
  text-align: left;
}
img:hover {
  width: 270px;
  height: 310px;
}
</style>
