// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue-3';
import './assets/css/animate.min.css';


createApp(App)
  .use(router)
  .use(BootstrapVue)
  .mount('#app')

