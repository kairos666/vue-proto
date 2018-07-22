import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Protovue from "v1labs-protovue";
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = true;
Vue.use(Protovue);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
