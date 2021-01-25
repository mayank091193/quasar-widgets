<template>
    <div>
        <q-countdown v-if="name==='countdown'" :bg-color="bgColor" :font-color="fontColor" :label-color="labelColor"
                     :date="date"></q-countdown>
        <q-weather v-if="name==='weather'"></q-weather>
        <q-stopwatch v-if="name==='stopwatch'" :font-color="fontColor"></q-stopwatch>

    </div>
</template>
<script>
    import QCountdown from "./QCountdown.vue";
    import QWeather from "./QWeather.vue";
    import QStopwatch from "./QStopwatch.vue";

    export default {
        components: {
            QCountdown,
            QWeather,
            QStopwatch
        },
        props: {
            bgColor: {
                type: String,
                default: () => "primary",
            },
            fontColor: {
                type: String,
                default: () => "black",
            },
            labelColor: {
                type: String,
                default: () => "black",
            },
            date: {
                type: String,
            },
            name: {
                type: String,
                default: () => "",
            }
        },
    }

</script>

