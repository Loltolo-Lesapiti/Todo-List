let taskList=JSON.parse(localStorage.getItem("task")) || [];
let userInput= document.querySelector(".userInput");
let motherUl= document.querySelector(".dynamicList");
let clearBtn= document.querySelector(".clearBtn");
class ToDo{

    //Add method

    addTask(){
        const task={
            id:taskList.length,
            description:userInput.value.trim(),
            completed: false
        }
        //check is the user input is valid
        if(userInput.value.trim()!==""){
           taskList.unshift(task);
           userInput.value="";
        }
        myWork.display();
    }
        // Display the added task.

        display(){
            let list="";
            let completed = taskList.status == "completed" ? "checked" : "";
            taskList.forEach((task,id) => {
                list += `<li class="task">
                <label for="${id}">
                    <input type="checkbox" id="${id}" ${completed}>
                    <p class="${completed}">${task.description}</p>
                </label>
                <div class="settings">
                    <i onclick="myWork.popUp(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="popUp">
                        <li onclick='myWork.editTask(${id}, "${task.description}")'><i class="uil uil-pen"></i>Edit</li>
                        <li onclick='myWork.removeTask(${task.id})'><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </li>`;    
            })
            motherUl.innerHTML = list || `<span>No tasks today</span>`;
            this.checkTask();
        }

        // check and uncheck.
        checkTask(){
        let tasks= motherUl.querySelectorAll(".task");
        !tasks.length ? clearBtn.classList.remove("active") : clearBtn.classList.add("active");
        motherUl.offsetHeight >= 200 ? motherUl.classList.add("overflow") : motherUl.classList.remove("overflow");
        }
       
        // Remove method.
        removeTask(index){
            taskList.splice(index,1);
            localStorage.setItem("task",JSON.stringify(taskList));
            this.display();
        }

        // Show the PopUp
        popUp(selectedTask){
            let menuDiv = selectedTask.parentElement.lastElementChild;
            menuDiv.classList.add("show");
            document.addEventListener("click", e => {
                if(e.target.tagName != "I" || e.target != selectedTask) {
                    menuDiv.classList.remove("show");
                }
            });
        }

        editTask(text){
            userInput.value=text;
            userInput.focus();
            userInput.classList.add("active");
        }

        //Remove all method.

        removeAll(){
            taskList.splice(0, taskList.length);
            localStorage.setItem("task", JSON.stringify(taskList));
            myWork.display();
        }

        // Edit a task.


    }

    const myWork= new ToDo();
    
    // Onkey Up somone enters
    userInput.addEventListener("keyup",e=>{
        if(e.key==="Enter" && userInput.value.trim())
        myWork.addTask();
        localStorage.setItem("task",JSON.stringify(taskList));
    })
    clearBtn.addEventListener("click", () => myWork.removeAll());

    myWork.display();
