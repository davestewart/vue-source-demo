// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSource from 'vue-source'

import App from './App'
import router from './router'

Vue.config.productionTip = false

console.log(VueSource)

VueSource.init({
  active: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
