// const taskInput = document.querySelector('#newtask input');
// const taskSection = document.querySelector('.tasks');

// taskInput.addEventListener('keyup', (e) => {
//     if(e.key === 'Enter') {
//         createTask();
//     }
// });

// document.querySelector('#push').onclick = function () {
//     createTask();
// }

// function createTask() {
//     if(taskInput.value.length === 0) {
//         alert("Task field is empty");
//     } else {
//         const taskDiv = document.createElement('div');
//         taskDiv.classList.add('task');

//         const taskLabel = document.createElement('label');
//         taskLabel.id = 'taskname';

//         const taskCheckbox = document.createElement('input');
//         taskCheckbox.type = 'checkbox';
//         taskCheckbox.id = 'check-task';
//         taskCheckbox.onclick = function() { updateTask(this); };

//         const taskText = document.createElement('p');
//         taskText.textContent = taskInput.value;

//         const deleteDiv = document.createElement('div');
//         deleteDiv.classList.add('delete');
//         deleteDiv.innerHTML = '<i class="uil uil-trash"></i>';
//         deleteDiv.onclick = function() {
//             this.parentNode.remove();
//             checkOverflow();
//         };

//         taskLabel.appendChild(taskCheckbox);
//         taskLabel.appendChild(taskText);
//         taskDiv.appendChild(taskLabel);
//         taskDiv.appendChild(deleteDiv);

//         taskSection.appendChild(taskDiv);

//         taskInput.value = ''; // Clear the input field

//         checkOverflow();
//     }
// }

// function updateTask(task) {
//     let taskItem = task.nextElementSibling; // Gets the <p> element next to the checkbox
//     if (task.checked) {
//         taskItem.classList.add('checked');
//     } else {
//         taskItem.classList.remove('checked');
//     }
// }

// function checkOverflow() {
//     taskSection.offsetHeight >= 300
//         ? taskSection.classList.add('overflow')
//         : taskSection.classList.remove('overflow');
// }

// const taskInput = document.querySelector("#newtask input");
// const taskSection = document.querySelector(".tasks");

// taskInput.addEventListener("keyup", (e) => {
//     if (e.key === 'Enter') {
//         createTask();
//     }
// });

// document.querySelector("#push").onclick = function () {
//     createTask();
// };

// function createTask() {
//     if (taskInput.value.length === 0) {
//         alert("Text input can't be empty");
//     } else {
//         const taskDiv = document.createElement("div");
//         taskDiv.classList.add("task");

//         const taskLabel = document.createElement("label");
//         taskLabel.id = "taskname";

//         const taskCheckbox = document.createElement("input");
//         taskCheckbox.type = "checkbox";
//         taskCheckbox.id = "check-task";
//         taskCheckbox.onclick = function () {
//             updateTask(this);
//         };

//         const taskText = document.createElement("p");
//         taskText.textContent = taskInput.value;

//         const deleteDiv = document.createElement("div");
//         deleteDiv.classList.add("delete");
//         deleteDiv.innerHTML = '<i class="uil uil-trash"></i>';
//         deleteDiv.onclick = function () {
//             this.parentNode.remove();
//             checkOverflow();
//         };

//         taskLabel.appendChild(taskCheckbox);
//         taskLabel.appendChild(taskText);
//         taskDiv.appendChild(taskLabel);
//         taskDiv.appendChild(deleteDiv);

//         taskSection.appendChild(taskDiv);

//         taskInput.value = ""; // Corrected
//     }
// }

// const checkOverflow = () => {
//     taskSection.offsetHeight >= 300
//         ? taskSection.classList.add('overflow')
//         : taskSection.classList.remove('overflow');
// };

// function updateTask(task) {
//     let taskItem = task.nextElementSibling; // Gets the <p> element next to the checkbox
//     if (task.checked) {
//         taskItem.classList.add("checked");
//     } else {
//         taskItem.classList.remove("checked");
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('#add');
    const subButton = document.querySelector('#sub');
    const countDisplay = document.querySelector('#count');

    let count = 0;

    function updateCount() {
        countDisplay.textContent = count;
    }

    addButton.addEventListener('click', () => {
        count++;
        updateCount();
    });

    subButton.addEventListener('click', () => {
        count--;
        updateCount();
    });

    // Initialize the count display
    updateCount();
});

