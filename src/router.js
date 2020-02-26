import Vue from "vue";
import Router from "vue-router";
import Item from "./views/Item";
import List from "./views/List";
import Habibie from "./components/Habibie";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "list",
      component: List
    },
    {
      path: "/item/:id",
      name: "item",
      component: Item
    },
    {
      path: "/habibie",
      name: "habibie",
      component: Habibie
    }
  ]
});
