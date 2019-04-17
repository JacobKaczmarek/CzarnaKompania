<template>
  <div class="trainingWrapper">
    <header>
      <h1>Drill na dzis</h1>
      <router-link to="/">CK</router-link>
    </header>
    <div class="innerWrapper">
      <img :src="drillPath" alt="drill">
      <Timer/>
    </div>
  </div>
</template>

<script>
import Timer from "@/components/Timer";

export default {
  components: { Timer },
  data() {
    return {
      drillNumber: null,
      drillPath: ""
    };
  },
  created() {
    this.drillNumber = Math.ceil(Math.random() * 3);
    this.drillPath = require("../assets/drills/drill" +
      this.drillNumber +
      ".png");
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;

  a {
    text-decoration: none;
    font-size: 2em;
    font-weight: bold;
    color: inherit;
  }

  @media (min-width: 765px) {
    width: 60%;
    margin: auto;
  }
}

.trainingWrapper {
  margin: 10px;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin: 30px;
    text-align: center;
    img {
      width: 50%;
    }
  }
}

.innerWrapper {
  margin-top: 40px;
}
</style>