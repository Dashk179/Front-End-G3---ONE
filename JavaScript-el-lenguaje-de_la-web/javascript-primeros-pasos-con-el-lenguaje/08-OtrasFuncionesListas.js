//Definicion de una lista
const ciudadesDisponibles =  new Array("Bogota","Lima","Santiago","MonteVideo")
//Definicion de una lista de forma abreviada
const paisesDisponibles =["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuela"];

//Diferentes maneras para conocer el tamano de una lista
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//Eliminando el primer elemento 
console.log(ciudadesDisponibles);
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Eliminando el segundo elemento 
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtrar elementos de una lista
const paisesFiltrados = paisesDisponibles.filter((e)=>e=='Brasil');
console.log(paisesFiltrados);
//Ahora filtramos de acuerdo con el tamano del nombre del pais
const paisesFiltradosTamano = paisesDisponibles.filter((e)=>e.length > 6);
console.log(`Paises con el rango mayor a 6 letras: ${paisesFiltradosTamano}`);

//Como convertir una lista en cadena de caracteres(Unificar los elementos a una cadena de caracteres)
console.log(paisesDisponibles.join('-'));//Esto no es una lista se convierte a una variable alfanumerica = Tiene todos los paises unidos

//Ordenar la lista 
console.log(paisesDisponibles.sort());
console.log(paisesDisponibles);

//Conociendo la posicion de un elemento
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);

//Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);