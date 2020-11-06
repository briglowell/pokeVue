<template>
  <div class="about text-center">
    <h1>Welcome: {{ user.nickname }}</h1>
    <img class="rounded" :src="user.picture" alt="" />
    <p>{{ user.email }}</p>
  </div>
  <div class="row justify-content-center">
    <my-pokemon v-for="poke in myPokemon" :key="poke.id" :my-pokemon-prop="poke" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import MyPokemon from '../components/MyPokemon.vue'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => {
      pokemonService.getMyPokemon()
    })
    return {
      profile: computed(() => AppState.profile),
      user: computed(() => AppState.user),
      myPokemon: computed(() => AppState.myPokemon)
    }
  },
  components: { MyPokemon }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
