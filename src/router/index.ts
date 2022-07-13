import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/HomePage.vue"),
  },
  {
    path: "/costs",
    name: "costs",
    component: () =>
      import(/* webpackChunkName: "Costs" */ "@/views/CostsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
