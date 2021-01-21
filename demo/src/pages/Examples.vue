<template>
  <q-page>
    <div class="q-markdown">
      <countdown-example-one
        :tag-parts="getTagParts(require('!!raw-loader!../examples/CountdownExampleOne.vue').default)"></countdown-example-one>
      <countdown-example-two
        :tag-parts="getTagParts(require('!!raw-loader!../examples/CountdownExampleTwo.vue').default)"></countdown-example-two>
      <countdown-example-three
        :tag-parts="getTagParts(require('!!raw-loader!../examples/CountdownExampleThree.vue').default)"></countdown-example-three>
      <stopwatch
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Stopwatch.vue').default)"></stopwatch>
      <Weather
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Weather.vue').default)"></Weather>
    </div>
  </q-page>
</template>

<script>
    import CountdownExampleOne from "../examples/CountdownExampleOne";
    import CountdownExampleTwo from "../examples/CountdownExampleTwo";
    import CountdownExampleThree from "../examples/CountdownExampleThree";
    import Stopwatch from "../examples/Stopwatch";
    import Weather from "../examples/Weather";
    import {getTagParts} from '@quasar/quasar-ui-qmarkdown'

    export default {
        name: "Examples",
        components: {CountdownExampleOne, CountdownExampleTwo, CountdownExampleThree, Stopwatch, Weather},
        methods: {
            getTagParts
        }
    }
</script>

<style scoped>

</style>
