//Palabra const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";



//Palabra var
//Espacio de memoria que puede cambiar durante la ejecucion del programa
//El alcance de la variable var es total en cualquier punto principal del programa
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

//bloque

{
    //Solo esta en el alcance del bloque
     //Palabra let
    //Espacio de memoria que puede cambiar durante la ejecucion del programa
    let nombrePasajeroCompleto = nombrePasajero + " " + apellidoPasajero;
    console.log(nombrePasajeroCompleto);
}
console.log(nombrePasajeroCompleto);
console.log(nombreCompletoDelPasajero);
