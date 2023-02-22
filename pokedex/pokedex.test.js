const fetchPokemon = require('./api')

describe('Pokedex', () => {
  it('Can fetch the data for pikachu', () => {
    return fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(25);
        expect(pokemon.name).toEqual('pikachu');
      });
  });

  it('Can fetch the data for charizard', () => {
    return fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        expect(pokemon.name).toEqual('charizard');
      });
  });
});