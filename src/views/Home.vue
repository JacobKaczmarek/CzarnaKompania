<template>
  <div class="home">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #333;
  margin: 0;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("../assets/background.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}
</style>

