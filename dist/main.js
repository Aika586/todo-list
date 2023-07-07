/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

const newproject = new Project();


/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Inbox"));
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Today"));
    this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]("This week"));
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
    const newproject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](inputProject.value);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);
5;


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);

// class GetProjectTitle {
//   }
// }

// export default GetProjectTitle


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.js */ "./src/todo-list.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



// Ui.popUpInput();

//Ui.getProject();

// function getProject() {
//   const inputProject = document.querySelector("#type-projectName");
//   inputProject.addEventListener("onchange", function () {
//     console.log(inputProject.value);
//   });
// }

// function getname() {
//   let name = "Aikokul";
//   return name;
// }

// const projectTitile = getname();
// console.log(projectTitile());
// import Todo from "./todo.js";

// class AddInputField {
//   static addInput() {
//     function clickhandler() {
//       const div = document.createElement("div");
//       div.innerHTML += `
//       <input type="text" id="input-project"/>
//       <button id='add'>Add</button>
//       <button>Cancel</button>
//       `;
//       console.log("is working now");
//       document.querySelector(".todo-lists").appendChild(div);
//       return div;
//     }
//     // const divtodos=document.getElementsByClassName("todo-lists")
//     const addProject = document.querySelector(".add-project");
//     addProject.addEventListener("click", clickhandler);
//   }
// }
// AddInputField.addInput();

// class ProjectName {
//   static get addName() {
//     const input = document.querySelector("#input-project");
//     const addButton = document.querySelector("#add");
//     addButton.addEventListener("click", function () {
//       const displayProjects = document.querySelector(".display-projects");
//       displayProjects.textContent = input.value;
//     });
//   }
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQztBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZG1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixtREFBTztBQUNsQywyQkFBMkIsbURBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7O0FDcERtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEVBQUUsRUFBQztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ2E7QUFDSDtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gIH1cclxuICBnZXRQcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG4gIGFkZFRvZG9zKHRvZG8pIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuXHJcbmNvbnN0IG5ld3Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcblxyXG5jbGFzcyBUb2RvTGlzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJJbmJveFwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJUaGlzIHdlZWtcIikpO1xyXG4gIH1cclxuICBhZGRwcm9qZWN0cyhuZXdwcm9qZWN0KSB7XHJcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld3Byb2plY3QubmFtZSkpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdwcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKG5ld3Byb2plY3QpO1xyXG4gIH1cclxufVxyXG4vLyBDYWxsIHRoZSBnZXRQcm9qZWN0IGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50XHJcbmNvbnN0IG5ld1RvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xyXG4gIGNvbnN0IGlucHV0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHlwZS1wcm9qZWN0TmFtZVwiKTtcclxuICBjb25zdCBhZGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idXR0b25cIik7XHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKTtcclxuICBhZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5ld3Byb2plY3QgPSBuZXcgUHJvamVjdChpbnB1dFByb2plY3QudmFsdWUpO1xyXG4gICAgbmV3VG9kb0xpc3QuYWRkcHJvamVjdHMobmV3cHJvamVjdCk7XHJcbiAgICBpbnB1dFByb2plY3QudmFsdWUgPSBcIlwiO1xyXG4gICAgZGlzcGxheVByb2plY3RzKCk7XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xyXG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGxpc3RcclxuICAgIG5ld1RvZG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TGlzdHNcIik7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcm9qZWN0Lm5hbWUgPT09IFwiSW5ib3hcIiB8fFxyXG4gICAgICAgIHByb2plY3QubmFtZSA9PT0gXCJUb2RheVwiIHx8XHJcbiAgICAgICAgcHJvamVjdC5uYW1lID09PSBcIlRoaXMgd2Vla1wiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCArPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gbGlzdEl0ZW07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmdldFByb2plY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG41O1xyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcblxyXG5jbGFzcyBVaSB7XHJcbiAgc3RhdGljIHBvcFVwSW5wdXQoKSB7XHJcbiAgICBjb25zdCBhZGRwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuICAgIGFkZHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgZGlzcGxheVBvcFVwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXByb2plY3RzXCIpO1xyXG4gICAgICBkaXNwbGF5UG9wVXBJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gc3RhdGljIGdldFByb2plY3QoKSB7XHJcbiAgLy8gICBjb25zdCBpbnB1dFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R5cGUtcHJvamVjdE5hbWVcIik7XHJcbiAgLy8gICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idXR0b25cIik7XHJcbiAgLy8gICBjb25zdCBkaXNwbGF5UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXByb2plY3RzXCIpO1xyXG4gIC8vICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIGRpc3BsYXlQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dFByb2plY3QudmFsdWU7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbn1cclxuVWkucG9wVXBJbnB1dCgpO1xyXG5leHBvcnQgZGVmYXVsdCBVaTtcclxuXHJcbi8vIGNsYXNzIEdldFByb2plY3RUaXRsZSB7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBHZXRQcm9qZWN0VGl0bGVcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVWkgZnJvbSBcIi4vdWkuanNcIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG8tbGlzdC5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbi8vIFVpLnBvcFVwSW5wdXQoKTtcclxuXHJcbi8vVWkuZ2V0UHJvamVjdCgpO1xyXG5cclxuLy8gZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcclxuLy8gICBjb25zdCBpbnB1dFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R5cGUtcHJvamVjdE5hbWVcIik7XHJcbi8vICAgaW5wdXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpbnB1dFByb2plY3QudmFsdWUpO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRuYW1lKCkge1xyXG4vLyAgIGxldCBuYW1lID0gXCJBaWtva3VsXCI7XHJcbi8vICAgcmV0dXJuIG5hbWU7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHByb2plY3RUaXRpbGUgPSBnZXRuYW1lKCk7XHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RUaXRpbGUoKSk7XHJcbi8vIGltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbi8vIGNsYXNzIEFkZElucHV0RmllbGQge1xyXG4vLyAgIHN0YXRpYyBhZGRJbnB1dCgpIHtcclxuLy8gICAgIGZ1bmN0aW9uIGNsaWNraGFuZGxlcigpIHtcclxuLy8gICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgZGl2LmlubmVySFRNTCArPSBgXHJcbi8vICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXQtcHJvamVjdFwiLz5cclxuLy8gICAgICAgPGJ1dHRvbiBpZD0nYWRkJz5BZGQ8L2J1dHRvbj5cclxuLy8gICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cclxuLy8gICAgICAgYDtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJpcyB3b3JraW5nIG5vd1wiKTtcclxuLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RzXCIpLmFwcGVuZENoaWxkKGRpdik7XHJcbi8vICAgICAgIHJldHVybiBkaXY7XHJcbi8vICAgICB9XHJcbi8vICAgICAvLyBjb25zdCBkaXZ0b2Rvcz1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kby1saXN0c1wiKVxyXG4vLyAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIik7XHJcbi8vICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja2hhbmRsZXIpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBBZGRJbnB1dEZpZWxkLmFkZElucHV0KCk7XHJcblxyXG4vLyBjbGFzcyBQcm9qZWN0TmFtZSB7XHJcbi8vICAgc3RhdGljIGdldCBhZGROYW1lKCkge1xyXG4vLyAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXByb2plY3RcIik7XHJcbi8vICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFwiKTtcclxuLy8gICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktcHJvamVjdHNcIik7XHJcbi8vICAgICAgIGRpc3BsYXlQcm9qZWN0cy50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==