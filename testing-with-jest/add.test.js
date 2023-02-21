// file: add.test.js
const add = require('./add')

describe('add', () => {
  it('Adds 2 and 2 together', () => {
    expect(add(2, 2)).toBe(4);
  });
});