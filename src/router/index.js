import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import ButtonsPage from "../views/Pages/ButtonsPage.vue";
import CardsPage from "../views/Pages/CardsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeView,
    },
    {
      path: "/buttons",
      name: "buttons",
      component: ButtonsPage,
    },
    {
      path: "/cards",
      name: "cards",
      component: CardsPage,
    },
  ],
});

export default router;