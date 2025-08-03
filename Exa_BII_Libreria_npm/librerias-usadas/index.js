const paqueteSuma = require("2025a-swgr1-ksda-suma");
const respuestaSuma = paqueteSuma.suma(2, 1);
console.log("La respuesta de la suma es: ", respuestaSuma); // Resultado: 3

const paqueteResta = require("2025a-swgr1-ksda-resta");
const respuestaResta = paqueteResta.resta(3, 2);
console.log("La respuesta de la resta es: ", respuestaResta); // Resultado: 1

const paqueteMultiplicacion = require("2025a-swgr1-imtc-multiplicacion");
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
console.log("La respuesta de la multiplicación es: ", respuestaMultiplicacion); // Resultado: 10

const paqueteDivision = require("2025a-swgr1-imtc-division");
const respuestaDivision = paqueteDivision.division(9, 3); // Resultado: 3
console.log("La respuesta de la división es: ", respuestaDivision);