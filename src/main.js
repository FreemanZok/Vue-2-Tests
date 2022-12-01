import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import button from './components/MyButton.vue'

Vue.config.productionTip = false
Vue.component('myButton', button);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
