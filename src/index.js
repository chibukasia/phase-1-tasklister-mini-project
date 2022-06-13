document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form"); // grab the form
  form.addEventListener('submit', e=> {
    e.preventDefault(); //prevents default submision
    let task = document.getElementById('new-task-description').value; //get the value of the text input field
    let parentListNode = document.getElementById("tasks");
    let listElement = document.createElement('li');
    let deleteButton = document.createElement('button');
    let editButton  = document.createElement('button');
    editButton.setAttribute('id', 'edit')
    deleteButton.textContent = "Delete";
    editButton.textContent = 'Edit';
    deleteButton.addEventListener('click', deleteTask);
    editButton.addEventListener('click', editTask);
    listElement.textContent = task;
    listElement.append(deleteButton, editButton);
    parentListNode.appendChild(listElement);
    form.reset()
    //console.log(listElement)
    function deleteTask(){
      document.querySelector('li').remove()
  
    }

    function editTask(){
      let editable = document.getElementById('edit');
      editable.setAttribute('editable', 'true')
    }
  })

  
});
