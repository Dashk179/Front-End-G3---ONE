//Fetch API
// const listaClientes = () => {
//   return fetch("http://localhost:3000/perfil").then(respuesta => {
//     return respuesta.json();
//   })
// };

//Modo mas simplificado del Fetch API
 const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
};
