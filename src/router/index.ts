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
  {
    path: "/costs/:page",
    name: "some-page",
    component: () =>
      import(/* webpackChunkName: "Costs" */ "@/views/CostsView.vue"),
    beforeEnter: (to, from) => console.log(to, from),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export function useRouter() {
  return router;
}

export default router;
