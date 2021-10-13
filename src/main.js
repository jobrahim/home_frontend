import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Vue from 'vue'
window.Vue = require('vue').default;
import '@fortawesome/fontawesome-free/js/all'
import * as Keycloak from 'keycloak-js'

import VueTranslate from 'vue-translate-plugin';

// Vue.use(VueTranslate);
// Vue.locales({
// 	es: es
// });

let initOptions = {
    url: process.env.VUE_APP_KEYCLOAK_URL,
    realm: process.env.VUE_APP_KEYCLOAK_REALM,
    clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
    client_secret: process.env.VUE_APP_KEYCLOAK_CLIENT_SECRET,
    onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);
console.log("keycloak",keycloak)
function refreshToken() {
    keycloak.updateToken(70).then((refreshed) => {
        if (refreshed) {
            localStorage.setItem("vue-token", keycloak.token);
            localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
        }
    }).catch(() => {
        window.location.reload();
    });
}

keycloak.onTokenExpired = function () {
    refreshToken();
}




keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {

    createApp(App).use(router).mount('#app')

}).catch(() => {
});




