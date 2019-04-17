<template>
  <div class="timerWrapper">
    <div @click="paused = !paused" class="progress-bar-outline">
      <div class="progress-bar-fill"></div>
    </div>
  </div>
</template>

<script>
import { stat } from 'fs';
import { setInterval, clearInterval } from 'timers';

let interval;

export default {
  name: 'Timer',
  data() {
    return {
      started: false,
      paused: false,
      startTime: 20,
      timeLeft: null,
    };
  },
  methods: {
    startTimer() {
      this.started = true;
      this.timeLeft = this.startTime;
      let progress = 0;
      interval = setInterval(() => {
        if (!this.paused) {
          this.timeLeft -= 0.01;
          progress = ((this.startTime - this.timeLeft) / this.startTime) * 100;
          $('.progress-bar-fill').css('width', `${progress}%`);
          if (this.timeLeft <= 0) {
            this.timeLeft = this.startTime;
            this.$emit('stop');
          }
        }
      }, 10);
    },
    resetTimer() {
      this.timeLeft = this.startTime;
    },
  },
  mounted() {
    this.startTimer();
  },
  destroyed() {
    clearInterval(interval);
    this.timeLeft = 0;
  },
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
