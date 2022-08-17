import PopEditandRemove from './display.js';
import { taskList } from './variables.js';

const Pop = new PopEditandRemove();
export default function removeAll() {
  taskList.splice(0, taskList.length);
  localStorage.setItem('task', JSON.stringify(taskList));
  Pop.display();
}