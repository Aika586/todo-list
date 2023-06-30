import Project from "./project.js";

class TodoList {
  constructor() {
    this.projects = [];
  }
  addprojects(newproject) {
    return this.projects.push(newproject);
  }
}
