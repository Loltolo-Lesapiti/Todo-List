import {taskList,motherUl,clearBtn} from "./variables.js"
export default  class PopEditandRemove{
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
      checkTask=()=> {
        !motherUl.querySelectorAll('.task').length ? clearBtn.classList.remove('active') : clearBtn.classList.add('active');
        motherUl.offsetHeight >= 200 ? motherUl.classList.add('overflow') : motherUl.classList.remove('overflow');
      }
 
    removeTask(index) {
    taskList.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(taskList));
    this.display();
    window.location.reload();
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
}