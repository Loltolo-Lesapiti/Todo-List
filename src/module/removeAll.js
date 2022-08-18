import PopEditandRemove from './display.js';
import { taskList } from './variables.js';

const Pop = new PopEditandRemove();

export default function removeAll() {
  const newArray = taskList.filter((task) => task.status !== 'completed');
  localStorage.setItem('task', JSON.stringify(newArray));
  Pop.display();
  window.location.reload();
}