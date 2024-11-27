import { createWebHistory, createRouter } from "vue-router";

// import Appointment from './components/Appointment.vue'
// import Login from './components/Login.vue'
// import Registration from './components/Registration.vue'

const routes = [
  // { path: '/', component: Login },
  {
    path: "/home",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/department",
    alias: "/department",
    name: "department",
    component: () => import("./components/Department")
  },
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  },
  {
    path: "/registration",
    alias: "/registration",
    name: "registration",
    component: () => import("./components/Registration")
  },
    {path: "/appointment",
    alias: "/appointment",
    name: "appointment",
    component: () => import("./components/Appointment")
  }
  // { path: '/registration', component: Registration },
  // { path: '/appointment', component: Appointment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
