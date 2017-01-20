<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import Index from './pages/Index';
import TopBar from './components/TopBar';

export default {
  name: 'app',
  components: {
    Index,
    TopBar,
    VueRouter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #E3E3E3;
}
</style>
