<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-5">
      <div class="my-pokemon col-5 border border-dark shadow-lg m-4 rounded text-center bg-white">
        <img v-if="activePokemon.img" :src="activePokemon.img" alt="" class="img-fluid w-75">
        <h1>{{ activePokemon.name }}</h1>
        <div class="d-flex text-center" v-if="activePokemon.types">
          <!-- <h1>{{ activePokemon }}</h1> -->
          <h3>{{ activePokemon.types[0].type.name }} </h3>
          <h3 v-if="activePokemon.types[1]">
            {{ activePokemon.types[1].type.name }}
          </h3>
          <h3 v-if="activePokemon.types[2]">
            {{ activePokemon.types[2].type.name }}
          </h3>
        </div>
        <h3>Meters: {{ activePokemon.height }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'ActivePokemon',
  setup() {
    const route = useRoute()
    onMounted(() => {
      pokemonService.getActivePokemon(route.params.id)
    })

    return {
      activePokemon: computed(() => AppState.activePokemon)
      // activeTypes: computed(() => typeString()),
      // typeString() {
      //   const types = []
      //   AppState.activePokemon.types.forEach(t => types.push(t.type.name))
      //   return types
      // }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
