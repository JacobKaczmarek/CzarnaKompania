<template>
  <div class="news-wrapper">
    <div class="header">
      <h1>Co nowego?</h1>
      <img class="logo" src="../assets/logo.png" alt="logo">
    </div>
    <Post/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "News",
  components: {
    Post
  }
};
</script>


<style lang="scss" scoped>
.news-wrapper {
  font-family: "Montserrat", sans-serif;
  width: 80%;
  height: 90vh;
  margin: 50px auto;
  color: black;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

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
