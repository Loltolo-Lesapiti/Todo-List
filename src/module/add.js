import { taskList, userInput } from './variables.js';
import PopEditandRemove from './display.js';

const Pop = new PopEditandRemove();
export default function addTask() {
  const task = {
    id: taskList.length,
    description: userInput.value.trim(),
    completed: false,
  };
  if (userInput.value.trim() !== '') {
    taskList.push(task);
    userInput.value = '';
  }
  window.location.reload();
  Pop.display();
}