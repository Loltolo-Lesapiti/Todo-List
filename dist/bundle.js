/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/add.js */ \"./src/module/add.js\");\n/* harmony import */ var _module_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/variables.js */ \"./src/module/variables.js\");\n/* harmony import */ var _module_DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/DisplayAddandRemove.js */ \"./src/module/DisplayAddandRemove.js\");\n/* harmony import */ var _module_DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n_module_variables_js__WEBPACK_IMPORTED_MODULE_1__.userInput.addEventListener('keyup', (e) => {\r\n  if (e.key === 'Enter' && _module_variables_js__WEBPACK_IMPORTED_MODULE_1__.userInput.value.trim()) { (0,_module_add_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); }\r\n  localStorage.setItem('task', JSON.stringify(_module_variables_js__WEBPACK_IMPORTED_MODULE_1__.taskList));\r\n});\r\nconst Pop= new (_module_DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_2___default())();\r\nPop.display();\r\nconst dots= document.querySelectorAll(\"#dots\");\r\nconst edit= document.querySelectorAll(\"#edit\");\r\nconst del= document.querySelectorAll(\"#del\");\r\ndots.forEach(dot=>{\r\n    dot.addEventListener(\"click\",()=>Pop.popUp(dot));\r\n})\r\nedit.forEach(item=>{\r\n    item.addEventListener(\"click\",()=>Pop.editTask(_module_variables_js__WEBPACK_IMPORTED_MODULE_1__.userInput.value));\r\n})\r\ndel.forEach(item=>{\r\n    item.addEventListener(\"click\",()=>Pop.removeTask(item));\r\n})\r\n_module_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearBtn.addEventListener('click', () =>removeAll());\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/DisplayAddandRemove.js":
/*!*******************************************!*\
  !*** ./src/module/DisplayAddandRemove.js ***!
  \*******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://todo-list/./src/module/DisplayAddandRemove.js?");

/***/ }),

/***/ "./src/module/add.js":
/*!***************************!*\
  !*** ./src/module/add.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/module/variables.js\");\n/* harmony import */ var _DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayAddandRemove.js */ \"./src/module/DisplayAddandRemove.js\");\n/* harmony import */ var _DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst Pop= new (_DisplayAddandRemove_js__WEBPACK_IMPORTED_MODULE_1___default())();\r\nfunction addTask(){\r\n    const task = {\r\n      id: _variables_js__WEBPACK_IMPORTED_MODULE_0__.taskList.length,\r\n      description: _variables_js__WEBPACK_IMPORTED_MODULE_0__.userInput.value.trim(),\r\n      completed: false,\r\n    }\r\n    if (_variables_js__WEBPACK_IMPORTED_MODULE_0__.userInput.value.trim() !== '') {\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.taskList.unshift(task);\r\n      _variables_js__WEBPACK_IMPORTED_MODULE_0__.userInput.value = '';\r\n    }\r\n    Pop.display();\r\n    window.location.reload();\r\n  }\n\n//# sourceURL=webpack://todo-list/./src/module/add.js?");

/***/ }),

/***/ "./src/module/variables.js":
/*!*********************************!*\
  !*** ./src/module/variables.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearBtn\": () => (/* binding */ clearBtn),\n/* harmony export */   \"dots\": () => (/* binding */ dots),\n/* harmony export */   \"motherUl\": () => (/* binding */ motherUl),\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"userInput\": () => (/* binding */ userInput)\n/* harmony export */ });\nconst motherUl = document.querySelector('.dynamicList');\r\nconst clearBtn = document.querySelector('.clearBtn');\r\nconst taskList = JSON.parse(localStorage.getItem('task')) || [];\r\nconst userInput = document.querySelector('.userInput');\r\nconst dots= document.querySelector(\"#dots\");\n\n//# sourceURL=webpack://todo-list/./src/module/variables.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;