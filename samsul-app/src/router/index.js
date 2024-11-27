import { createRouter, createWebHistory } from 'vue-router';
import Beranda from '../views/AppBeranda.vue';
import Layanan from '../views/AppLayanan.vue';
import Tentang from '../views/AppTentang.vue';
import '../assets/styles.css';

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/layanan', name: 'Layanan', component: Layanan },
  { path: '/tentang', name: 'Tentang', component: Tentang }
];

const router = createRouter({
  // Change this line to use import.meta.env for Vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
