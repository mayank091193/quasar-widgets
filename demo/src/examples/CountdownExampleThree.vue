<template>
  <q-card :class="!$q.dark.isActive?'my-lg q-ma-sm bg-grey-2':'my-lg q-ma-sm bg-grey-8'">
    <q-toolbar>
      <q-ribbon
        position="left"
        color="rgba(0,0,0,.58)"
        background-color="#c0c0c0"
        leaf-color="#a0a0a0"
        leaf-position="bottom"
        decoration="rounded-out"
      >
        <q-toolbar-title
          class="example-title"
          style="padding: 5px 20px;"
        ><span class="ellipsis">Countdown Example Three</span></q-toolbar-title>
      </q-ribbon>
    </q-toolbar>
    <q-card-section class="q-px-sm q-pb-none">
      <code-tabs :tagParts="tagParts"></code-tabs>
    </q-card-section>
    <q-card-section class="q-px-sm">
      <q-card class="bg-black flex flex-center text-white q-pa-sm">
          <span class="text-weight-bold inline-block q-mx-md"
                style="font-size:20px;color: yellow;">Black Friday Sale<br>up to 60% OFF</span>
          <q-widgets v-if="widget_friday_date" name="countdown" :date="widget_friday_date" bgColor="yellow" fontColor="black" labelColor="yellow"
                     class="inline-block"></q-widgets>
          <q-btn size="md" class="q-ma-md" style="background: yellow;color:black" label="Shop Now"/>
        </q-card>
    </q-card-section>
  </q-card>
</template>

<script>
    import CodeTabs from "../components/CodeTabs";
    import moment from "moment"

    export default {
        name: "CountdownExampleThree",
        components: {CodeTabs},
        data() {
            return {
                widget_friday_date: null,
            }
        },
        created() {
            if (moment().weekday() < 6)
                this.widget_friday_date = moment().day(5).format("YYYY-MM-DD") + " 00:00:00";
            else
                this.widget_friday_date = moment().add(1, 'week').day(5).format("YYYY-MM-DD") + " 00:00:00";
        },
        props: {
            tagParts: {
                type: Object,
                default: () => {
                }
            }
        },
    }
</script>
<style>
  .weather_bg {
    background-image: url(~assets/images/new_year_bg.jpg) !important;
    background-size: cover;
  }
</style>
