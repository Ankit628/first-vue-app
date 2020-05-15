import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './router';
import App from './App';

Vue.use(VueRouter);

Vue.config.productionTip = false;
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
