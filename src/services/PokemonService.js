/* eslint-disable no-console */
import { AppState } from '../AppState'
import Pokemon from '../models/PokemonModel'
import { pokeApi, sandApi } from './AxiosService'

class PokemonService {
  async getRandomPokemon() {
    for (let i = 0; i < 9; i++) {
      if (AppState.wildPokemon.length > 8) {
        break
      }
      const rand = Math.floor(Math.random() * 850 + 1)
      const res = await pokeApi.get('pokemon/' + rand)
      AppState.wildPokemon.push(res.data)
      console.log(rand)
    }
  }

  async catchPokemon(id) {
    try {
      const caughtPokemon = new Pokemon(AppState.wildPokemon.find(p => p.id === id))
      const index = AppState.wildPokemon.findIndex(p => p.id === id)
      AppState.wildPokemon.splice(index, 1)
      console.log(caughtPokemon)
      await sandApi.post('bros/pokemon', caughtPokemon)
    } catch (error) {
      console.error(error)
    }
  }

  async getMyPokemon() {
    try {
      const res = await sandApi.get('bros/pokemon')
      AppState.myPokemon = res.data.data
      console.log(AppState.myPokemon)
      console.log(AppState.profile)
      console.log(AppState.user)
    } catch (error) {
      console.error(error)
    }
  }

  async releasePokemon(id) {
    try {
      sandApi.delete('bros/pokemon/' + id)
      const index = AppState.myPokemon.findIndex(p => p._id === id)
      AppState.myPokemon.splice(index, 1)
    } catch (error) {
      console.error(error)
    }
  }

  getActivePokemon(id) {
    AppState.activePokemon = AppState.myPokemon.find(p => p._id === id)
  }
}

export const pokemonService = new PokemonService()
