class Vehicle {
  constructor (model) {
    this._model  = model;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel; // validation could be checked here such as only allowing non numerical values
  }

   set power(newPower)
   {
      this._power = newPower;
   }
  get power() {
    return this._power;
  }
}

// let bike = new Vehicle('bike');

// console.log(bike.model);

// bike.model = "car";

// console.log(bike.model);

module.exports = Vehicle;