<template>
  <div class="index">
    <networkRadar></networkRadar>
  </div>
</template>

<script>
import axios from 'axios'
import NetworkRadar from '../components/NetworkRadar'
import Vue from 'vue'

export default {
  name: 'index',
  components: {
    NetworkRadar
  },
  data () {
    return {
      msg: 'cSploit',
      cordova: Vue.cordova
    }
  },
  mounted () {
    window.localStorage.getItem('backend_ip', (ip) => {
      axios.defaults.baseURL = `https://${ip}:9915`
    }, () => {
      this.Vue.router.push('settings')
    })

    window.localStorage.getItem('backend_user', (user) => {
      axios.defaults.auth.username = user
    }, () => {
      this.Vue.router.push('settings')
    })
    // TODO crypto
    window.localStorage.getItem('backend_password', (pass) => {
      axios.defaults.auth.password = pass
    }, () => {
      this.Vue.router.push('settings')
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
