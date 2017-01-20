<template>
  <div class="pure-g">
    <div class="pure-u-1-1">
      <div v-for="node in network">
        <networkNode v-bind:node="node"></networkNode>
      </div>
    </div>
  </div>
</template>
<script>
import NetworkNode from './NetworkNode';
// import NetworkService from '../services/NetworkService';

export default {
  name: 'networkRadar',
  components: {
    NetworkNode,
  },
  data() {
    return {
      network: [ // TODO retrieve with NetworkService.js
        { ip_addr: '127.0.0.1', hw_addr: 'aa:bb:cc:dd', first_seen: new Date(), last_seen: new Date(), name: 'localhost' },
        { ip_addr: '192.168.1.1', hw_addr: 'aa:bb:cc:de', first_seen: new Date(), last_seen: new Date(), name: 'router' },
      ],
    };
  },
};
</script>
<style scoped>
</style>
