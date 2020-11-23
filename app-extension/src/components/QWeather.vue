<template>
    <div :class="weather.main && weather.main.temp > 20 ?
            'warm' : ''" class="default_cls inline-block">
        <q-card style="background-color: rgba(0, 0, 0, 0.68) !important;" flat bordered
                class="weather-card q-pa-lg flex flex-center text-center" v-if="weather.main">
            <q-card-section>
                <q-input class="search-bar" outlined placeholder="Search..."
                         v-model="query"
                         @keypress="fetchWeather"/>
                <p class="text-grey-5" style="font-size: 0.8em;">Enter the "city, state" e.g. "Pune,
                    Maharashtra"</p>
            </q-card-section>

            <q-card-section class="q-py-none">
                <div class="location-box">
                    <div class="location" v-if="city !== ''">{{ this.capitalizeFirstLetter(city)}}, {{
                        weather.sys.country }}
                    </div>
                    <div class="location" v-else>{{ weather.name }}, {{ weather.sys.country }}</div>
                    <div class="date" style="display: flex; align-items:center; justify-content: space-around;">
                        <span style="">{{ dateBuilder() }}</span>
                    </div>
                </div>
            </q-card-section>

            <q-card-section>
                <div class="weather-box">
                        <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
                        <div>
                            <!--                            <img class="icon"-->
                            <!--                                 :src="`http://openweathermap.org/img/wn/` + weather.weather[0].icon + `@2x.png`"/>-->
                            <canvas style="margin-top: 15px;" id="skycon" width="90" height="90"></canvas>
                        </div>
                    </div>
            </q-card-section>
        </q-card>
        <q-card style="background-color: rgba(0, 0, 0, 0.68) !important;" flat bordered
                class="weather-card q-pa-lg flex flex-center text-center" v-else>
            <div class="search-box">
                <q-input class="search-bar" outlined placeholder="Search..."
                         v-model="query"
                         @keypress="fetchWeather"/>
                <div style="margin-top: 5px; text-align: center;">
                    <p class="text-grey-5" style="font-size: 0.8em;">Enter the "city, state" e.g. "Pune,
                        Maharashtra"</p>
                </div>
            </div>
        </q-card>
    </div>
</template>

<script>
    import moment from "moment"
    import { Skycons } from '../extension-js/skycons'
    export default {
        data() {
            return {
                api_key: '0d4b13828de6a68a2738b03d03e0721c',
                url_base: 'https://api.openweathermap.org/data/2.5/',
                query: '',
                weather: {},
                locationFound: null,
                skycons: new Skycons({"monochrome": false}),
                city: '',
                state: ''
            }
        },
        methods: {
            fetchWeather(e) {
                for (var i = 0; i < 2; i++) {
                    if (e.key === "Enter") {
                        // fetch() is from JS
                        if (this.query.split(",").length === 2) {
                            this.city = this.query.split(",")[0].trim();
                            this.state = this.query.split(",")[1].trim();
                        }
                        fetch(`${this.url_base}weather?q=${this.state},${this.city}&units=metric&APPID=${this.api_key}`)
                            .then(res => {
                                return res.json();
                            }).then(this.manipulateResponse);
                    }
                }
            },
            manipulateResponse(results) {
                this.weather = results;
                // Set up skycon
                let time = moment().hour();
                let weatherMain = this.weather.weather[0].main;
                switch (weatherMain.toLowerCase()) {
                    case "clouds":
                        if (time >= 19 || time <= 4) {
                            this.skycons.set("skycon", Skycons.PARTLY_CLOUDY_NIGHT);
                        } else {
                            this.skycons.set("skycon", Skycons.CLOUDY);
                        }
                        this.skycons.play();
                        break;
                    case "rain":
                        this.skycons.set("skycon", Skycons.RAIN);
                        this.skycons.play();
                        break;
                    case "drizzle":
                        this.skycons.set("skycon", Skycons.RAIN);
                        this.skycons.play();
                        break;
                    case "thunderstorm":
                        this.skycons.set("skycon", Skycons.THUNDER);
                        this.skycons.play();
                        break;
                    case "snow":
                        this.skycons.set("skycon", Skycons.SNOW);
                        this.skycons.play();
                        break;
                    case "clear":
                        if (time >= 19 || time <= 4) {
                            this.skycons.set("skycon", Skycons.CLEAR_NIGHT);
                        } else {
                            this.skycons.set("skycon", Skycons.CLEAR_DAY);
                        }
                        this.skycons.play();
                        break;
                    default:
                        this.skycons.set("skycon", Skycons.WIND);
                        this.skycons.play();
                }
            },
            dateBuilder() {
                return moment().format("dddd DD MMMM YYYY")
            },
            capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        },
    }
</script>
<style>
    .warm {
        background-image: url('images/weather_warm.jpg') !important;
    }


    .search-bar {
        color: #313131;
        font-size: 20px;
        background-color: rgba(255, 255, 255, 0.5) !important;
        border-radius: 5px;
    }

    .search-bar .q-field__native {
        text-align: center !important;
    }

    .location-box .location {
        color: #FFF;
        margin-bottom: 5px;
        font-size: 40px;
        font-weight: 700;
        font-style: italic;
        text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }

    .location-box .date {
        color: #FFF;
        font-size: 20px;
        font-weight: 300;
        font-style: italic;
    }

    .weather-box {
        text-align: center;
    }

    .weather-box .temp {
        display: inline-block;
        padding: 5px 15px;
        color: #FFF;
        font-size: 90px;
        font-weight: 900;
        text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        margin: 20px 0px 0px 0px;
        box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }

    .icon {
        width: 130px;
        height: 130px;
    }


    .weather-card {
        min-height: 576px;
        width: 360px;
        max-width: 360px;
        padding-bottom: 0px;
    }

    .default_cls {
        background-image: url('images/weather_cold.png');
        background-size: cover;
    }
</style>