/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Cuenta } from './Cuenta.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import {CuentaCorriente} from './CuentaCorriente.js';
import { CuentaNomina } from './CuentaNomina.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente( cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9983','001',0);

const cuentaNominaLeonardo = new CuentaNomina(cliente,'11','22',0);
cuentaNominaLeonardo.depositoEnCuenta(250);
console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());
/*
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);


cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());
*/



