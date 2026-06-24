let activeCount = 0
let completedCount = 0
taskInput = document.getElementById("taskInput")
addBtn = document.getElementById("addBtn")
tasklistul = document.getElementById("tasklistul")
addBtn.addEventListener("click", function () {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Enter Text");
        return;
    }
    let newTask = document.createElement("li")
    tasklistul.prepend(newTask)
    taskInput.value = "";


    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"


    let taskSpan = document.createElement("span")
    taskSpan.textContent = taskText

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
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.type = "button"

    newTask.append(checkbox)
    newTask.append(taskSpan)
    newTask.append(deleteBtn)
    activeCount++
    updateBadges()
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "deleteBtn"

    deleteBtn.addEventListener(
        "click", function () {
            let parentLi = deleteBtn.parentElement
            parentLi.remove()
        }
    )

});
let activeBadge = document.getElementById("activeBadge")
let completedBadge = document.getElementById("completedBadge")

function updateBadges() {
    activeBadge.textContent = activeCount + " Active"
    completedBadge.textContent = completedCount + "Completed"
}



