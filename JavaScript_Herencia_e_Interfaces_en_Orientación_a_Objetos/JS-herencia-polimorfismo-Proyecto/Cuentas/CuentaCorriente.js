import { Cliente } from "../Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta  {
   
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0);//Con la palabra super nos permite llamar cosas del padre
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor,5);//sobre escribimos el metodo padre y le pasamos el valor relacionado con la logica del negocio de la clase
      }

}