import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import views from '@/views/Views';

Vue.use(VueRouter);

let routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/check-weights',
    name: 'Check Weights',
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckWeights.vue'),
  },
  {
    path: '/build-towers',
    name: 'Build Towers',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuildTowers.vue'),
  },
  {
    path: '/build-bridges',
    name: 'Build Bridges',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuildBridges.vue'),
  },
];

routes = routes.concat(
  views.map((el) => {
    const rc: RouteConfig = {
      path: el.path,
      component: () => import(`@/views/${el.view}`),
    };
    return rc;
  }),
);

routes.push({
  path: '/*',
  component: Home,
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
