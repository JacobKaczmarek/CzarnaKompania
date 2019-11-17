<template>
  <div class="home">
    <Navbar/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';

export default {
  name: 'home',
  components: {
    Navbar,
  },
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

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
