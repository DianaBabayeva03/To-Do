const form = document.getElementById('taskForm');
const taskInput = document.getElementById('inputTask');
const taskList = document.getElementById('taskList')

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("bosh tapshiriq gondermek olmaz");
        return;
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            li.remove();
        }
    });

    const text = document.createTextNode(taskText);
    li.appendChild(checkbox);
    li.appendChild(text)
    taskList.appendChild(li);
    taskInput.value="";
})