const Candy = require('./candy');

  describe('Candy', () => {
    it("returns the name of the candy added 'Mars'", () => {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getName()).toBe('Mars');
    });

    it("returns the price of the candy added 4.99", () => {
      const candy = new Candy('Mars', 4.99);
      expect(candy.getPrice()).toBe(4.99);
    });
  });