<template>
    <div>
                <q-countdown v-if="name=='countdown'" :bg-color="bgColor" :font-color="fontColor" :label-color="labelColor" :date="date"></q-countdown>
                <q-weather v-if="name=='weather'"></q-weather>
                <q-stopwatch v-if="name=='stopwatch'" :font-color="fontColor"></q-stopwatch>

        <!--        <div id="app" :class="weather.main && weather.main.temp > 60 ?-->
        <!--    'warm' : ''">-->
        <!--            <main>-->

        <!--                <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">-->
        <!--                    <div class="search-box">-->
        <!--                        <input-->
        <!--                                type="text"-->
        <!--                                class="search-bar"-->
        <!--                                placeholder="Search..."-->
        <!--                                v-model="query"-->
        <!--                                @keypress="fetchWeather"-->
        <!--                        />-->
        <!--                        <div style="margin-top: 5px; text-align: center;">-->
        <!--                            <p style="font-size: 0.6em;">Enter the "city, state" e.g. "madison, wisconsin"</p>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                    <div class="location-box">-->
        <!--                        <div class="location" v-if="city !== ''">{{ this.capitalizeFirstLetter(city)}}, {{-->
        <!--                            weather.sys.country }}-->
        <!--                        </div>-->
        <!--                        <div class="location" v-else>{{ weather.name }}, {{ weather.sys.country }}</div>-->
        <!--                        <div class="date" style="display: flex; align-items:center; justify-content: space-around;">-->
        <!--                            <span style="">{{ dateBuilder() }}</span>-->
        <!--                            <img id="icon1"-->
        <!--                                 :src="`http://openweathermap.org/img/wn/` + weather.weather[0].icon + `@2x.png`"/>-->
        <!--                        </div>-->

        <!--                        <div class="weather-box">-->
        <!--                            <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>-->
        <!--                            <div>-->
        <!--                                <canvas style="margin-top: 15px;" id="skycon" width="90" height="90"></canvas>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="weather-wrap" v-else-if="!locationFound">-->
        <!--                    <div class="search-box">-->
        <!--                        <input-->
        <!--                                type="text"-->
        <!--                                class="search-bar"-->
        <!--                                placeholder="Search..."-->
        <!--                                v-model="query"-->
        <!--                                @keypress="fetchWeather"-->
        <!--                        />-->
        <!--                        <div style="margin-top: 5px; text-align: center;">-->
        <!--                            <p style="font-size: 0.6em;">Enter the "city, state" e.g. "madison, wisconsin"</p>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="weather-wrap" v-else>-->
        <!--                    <h2 style="color: #FFF; margin-bottom: 10px;">Please refine your search.</h2>-->
        <!--                    <div class="search-box">-->
        <!--                        <input-->
        <!--                                type="text"-->
        <!--                                class="search-bar"-->
        <!--                                placeholder="Search..."-->
        <!--                                v-model="query"-->
        <!--                                @keypress="fetchWeather"-->
        <!--                        />-->
        <!--                        <div style="margin-top: 5px; text-align: center;">-->
        <!--                            <p style="font-size: 0.6em;">Enter the "city, state" e.g. "madison, wisconsin"</p>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </main>-->
        <!--        </div>-->

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

