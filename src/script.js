const inputTask = document.querySelector(".todo-list__input");
const button = document.querySelector(".todo-list__button");
const listOfTask = document.querySelector(".todo-list__list");

function saveTask() {
   localStorage.setItem("task", listOfTask.innerHTML);
}

function loadTask() {
   listOfTask.innerHTML = localStorage.getItem("task");
}

button.addEventListener("click", function () {
   if (inputTask.value === "") {
      alert("Напиши що хочеш зробити.");
   } else {
      const task = document.createElement("div");
      const checkbox = document.createElement("img");
      const text = document.createElement("p");
      const button = document.createElement("button");

      checkbox.src = "../icons/checkbox-unchecked.svg";
      text.textContent = inputTask.value;
      button.textContent = "видалити";

      button.setAttribute("id", "delete");
      checkbox.setAttribute("id", "checkbox");
      
      task.classList.add("todo-list__task");
      listOfTask.appendChild(task);
      task.append(checkbox, text, button);
   }
   inputTask.value = "";
   saveTask();
});

listOfTask.addEventListener("click", function (event) {
   console.log(event);
   if (event.target.id === "delete") {
      event.target.parentElement.remove();
      saveTask();
   }
   else if (event.target.id === "checkbox") {
      event.target.parentElement.classList.add("done");
      saveTask();
   }
})

loadTask();