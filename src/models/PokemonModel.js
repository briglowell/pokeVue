export default class Pokemon {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.url = data.url
    this.img = data.sprites.front_default
    this.height = data.height
    this.weight = data.weight
    this.types = data.types
  }
}
