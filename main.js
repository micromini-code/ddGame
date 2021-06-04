import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
// import LsxmRequest from './service/LsxmRequest.js'
import apis from './api/home.js'
import lsxmRequest from './service/config.js'

Vue.use(uView);
Vue.use(lsxmRequest)
Vue.config.productionTip = false
Vue.prototype.baseDomain = lsxmRequest.getConfig().baseURL
App.mpType = 'app'

const app = new Vue({
    // store,
    apis,
    ...App
})
app.$mount()
// import Vue from 'vue'
// import App from './App'
// import uView from "uview-ui";

// Vue.use(uView);

// Vue.config.productionTip = false

// App.mpType = 'app'

// const app = new Vue({
//     ...App
// })
// app.$mount()
