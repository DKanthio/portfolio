import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectView from '@/views/ProjectView.vue'; 
import Contact from '@/views/Contact.vue';
import Introuvable from '@/views/Introuvable.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/apropos', name: 'AboutView', component: AboutView },
  { path: '/projets', name: 'ProjectView', component: ProjectView },
  { path: '/contact', name: 'Contact', component: Contact},
  { path: '/:catchAll(.*)', name: 'Introuvable', component: Introuvable }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
