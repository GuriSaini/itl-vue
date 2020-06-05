import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vuetify from 'vuetify/lib'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
        primary: '#00D657',
        secondary: '#FAEF60',
        anchor: '#2C7873',
    
    },
})
