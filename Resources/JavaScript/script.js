// Get elements
const textInput = document.querySelector(".text-input");
const addButton = document.querySelector(".add");
const listContainer = document.querySelector("#list-container");

// Create Function of new task item
function createTask(toDoText) {
  const newTextContent = document.createElement("li");
  newTextContent.innerHTML = `
  <div class = "to-do-inner-container"><input type="checkbox" class="checkbox"/><span>${toDoText}</span></div>
        <button class="delete-content">X</button>
    `;

  return newTextContent;
}
/****************************************************/

// Create Function to add a new task
function addToDo() {
  const toDoText = textInput.value.trim();

  if (toDoText === "") {
    alert("Enter your task.");
    return;
  }

  const taskItem = createTask(toDoText);

  // Add event listener to delete button
  taskItem.querySelector(".delete-content").addEventListener("click", () => {
    taskItem.remove();
  });

  listContainer.appendChild(taskItem);
  textInput.value = "";
}

addButton.addEventListener("click", addToDo);

// Pressing Enter to add a task
textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo();
  }
});

const donetask = document.querySelector(".done-task");
const checkbox = document.querySelectorAll('li input[type="checkbox"]');

for (let i = 0; i < checkbox.length; i++)
  checkbox[i].addEventListener("click", function () {
    textInput.classList.add("donetask");
  });
