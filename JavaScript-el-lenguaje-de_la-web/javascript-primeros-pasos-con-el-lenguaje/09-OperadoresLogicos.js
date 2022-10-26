//Operadores de comparacion
const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array(
    "Bogota",
    "Lima",
    "Santiago",
    "MonteVideo"
);

console.log(`Verificando pasajes para: ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    //  console.log('Pasaje disponible para venta');
} else {
    // console.log('Ciudad No disponible para venta');
}

let valorPasaje = 1000;

//Aqui hace una conversion de datos ya que compara con un =.
if ((valorPasaje = "1000")) {
    console.log("El pasaje vale 1000");
}

//En este caso el resultado es diferente ya que al comparar con un ===
//el dato tiene que ser necesariamente igual al tipo de dato de la variable declarada por lo cual esta comparando una cadena de caracteres con un alfanumerico
/* if (valorPasaje === 1000) {
    console.log('El pasaje vale 1000');
} */

//Operadores logicos
// Y (AND) - O (OR) - NO (NOT)
// AND = && -Se deben cumplir las dos condiciones
// OR = || - Se debe cumplir al menos una condicion
// NOT =  ! - No se cumple la condicion
let edadPasajero = 19;
let estaAcompanado = true;
console.log(`Verificando pasajes para: ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 &&
    (edadPasajero >= 18 || estaAcompanado)
) {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad No disponible para viajas o el pasajero no cumple las reglas");
}

//Aplicando logica negativa
 edadPasajero = 17;
 estaAcompanado = false;
if (!(ciudadesDisponibles.indexOf(ciudadDestino) >= 0 &&
    (edadPasajero >= 18 || estaAcompanado))) {
    console.log("Ciudad No disponible para viajas o el pasajero no cumple las reglas");
} else {
    console.log("Pasaje disponible para venta");
}
