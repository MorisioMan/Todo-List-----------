//TODO: замінити кнопки видалення на схестики
//TODO: зробити щоб хрестики завжди були в кінці
//TODO: додати обмеження ширини для блоку із завданями
//TODO: зробити щоб додавання завдання відбувалося через клавішу Enter
//TODO: добавити напис "завдань немає" коли завдань немає

const inputTask = document.querySelector(".todo-list__input");
const button = document.querySelector(".todo-list__button");
const listOfTask = document.querySelector(".todo-list__list");
const filtres = document.querySelector(".todo-list__filtres");

const completedTasks = [];
const activeTasks = [];
const sessionTasks = [];

function saveTask() {
   const loadTasks = localStorage.getItem("task");
   let changeTask;
   sessionTasks.forEach(element => {
      changeTask = loadTasks + element;
   })
   localStorage.setItem("task", changeTask);
}

function loadTask() {
   const arrayTask = localStorage.getItem("task");
   listOfTask.innerHTML = arrayTask;
   console.log(typeof(arrayTask));
   console.log(arrayTask);
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

      sessionTasks.push(task.outerHTML);
      console.log(sessionTasks);
   }
   inputTask.value = "";
   saveTask();
});

listOfTask.addEventListener("click", function (event) {
   if (event.target.id === "delete") {
      event.target.parentElement.remove();
      saveTask();
   }
   else if (event.target.id === "checkbox") {
      if (event.target.parentElement.classList[1] === "done") {
         event.target.src = "../icons/checkbox-unchecked.svg";
         event.target.parentElement.classList.remove("done");
         event.target.parentElement.children[1].style = `
            text-decoration: none;
            color: #000;
         `
         saveTask();
      } else {
         event.target.src = "../icons/checkbox-checked.svg";
         event.target.parentElement.classList.add("done");
         event.target.parentElement.children[1].style = `
            text-decoration: line-through;
            color: gray;
         `
         saveTask();
      }
   }
})

filtres.addEventListener("click", function (event) {
   allTasks.forEach(element => {
      if (element.classList[1] !== "done") {
         activeTasks.push(element);
      } else if (element.classList[1] === "done") {
         completedTasks.push(element);
      }
   })
   switch (event.target.id) {
      case "all":
         console.log(listOfTask.innerHTML);
         break;
      case "active":
         listOfTask.innerHTML = ``;
         activeTasks.forEach((element) => {
            listOfTask.innerHTML += element.outerHTML;
         })
         break;
      case "completed":
         console.log("completed");
         break;
   }
})

loadTask();