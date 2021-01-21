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
        ><span class="ellipsis">Countdown Example Two - New Year</span></q-toolbar-title>
      </q-ribbon>
    </q-toolbar>
    <q-card-section class="q-px-sm q-pb-none">
      <code-tabs :tagParts="tagParts"></code-tabs>
    </q-card-section>
    <q-card-section class="q-px-sm">
      <q-card class="text-center new_year_bg">
        <q-card-section>
          <label class="text-h5 text-white">New Year {{widget_year}} is coming 🎉🎉</label>
        </q-card-section>
        <q-card-section class="q-pa-none q-my-md">
          <q-widgets name="countdown" bgColor="white" fontColor="red" labelColor="white"
                     :date="widget_date"></q-widgets>
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <q-btn size="md" style="background: #ed3247;color:white" label="Shop Now"/>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script>
    import CodeTabs from "../components/CodeTabs";
    import moment from "moment"

    export default {
        name: "CountdownExampleTwo",
        components: {CodeTabs},
        data() {
            return {
                widget_date: moment().startOf('year').add(1, 'year').format("YYYY-MM-DD HH:MM:SS"),
                widget_year: moment().startOf('year').add(1, 'year').format("YYYY"),
            }
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
  .new_year_bg {
    background-image: url(~assets/images/new_year_bg.jpg) !important;
    background-size: cover;
  }
</style>
