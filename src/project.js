class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  getProjectName() {
    return this.name;
  }
  addTodos(todo) {
    this.todos.push(todo);
  }
}
export default Project;
