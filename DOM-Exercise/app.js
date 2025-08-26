let taskForm = document.getElementById('task-form');
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');

taskForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    if(!taskInput.value){
        alert('You need to write something on the input field.');
    }
    else{
        let newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
})

taskList.addEventListener('click', (event)=>{
    let selectedTask = event.target;
    selectedTask.classList.toggle('completed');
})