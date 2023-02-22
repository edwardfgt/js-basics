const fetchPokemon = require('./api')

fetchPokemon('charizard')
  // .then((pokemon) => {
  //   console.log(pokemon)})
  // .catch(error => console.log('ERROR'));
  

  class Pokedex {
    constructor(){
      this.pokemon = []
    }

    catch(newPokemon) {
      this.pokemon.push(newPokemon.name);
    }

    all(){
      return this.pokemon
    }
  }

  module.exports = Pokedex;