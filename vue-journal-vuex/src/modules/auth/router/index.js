export default {
  name: "auth",
  component: () => import(/* webpackChunkName "Auth" */ "@/modules/auth/layouts/AuthLayout.vue"),
  children: [
    {
      path: "",
      name: "login",
      component: () => import(/* webpackChunkName "Auth" */ "@/modules/auth/views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import(/* webpackChunkName "Auth" */ "@/modules/auth/views/Register.vue"),
    },
  ],
};
