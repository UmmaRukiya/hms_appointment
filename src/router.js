import { createWebHistory, createRouter } from "vue-router";

import Appointment from './components/Appointment.vue'
// import Login from './components/Login.vue'
import Registration from './components/Registration.vue'

const routes = [
  // { path: '/', component: Login },
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  { path: '/registration', component: Registration },
  { path: '/appointment', component: Appointment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
