import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(cliente, numero, agencia,saldo) {
        super(cliente,numero,agencia,saldo);//Con la palabra super nos permite llamar cosas del padre
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,2)//sobre escribimos el metodo padre y le pasamos el valor relacionado con la logica del negocio de la clase
    }
}