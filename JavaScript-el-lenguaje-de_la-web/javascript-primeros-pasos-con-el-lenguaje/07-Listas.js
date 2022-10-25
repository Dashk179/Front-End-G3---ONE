//Definicion de una lista
const ciudadesDisponibles =  new Array("Bogota","Lima","Santiago")
//Definicion de una lista de forma abreviada
const paisesDisponibles =["Colombia","Peru","Chile","Brasil","Argentina"];


    //Agregar un elemento a la lista
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('MonteVideo');

    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);

    //Eliminar un elemento a la lista
    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');

    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);

    //Aceder al primer elemento de la lista
    console.log(paisesDisponibles[0]);
    console.log(ciudadesDisponibles[0]);

    //Elimina elementos con su indice y sustituye en la posicion donde se eliminaron
    paisesDisponibles.splice(1,2,'Venezuela','Panama');
    console.log(paisesDisponibles);