import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//  TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZyZWRlcmljbyBTYW50b3MgQWx0ZXJhZG8gcHJhIEFETSIsImVtYWlsIjoiZnJlZGRpZS5vbGl2ZWlyYTk1QGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE3MDcxMzI3OTMsImV4cCI6MTcwNzM5MTk5M30.OjWDtI7QxV1gsAI74pP6fisJRCn_o1xBceNCuzQTRd8'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')