import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from '../views/Home.vue';
import OpenInspections from '../views/OpenInspections.vue';
import InspectionDetail from '@/views/InspectionDetail.vue';
import CompletedInspections from '@/views/CompletedInspections.vue';
import KnowledgeBase from '@/views/KnowledgeBase.vue';
import Settings from '@/views/Settings.vue';
import Login from '@/views/Login.vue';
import Success from '@/views/Success.vue';


const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeComp, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/open-inspections', 
    name: 'OpenInspections', 
    component: OpenInspections, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/inspection/:id', 
    name: 'InspectionDetail', 
    component: InspectionDetail, 
    props: true, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/completed-inspections', 
    name: 'CompletedInspections', 
    component: CompletedInspections, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/knowledge-base', 
    name: 'KnowledgeBase', 
    component: KnowledgeBase, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/settings', 
    name: 'Settings', 
    component: Settings, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login 
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/login' 
  },
  { 
    path: '/2fa', 
    name: 'TwoFactorAuth', 
    component: () => import('@/views/TwoFactorAuth.vue'), 
    meta: { requiresAuth: false } 
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue') 
  },
  { 
    path: '/success', 
    name: 'Success', 
    component: Success 
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  const is2FACompleted = localStorage.getItem('auth') === 'true'; 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else if (!isAuthenticated && to.path !== '/login' && to.path !== '/2fa') {
    next('/login'); // Redirect to login if not authenticated
  } else if (isAuthenticated && to.path === '/login') {
    next('/'); // Redirect to home if already authenticated
  } else {
    next(); // Proceed to route
  }
});

export default router;
