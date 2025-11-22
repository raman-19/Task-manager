const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const msg = document.getElementById("msg");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        showMessage("Please enter a task!", "red");
        return;
    }

    addTask(taskText);
    input.value = "";
    showMessage("Task added successfully!");
});

// Create and add a task
function addTask(text) {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Complete task on click
    li.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) return;

        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            showMessage("Task marked as completed!");
        } else {
            showMessage("Task marked as pending!");
        }
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
        showMessage("Task deleted!");
    });

    taskList.appendChild(li);
}

// Show message function
function showMessage(text, color = "green") {
    msg.style.color = color;
    msg.innerText = text;

    setTimeout(() => {
        msg.innerText = "";
    }, 2000);
}
