require('./static/pure-min.css')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCordova from 'vue-cordova'
import App from './App'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  data () {
    return {
      cordova: Vue.cordova
    }
  }
})
