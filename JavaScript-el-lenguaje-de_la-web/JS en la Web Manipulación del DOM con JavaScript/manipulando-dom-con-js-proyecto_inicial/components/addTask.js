import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) =>{
    const list = document.querySelector("[data-list]");
    const task = createTask(evento);
    list.appendChild(task);
  }


  
  //Arrow function o funciones anonimas
  const createTask = (evento) => {
     evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("task")) || [];//En caso de que sea null se le da un valor por defecto
    console.log(taskList);
    const input = document.querySelector("[ data-form-input]");
    const value = input.value;
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    console.log(dateFormat);
    
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
  
    //Backticks
    const taskContent = document.createElement("div");
    
    const taskObjt = {
      value,
      dateFormat
    }
  
    taskList.push(taskObjt);
  
    localStorage.setItem("task",JSON.stringify(taskList));
  
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const content = `
     
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
  
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    
    return task;
  };
  
