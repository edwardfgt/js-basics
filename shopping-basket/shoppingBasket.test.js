const ShoppingBasket = require('./shoppingBasket');

describe('ShoppingBasket', () => {
  it('returns 0 as initial total price', () => {
    const shoppingbasket = new ShoppingBasket();
    expect(shoppingbasket.getTotalPrice()).toBe(0);
  })

  it('returns 4.99 as total price when one object is added', () => {
    const shoppingbasket = new ShoppingBasket();
    const marsDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
    shoppingbasket.addItem(marsDouble);
    expect(shoppingbasket.getTotalPrice()).toBe(4.99);
  })

  it('returns 12.97 as total price when multiple objects are added', () => {
    const shoppingbasket = new ShoppingBasket();
    const marsDouble = { getName: () => 'Mars', getPrice: () => 4.99 };
    const skittleDouble = { getName: () => 'Skittle', getPrice: () => 3.99 };
    shoppingbasket.addItem(marsDouble);
    shoppingbasket.addItem(skittleDouble);
    shoppingbasket.addItem(skittleDouble);
    expect(shoppingbasket.getTotalPrice()).toBe(12.97);
  })
})

//  const nameDouble = { toLowerCase: () => 'james' };