import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import Vue from "vue";
import { mapState } from "vuex";

import "@fortawesome/fontawesome-free/js/all";
import * as Keycloak from "keycloak-js";

import VueTranslate from "vue-translate-plugin";
import store from "./store";

let initOptions = {
  url: process.env.VUE_APP_KEYCLOAK_URL,
  realm: process.env.VUE_APP_KEYCLOAK_REALM,
  clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
  client_secret: process.env.VUE_APP_KEYCLOAK_CLIENT_SECRET,
  onLoad: "login-required",
};

let keycloak = Keycloak(initOptions);

function refreshToken() {
  keycloak
    .updateToken(70)
    .then((refreshed) => {
      if (refreshed) {
        localStorage.setItem("vue-token", keycloak.token);
        localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
      }
    })
    .catch(() => {
      window.location.reload();
    });
}

keycloak.onTokenExpired = function () {
  refreshToken();
};

keycloak
  .init({ onLoad: "login-required", checkLoginIframe: false })
  .then((auth) => {
    if (!auth) {
      window.location.reload();
    }
    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
    // localStorage.setItem("user-email", keycloak.idTokenParsed.email);
    // localStorage.setItem("user-name", keycloak.idTokenParsed.name);
    // localStorage.setItem("user", keycloak.idTokenParsed.preferred_username);
    setInterval(() => {
      refreshToken();
    }, 60000);
    const app = createApp(App);
    app.config.globalProperties.$keycloak = keycloak;

    app.use(store).use(router).mount("#app");
  })
  .catch(() => {});
