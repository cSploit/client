<template>
  <div class="hello">
    <div class="pure-g">
      <div class="pure-u-1-1"<h1>{{ msg }}</h1></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'cSploit',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  letter-spacing: 0px;
}
</style>
