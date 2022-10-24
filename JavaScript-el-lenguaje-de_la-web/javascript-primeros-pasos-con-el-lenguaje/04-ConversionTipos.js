//Tipos de datos


//Alfanumericos
//let nombrePasajero = "Pedo Silva";
//nombrePasajero = "Ramon Silva";


//Numerico
let valorBoleto = 1000;
const impuestoAeroPuerto =100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Logicos (true,false)
let boletoActivo = true;

//Operaciones Aritmeticas
//Sumas
let totalBoletos = valorBoleto  + porcentajeTasaEmbarque + gestionAgencia;


//orden de presedencia
//()
// * y /
// + y -
let totalBoletosForma2 = (valorBoleto  + impuestoAeroPuerto) + (valorBoleto + impuestoAeroPuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletosForma2);

//Concatenacion de texto
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";
let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = '1000' + '12';
let multiplicacion = parseInt('1000') / parseFloat('10');
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASAS');
console.log(noEsUnNumero);