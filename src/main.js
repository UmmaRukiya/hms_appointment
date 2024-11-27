// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/animate.min.css';


createApp(App)
  .use(router)
  .mount('#app')

