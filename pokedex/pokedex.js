const fetchPokemon = require('./api')

fetchPokemon('pikachu')
  .then((pokemon) => {
    console.log(pokemon)})
  .catch(error => console.log('ERROR'));
  