import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* style global */
import cssGlobal from './assets/scss/main.scss';

/* BS4 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'

createApp(App).use(router, cssGlobal).mount('#app')
