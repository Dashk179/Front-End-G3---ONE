import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacon = async() =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "/screens/error.html"
    }
    
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try{
        const perfil = await clientServices.detalleCliente(id)
        console.log(perfil);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }
        else{
            throw new Error();
        }
        }catch(error){
        window.location.href = "/screens/error.html"
    }

   
      }

obtenerInformacon();

formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre ,"-",email);
    clientServices.actualizarCliete(nombre,email,id).then(()=>{
        window.location.href = "/screens/edicion_concluida.html"
    })
})