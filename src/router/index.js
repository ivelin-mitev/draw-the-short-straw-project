import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WaitView from "../views/WaitView.vue";
import DrawView from "../views/DrawView.vue";
import VueSocketIO from "vue-socket.io";

// let socket = new VueSocketIO({
//   debug: true,
//   connection: "http://localhost:3000",
// });


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/waiting",
      name: "waitingpage",
      component: WaitView,
    },
    {
      path: "/draw",
      name: "draw",
      component: DrawView
    }
  ],
});

export default router;
