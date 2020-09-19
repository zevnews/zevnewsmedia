//const Retangulo = require('./quadrado.js')

// Instantiate User:
//let quad = new Retangulo(10,20);
//console.log(quad.area);

const Conversor = require('./conversor.js');

let carro = new Conversor();
carro.unit = "hp";
carro.medida = 200;

console.log("Potencia em  kw" + carro.potencia);


