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
    newTask.innerHTML = taskText
    tasklistul.prepend(newTask)
    taskInput.value = "";

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    newTask.prepend(checkbox)


    // checkbox.addEventListener(
    //     "click", function () {
    //         if (checkbox.checked) {
    //             console.log("Checkbox Clicked")
    //         }


    // })/
    checkbox.addEventListener("click", function () {
        console.log("Clicked");
        alert("Checkbox Clicked")
    })

    let deleteBtn = document.createElement("button")
    deleteBtn.type = "button"
    newTask.append(deleteBtn)
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "deleteBtn"

    deleteBtn.addEventListener(
        "click", function () {
            let parentLi = deleteBtn.parentElement
            parentLi.remove()
        }
    )
});


