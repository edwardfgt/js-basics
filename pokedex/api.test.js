const fetchPokemon = require('./api');

// using done
describe('fetchPokemon', () => {
  it('returns the correct pokemon from the API', (done) => {
    fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.name).toEqual('pikachu');
        done()
      })
  });
})

//using a promise
describe('fetchPokemon', () => {
  it('returns the correct pokemon from the API', () => {
    return fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.name).toEqual('pikachu');
      })
  });
})