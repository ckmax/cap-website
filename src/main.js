import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Third-party packages
import VueScrollTo from "vue-scrollto";
import VueTypedJs from "vue-typed-js";
import VueScrollReveal from "vue-scroll-reveal";

Vue.use(VueScrollReveal, {
  distance: "50px",
  duration: 1500
});
Vue.use(VueTypedJs);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
