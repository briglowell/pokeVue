import Axios from 'axios'
export const pokeApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 10000
})
export const sandApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 10000
})

// NOTE remember to add the auth headers to any axios instance you need auth on.
export const setBearer = function(bearer) {
  pokeApi.defaults.headers.authorization = bearer
  sandApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  pokeApi.defaults.headers.authorization = ''
  sandApi.defaults.headers.authorization = ''
}
