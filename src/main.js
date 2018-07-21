import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Protovue from "v1labs-protovue";

Vue.config.productionTip = true;
Vue.use(Protovue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
