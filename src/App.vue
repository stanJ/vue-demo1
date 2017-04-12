<template>
  <div id="app">
    <AppHead></AppHead>
    <img src="./assets/logo.png">
    <p>
    	<router-link to="/">Go to Hello</router-link>
    	<router-link to="/foo">Go to Foo</router-link>
    	<router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHead from '@/components/AppHead'
export default {
  name: 'app',
  components: AppHead
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
