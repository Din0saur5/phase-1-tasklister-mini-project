
const toDoList = document.querySelector('ol#tasks'); 
const toDoForm = document.querySelector('#create-task-form');
console.log(toDoForm);

toDoForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const toDo = document.querySelector('#new-task-description').value;
  renderToDo(toDo);
  toDoForm.reset();
})


function renderToDo(descrip){

  const listItem = document.createElement('li')
  toDoList.appendChild(listItem);
  listItem.textContent = `${descrip} `;
  


  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.append(deleteBtn)
    
  const doneBtn = document.createElement("button");
  doneBtn.className = "done-btn";
  doneBtn.textContent = "Cross-off";
  doneBtn.addEventListener("click", function () {
    listItem.style.textDecoration = 'line-through';
  });
  listItem.append(doneBtn);
}

