const ciudadDestino = "Quito";
const ciudadesDisponibles = new Array(
  "Bogota",
  "Lima",
  "Santiago",
  "MonteVideo"
);

let valorPasaje = 0;

switch (ciudadDestino) {
  case "Bogota":
    valorPasaje = 500;
    break;
  case "Lima":
    valorPasaje = 400;
    break;
  case "Santiago":
    valorPasaje = 300;
    break;
  case "MonteVideo":
    valorPasaje = 200;
    break;

  default:
    valorPasaje = 0;
    console.log(`No hay pasajes para la ciudad indicada`);
    break;
}

if (valorPasaje > 0) {
    console.log(`El valor del pasaje es ${valorPasaje}`);
}