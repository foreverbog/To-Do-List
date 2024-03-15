const taskInput = document.getElementById('taskInput');
const addBtn = document.querySelector('.addBtn');
const taskList = document.querySelector('.list-container');
const deleteAllBtn = document.getElementById('deleteAllBtn')


addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTask()
    }
})


// Add a new task function
function addTask () {
    if(taskInput.value === ''){
        alert('Please enter your task')
    }else{
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;                   //Create a li with the value from input

        let button = document.createElement('button')
        button.innerHTML = 'Edit';
        li.appendChild(button)    
        button.addEventListener('click', () => {
            button.parentElement.contentEditable.innerHTML === 'true'
        })


        let span = document.createElement('span')
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';     //ADD the trash icon
        li.appendChild(span)
        taskList.appendChild(li)
    }
    taskInput.value = ''  //Set the input value back to empty string after adding li
    saveData()
}

// Delete Button and Checked Task functionality
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
    saveData()
})

// saving to localStorage

function saveData () {
    localStorage.setItem('data', taskList.innerHTML);
}

// Getting data from localStorage
function showData () {
    taskList.innerHTML = localStorage.getItem('data');

}

//Delete everything
deleteAllBtn.addEventListener('click', () => {
    localStorage.clear()
    showData ()
}) 
function editTask () {

}
showData ()
