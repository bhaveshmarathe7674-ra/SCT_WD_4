const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    if (task.completed) taskInfo.classList.add("completed");

    taskInfo.innerHTML = `
      <strong>${task.text}</strong>
      <small>${task.date || "No deadline set"}</small>
    `;

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("buttons");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = task.completed ? "Undo" : "Done";
    doneBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit your task:", task.text);
      if (newText !== null) task.text = newText;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    btnGroup.append(doneBtn, editBtn, deleteBtn);
    li.append(taskInfo, btnGroup);
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  const date = dateInput.value;
  if (!text) {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ text, date, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
  dateInput.value = "";
});

renderTasks();
