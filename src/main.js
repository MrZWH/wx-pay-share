import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

axios.interceptors.request.use(config => {
  // loading,请求地址替换
})

axios.interceptors.response.use(response => {
  let res = response.data
  if (res.code != 0) {
    alert(res.msg)
  }
}, function (error) {
  return Promise.reject(error)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
