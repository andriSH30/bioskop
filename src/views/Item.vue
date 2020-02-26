<template>
  <div class="container">
    <div class="item">
      <h2>{{ item.title }}</h2>
      <ul>
        <li>title : {{ item.title }}</li>
        <li>Overview {{ item.overview }}</li>
      </ul>
      <router-link to="/">Back</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item: []
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=12bc0e841cf079697d78e0a8b263aae6&language=en-US&page=1`
        )
        .then(response => {
          console.log(response);
          this.item = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
ul li {
  list-style: none;
}
</style>
