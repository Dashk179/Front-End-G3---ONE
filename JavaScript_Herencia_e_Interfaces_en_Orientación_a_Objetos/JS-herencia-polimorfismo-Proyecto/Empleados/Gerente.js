import { Empleado } from "./empleado.js";


export class Gerente extends Empleado{


    constructor(nombre,dni,salario) {
        super(nombre,dni,salario);
    }

    verBonificacion(bono){
       bono = 5;
       return this._verBonificacion(bono);
    }
}