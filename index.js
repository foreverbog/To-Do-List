const list = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = (e) => {
  const taskText = todoInput.value.trim();
  if(taskText === "") 
  {
    alert("Item is missing");
    return;
  }
 
  const task = {text: taskText};
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoInput.value == "";
 displayTasks();
};

function deleteTask(index){
  tasks.splice(index);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function editTask(index){
  const newTaskText = prompt("Edit the task: ",tasks[index].text);

  if(newTaskText !== null)
  {
    tasks[index].text == newTaskText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}
function displayTasks()
{
  list.innerHtml = "";

  tasks.forEach((task, index) => {
  const div= document.createElement("div");
  div.classList.add("mt-1","w-4/5", "text-center", "transition-all", "duration-300", "ease-in-out","hover:w-5/6", "border-slate-700", "text-slate-700");
  div.innerHTML = `<div class="flex flex-row justify-between items-center p-2 mb-2 w-full h-auto rounded-3xl border-t shadow-md transition-all border-slate-100 backdrop-blur bg-slate-100/50">
  <input type="checkbox" id="check" name="check" class="p-2 mr-2 ml-2 w-6 h-6 rounded-full shadow-inner transition-all duration-300 ease-in-out checked:shadow-xl peer bg-slate-400/20 text-sky-500 checked:bg-sky-500 hover:bg-sky-500/30 focus:ring-sky-500"/>
  <input type="text" class="w-full h-10 font-bold leading-loose text-left bg-transparent rounded-xl border-none transition-all duration-300 ease-in-out hover:shadow-inner hover:cursor-pointer focus:ring-0 hover:border-1 hover:bg-slate-400/30 focus:bg-slate400/30 active:bg-slate-400/30" value="${task.text}" text="text"></input>
 
  </div>
  <button type="" class="py-2 px-4 m-2 text-sm font-bold rounded-xl border-t border-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:cursor-pointer text-slate-700 bg-slate-50/80 hover:text-slate-900 hover:bg-sky-500" class="delete-button" onclick ="editTask(${index})">Edit</button>
<button type="" class="py-2 px-4 m-2 text-sm font-bold rounded-xl border-t border-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:cursor-pointer text-slate-700 bg-slate-50/80 hover:text-slate-900 hover:bg-sky-500" class="delete-button" onclick ="deleteTask(${index})">Delete</button>
</div>
  `;
  list.appendChild(div);
  });
}
displayTasks();