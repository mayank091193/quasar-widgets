<template>
  <q-page class="q-pa-md">

    <div class="row q-col-gutter-md">
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card class="text-center q-pa-none">
          <q-card-section>
            <label class="text-h6" :class="!$q.dark.isActive?'text-black':'text-grey-5'">⚡️ Limited-time offer! Sale
              ends in</label>
          </q-card-section>
          <q-card-section class="q-pa-none q-my-md">
            <q-widgets name="countdown" fontColor="white" :labelColor="!$q.dark.isActive?'black':'white'"
                       :date="widget_date"></q-widgets>
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <q-btn size="md" style="background: #544e4e;color:white" label="Shop Now"/>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
        <q-card class="text-center flex flex-center bg-black" style="height:230px">
          <q-card-section>
            <label class="text-h5 text-weight-bold" style="color:#c8c8c8">
              <q-icon size="md" class="vertical-bottom" name="fas fa-stopwatch" style="color:#c8c8c8"/>
              Stopwatch</label>
            <q-widgets name="stopwatch" fontColor="#c8c8c8"></q-widgets>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-12 col-sm-12 col-sm-12 col-xs-12">
        <q-card class="text-center weather_bg">
          <q-card-section>
            <label class="text-h5 text-white">New Year {{widget_year}} is coming 🎉🎉</label>
          </q-card-section>
          <q-card-section class="q-pa-none q-my-md">
            <q-widgets name="countdown" bgColor="white" fontColor="red" labelColor="white"
                       :date="widget_year_date"></q-widgets>
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <q-btn size="md" style="background: #ed3247;color:white" label="Shop Now"/>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
        <q-card class="bg-black flex flex-center text-white q-pa-sm">
          <span class="text-weight-bold inline-block q-mx-md"
                style="font-size:20px;color: yellow;">Black Friday Sale<br>up to 60% OFF</span>
          <q-widgets v-if="widget_friday_date" name="countdown" :date="widget_friday_date" bgColor="yellow"
                     fontColor="black" labelColor="yellow"
                     class="inline-block"></q-widgets>
          <q-btn size="md" class="q-ma-md" style="background: yellow;color:black" label="Shop Now"/>
        </q-card>
      </div>
      <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 text-center">
        <q-card class="q-py-lg">
          <q-widgets name="weather" api_key=""></q-widgets>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
    import moment from "moment"

    export default {
        name: 'PageIndex',
        data() {
            return {
                widget_date: moment().add(2, "days").format("YYYY-MM-DD HH:mm:ss"),
                widget_year_date: moment().startOf('year').add(1, 'year').format("YYYY-MM-DD HH:mm:ss"),
                widget_year: moment().startOf('year').add(1, 'year').format("YYYY"),
                widget_friday_date: null,
            }
        },
        created() {
            if (moment().weekday() < 6)
                this.widget_friday_date = moment().day(5).format("YYYY-MM-DD") + " 00:00:00";
            else
                this.widget_friday_date = moment().add(1, 'week').day(5).format("YYYY-MM-DD") + " 00:00:00";
        }
    }
</script>
<style>
  .weather_bg {
    background-image: url(~assets/images/new_year_bg.jpg) !important;
    background-size: cover;
  }

  .social_button {
    letter-spacing: 1px;
    text-transform: initial !important;
  }

  .social_button:hover {
    background-color: #222222 !important;
  }

  /*.social_button:hover  i{*/
  /*  color: #1a76d2 !important;*/
  /*}*/
</style>
