import {
  taskList, motherUl, clearBtn, userInput,
} from './variables.js';

export default class PopEditandRemove {
  display() {
    let list = '';
    taskList.forEach((task, id) => {
      let completed = '';
      if (task.status === 'completed') {
        completed = 'checked';
      }
      list += `<li class="task">
                <label for="${id}">
                    <input class="update" type="checkbox" id="${id}" ${completed}>
                    <p class="${completed}">${task.description}</p>
                </label>
                <div class="settings">
                    <i id="dots" class="uil uil-ellipsis-h"></i>
                    <ul class="popUp">
                        <li id="edit"><i class="uil uil-pen"></i>Edit</li>
                        <li id="del"><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </li>`;
    });
    motherUl.innerHTML = list || '<span>No tasks today</span>';
    this.checkTask();
  }

       checkTask=() => {
         const taskLength = motherUl.querySelectorAll('.task').length;
         if (taskLength === 0) {
           clearBtn.classList.remove('active');
         } else {
           clearBtn.classList.add('active');
         }
         if (motherUl.offsetHeight >= 200) {
           motherUl.classList.add('overflow');
         } else {
           motherUl.classList.remove('overflow');
         }
       }

       removeTask(index) {
         taskList.splice(index, 1);
         localStorage.setItem('task', JSON.stringify(taskList));
         this.display();
         window.location.reload();
       }

       popUp(selectedTask) { // eslint-disable-line 
         const menuDiv = selectedTask.parentElement.lastElementChild;
         menuDiv.classList.add('show');
         document.addEventListener('click', (e) => {
           if (e.target.tagName !== 'I' || e.target !== selectedTask) {
             menuDiv.classList.remove('show');
           }
         });
       }

       edit(textName) { // eslint-disable-line 
         userInput.value = textName;
         textName = userInput.value;
         userInput.focus();
         userInput.classList.add('active');
       }

       taskStatus(selectedTask) {// eslint-disable-line
         const name = selectedTask.parentElement.lastElementChild;
         if (selectedTask.checked) {
           name.classList.add('checked');
           taskList[selectedTask.id].status = 'completed';
         } else {
           name.classList.remove('checked');
           taskList[selectedTask.id].status = 'pending';
         }
         localStorage.setItem('task', JSON.stringify(taskList));
       }
}