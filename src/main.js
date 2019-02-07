// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from "vuefire"
import firebase from "firebase/app"
import "firebase/firestore"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faHome, faSignInAlt, faUserPlus, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from 'moment'
import titleMixin from "./mixins/titleMixin";

Vue.mixin(titleMixin);

library.add(faCoffee, faHome, faSignInAlt, faUserPlus, faTools);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})

Vue.filter('formatFirebaseDate', function (value) {
  if (value) {
    return moment(String(value.toDate())).format("DD.MM.YYYY HH:mm");
  }
})

import Default from "./layouts/Default.vue";

Vue.component("default-layout", Default);

Vue.config.productionTip = false

Vue.use(VueFire);
firebase.initializeApp({
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_PROJECT_URL
});

export const db = firebase.firestore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})