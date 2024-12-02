import { createWebHistory, createRouter } from "vue-router";

// import Appointment from './components/Appointment.vue'
// import Login from './components/Login.vue'
// import Registration from './components/Registration.vue'

const routes = [
  // { path: '/', component: Login },
  {
    path: "/",
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
  {
    path: "/profile",
    alias: "/profile",
    name: "UserProfile",
    component: () => import("./components/UserProfile")
  },
    {path: "/appointment",
    alias: "/appointment",
    name: "Appointment",
    component: () => import("./components/Appointment")
  },
    {path: "/doctor",
    alias: "/doctor",
    name: "Doctor",
    component: () => import("./components/Doctor")
  },
  {
    path: "/:department", // Dynamically match any department like cardiology, neurology, etc.
    name: "doctorDepartment",
    component: () => import("./components/Doctor"),
    props: true, // Pass route params to the component
  },
  // { path: '/registration', component: Registration },
  // { path: '/appointment', component: Appointment }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard to remove the trailing slash
router.beforeEach((to, from, next) => {
  if (to.path.endsWith('/')) {
    next({ path: to.path.slice(0, -1), query: to.query, hash: to.hash });
  } else {
    next();
  }
});


export default router;
