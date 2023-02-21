const searchCandies = require('./search-candy');

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

describe('searchCandies', () => {
  it('returns an array with Mars and Maltsesers when passed Ma & 10', () => {
    expect(searchCandies('Ma',10)).toStrictEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns an array with Mars when passed Ma & 2', () => {
    expect(searchCandies('Ma',2)).toStrictEqual([ 'Mars' ]);
  });

  it('returns an array with Skitties, Skittles, starburst when passed s & 10', () => {
    expect(searchCandies('S',10)).toStrictEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns an array with Skitties & Skittles when passed s & 4', () => {
    expect(searchCandies('S',4)).toStrictEqual([ 'Skitties', 'Skittles' ]);
  });

  // it('returns an array with Mars and Maltsesers when passed ma & 10', () => {
  //   expect(searchCandies('ma', 10)).toStrictEqual([ 'Mars', 'Maltesers' ]);
  // });
});