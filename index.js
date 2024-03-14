const list = document.getElementById('todo-list')
const todoInput = document.getElementById('todo-input')
let updateNote = "";
let count;

const todoTemplate = (todoTask) => `
<div class="todo-container text-gray-700 text-center mt-2">
<div class="flex justify-between bg-white shadow mb-2 h-auto">
    <input type="checkbox" id="check" name="check" class="ms-2"/>
    <input type="text" class="w-full text-left leading-loose p-2 cursor-pointer h-auto" value="${todoTask}" text="text"></input>
  <button type="" class="font-semibold text-white text-sm cursor-pointer bg-blue-500 px-4 py-2 rounded m-2" id="deletebtn">Delete<button/>
</div>
</div>
`;
const newTodo = () => {
  if (todoInput.value=='') {
    alert("Item is missing")
    return true;
  }
  let index = localStorage.length+1;
  // Append a new key-value pair
  localStorage.setItem(index,todoInput.value);
  list.insertAdjacentHTML('beforeend', todoTemplate(todoInput.value));
  list.lastElementChild.querySelector('#deletebtn').addEventListener('click', deleteTodo);
   todoInput.value = "";
}

const deleteTodo = (el) => {  
  const todoContainer = el.target.parentElement;
  todoContainer.remove();
  let index = localStorage.length+1;
  localStorage.removeItem(index,todoInput.value);
}


// if(localStorage.length > 0)
// {
//   Objects.keys(localStorage).forEach((index,) =>{
//     list.insertAdjacentHTML('beforeend', todoTemplate(todoInput.value));
//   })