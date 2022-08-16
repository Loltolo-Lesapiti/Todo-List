import './icon.png'
import './style.css'
import addTask from "./module/add.js"
import {taskList,userInput,clearBtn} from "./module/variables.js"
import PopEditandRemove from "./module/DisplayAddandRemove.js"
userInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && userInput.value.trim()) { addTask(); }
  localStorage.setItem('task', JSON.stringify(taskList));
});
const Pop= new PopEditandRemove();
Pop.display();
const dots= document.querySelectorAll("#dots");
const edit= document.querySelectorAll("#edit");
const del= document.querySelectorAll("#del");
dots.forEach(dot=>dot.addEventListener("click",()=>Pop.popUp(dot)));
edit.forEach(item=>item.addEventListener("click",()=>Pop.editTask(userInput.value)));
del.forEach(item=>item.addEventListener("click",()=>Pop.removeTask(item)));
clearBtn.addEventListener('click', () =>removeAll());



