class CuentaCorriente{
    numero;
    #saldo; //Creacion de variable privada para encapsular el comportamiento y la restriccion del acesso de la clase.
    agencia;

    constructor(){
        this.numero ='';
        this.#saldo = 0;
        this.agencia = '';
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
}

export {CuentaCorriente};