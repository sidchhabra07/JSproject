const todoform=document.querySelector(".form-todo");
const todoinput=document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");
console.log(todoinput);
console.log(todoform);
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext=(todoinput.value);
    const newli=document.createElement("li");
    const newliinnerHTML=`<span class="text">${newtodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newli.innerHTML=newliinnerHTML;
    todolist.append(newli);
    todoinput.value="";
    create
})
todolist.addEventListener("click",(e)=>{
if(e.target.classList.contains("remove")){
    const litext=e.target.parentNode.parentNode;
    litext.remove();
}
if(e.target.classList.contains("done")){
    const lispantext=e.target.parentNode.previousElementSibling;
    lispantext.style.textDecoration="line-through";
}
})