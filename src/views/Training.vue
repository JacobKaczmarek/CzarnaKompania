<template>
  <div class="trainingWrapper">
    <h1>Training</h1>
    <h3>Drill for today</h3>
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
    this.drillPath = require("../assets/drills/drill_" +
      this.drillNumber +
      ".png");
  }
};
</script>

<style lang="scss" scoped>
.trainingWrapper {
  margin: 10px;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin: 30px;

    img {
      width: 60%;
      height: auto;
    }

    .innerWrapper {
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>

