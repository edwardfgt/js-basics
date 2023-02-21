class Candy {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getName(){
    return this.name;
  }
}

class ShoppingBasket {
  constructor(){
    this.candy = []
  }

  getItems(){
    return this.candy;
  }

  getLength(){
    return this.candy.length;
  }

  addItem(newCandy){
    this.candy.push(newCandy);
  }

  getTotalPrice(){
    let total = 0;
    if(this.candy.length > 0){
      this.candy.forEach(element => {
        total += element.getPrice();
      });
      return total;
    } else {
      return total;
    }

  }
}

const candy = new Candy('Mars', 4.99);
console.log(candy.getName());
console.log(candy.getPrice());

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice());
basket.addItem(candy);
console.log(basket.getTotalPrice());
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice());