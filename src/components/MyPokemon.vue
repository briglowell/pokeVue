<template>
  <div class="my-pokemon col-3 border border-dark shadow-lg m-4 rounded text-center bg-white">
    <h1>{{ myPokemon.name }}</h1>
    <router-link :to="{name: 'ActivePokemon',params: {id: myPokemon._id}}">
      <img :src="myPokemon.img" alt="" class="img-fluid w-75">
    </router-link>

    <button class="btn btn-danger btn-block mb-3" @click="releasePokemon()">
      Release
    </button>
    <!-- {{ myPokemon }} -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'MyPokemon',
  props: {
    myPokemonProp: Object
  },
  setup(props) {
    return {
      myPokemon: computed(() => props.myPokemonProp),
      releasePokemon() {
        pokemonService.releasePokemon(this.myPokemon._id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
