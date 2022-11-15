import { Empleado } from "./empleado.js";

export class Director extends Empleado{


    constructor(nombre,dni,salario) {
        super(nombre,dni,salario);
    }

    verBonificacion(bono){
        bono = 10;
        return this._verBonificacion(bono);
     }
}