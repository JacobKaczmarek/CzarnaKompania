<template>
  <div class="trainingWrapper">
    <header>
      <h1>Drill na dzis</h1>
      <router-link to="/">CK</router-link>
    </header>
    <div class="innerWrapper">
      <img :src="drillPath" alt="drill" :title="drillPath">
      <Timer
        v-if="drillStage < drills[drillNumber].src.length - 1"
        @stop="nextStage()"
        ref="timer"
      />
      <div v-if="drills[drillNumber].src.length > 1" class="controllsWrapper">
        <button @click="previousStage()" class="button" v-if="drillStage > 0">
          <i class="fas fa-arrow-left"></i> Poprzedni
        </button>
        <button
          @click="nextStage()"
          class="button"
          v-if="drillStage < drills[drillNumber].src.length - 1"
        >
          Następny
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
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
      drills: [
        {
          name: "Drill1",
          src: [require("../assets/drills/drill1.png")],
          id: 1
        },
        {
          name: "Drill2",
          src: [require("../assets/drills/drill2.png")],
          id: 2
        },
        {
          name: "Drill3",
          src: [require("../assets/drills/drill3.png")],
          id: 3
        },
        {
          name: "Drill4",
          src: [
            require("../assets/drills/drill4.png"),
            require("../assets/drills/drill5.png")
          ],
          id: 4
        },
        {
          name: "Drill5",
          src: [require("../assets/drills/drill6.png")],
          id: 5
        },
        {
          name: "Drill6",
          src: [require("../assets/drills/drill7.png")],
          id: 6
        }
      ],
      drillNumber: null,
      drillPath: "",
      drillStage: 0
    };
  },
  methods: {
    newDrill() {
      // Reset drill stage
      this.drillStage = 0;

      // Generate new drill number diffrent than the previous one
      let newDrill = this.drillNumber;
      while (newDrill == this.drillNumber || newDrill == null) {
        newDrill = Math.ceil(Math.random() * this.drills.length) - 1;
      }
      this.drillNumber = newDrill;

      this.updatePath();

      // Reset timer
      if (this.$refs.timer) {
        this.$refs.timer.resetTimer();
      }
    },
    nextStage() {
      if (this.drillStage < this.drills[this.drillNumber].src.length - 1) {
        this.drillStage += 1;
        this.updatePath();
        if (this.$refs.timer) {
          this.$refs.timer.resetTimer();
        }
      }
    },
    previousStage() {
      if (this.drillStage > 0) {
        this.drillStage -= 1;
        this.updatePath();
        if (this.$refs.timer) {
          this.$refs.timer.resetTimer();
        }
      }
    },
    updatePath() {
      this.drillPath = this.drills[this.drillNumber].src[this.drillStage];
    }
  },
  mounted() {
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

.controllsWrapper {
  margin: 15px;

  button {
    margin: 0px 30px;
  }
}

.button {
  margin: 15px;
  padding: 10px 25px;
  color: white;
  font-weight: 400;
  font-size: 1.1em;
  border: none;
  outline: none;
  cursor: pointer;
  background: rgb(145, 11, 11);
  border-radius: 4px;
}
</style>
