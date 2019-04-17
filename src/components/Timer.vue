<template>
  <div class="timerWrapper">
    <div class="innerWrapper">
      <div class="progress-bar-outline">
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
        this.timeLeft -= 0.01;
        progress = ((this.startTime - this.timeLeft) / this.startTime) * 100;
        $(".progress-bar-fill").css("width", progress + "%");
        if (this.timeLeft <= 0) {
          this.timeLeft = this.startTime;
          this.$emit("stop");
        }
      }, 10);
    }
  },
  mounted: function() {
    this.startTimer();
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

input {
  display: inline;
  border: none;
  border-bottom: 2px solid #2c3e50;
}

input:focus {
  outline-width: 0;
}

.startButton {
  padding: 10px 20px;
  background: #2c3e50;
  border: none;
  border-radius: 3px;
  color: white;
  margin: 10px;
}

.progress-bar-outline {
  padding: 0;
  width: 300px;
  height: 40px;
  border: 3px solid #2c3e50;
  border-radius: 5px;
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

