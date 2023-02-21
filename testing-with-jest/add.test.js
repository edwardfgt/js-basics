// file: add.test.js
const add = require('./add');
const multiply = require('./multiply');

describe('add', () => {
  it('Adds 2 and 2 together', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('Adds 5 and 0 together', () => {
    expect(add(5, 0)).toBe(5);
  });
});


describe('multiply', () => {
  it('multiplies 5 and 2 together', () => {
    expect(multiply(5, 2)).toBe(10);
  });
});