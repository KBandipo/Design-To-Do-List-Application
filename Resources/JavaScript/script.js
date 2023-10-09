"use strict";
import { textInput, addButton, listContainer } from "./variablesContainer.js";
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
