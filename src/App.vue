<template>
  <div id="app">
    <!--<app-head></app-head>
    <app-left></app-left>-->
    <router-view name="appHead"></router-view>
    <router-view name="appLeft"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
//import AppHead from '@/views/AppHead'
//import AppLeft from '@/views/AppLeft'
import './lib/sui/sui.css'
import './lib/sui/sui-append.css'
import './assets/css/frame.css'
export default {
  name: 'app',
//components: {
//	AppHead,
//	AppLeft
//}
}
</script>

<style>

</style>
