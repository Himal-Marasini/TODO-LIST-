const container = document.querySelector('.container');

tasklistener();

function tasklistener(){
// ADDING TASK
document.querySelector('.btn').addEventListener('click', addTask);
// REMOVING TASK WITH CROSS
container.addEventListener('click', removing);
//CLEAR TASK
document.querySelector('.btn-1').addEventListener('click', clearTask);

document.addEventListener('DOMContentLoaded', takingvaluefromlocal);
}


function addTask(){
    let textfield = document.querySelector('.textfield');
    let input = document.createTextNode(textfield.value);

    if(textfield.value !== ''){
       // First create a element 
const div = document.createElement('div');
const p = document.createElement('p');
const a = document.createElement('a');
const a1 = document.createElement('a');
const i = document.createElement('i');
const i1 = document.createElement('i');

// Add class and Attributes into element
div.className = 'firstTask';
a.className = 'wrong';
a1.className = 'right';
i.className = 'far fa-times-circle';
i1.className = 'fas fa-check';
a.setAttribute('href' , '#');
a1.setAttribute('href' , '#');

// Append the element 
container.appendChild(div);
div.appendChild(p);
p.appendChild(input);
div.appendChild(a);
a.appendChild(i);
div.appendChild(a1);
a1.appendChild(i1);

storingValue(textfield.value);

textfield.value = '';
    }
else{
        alert('Write something')
    }};

function removing(e){
    if(e.target.parentElement.classList.contains('wrong')){
        if(confirm('Are you sure ?')){
        e.target.parentElement.parentElement.remove();

        // Remove from LS 
        removingTask(e.target.parentElement.parentElement);
    }
}};

function removingTask(taskItem){
    let task;
    if(localStorage.getItem('tasks') === null){
        task = [];
    }
    else{
        task = JSON.parse(localStorage.getItem('tasks'));
    }
    task.forEach(function(tasks , index){
        if(taskItem.textContent === tasks){
            task.splice(index , 1);
        }
    })
    localStorage.setItem('tasks', JSON.stringify(task));
}

function clearTask(){
while(container.firstChild){
    container.firstChild.remove();
}
localStorage.clear();
};

function storingValue(a){
    let task;

    if(localStorage.getItem('tasks') === null){
        task = [];
    }
    else{
        task = JSON.parse(localStorage.getItem('tasks'));
    }
    task.push(a);

    localStorage.setItem('tasks',JSON.stringify(task));
}

function takingvaluefromlocal(){
    let task;

    if(localStorage.getItem('tasks') === null){
        task = [];
    }
    else{
        task = JSON.parse(localStorage.getItem('tasks')); 
}
task.forEach(function(task){

    let textfield = document.querySelector('.textfield');
    let input = document.createTextNode(task);

// First create a element 
const div = document.createElement('div');
const p = document.createElement('p');
const a = document.createElement('a');
const a1 = document.createElement('a');
const i = document.createElement('i');
const i1 = document.createElement('i');

// Add class and Attributes into element
div.className = 'firstTask';
a.className = 'wrong';
a1.className = 'right';
i.className = 'far fa-times-circle';
i1.className = 'fas fa-check';
a.setAttribute('href' , '#');
a1.setAttribute('href' , '#');

// Append the element 
container.appendChild(div);
div.appendChild(p);
p.appendChild(input);
div.appendChild(a);
a.appendChild(i);
div.appendChild(a1);
a1.appendChild(i1);

});
}
