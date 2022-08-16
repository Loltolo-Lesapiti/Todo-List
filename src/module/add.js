import {taskList,userInput} from "./variables.js";
import PopEditandRemove from "./DisplayAddandRemove.js"
const Pop= new PopEditandRemove();
export default function addTask(){
    const task = {
      id: taskList.length,
      description: userInput.value.trim(),
      completed: false,
    }
    if (userInput.value.trim() !== '') {
      taskList.unshift(task);
      userInput.value = '';
    }
    Pop.display();
    window.location.reload();
  }