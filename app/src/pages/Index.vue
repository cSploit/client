<template>
  <div class="index">
   <networkRadar></networkRadar>
  </div>
</template>

<script>
import NetworkRadar from '../components/NetworkRadar';

export default {
  name: 'index',
  components: {
    NetworkRadar,
  },
  data() {
    return {
      msg: 'cSploit',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
