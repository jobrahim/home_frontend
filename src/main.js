import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Vue from 'vue'
window.Vue = require('vue').default;
import '@fortawesome/fontawesome-free/js/all'

import VueTranslate from 'vue-translate-plugin';

// Vue.use(VueTranslate);
// Vue.locales({
// 	es: es
// });



createApp(App).use(router).mount('#app')




