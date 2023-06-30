import Project from "./project.js";
import Todo from "./todo.js";

const newproject = new Project("project1");
console.log(newproject.name);
const newtodo = new Todo("Todo1", "2023-06-30");
newproject.addTodos(newtodo);
console.log(newproject.todos);

class AddInputField {
  static addInput() {
    function clickhandler() {
      const div = document.createElement("div");
      div.innerHTML += `  
    <input type="text"/>
    <button>Add</button>
    <button>Cancel</button>
    `;
      console.log("is working now");
      document.querySelector(".todo-lists") .appendChild(div);
      return div
    }
    // const divtodos=document.getElementsByClassName("todo-lists")
    const addProject = document.querySelector(".add-project");
    addProject.addEventListener("click", clickhandler);
  }
}

AddInputField.addInput();
