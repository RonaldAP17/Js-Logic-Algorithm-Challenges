// 📝 Mini-project: ToDo list

// ===== First data =====
let tasks = [
  { id: 1, title: "Buy groceries",     completed: false, priority: "high" },
  { id: 2, title: "Clean the house",   completed: true,  priority: "medium" },
  { id: 3, title: "Read a book",       completed: false, priority: "low" }
];

// ===== Helpers (For Capitalize)=====
const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// ===== 1) List all tasks =====
function listTasks() {
    tasks.forEach((task, i) => {
        const statusSymbol = task.completed ? "✅" : "❌";
        console.log(`[#${task.id}] ${task.title} - ${statusSymbol} (${cap(task.priority)})`);
    })
    return tasks;
}

// ===== 2) Add a new task =====
function addTask(title, priority) {
    let maxId = tasks.reduce((max, task) => Math.max(max, task.id) , 0) + 1;
    let nextId = maxId++;
    let newTask = {id: nextId, title: title, completed: false, priority: priority};
    tasks.push(newTask);
    listTasks();
    return tasks;
}

addTask("get a life", "medium");

// ===== 3) Mark a task as completed =====
function completeTask(id) {
  const taskId = tasks.find(task => id === task.id);
  console.log(taskId);
  if(taskId){
    console.log("Yup, first step achieved");
    if(taskId.completed === false){
    taskId.completed = true;
    console.log(`So now you have a task completed, huh? Lets see. Task completed: ${taskId.completed}`);
    }
    else{
      console.log(`Dude, come on, this task is already completed`);
    }
    listTasks();
    return tasks;
  }
  else{
    console.log("No, it does not exist");
  }
}

completeTask(1);



// ===== 4) Delete a task =====
function deleteTask(id) {
  const taskId = tasks.filter(task => id !== task.id);
  const countedTasks = tasks.length;
  const countedNewTasks = taskId.length;
  let isDeleted;
  if(countedNewTasks < countedTasks){
    isDeleted = true;
    console.log(`Yup, you deleted a task. Deleted: ${isDeleted}`);
    tasks = taskId;
    listTasks();
    return tasks;
  }
  else{
    isDeleted = false;
    console.log(`Nope, you didn't delete anything, still looks the same. Deleted: ${isDeleted}`);
    return tasks;
  }
}

deleteTask(2);

// ===== 5) Filter by state =====
function getCompletedTasks() {
  const completedTasks = tasks.filter(task => task.completed === true);
  console.log(completedTasks);
  console.log(`🎉 You did a good job with your tasks. Here's the ones completed so far:\n${completedTasks.map(task => `- ${task.title} | completed: ${task.completed}`).join("\n")}`);
  return completedTasks;
}

function getPendingTasks() {
    const pendingTasks = tasks.filter(task => task.completed === false);
    console.log(`You have some pending tasks. Here's the ones:\n${pendingTasks.map(task => `- ${task.title} | completed: ${task.completed}`).join("\n")}`);
    return pendingTasks;
}

getCompletedTasks();
getPendingTasks();

// ===== 6) Count by priority =====
function countByPriority() {

  const countedTasks = tasks.reduce((acum, task) => {
    if(task.priority === "high"){
      acum.highPriority += 1;
    }
    else if(task.priority === "medium"){
      acum.mediumPriority += 1;
    }
    else{
      acum.lowPriority += 1;
    }

    return acum;
    
  },{highPriority: 0, mediumPriority: 0, lowPriority: 0});

  console.log(countedTasks);
  return countedTasks;
}

countByPriority();

// ===== 8) Sort by priority =====
function sortByPriority() {

  let tasksPriority = ["high","medium","low"];
  const sortedByPriority = tasks.sort((a,b) => tasksPriority.indexOf(a.priority) - tasksPriority.indexOf(b.priority));
  console.log(sortedByPriority);
  return sortedByPriority;
}

sortByPriority();

// ===== 8) Get final summary=====
function summary() {
  const all = listTasks();          
  const done = getCompletedTasks();  
  const pending = getPendingTasks(); 
  const byPriority = countByPriority(); 

  const result = {
    totalTasks: all.length,
    completedTasks: done.length,
    pendingTasks: pending.length,
    countByPriority: byPriority
  };

  console.log(
    `Suppp, here's a summary about ur tasks:
  Total tasks: ${result.totalTasks}
  Completed tasks: ${result.completedTasks}
  Pending tasks: ${result.pendingTasks}
  Priorities: high=${byPriority.highPriority}, medium=${byPriority.mediumPriority}, low=${byPriority.lowPriority}`
  );

  return result;
}

summary();

