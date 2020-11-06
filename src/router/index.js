import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
import ActivePokemon from '../pages/ActivePokemonPage.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/active/:id',
    name: 'ActivePokemon',
    component: ActivePokemon
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  }

]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
