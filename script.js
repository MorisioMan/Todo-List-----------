const inputTask = document.querySelector(".todo-list__input");
const button = document.querySelector(".todo-list__button");
const listOfTasks = document.querySelector(".todo-list__list");

button.addEventListener("click", () => addTaskToList(inputTask.value));

function deleteTask(event) {
   event.target.parentElement.remove();
   saveTask();
}

function saveTask() {
   localStorage.setItem("task", listOfTasks.innerHTML);
}

function loadTask() {
   listOfTasks.innerHTML = localStorage.getItem("task");
}

function addTaskToList(taskText) {
   if (taskText === "") {
      alert("Напиши що хочеш зробити.");
   } else {
      inputTask.value = "";

      const task = document.createElement("div");
      const checkbox = document.createElement("input");
      const text = document.createElement("p");
      const button = document.createElement("button");

      button.addEventListener("click", deleteTask);
      checkbox.onclick = () => {
         if (checkbox.checked) {
            text.style.textDecoration = "line-through";
         } else {
            text.style.textDecoration = "none";
         }
      }

      checkbox.type = "checkbox";
      checkbox.name = "task";
      text.textContent = taskText;
      button.textContent = "видалити";
      
      task.classList.add("todo-list__task");
      listOfTasks.appendChild(task);
      task.append(checkbox, text, button);

      saveTask();
   }
}
loadTask();