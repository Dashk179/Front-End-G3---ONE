const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array(
    "Bogota",
    "Lima",
    "Santiago",
    "MonteVideo"
);

let edadPasajero = 19;
let estaAcompanado = false;

console.log(`Verificando pasajes para: ${ciudadDestino}`);
//Verificamos que el pasajero cumple las reglas

if (edadPasajero >= 18 || estaAcompanado) {
    //Evaluamos si la ciudad esta disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    console.log("Pasaje disponible para venta")
} else {
    console.log("Ciudad No disponible para viajar");
}
}else{
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log("Pasaje disponible para venta")
    }else{
        console.log('Pasajero no cumple las reglas');
    }
    
}

