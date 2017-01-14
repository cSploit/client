<template>
  <div id="app">
    <top-bar></top-bar>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello';
import TopBar from './components/TopBar';

export default {
  name: 'app',
  components: {
    Hello,
    TopBar,
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
</style>
