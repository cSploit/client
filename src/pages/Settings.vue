<template>
  <div>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="ip">Backend IP</label>
          <input id="ip" type="text" placeholder="192.168.1.2" :value="ip">
          <span class="pure-form-message-inline">This is a required field.</span>
        </div>

        <div class="pure-control-group">
          <label for="user">Backend User</label>
          <input id="user" type="text" placeholder="cSploit" :value="user">
        </div>

        <div class="pure-control-group">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password" :value="password">
        </div>


        <div class="pure-controls">
          <button class="pure-button pure-button-primary" @click="save()">Save</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      ip: '',
      user: '',
      password: ''
    }
  },
  methods: {
    save () {
      // TODO crypto
      window.localStorage.setItem('backend_ip', this.ip)
      window.localStorage.setItem('backend_user', this.ip)
      window.localStorage.setItem('backend_password', this.ip)
      this.Vue.router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
