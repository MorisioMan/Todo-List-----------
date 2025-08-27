const inputTask = document.querySelector(".todo-list__input");
const button = document.querySelector(".todo-list__button");
const listOfTask = document.querySelector(".todo-list__list");

function saveTask() {
   localStorage.setItem("task", listOfTask.innerHTML);
}

function loadTask() {
   listOfTask.innerHTML = localStorage.getItem("task");
   saveTask();
}

button.addEventListener("click", function () {
   if (inputTask.value === "") {
      alert("Напиши що хочеш зробити.");
   } else {
      const task = document.createElement("div");
      const checkbox = document.createElement("input");
      const text = document.createElement("p");
      const button = document.createElement("button");

      checkbox.type = "checkbox";
      checkbox.name = "task";
      text.textContent = inputTask.value;
      button.textContent = "видалити";
      
      task.classList.add("todo-list__task");
      listOfTask.appendChild(task);
      task.append(checkbox, text, button);
   }
   inputTask.value = "";
   saveTask();
});

loadTask();