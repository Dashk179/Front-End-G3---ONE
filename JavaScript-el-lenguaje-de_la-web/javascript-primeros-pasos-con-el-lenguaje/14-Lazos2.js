const datos = [
  {
    ciudad: "Bogota",
    precio: 500,
  },
  {
    ciudad: "Lima",
    precio: 400,
  },
  {
    ciudad: "Santiago",
    precio: 300,
  },
  {
    ciudad: "MonteVideo",
    precio: 200,
  },
];

const presupuestoDisponible = 400;
let i = 0;

//While ... 0 o mas veces
//Do while...  1 0 mas  veces
let ciudadSelecionada = '';
do{
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSelecionada =  datos[i].ciudad;
        break;
    }
    i++;
}
while (i < datos.length && ciudadSelecionada == '') {

if (ciudadSelecionada == '') {
  console.log("No tenemos pasajes disponibles");
} else {
  console.log("Puedes comprar pasaje para: " + datos[i].ciudad);
}}