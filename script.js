const taskbar = document.getElementById("taskbar");
const button = document.getElementById("button");
const container = document.querySelector(".task-collection");

button.addEventListener("click", () => addTask());
taskbar.addEventListener("keydown", (event) => {
    if(event.key === "Enter") addTask();
});

const randomTask = () => {
    const tasks = ["Ride a bike...", "Cook food...", "Do homework...", "Study for exam...", "Code...", "Take out the trash..."];
    const index = Math.floor(Math.random() * tasks.length);
    return tasks[index];
}

taskbar.placeholder = randomTask();

const addTask = () => {
    if(taskbar.value === "") {
        alert("PLEASE ENTER A TASK"); 
        return;
    }

    const taskDiv = document.createElement("div");
    const task = document.createElement("h3");
    const removeButton = document.createElement("button");

    removeButton.textContent = "DONE";
    removeButton.addEventListener("click", () => removeTask(taskDiv));
    task.textContent = taskbar.value;
    taskDiv.appendChild(task);
    taskDiv.appendChild(removeButton);
    container.prepend(taskDiv);

    taskbar.value = "";
    taskbar.placeholder = randomTask();
}

const removeTask = (taskDiv) => container.removeChild(taskDiv);