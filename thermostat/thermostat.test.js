const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('return the starting temperature of 20 degrees', () => {
    const thermo = new Thermostat();
    expect(thermo.getTemperature()).toBe(20);
  })

  it('return the temperature 22 after calling .up twice', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    expect(thermo.getTemperature()).toBe(22);
  })

  it('return the temperature 21 after calling .up twice and .down once', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    thermo.down();
    expect(thermo.getTemperature()).toBe(21);
  })

  it('temperature is capped at 25 when psm is on and 35 when psm is off ', () => {
    const thermo = new Thermostat();
    thermo.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermo.up();
    }
    expect(thermo.getTemperature()).toBe(25);
    thermo.setPowerSavingMode(false);
    thermo.up();
    expect(thermo.getTemperature()).toBe(26);

  })

  it('resets the temperature to 20 when reset is called', () => {
    const thermo = new Thermostat();
    thermo.up();
    thermo.up();
    thermo.reset();
    expect(thermo.getTemperature()).toBe(20);
  })
  
})