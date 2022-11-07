import { Cliente } from "./Cliente.js";

class CuentaCorriente{
    #cliente;
    numero;
    agencia;
    #saldo; //Creacion de variable privada para encapsular el comportamiento y la restriccion del acesso de la clase.


    set setcliente(valor){ //Vamos a protejer nuestro atributo cliente para asi no danar el atributo y sus datos, se asiganara un valor solo en caso de que la referencia sea de la clase cliente.
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }
       
    }

    get getcliente(){
        return this.#cliente;
    }
    constructor(){
        this.#cliente = null;//Se asigna null ya que hara referencia a un  objeto creado apartir  de  la clase cliente.
        this.numero =''; 
        this.agencia = '';
        this.#saldo = 0;
    }

    depositoEnCuenta(valor){
        if (valor>0) {
            this.#saldo += valor;
            return this.#saldo;
        }
        
    }
    retirarDeCuenta(valor){
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return this.#saldo;
        }
        }

        verSaldo(){
            return this.#saldo; //Con este metodo podemos consultar los datos sin la necesidad de acceder a las cosas internas
        }

        transferirParaCuenta(valor,cuentaDestino)//valor = Parametro por valor /  cuentaDestino = Parametro por referencia
        {
            this.retirarDeCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor);
        }
}

export {CuentaCorriente};