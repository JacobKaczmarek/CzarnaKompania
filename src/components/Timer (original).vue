<template>
  <div class="timerWrapper">
    <div class="innerWrapper">
      <div @click="paused = !paused" class="progress-bar-outline">
        <div class="progress-bar-fill"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { stat } from "fs";
import { setInterval, clearInterval } from "timers";

export default {
  name: "Timer",
  data() {
    return {
      started: false,
      paused: false,
      startTime: 20,
      timeLeft: null
    };
  },
  methods: {
    startTimer: function() {
      this.started = true;
      this.timeLeft = this.startTime;
      let progress = 0;
      let interval = setInterval(() => {
        if (!this.paused) {
          this.timeLeft -= 0.01;
          progress = ((this.startTime - this.timeLeft) / this.startTime) * 100;
          $(".progress-bar-fill").css("width", progress + "%");
          if (this.timeLeft <= 0) {
            clearInterval(interval);
            this.timeLeft = 0;
          }
        }
      }, 10);
    }
  },
  mounted: function() {
    this.startTimer();
  },
  destroyed: function() {
    this.timeLeft = 0;
  }
};
</script>


<style lang="scss" scoped>
.timerWrapper {
  margin: 10px;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.innerWrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
input {
  display: inline;
  border: none;
  border-bottom: 2px solid #2c3e50;
}

input:focus {
  outline-width: 0;
}

.progress-bar-outline {
  padding: 0;
  width: 300px;
  height: 40px;
  border: 3px solid #2c3e50;
  border-radius: 5px;
  margin-right: 40px;
}

.progress-bar-fill {
  position: relative;
  width: 0;
  margin: 0px;
  height: 100%;
  background: #2c3e50;
  border-radius: 1px;
}
</style>

