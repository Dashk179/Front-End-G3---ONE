const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",(evento) => completeTask(evento,id));
    return i;
  };
  
  //Immediately invoked function expresion IIFE
   const completeTask = (evento,id) => {
      const element = evento.target;//Aqui marcamos el objetivo para que sea unicamente al que esta apuntando
      element.classList.toggle('fas');
      element.classList.toggle('completeIcon');
      element.classList.toggle('far');
      const task = JSON.parse(localStorage.getItem('task'));
      const index = task.findIndex(item => item.id === id);
      console.log(index);
      task[index]["complete"] = !task[index]["complete"];
      localStorage.setItem('task',JSON.stringify(task))
  };
  export default checkComplete;