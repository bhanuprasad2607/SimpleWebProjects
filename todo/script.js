let task = document.getElementById('task');
let add = document.getElementById('add');
let taskList = document.getElementById('task-list');

add.addEventListener('click', (e) => {
    e.preventDefault();
    if (task.value === "") {
        alert("Need to add a task");
    }
    else {
        addTask()
    }
});


function addTask() {
    let p = document.createElement('li');
    let t = document.createTextNode(task.value);
    task.value = "";
    p.appendChild(t);
    taskList.appendChild(p);
    taskCompleted(p);
    taskDelete(p);
}

function taskCompleted(p) {
    p.addEventListener('click', (e) => {
        e.preventDefault();
        p.style.textDecoration = 'line-through';
    });
}

function taskDelete(p) {
    p.addEventListener('dblclick', (e) => {
        e.preventDefault();
        p.remove();
    });
}