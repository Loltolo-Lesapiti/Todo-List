/* eslint-disable */
import './icon.png';
import './style.css';

const taskList = JSON.parse(localStorage.getItem('task')) || [];
const userInput = document.querySelector('.userInput');
const motherUl = document.querySelector('.dynamicList');
const clearBtn = document.querySelector('.clearBtn');
class ToDo {
 
  addTask() {
    const task = {
      id: taskList.length,
      description: userInput.value.trim(),
      completed: false,
    }
    if (userInput.value.trim() !== '') {
      taskList.unshift(task);
      userInput.value = '';
    }
    myWork.display();
  }

  display() {
    let list = '';
    const completed = taskList.status === 'completed' ? 'checked' : '';
    taskList.forEach((task, id) => {
      list += `<li class="task">
                <label for="${id}">
                    <input type="checkbox" id="${id}" ${completed}>
                    <p class="${completed}">${task.description}</p>
                </label>
                <div class="settings">
                    <i onclick="popUp(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="popUp">
                        <li onclick='editTask(${id}, "${task.description}")'><i class="uil uil-pen"></i>Edit</li>
                        <li onclick='removeTask(${task.id})'><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </li>`;
    });
    motherUl.innerHTML = list || '<span>No tasks today</span>';
    this.checkTask();
  }

  checkTask() {
    !motherUl.querySelectorAll('.task').length ? clearBtn.classList.remove('active') : clearBtn.classList.add('active');
    motherUl.offsetHeight >= 200 ? motherUl.classList.add('overflow') : motherUl.classList.remove('overflow');
  }

  removeTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(taskList));
    this.display();
  }

  popUp(selectedTask) {
    const menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add('show');
    document.addEventListener('click', (e) => {
      if (e.target.tagName !== 'I' || e.target !== selectedTask) {
        menuDiv.classList.remove('show');
      }
    });
  }

  editTask(text) {
    userInput.value = text;
    userInput.focus();
    userInput.classList.add('active');
  }

  removeAll() {
    taskList.splice(0, taskList.length);
    localStorage.setItem('task', JSON.stringify(taskList));
    myWork.display();
  }
}
const myWork = new ToDo();
userInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && userInput.value.trim()) { myWork.addTask(); }
  localStorage.setItem('task', JSON.stringify(taskList));
});
clearBtn.addEventListener('click', () => myWork.removeAll());

myWork.display();
