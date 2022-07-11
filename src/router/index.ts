import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CostsView from "../views/CostsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: CostsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
