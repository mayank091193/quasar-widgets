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
        ><span class="ellipsis">Stopwatch</span></q-toolbar-title>
      </q-ribbon>
    </q-toolbar>
    <q-card-section class="q-px-sm q-pb-none">
      <code-tabs :tagParts="tagParts"></code-tabs>
    </q-card-section>
    <q-card-section class="q-px-sm">
      <q-card class="text-center flex flex-center bg-black" style="height:230px">
        <q-card-section>
          <label class="text-h5 text-weight-bold" style="color:#c8c8c8">
            <q-icon size="md" class="vertical-bottom" name="fas fa-stopwatch" style="color:#c8c8c8"/>
            Stopwatch</label>
          <q-widgets name="stopwatch" fontColor="#c8c8c8"></q-widgets>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script>
    import CodeTabs from "../components/CodeTabs";

    export default {
        name: "Stopwatch",
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
