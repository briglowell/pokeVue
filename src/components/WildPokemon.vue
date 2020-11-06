<template>
  <div class="wild-pokemon col-3 border border-dark shadow-lg m-4 rounded text-center bg-white">
    <h1>{{ wildPokemon.name }}</h1>
    <img :src="wildPokemon.sprites.front_default" alt="" class="img-fluid w-75">
    <button class="btn btn-success btn-block mb-3" @click="catchPokemon()">
      Catch
    </button>
    <!-- {{ wildPokemon }} -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { pokemonService } from '../services/PokemonService'
import router from '../router'
export default {
  name: 'WildPokemon',
  props: {
    pokemonProp: Object
  },
  setup(props) {
    return {
      wildPokemon: computed(() => props.pokemonProp),
      async catchPokemon() {
        pokemonService.catchPokemon(this.wildPokemon.id)
        await router.push({ name: 'Profile' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
