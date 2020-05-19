import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Vuetify from 'vuetify'
//import VueTabs from 'vue-nav-tabs'
//import VueMaterial from 'vue-material'
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

//Vue.use(VueMaterial);
Vue.use(Autocomplete)

Vue.config.productionTip = false
//Vue.use(Vuetify)
//Vue.use(VueTabs)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
