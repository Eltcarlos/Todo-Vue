import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"),
  },
  {
    path: "/pokemonid/:id",
    name: "pokemon-id",
    component: () => import(/* webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage"),
    props: (route) => {
      const { id } = route.params;
      return isNaN(Number(id)) ? { id: 1 } : { id: Number(id) };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import(/* webpackChunkName: "NoPageFound" */ "../modules/shared/pages/NoPageFound"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
