export class SistemaAutenticacion{
    static login(usuario,clave){
        return usuario.autenticable(clave);//Interfaz el punto donde existe la comunicacion
    }
}