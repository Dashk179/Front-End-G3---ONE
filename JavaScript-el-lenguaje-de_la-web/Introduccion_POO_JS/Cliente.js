class Cliente {//Definicion de clase
    nombreCliente;
    dniCliente;
    rfcCliente;

    constructor(nombreCliente,dniCliente,rfcCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rfcCliente = rfcCliente;
    }
}

export {Cliente};