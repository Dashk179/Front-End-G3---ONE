const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";

//Para crear un template necesitas agregar las comillas invertidas : `` esto nos ayuda a interpolar osea que sustituye el contenido
// dentro de lo que hay entre las llaves.
let nombreCompleto = `El nombre completo es: ${nombrePasajero}${apellidoPasajero}`;
console.log(nombreCompleto);


//JavaScript tiene conversion de tipo de datos automaticas por lo cual es muy importante saber cuando asignar nuestas variables
//En caso de que quieras que tus variables sean inmutables tendras que declarar la variable como tipo const
let segundoPasajero = "Diego castillo";
console.log(`El nombre del segundo pasajero es : ${segundoPasajero}`);
segundoPasajero = 1234567;
console.log(`El nombre del segundo pasajero es : ${segundoPasajero}`);