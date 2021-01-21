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
        ><span class="ellipsis">weather</span></q-toolbar-title>
      </q-ribbon>
    </q-toolbar>
    <q-card-section class="q-px-sm q-pb-none">
      <code-tabs :tagParts="tagParts"></code-tabs>
    </q-card-section>
    <q-card-section class="q-px-sm">
      <q-card class="text-center flex flex-center">
        <q-card-section>
          <q-widgets name="weather" api_key=""></q-widgets>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script>
    import CodeTabs from "../components/CodeTabs";

    export default {
        name: "Weather",
        components: {CodeTabs},
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
