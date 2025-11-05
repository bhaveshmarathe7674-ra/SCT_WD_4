document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task");
  const dateInput = document.getElementById("taskDate");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");

      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task-details");
      if (task.completed) taskDiv.classList.add("completed");
      taskDiv.innerHTML = `
        <strong>${task.text}</strong><br>
        <small>${task.date || "No date set"}</small>
      `;

      const actions = document.createElement("div");
      actions.classList.add("actions");

      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.completed ? "Undo" : "Done";
      completeBtn.addEventListener("click", () => {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
      });

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        const newText = prompt("Edit task:", task.text);
        if (newText) task.text = newText;
        const newDate = prompt("Edit date/time:", task.date);
        if (newDate) task.date = newDate;
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

      actions.append(completeBtn, editBtn, deleteBtn);
      li.append(taskDiv, actions);
      taskList.appendChild(li);
    });
  };

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    const date = dateInput.value;
    if (!text) {
      alert("Please enter a task.");
      return;
    }
    tasks.push({ text, date, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
    dateInput.value = "";
  });

  renderTasks();
});
