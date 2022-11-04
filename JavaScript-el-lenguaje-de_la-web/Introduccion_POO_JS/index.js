//Importamos clases
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";

const cuentaDeIvan = new CuentaCorriente();

let saldo = cuentaDeIvan.verSaldo();
console.log(`El saldo actual es  ` + saldo)

cuentaDeIvan.depositoEnCuenta(100);
saldo = cuentaDeIvan.verSaldo();
console.log(`El saldo actual es  ` + saldo) 

cuentaDeIvan.retirarDeCuenta(100);
saldo = cuentaDeIvan.verSaldo();
console.log(`El saldo actual es  ` + saldo) 



const cliente1 = new Cliente(); // Se crea el objeto cliente 1 con la clase cliente y se agregan sus atributos del cliente 1
cliente1.nombreCliente = "Arturo";
cliente1.dniCliente = "1213";
cliente1.rfcCliente = "PENASDFJASDJ123";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "1234567";
cuentaCorriente1.saldo = "100000"
cuentaCorriente1.agencia = "BBVA";


const cliente2 = new Cliente(); // Se crea el objeto cliente 1 con la clase cliente y se agregan sus atributos del cliente 1
cliente2.nombreCliente = "Karen";
cliente2.dniCliente = "12134";
cliente2.rfcCliente = "KARENSDFJASDJ123";

const cuentaCorriente2 = new CuentaCorriente()
cuentaCorriente2.numero = "12345676";
cuentaCorriente2.saldo = 0;
cuentaCorriente2.agencia = "BBVA";

const cliente3 = new Cliente(); // Se crea el objeto cliente 1 con la clase cliente y se agregan sus atributos del cliente 1
cliente3.nombreCliente = "Leonardo";
cliente3.dniCliente = "12137";
cliente3.rfcCliente = "LEOSSDFJASDJ123";

const cuentaCorriente3 = new CuentaCorriente()
cuentaCorriente3.numero = "12345677";
cuentaCorriente3.saldo = "1000007"
cuentaCorriente3.agencia = "BBVA";



/*
console.log(cliente1);//Se imprime toda la informacion del cliente 1
console.log(cuentaCorriente1);
console.log(cliente2);//Se imprime toda la informacion del cliente 2
console.log(cuentaCorriente2);
console.log(cliente3);//Se imprime toda la informacion del cliente 3
console.log(cuentaCorriente3);*/

/*Depositos en cuenta corriente 2
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(300);
console.log(cuentaCorriente2.saldo);*/

