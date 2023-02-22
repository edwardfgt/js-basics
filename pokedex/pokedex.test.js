const Pokedex = require('./pokedex')

describe('Pokedex', () => {
  it('Can fetch the data from api and output the elements (mocked)', () => {
    const pokedex = new Pokedex();
    const pikachu = {name: 'pikachu'}
    const charizard = {name: 'charizard'}
    pokedex.catch(pikachu);
    pokedex.catch(charizard);
    expect(pokedex.all()).toEqual(['pikachu', 'charizard'])
  });
});