class Thermostat{
  constructor(){
    this.temperature = 20
    this.limit = 32
  }

  reset(){
    this.temperature = 20
  }

  up(){
    if(this.temperature < this.limit){
      this.temperature += 1;
    }
  }

  down(){
    if(this.temperature > 10){
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(value){
    if(value === true){
      this.limit = 25;
    } else if (value === false){
      this.limit = 32;
    }
  }

  getTemperature(){
    return this.temperature;
  }
}

module.exports = Thermostat;