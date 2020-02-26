<template>
  <div id="List">
    <ul>
      <li class="row" v-for="(item, index) in dataList" :key="index">
        <Card :data="item" />
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from "vue";
import Card from "./Card";
import axios from "axios";
export default {
  name: "List",
  components: {
    Card
  },
  data: function() {
    return {
      dataList: "",
      url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=12bc0e841cf079697d78e0a8b263aae6&language=en-US&page=1"
      )
      .then(response => {
        console.log("isi response", response.data.results);
        this.dataList = response.data.results;
      });
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
