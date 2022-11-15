/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));
//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez','1231212',10000);
empleado.asignarClave('12345');
const gerente = new Gerente('Arturo Perez','23333',12000);
const director = new Director('Josue Perez','44444',15000);

console.log(empleado.verBonificacion());
 console.log(gerente.verBonificacion());
 console.log(director.verBonificacion());


console.log(SistemaAutenticacion.login(empleado,'12345'));
