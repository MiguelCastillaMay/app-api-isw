import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/artistas',
    component: () => import('../components/pages/ArtistasPage.vue')
  },
  {
    path: '/artista/:id',
    component: () => import('../components/pages/ArtistaPage.vue')
  },
  {
    path: '/discos',
    component: () => import('../components/pages/DiscosPage.vue')
  },
  {
    path: '/discos/artista/:id',
    component: () => import('../components/pages/DiscosPage.vue')
  },
  {
    path: '/disco/:id/canciones',
    component: () => import('../components/pages/CancionesPage.vue')
  },
  {
    path: '/canciones',
    component: () => import('../components/pages/CancionesPage.vue')
  },
  {
    path: '/cancion/:id',
    component: () => import('../components/Canciones/CancionOverview.vue')
  },
  {
    path: '/canciones/artista/:artistaId',
    component: () => import('../components/pages/CancionesPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
