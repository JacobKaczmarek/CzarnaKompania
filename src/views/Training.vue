<template>
  <div class="trainingWrapper">
    <header>
      <h1>Drill na dzis</h1>
      <router-link to="/">CK</router-link>
    </header>
    <div class="innerWrapper">
      <img :src="drillPath" alt="drill">
      <Timer @stop="newDrill()" ref="timer"/>
      <button class="button" @click="newDrill()">Nowy Drill</button>
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
  methods: {
    newDrill() {
      let newDrill = this.drillNumber;
      while (newDrill == this.drillNumber || newDrill == null) {
        newDrill = Math.ceil(Math.random() * 5);
      }
      this.drillNumber = newDrill;
      this.drillPath = require("../assets/drills/drill" +
        this.drillNumber +
        ".png");
      this.$refs.timer.resetTimer();
    }
  },
  mounted: function() {
    this.newDrill();
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
      max-width: 500px;
      max-height: 450px;
    }
  }
}

.innerWrapper {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  padding: 10px 25px;
  color: white;
  font-weight: 400;
  font-size: 1.1em;
  border: none;
  outline: none;
  background: #2c3e50;
  border-radius: 4px;
}
</style>