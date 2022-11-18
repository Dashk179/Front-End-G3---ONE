import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { readTask } from "./readTask.js";

export const addTask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[ data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if (value === '' || date === '') {
    return;
  }
  input.value = "";
  calendar.value = "";

  const complete = false;

  const taskObjt = {
    value,
    dateFormat,
    complete,
    id: uuid.v4()
    };

  list.innerHTML = '';  

  const taskList = JSON.parse(localStorage.getItem("task")) || []; //En caso de que sea null se le da un valor por defecto
  taskList.push(taskObjt);

  localStorage.setItem("task", JSON.stringify(taskList));

  readTask();
};

//Arrow function o funciones anonimas
export const createTask = ({ value, dateFormat,complete,id }) => {
  const task = document.createElement("li");
    task.classList.add("card");

  //Backticks
  const taskContent = document.createElement("div");

  const check = checkComplete(id);

  if (complete) {
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }
  const titleTask = document.createElement("span");
   titleTask.classList.add("task");
   titleTask.innerText = value;
   taskContent.appendChild(check);
   taskContent.appendChild(titleTask);

  // task.innerHTML = content;
  const dateElement = document.createElement("span");
    
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));

  return task;
};
