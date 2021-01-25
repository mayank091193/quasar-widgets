<template>
    <div class="q-col-gutter-md text-center">
        <span class="number-block">
            <q-chip v-for="(item, index) in (''+days).split('')" :key="index" :color="bgColor" :text-color="fontColor"
                    class="glossy text-weight-bold time_cls shadow-4"
                    size="25px"
                    square>{{ item }}
            </q-chip>
            <div :style="'color:'+labelColor">Days</div>
        </span>
        <span class="number-block">
            <q-chip v-for="(item, index) in (''+hours).split('')" :key="index" :color="bgColor" :text-color="fontColor"
                    class="glossy text-weight-bold time_cls shadow-4"
                    size="25px"
                    square>{{ item }}
            </q-chip>
            <div :style="'color:'+labelColor">Hours</div>
        </span>
        <span class="number-block">
            <q-chip v-for="(item, index) in (''+minutes).split('')" :key="index" :color="bgColor"
                    :text-color="fontColor"
                    class="glossy text-weight-bold time_cls shadow-4"
                    size="25px"
                    square>{{ item }}
            </q-chip>
            <div :style="'color:'+labelColor">Minutes</div>
        </span>
        <span class="number-block">
            <q-chip v-for="(item, index) in (''+seconds).split('')" :key="index" :color="bgColor"
                    :text-color="fontColor"
                    class="glossy text-weight-bold time_cls shadow-4"
                    size="25px"
                    square>{{ item }}
            </q-chip>
                <div :style="'color:'+labelColor">Seconds</div>
        </span>
    </div>
</template>
<script>
    import Vue from 'vue'
    import moment from "moment"

    const MS_SECOND = 1000;
    const MS_MINUTE = 60 * MS_SECOND;
    const MS_HOUR = 60 * MS_MINUTE;
    const MS_DAY = 24 * MS_HOUR;

    export default {

        props: {
            bgColor: {
                type: String,
                default: () => "primary",
            },
            fontColor: {
                type: String,
                default: () => "white",
            },
            labelColor: {
                type: String,
                default: () => "black",
            },
            date: {
                type: String,
            },
        },
        data() {
            return {
                totalMilliseconds: 0,
            }
        },
        computed: {
            days() {
                let days = Math.floor(this.totalMilliseconds / MS_DAY);
                return days < 10 ? "0" + days : days;
            },
            hours() {
                let hours = Math.floor((this.totalMilliseconds % MS_DAY) / MS_HOUR);
                return hours < 10 ? "0" + hours : hours;
            },
            minutes() {
                let minutes = Math.floor((this.totalMilliseconds % MS_HOUR) / MS_MINUTE);
                return minutes < 10 ? "0" + minutes : minutes;
            },
            seconds() {
                let seconds = Math.floor((this.totalMilliseconds % MS_MINUTE) / MS_SECOND);
                return seconds < 10 ? "0" + seconds : seconds;
            },
        },
        watch: {
            $props: {
                deep: true,
                immediate: true,
                handler(self) {

                    this.totalMilliseconds = 0;

                    window.setInterval(() => {

                        if (moment(self.date, "YYYY-MM-DD HH:mm:ss") > moment()) {
                            this.totalMilliseconds = moment(self.date, "YYYY-MM-DD HH:mm:ss") - moment();
                        }
                    }, 1000);

                },
            },
        }
    }
    Vue.filter('format_digits', function (value) {
        if (value.toString().length <= 1) {
            return "0" + value.toString();
        }
        return value.toString();
    });
    Vue.filter('item_by_position', function (value, location) {

        return value[location];
    });

</script>
<style>
    .time_cls {
        padding: 10px;
        margin: 1px;
    }

    .number-block {
        display: inline-block;
    }
</style>
