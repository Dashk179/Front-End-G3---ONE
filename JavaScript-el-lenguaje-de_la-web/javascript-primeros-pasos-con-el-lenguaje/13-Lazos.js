const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "MonteVideo"
);

const precioCiudad = new Array(500,400,300,200);
const presupuestoDisponible = 210;
let i = 0; 

//While ... 0 o mas veces
//Do while...  1 0 mas  veces
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++
}
if (i == ciudadesDisponibles.length) {
    console.log("No tenemos pasajes disponibles");
}else{
console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);
}