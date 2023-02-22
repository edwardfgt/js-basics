const fetchPokemon = require('./api')

fetchPokemon('charizard')
  .then((pokemon) => {
    console.log(pokemon)})
  .catch(error => console.log('ERROR'));
  