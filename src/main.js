import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import "@/assets/css/base.css"
import "@/assets/css/common.css"

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueCookie)

axios.interceptors.request.use((request) => {
  // loading,请求地址替换
  return request
})

axios.interceptors.response.use(response => {
  let res = response.data
  if (res.code != 0) {
    alert(res.msg)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
