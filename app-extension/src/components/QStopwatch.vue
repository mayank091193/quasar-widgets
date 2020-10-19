<template>
    <span>
        <span class="time" :style="'color:'+fontColor">{{ time }}</span>
        <div class="q-gutter-sm">
            <q-btn size="md" color="primary" @click="start" :style="'color:'+fontColor" label="Start"/>
            <q-btn size="md" color="primary" @click="stop" :style="'color:'+fontColor" label="Stop"/>
            <q-btn size="md" color="primary" @click="reset" :style="'color:'+fontColor" label="Reset"/>
        </div>
  </span>
</template>

<script>
    export default {
        props: {
            fontColor: {
                type: String,
                default: () => "black",
            },
        },
        data() {
            return {
                time: '00:00:00.000',
                running: false,
                timeBegan: null,
                timeStopped: null,
                stoppedDuration: 0,
                started: null,
            }
        },
        methods: {
            start: function () {

                if (this.running) return;

                if (this.timeBegan === null) {
                    this.reset();
                    this.timeBegan = new Date();
                }

                if (this.timeStopped !== null) {
                    this.stoppedDuration += (new Date() - this.timeStopped);
                }
                this.started = setInterval(this.clockRunning, 10);
                this.running = true;
            },
            stop: function () {
                this.running = false;
                this.timeStopped = new Date();
                clearInterval(this.started);
            },
            reset: function () {
                this.running = false;
                clearInterval(this.started);
                this.stoppedDuration = 0;
                this.timeBegan = null;
                this.timeStopped = null;
                this.time = "00:00:00.000";
            },
            clockRunning: function () {

                const currentTime = new Date()
                    , timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration)
                    , hour = timeElapsed.getUTCHours()
                    , min = timeElapsed.getUTCMinutes()
                    , sec = timeElapsed.getUTCSeconds()
                    , ms = timeElapsed.getUTCMilliseconds();
                this.time =
                    this.zeroPrefix(hour, 2) + ":" +
                    this.zeroPrefix(min, 2) + ":" +
                    this.zeroPrefix(sec, 2) + "." +
                    this.zeroPrefix(ms, 3);
            },
            zeroPrefix: function (num, digit) {
                let zero = '';
                for (let i = 0; i < digit; i++) {
                    zero += '0';
                }
                return (zero + num).slice(-digit);
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');

    .time {
        font-size: 4.2em;
        font-family: 'Share Tech Mono', sans-serif;
    }
</style>