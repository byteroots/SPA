/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '.node_modules/admin-lte/plugins/jquery/jquery.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _js_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navigate */ \"./js/navigate.js\");\n/* harmony import */ var _js_navigate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_navigate__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '.node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/navigate.js":
/*!************************!*\
  !*** ./js/navigate.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("function init(){\n   load_dashboard(); //By default\n    $( \".nav_dashboard\" ).click(function() {\n        load_dashboard();\n    });\n    $( \".nav_customers\" ).click(function() {\n        load_customers();\n    });\n    $( \".nav_items\" ).click(function() {\n        load_items()\n    });\n    $( \".nav_orders\" ).click(function() {\n       load_orders();\n    });\n    $( \".nav_searchOrders\" ).click(function() {\n        load_searchOrders();\n    });\n}\n\nfunction  load_dashboard(){\n    $(\"#dashboard_wrapper\").css(\"display\", \"block\");\n    $(\"#customers_wrapper\").css(\"display\", \"none\");\n    $(\"#items_wrapper\").css(\"display\", \"none\");\n    $(\"#orders_wrapper\").css(\"display\", \"none\");\n    $(\"#searchOrders_wrapper\").css(\"display\", \"none\");\n}\nfunction  load_customers(){\n    $(\"#dashboard_wrapper\").css(\"display\", \"none\");\n    $(\"#customers_wrapper\").css(\"display\", \"block\");\n    $(\"#items_wrapper\").css(\"display\", \"none\");\n    $(\"#orders_wrapper\").css(\"display\", \"none\");\n    $(\"#searchOrders_wrapper\").css(\"display\", \"none\");\n}\nfunction  load_items(){\n    $(\"#dashboard_wrapper\").css(\"display\", \"none\");\n    $(\"#customers_wrapper\").css(\"display\", \"none\");\n    $(\"#items_wrapper\").css(\"display\", \"block\");\n    $(\"#orders_wrapper\").css(\"display\", \"none\");\n    $(\"#searchOrders_wrapper\").css(\"display\", \"none\");\n}\nfunction  load_orders(){\n    $(\"#dashboard_wrapper\").css(\"display\", \"none\");\n    $(\"#customers_wrapper\").css(\"display\", \"none\");\n    $(\"#items_wrapper\").css(\"display\", \"none\");\n    $(\"#orders_wrapper\").css(\"display\", \"block\");\n    $(\"#searchOrders_wrapper\").css(\"display\", \"none\");\n}\nfunction  load_searchOrders(){\n    $(\"#dashboard_wrapper\").css(\"display\", \"none\");\n    $(\"#customers_wrapper\").css(\"display\", \"none\");\n    $(\"#items_wrapper\").css(\"display\", \"none\");\n    $(\"#orders_wrapper\").css(\"display\", \"none\");\n    $(\"#searchOrders_wrapper\").css(\"display\", \"block\");\n}\n\n\n//# sourceURL=webpack:///./js/navigate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;