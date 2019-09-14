import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Register.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Products.vue")
    },
    {
      path: "/product/:id",
      name: "product",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Product.vue")
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Checkout.vue")
    },
    {
      path: "/browse",
      name: "browse",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Browse.vue")
    },
  ]
});
