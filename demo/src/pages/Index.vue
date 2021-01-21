<template>
  <q-page class="q-pa-md text-grey-7 shadow-2">
    <q-markdown :src="markdown"/>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn
        fab
        icon="keyboard_arrow_up"
        :class="{ 'text-black bg-grey-4': $q.dark.isActive, 'text-white bg-primary': !$q.dark.isActive }"
      />
    </q-page-scroller>
  </q-page>
</template>

<script>

    import markdown from '../markdown/QuasarWidgets.md'

    export default {
        name: 'PageIndex',
        data() {
            return {
                markdown: markdown,
            }
        },
    }
</script>

<style>
</style>
