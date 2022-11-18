import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const readTask = () =>{
    const list =  document.querySelector("[data-list]");
    console.log(list);
    const taskList = JSON.parse(localStorage.getItem('task')) || []
    const dates = uniqueDates(taskList);
    
    
    dates.forEach(dates => {
        console.log(dates); 
        const dateMoment = moment(dates,"DD/MM/YYYY");
        list.appendChild(dateElement(dates));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if (diff === 0) {
                list.appendChild(createTask(task));
            }
           
        });
    });

 
}