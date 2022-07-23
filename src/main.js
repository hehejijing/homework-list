import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueRouter from "vue-router";
import MyGoodList from "../views/MyGoodList.vue";
import MySearch from "../views/MySearch.vue";
import MyInfo from "../views/MyInfo.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/", // 默认hash值路径
    redirect: "/mygoodlist"
    // 重定向到/find
    // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
  },
  {
    path: "/mygoodlist",
    name: "MyGoodList",
    component: MyGoodList,
  },
  {
    path: "/mysearch",
    name: "MySearch",
    component: MySearch,
  },
  {
    path: "/myinfo",
    name: "MyInfo",
    component: MyInfo,
  },
];

const router = new VueRouter({
  routes,
});

import "bootstrap/dist/css/bootstrap.css";

import "./assets/fonts/iconfont.css";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn/";
Vue.prototype.$axios = axios;
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
