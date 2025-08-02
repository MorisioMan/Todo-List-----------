const inputTask = document.querySelector(".todo-list__input");
const button = document.querySelector(".todo-list__button");

button.addEventListener("click", () => addTaskToList(inputTask.value));

function addTaskToList(taskText) {
   if (taskText === "") {
      
   }
   
   inputTask.value = "";

   const listOfTasks = document.querySelector(".todo-list__list");

   const task = document.createElement("div");
   const checkbox = document.createElement("input");
   const text = document.createElement("p");
   const button = document.createElement("button");

   checkbox.type = "checkbox";
   checkbox.name = "task";
   text.textContent = taskText;
   button.textContent = "видалити";
   
   task.classList.add("todo-list__task");
   listOfTasks.appendChild(task);
   task.append(checkbox, text, button);
}

