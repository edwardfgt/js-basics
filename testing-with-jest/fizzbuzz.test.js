const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('outputs Fizz when 3 is passed', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('outputs Buzz when 5 is passed', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('outputs 8 when 8 is passed', () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  it('outputs FizzBuzz when 15 is passed', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('outputs Fizz when 18 is passed', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  });

  it('outputs Buzz when 20 is passed', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  });
});