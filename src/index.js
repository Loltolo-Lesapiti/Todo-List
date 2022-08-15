import './icon.png';
import './style.css';

const ul = document.querySelector('.dynamicList');
const tasks = [
  {
    id: 1,
    description: 'Cooking',
    status: '',
  },
  {
    id: 2,
    description: 'Washing',
    status: '',
  },
];
const display = () => {
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
  return list;
};

ul.innerHTML = display() || '<span>Nothing Scheduled Today</span>';