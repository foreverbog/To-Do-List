const list = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

const todoTemplate = (todoTask) => `
<div class="mt-1 w-4/5 text-center transition-all duration-300 ease-in-out hover:w-5/6 border-slate-700 text-slate-700 todo-container">
<div class="flex flex-row justify-between items-center p-2 mb-2 w-full h-auto rounded-3xl border-t shadow-md transition-all border-slate-100 backdrop-blur bg-slate-100/50">
    <input type="checkbox" id="check" name="check" class="p-2 mr-2 ml-2 w-6 h-6 rounded-full shadow-inner transition-all duration-300 ease-in-out checked:shadow-xl peer bg-slate-400/20 text-sky-500 checked:bg-sky-500 hover:bg-sky-500/30 focus:ring-sky-500"/>
    <input type="text" class="w-full h-10 font-bold leading-loose text-left bg-transparent rounded-xl border-none transition-all duration-300 ease-in-out hover:shadow-inner hover:cursor-pointer hover:border-1 hover:bg-slate-400/30 focus:bg-slate400/30 focus:ring-sky-400 active:bg-slate-400/30" value="${todoTask}" text="text"></input>
  <button type="" class="py-2 px-4 m-2 text-sm font-bold rounded-xl border-t border-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:cursor-pointer text-slate-700 bg-slate-50/80 hover:text-slate-900 hover:bg-sky-500" id="deletebtn">Delete<button/>
</div>
</div>
`;
const newTodo = () => {
  if (todoInput.value == "") {
    alert("Item is missing");
    return true;
  }

  list.insertAdjacentHTML("beforeend", todoTemplate(todoInput.value));
  // list.lastElementChild.querySelector('#deletebtn').addEventListener('click', deleteTodo)
  // todoInput.value = ""
};

// const deleteTodo = (el) => {
//   const todoContainer = el.target.parentElement

//   todoContainer.parentNode.removeChild(el.target.parentElement);

//        }
