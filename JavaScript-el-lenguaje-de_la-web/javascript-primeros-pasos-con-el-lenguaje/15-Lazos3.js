const datos = [
    {
      ciudad: "Bogota",
      precio: 500,
    },
    {
      ciudad: "Lima",
      precio: 400,
    },
    {
      ciudad: "Santiago",
      precio: 300,
    },
    {
      ciudad: "MonteVideo",
      precio: 200,
    },
  ];
  
  const presupuestoDisponible = 400;
  let ciudadSelecionada = '';

  //for.. valor incial para un valor final
  for (let index = 0; index < datos.length && ciudadSelecionada == ''; index++) {
    
    if (datos[index].precio <= presupuestoDisponible) {
        ciudadSelecionada =  datos[index].ciudad;
        
    }

  }

  
  if (ciudadSelecionada == '') {
    console.log("No tenemos pasajes disponibles");
  } else {
    console.log("Puedes comprar pasaje para: " + ciudadSelecionada);
  }