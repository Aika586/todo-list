import Project from "./project.js";

class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Inbox"));
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This week"));
  }
  addprojects(newproject) {
    if (this.projects.find((project) => project.name === newproject.name))
      return;
    this.projects.push(newproject);
    console.log(newproject);
  }
}
// Call the getProject function to handle the button click event
const newTodoList = new TodoList();

function getProject() {
  const inputProject = document.querySelector("#type-projectName");
  const addbutton = document.querySelector("#add-button");
  const projectList = document.querySelector(".project-list");
  addbutton.addEventListener("click", function () {
    const newproject = new Project(inputProject.value);
    newTodoList.addprojects(newproject);
    inputProject.value = "";
    displayProjects();
  });
  function displayProjects() {
    projectList.innerHTML = ""; // Clear the list
    newTodoList.projects.forEach((project) => {
      const listItem = document.createElement("li");
      listItem.classList.add("projectLists");
      if (
        project.name === "Inbox" ||
        project.name === "Today" ||
        project.name === "This week"
      ) {
        listItem.textContent = "";
      } else {
        listItem.textContent += project.name;
      }
      projectList.appendChild(listItem);
      return listItem;
    });
  }
}

getProject();

export default TodoList;
5;
