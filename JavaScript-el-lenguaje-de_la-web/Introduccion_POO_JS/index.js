//Importamos clases
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

//Cliente Ivan
const cliente = new Cliente();
cliente.nombreCliente = 'Ivan';
cliente.dniCliente = '14222';
cliente.rfcCliente = 'Iva1n21312hs';


const cuentaDeIvan = new CuentaCorriente();
cuentaDeIvan.numero = "1";
cuentaDeIvan.agencia = "Bancomer";
cuentaDeIvan.cliente = cliente;
console.log(cuentaDeIvan);

let saldo = cuentaDeIvan.verSaldo();
console.log(`El saldo actual es  ` + saldo)

cuentaDeIvan.depositoEnCuenta(100);
saldo = cuentaDeIvan.verSaldo();
console.log(`El saldo actual de  Ivan es de: `+ saldo) ;


//Cliente Arturo
const cliente2 = new Cliente(); // Se crea el objeto cliente 1 con la clase cliente y se agregan sus atributos del cliente 1
cliente2.nombreCliente = "Arturo";
cliente2.dniCliente = "1213";
cliente2.rfcCliente = "PENASDFJASDJ123";

const cuentaArturo = new CuentaCorriente();
cuentaArturo.numero = "1234567";
cuentaArturo.agencia = "BBVA";
cuentaArturo.cliente = cliente2;
let saldoArturo = cuentaArturo.verSaldo();
console.log("El saldo actual de Arturo es de: " + saldoArturo);
 
//Transferir de cuenta Ivan a Cuenta Arturo
cuentaDeIvan.transferirParaCuenta(50,cuentaArturo);
saldoArturo = cuentaArturo.verSaldo();
console.log("El saldo actual de Arturo es de: " + saldoArturo);
console.log("El saldo actual de Ivan es de: " + saldoArturo);


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

