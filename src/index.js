/* eslint-disable */
import './icon.png';
import './style.css';

let ul= document.querySelector(".dynamicList");
const tasks=[
  {
    id: 1,
    description: "Cooking",
    status: "",
},
{
    id: 2,
    description: "Washing",
    status: "",
}
]
let list = '';
    const completed = tasks.status === 'completed' ? 'checked' : '';
    tasks.forEach((task, id) => {
      list += `<li class="task">
                <label for="${id}">
                    <input type="checkbox" id="${id}" ${completed}>
                    <p>${task.description}</p>
                </label>
                <div class="settings">
                    <i onclick="myWork.popUp(this)" class="uil uil-ellipsis-h"></i>
                </div>
            </li>`;
    });
    ul.innerHTML = list || '<span>No tasks today</span>';