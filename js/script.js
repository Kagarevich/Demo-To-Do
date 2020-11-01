function whenLoaded() {
  const clearButton = document.querySelector("button.clear");

  const input = document.querySelector("input[type='text']");
  const ul = document.querySelector("ul.todos");

  function createTodo() {
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.classList.add("todo-text");
    const newTodo = input.value;
    textSpan.append(newTodo);

    /*const acceptBtn = document.createElement("span");
    acceptBtn.classList.add("todo-accept");
    const iconAccept = document.createElement("i");
    iconAccept.classList.add("fas", "fa-trash-alt");
    acceptBtn.appendChild(iconAccept);*/

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("todo-trash");
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-alt");
    deleteBtn.appendChild(icon);

    /*ul.appendChild(li).append(textSpan, acceptBtn);
    input.value = "";
    listenAcceptTodo(acceptBtn);*/

    ul.appendChild(li).append(textSpan, deleteBtn);
    input.value = "";
    listenDeleteTodo(deleteBtn);
  }

  function onClickTodo(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  }

  function listenAcceptTodo(element) {
    element.addEventListener("click", (event) => {
      /*element.parentElement.remove();
      event.stopPropagation();*/
    });
  }

  function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
      element.parentElement.remove();
      event.stopPropagation();
    });
  }

  function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
      ul.innerHTML = data;
    }
/*
    const acceptButtons = document.querySelectorAll("span.todo-accept");
    for (const button of acceptButtons) {
      listenAcceptTodo(button);
    }
*/
    const deleteButtons = document.querySelectorAll("span.todo-trash");
    for (const button of deleteButtons) {
      listenDeleteTodo(button);
    }
  }

  input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13; /*Клавиша Enter*/
    if (keyPressed.which == keyEnter) {
      createTodo();
    }
  });
  ul.addEventListener("click", onClickTodo);

  clearButton.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem("todos", ul.innerHTML);
  });

  loadTodos();
}

document.addEventListener("DOMContentLoaded", whenLoaded);
