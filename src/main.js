import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

const app = new Vue({
  router
}).$mount("#app");
