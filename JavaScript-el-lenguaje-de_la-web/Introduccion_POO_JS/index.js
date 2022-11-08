//Importamos clases
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

//Cliente Ivan
const cliente = new Cliente('Ivan_Hernandez','14222','Iva1n21312hs');
const cliente2 = new Cliente("Arturo_Perez", "1213","PENASDFJASDJ123");

console.log(cliente);
console.log(cliente2);

const cuentaDeIvan = new CuentaCorriente(cliente,'1','Bancomer');
const cuentaArturo = new CuentaCorriente(cliente2,"1234567","BBVA");

console.log(cuentaDeIvan.cliente);
console.log(cuentaArturo.cliente);

let saldo_Ivan = cuentaDeIvan.verSaldo();
console.log(`El saldo actual es  ` + saldo_Ivan)

cuentaDeIvan.depositoEnCuenta(100);
saldo_Ivan = cuentaDeIvan.verSaldo();
console.log(`El saldo actual de  Ivan es de: `+ saldo_Ivan) ;


//Cliente Arturo
 1
console.log(cuentaDeIvan.cliente);


let saldoArturo = cuentaArturo.verSaldo();
console.log("El saldo actual de Arturo es de: " + saldoArturo);
 
//Transferir de cuenta Ivan a Cuenta Arturo
cuentaDeIvan.transferirParaCuenta(50,cuentaArturo);
saldoArturo = cuentaArturo.verSaldo();
saldo_Ivan = cuentaDeIvan.verSaldo();
console.log(`El saldo actual de ${cliente2.nombreCliente} es de: ` + saldoArturo);
console.log(`El saldo actual de  ${cliente.nombreCliente} es de: ` + saldo_Ivan);

console.log(CuentaCorriente.cantidadCuentas);

