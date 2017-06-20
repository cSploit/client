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
import NetworkNode from './NetworkNode'
import axios from 'axios'

let network = []
function updateNetwork () {
  axios.get('/hosts').then((result) => { network = result.data })
}

setInterval(updateNetwork, 5000)

export default {
  name: 'networkRadar',
  components: {
    NetworkNode
  },
  data () {
    return {
      network
    }
  }
}
</script>
<style scoped>
</style>
