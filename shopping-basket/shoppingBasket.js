const Candy = require('./candy');

class ShoppingBasket{
  constructor(){
    this.cart = [];
  }

  addItem(item){
    this.cart.push(item)
  }

  getTotalPrice(){
    let total = 0;
    if(this.cart.length > 0){
      this.cart.forEach(element => {
        total += element.getPrice();
      });
      return total;
    } else {
      return total;
    }

  }
}

module.exports = ShoppingBasket;