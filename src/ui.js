import Project from "./project.js";

class Ui {
  static popUpInput() {
    const addproject = document.querySelector(".add-project");
    addproject.addEventListener("click", function () {
      const displayPopUpInput = document.querySelector(".input-projects");
      displayPopUpInput.classList.toggle("visible");
    });
  }

  // static getProject() {
  //   const inputProject = document.querySelector("#type-projectName");
  //   const addButton = document.querySelector("#add-button");
  //   const displayProjectTitle = document.querySelector(".display-projects");
  //   addButton.addEventListener("click", function () {
  //     displayProjectTitle.textContent = inputProject.value;
  //   });
  // }
}
Ui.popUpInput();
export default Ui;

// class GetProjectTitle {
//   }
// }

// export default GetProjectTitle
