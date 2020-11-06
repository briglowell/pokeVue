<template>
  <div class="home container-fluid">
    <h1>Wild Pokemon</h1>
    <div class="row justify-content-center">
      <wild-pokemon v-for="poke in wildPokemon" :key="poke.id" :pokemon-prop="poke" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import WildPokemon from '../components/WildPokemon.vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      pokemonService.getRandomPokemon()
    })
    return {
      wildPokemon: computed(() => AppState.wildPokemon)
    }
  },
  components: { WildPokemon }
}
</script>
