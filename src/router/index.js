import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: () => import("@/views/login") },
  {
    path: "/home",
    component: () => import("@/views/home"),
    children: [
      { path: "bench", component: () => import("@/views/workbench") },
      {
        path: "manage-base-info/warehouse",
        component: () => import("@/views/manage-base-info/warehouse"),
      },
      {
        path: "manage-base-info/area",
        component: () => import("@/views/manage-base-info/area"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
