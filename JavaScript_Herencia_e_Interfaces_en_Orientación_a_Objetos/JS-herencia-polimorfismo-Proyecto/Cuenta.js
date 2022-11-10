export class Cuenta{
    #cliente;
    #saldo;

    constructor(cliente,numero,agencia,saldo){
        if (this.constructor == Cuenta) { //Hacemos que la clase sea abstracta, protegerla para que solo sea extensible y no instanciable
            throw new Error('No se debe instanciar objetos de la clase Cuenta');
        }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }
    
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        //Metodo abstracto: existe su definicion pero no hace nada y a la vez lo protegemos
        throw new Error('Debe implementar el metodo retirarDeCuenta en su clase');
      }

    _retirarDeCuenta(valor,comision) {
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }


    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}