import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import LoginPage from './components/Login/LoginPage.vue';
import DashBord from './components/Dashboard/DashBord.vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
Vue.use(VueRouter);
const routes = [
    {path: '/DashBord', component: DashBord},
    {path: '/', component: LoginPage}
];
Vue.prototype.$http = axios

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
const router = new VueRouter({
    routes,
    mode: 'history'
});
new Vue({
  render: h => h(App),
     router,
}).$mount('#app')
