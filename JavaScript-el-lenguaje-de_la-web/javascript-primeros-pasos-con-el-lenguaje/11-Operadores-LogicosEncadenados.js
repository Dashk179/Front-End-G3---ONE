const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array(
    "Bogota",
    "Lima",
    "Santiago",
    "MonteVideo"
);

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para: ${ciudadDestino}`);

// A && B && C

//Paquete para solteros solo en caso de que cumpla las 4 condiciones
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 &&
    edadPasajero >= 18 && 
    tienePasaporte && 
    !estaCasado)
 {
    console.log("Paquete para soltero disponible para venta");
} else {
    console.log("Ciudad No disponible para viajes o el pasajero no cumple las reglas");
}