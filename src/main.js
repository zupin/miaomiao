import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import {formatDate} from '@/filter.js'

import axios from 'axios'
Vue.prototype.axios = axios

Vue.filter('setWH',(url, arg) => {
  return url.replace(/w\.h/, arg)
})

Vue.filter('actorfilter',(data) => {
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
})

Vue.filter('showTime',(time) => {
  var data = new Date(time * 1000);
  return formatDate(data,'yyyy-MM-dd');
})

Vue.filter('numFilter',(value) => {
  var num = parseFloat(value).toFixed(1)
  return num
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
