let activeCount = 0
let completedCount = 0
let taskList = [];
taskInput = document.getElementById("taskInput")
addBtn = document.getElementById("addBtn")
tasklistul = document.getElementById("tasklistul")
addBtn.addEventListener("click", function () {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Enter Text");
        return;
    }
    taskInput.value = "";
    taskList.push(taskText)

    saveTasks()
    createTask(taskText)

    activeCount++
    updateBadges()

});
let activeBadge = document.getElementById("activeBadge")
let completedBadge = document.getElementById("completedBadge")

function updateBadges() {
    activeBadge.textContent = activeCount + " Active"
    completedBadge.textContent = completedCount + "Completed"
}
function createTask(taskText) {
    let newTask = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    let taskSpan = document.createElement("span")
    taskSpan.textContent = taskText
    let deleteBtn = document.createElement("button")
    deleteBtn.type = "button"
    newTask.append(checkbox)
    newTask.append(taskSpan)
    newTask.append(deleteBtn)
    tasklistul.prepend(newTask)
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "deleteBtn"
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            activeCount--
            completedCount++
            updateBadges()
            taskSpan.classList.add("completed")
        }
        else {
            activeCount++
            completedCount--
            updateBadges()
            taskSpan.classList.remove("completed")
        }
    });
    deleteBtn.addEventListener("click", function () {

    let parentLi = deleteBtn.parentElement;

    let checkbox = parentLi.querySelector("input");
    let span = parentLi.querySelector("span");

    let taskText = span.textContent;

    let index = taskList.indexOf(taskText);

    if (index !== -1) {
        taskList.splice(index, 1);
        saveTasks();
    }

    if (checkbox.checked) {
        completedCount--;
    } else {
        activeCount--;
    }

    updateBadges();

    parentLi.remove();

});
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskList))
}
function loadTasks() {

    let storedTasks = localStorage.getItem("tasks")

    if (storedTasks) {
        taskList = JSON.parse(storedTasks);
    }
    activeCount = taskList.length

    taskList.forEach(function (taskText) {
        createTask(taskText);
    });
    updateBadges()

}
loadTasks();


