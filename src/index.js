import './icon.png';
import './style.css';
import addTask from './module/add.js';
import { taskList, userInput, clearBtn } from './module/variables.js';
import removeAll from './module/removeAll.js';
import PopEditandRemove from './module/display.js';

userInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && userInput.value.trim()) { addTask(); }
  localStorage.setItem('task', JSON.stringify(taskList));
});
const Pop = new PopEditandRemove();
Pop.display();
const dots = document.querySelectorAll('#dots');
const edit = document.querySelectorAll('#edit');
const del = document.querySelectorAll('#del');
const TaskStatusupdates = document.querySelectorAll('.update');
dots.forEach((dot) => {
  dot.addEventListener('click', () => Pop.popUp(dot));
});
edit.forEach((item, index) => {
  item.addEventListener('click', () => {
    Pop.edit(taskList[index].description);
    taskList.splice(index, 1);
  });
});
TaskStatusupdates.forEach((update) => update.addEventListener('click', () => Pop.taskStatus(update)));
del.forEach((item) => {
  item.addEventListener('click', () => Pop.removeTask(item));
});
clearBtn.addEventListener('click', () => removeAll());
