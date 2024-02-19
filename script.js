const taskInput = document.querySelector('#newtask input');
const taskSection = document.querySelector('.tasks');

taskInput.addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {createTask(); }
}

);

document.querySelector('#push').onClick = function () {
    createTask(); 
}

function createTask() {
    if(taskInput.value.length == 0) {alert("Task field is zero");}
    else{
        taskSection.innerHTML +=
        `<div class="task">
            <label id="taskname">
             <input onClick="updateTask(This)" type="checkbox" id="check-task"/>
             <p>&{document.querySelector('#newtask input').value}</p>
            </label>
            <div class="delete"><i class="üil uil-trash"></i></div>
        </div>`;
        var current_tasks = document.querySelector(".delete");
        for (var i = 0; current_tasks.length; i++ ) {
            current_tasks[i].onClick = function {
                this.parentNode.remove();
            }
        }
        taskSection.offSetHeight >= 300
        ? taskSection.classList.add("overflow")
        :taskSection.classList.remove("overflow")
    }
}

function updateTask() {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {taskItem.classList.add("checked");}
}