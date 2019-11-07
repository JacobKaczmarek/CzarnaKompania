<template>
  <div class="news-wrapper">
    <div class="header">
      <h1>Co nowego?</h1>
      <img class="logo" src="../assets/logo.png" alt="logo" />
    </div>
    <Post v-for="post of posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import axios from 'axios';

import Post from '@/components/Post';

const API = 'http://ec2-54-93-249-27.eu-central-1.compute.amazonaws.com:1337';

export default {
  name: 'News',
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios.get(`${API}/posts`).then((response) => {
        this.posts = response.data.reverse();
        console.log(this.posts);
      });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>


<style lang="scss" scoped>
.news-wrapper {
  font-family: 'Montserrat', sans-serif;
  width: 80%;
  height: 90vh;
  margin: 50px auto;
  color: black;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 150px;

  h1 {
    font-weight: normal;

    font-size: 1.7em;
    @media (max-width: 765px) {
      font-size: 1.7em;
    }
  }
}

.logo {
  height: 275px;
  width: 275px;
  margin: -20px;

  @media (max-width: 765px) {
    height: 150px;
    width: 150px;
  }
}
</style>
