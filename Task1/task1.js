class SpaceShip {
  constructor(name, model, speedPerHour = getDefaultSpeed()) {
    this._name = name;
    this.model = model;
    this.speedPerHour = speedPerHour;
  }
  get name() {
    return `${this._name}`;
  }
  set name(newValue) {
    this._name = newValue;
  }
  shipFloat(speed = SpaceShip.getDefaultSpeed()) {
    let newSpeed = this.speedPerHour + speed;
    return newSpeed;
  }
  static getDefaultSpeed() {
    return 100;
  }
}
class Cutter extends SpaceShip {
  constructor(name, model, speedPerHour, navigationSchemes = 1, satellites = 1) {
    super(name, model, speedPerHour);
    this.wings = 2;
    this.navigationSchemes = navigationSchemes;
    this.satellites = satellites;
  }
  openWings() {
    console.log(`Open all ${this.wings} wings`);
  }
  printNavigationSchemes() {
    console.log(`On board the ship there are  ${this.navigationSchemes} navigationSchemes`);
  }
  printSatellites() {
    console.log(`On board the ship there are ${this.satellites} satellites`);
  }
}
class Corvette extends SpaceShip {
  constructor(name, model, speedPerHour, rockets = 2, windows = 1, lasers) {
    super(name, model, speedPerHour);
    this.rockets = rockets;
    this.windows = windows;
    this.lasers = lasers;
  }
  shipFloat() {
    super.shipFloat();
    console.log(`Speed ${this.speedPerHour + this.rockets * 5}`);
  }
  printWindows() {
    console.log(`On board the ship there are ${this.windows} windows`);
  }
  printLasers() {
    console.log(`On board the ship there are ${this.lasers} windows`);
  }
}
class Frigate extends SpaceShip {
  constructor(name, model, speedPerHour, arsenal, cabins) {
    super(name, model, speedPerHour);
    this.arsenal = arsenal;
    this.bulwark = 'Steel'
    this.cabins = cabins;
  }
  printArsenal() {
    console.log(`On board the ship there is ${this.arsenal}`);
  }
  printCharacteristicBulwark() {
    console.log(`On board the ship there is ${this.bulwark} bulwark`);
  }
  printCountCabins() {
    console.log(`On board the ship there are ${this.cabins} cabins`);
  }
}
const cutter = new Cutter('Arisona', 'X50F5', 120, 5, 3);
const corvette = new Corvette('Discovery ', 'F50F5', 140, 5, 2, 1);
const frigate = new Frigate('Dealt', 'G54L', 20, 'Grenade launcher', 10);
console.log(cutter, corvette, frigate);
