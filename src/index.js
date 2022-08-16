import addTask from "./add.js"
import {taskList,userInput,clearBtn} from "./variables.js"
import removeAll from "./removeAll.js"
import PopEditandRemove from "./DisplayAddandRemove.js"
userInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && userInput.value.trim()) { addTask(); }
  localStorage.setItem('task', JSON.stringify(taskList));
});
const Pop= new PopEditandRemove();
Pop.display();
const dots= document.querySelectorAll("#dots");
const edit= document.querySelectorAll("#edit");
const del= document.querySelectorAll("#del");
dots.forEach(dot=>{
    dot.addEventListener("click",()=>Pop.popUp(dot));
})
edit.forEach(item=>{
    item.addEventListener("click",()=>Pop.editTask(userInput.value));
})
del.forEach(item=>{
    item.addEventListener("click",()=>Pop.removeTask(item));
})
clearBtn.addEventListener('click', () =>removeAll());



