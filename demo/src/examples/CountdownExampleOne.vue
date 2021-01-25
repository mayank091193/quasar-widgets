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
        ><span class="ellipsis">Countdown Example One - Basic</span></q-toolbar-title>
      </q-ribbon>
    </q-toolbar>
    <q-card-section class="q-px-sm q-pb-none">
      <code-tabs :tagParts="tagParts"></code-tabs>
    </q-card-section>
    <q-card-section class="q-px-sm">
      <q-card class="text-center q-pa-none">
        <q-card-section>
          <label class="text-h6" :class="!$q.dark.isActive?'text-black':'text-grey-5'">⚡️ Limited-time offer! Sale ends
            in</label>
        </q-card-section>
        <q-card-section class="q-pa-none q-my-md">
          <q-widgets name="countdown" fontColor="white" :labelColor="!$q.dark.isActive?'black':'white'"
                     :date="widget_date"></q-widgets>
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <q-btn size="md" style="background: #544e4e;color:white" label="Shop Now"/>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script>
    import CodeTabs from "../components/CodeTabs";
    import moment from "moment"

    export default {
        name: "CountdownExampleOne",
        components: {CodeTabs},
        data() {
            return {
                widget_date: moment().add(2, "days").format("YYYY-MM-DD HH:mm:ss"),
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
