import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
const btn = document.querySelector("[data-form-btn]");


const addTask = (evento) =>{
  const list = document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task);
}

//Arrow function o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[ data-form-input]");
  const value = input.value;
  const calendar = document.querySelector("[data-form-date]");
  const date = calendar.value;
  const dataFormat = moment(date).format('DD/MM/YYYY');
  console.log(dataFormat);
  
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  //Backticks
  const taskContent = document.createElement("div");
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
  dateElement.innerHTML = dataFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  
  return task;
};

console.log(btn);

btn.addEventListener("click", addTask);




