import Vue from "vue";
import Router from "vue-router";
import mincss from "mini.css";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/pages/Home.vue").default // load sync home
    },
    {
      path: "/Admin",
      name: "Admin",
      component: require("@/pages/AdminConfig.vue").default // load sync home
    },
    // {
    //   path: "/story/:id",
    //   name: "post",
    //   component: () => import("@/pages/Post.vue")
    // },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
});
