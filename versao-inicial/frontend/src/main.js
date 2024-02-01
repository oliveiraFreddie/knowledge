import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//  TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZyZWRlcmljbyBTYW50b3MgQWx0ZXJhZG8gcHJhIEFETSIsImVtYWlsIjoiZnJlZGRpZS5vbGl2ZWlyYTk1QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDY4MTk1MDIsImV4cCI6MTcwNzA3ODcwMn0.R1wBHrrikXUgtLalgEbmXA8rGPxoSlP_kjRvi6n1K8c'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')