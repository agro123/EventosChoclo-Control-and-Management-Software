module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/evento/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bd.js":
/*!*******************!*\
  !*** ./lib/bd.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const keys = __webpack_require__(/*! ./keys/keys.js */ "./lib/keys/keys.js");

const {
  Pool
} = __webpack_require__(/*! pg */ "pg");

const pool = new Pool({
  connectionString: keys.posgresqlURI,
  ssl: {
    rejectUnauthorized: false
  }
});
pool.connect();
module.exports = pool;

/***/ }),

/***/ "./lib/keys/dev.js":
/*!*************************!*\
  !*** ./lib/keys/dev.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  posgresqlURI: 'postgres://dxeiwewoxgnmbk:550e40c2a3eea4c6450ccfc136652be64caa42b9676e3a53b5369b7481c53484@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dc4e2l1dkls079'
};

/***/ }),

/***/ "./lib/keys/keys.js":
/*!**************************!*\
  !*** ./lib/keys/keys.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dev */ "./lib/keys/dev.js");
}

/***/ }),

/***/ "./pages/api/evento/index.js":
/*!***********************************!*\
  !*** ./pages/api/evento/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/bd */ "./lib/bd.js");
/* harmony import */ var _lib_bd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_bd__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const {
      method,
      body: {
        titulo,
        fecha_inicial,
        fecha_final,
        num_boletas,
        descripcion,
        lugar,
        anfitrion,
        id_imagen,
        tematica,
        direccion,
        aforo
      }
    } = req;

    switch (method) {
      case 'GET':
        const evento = await _lib_bd__WEBPACK_IMPORTED_MODULE_0___default.a.query('select * from evento natural join imagenes');
        res.status(200).json(evento.rows);
        break;

      case 'POST':
        await _lib_bd__WEBPACK_IMPORTED_MODULE_0___default.a.query(`INSERT INTO evento (titulo, fecha_inicial, fecha_final, num_boletas, descrip,
            lugar, anfitrion, id_imagen, tematica, direccion, aforo)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, [titulo, fecha_inicial, fecha_final, num_boletas, descripcion, lugar, anfitrion, id_imagen, tematica, direccion, aforo]);
        res.status(200).json(`Se REGISTRO el evento ${titulo}`);
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Metodo ${method} Invalido`);
    }
  } catch (e) {
    res.status(e.status || 500).end(e.message);
  }
});

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2JkLmpzIiwid2VicGFjazovLy8uL2xpYi9rZXlzL2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9saWIva2V5cy9rZXlzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ldmVudG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGdcIiJdLCJuYW1lcyI6WyJrZXlzIiwicmVxdWlyZSIsIlBvb2wiLCJwb29sIiwiY29ubmVjdGlvblN0cmluZyIsInBvc2dyZXNxbFVSSSIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsImNvbm5lY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInRpdHVsbyIsImZlY2hhX2luaWNpYWwiLCJmZWNoYV9maW5hbCIsIm51bV9ib2xldGFzIiwiZGVzY3JpcGNpb24iLCJsdWdhciIsImFuZml0cmlvbiIsImlkX2ltYWdlbiIsInRlbWF0aWNhIiwiZGlyZWNjaW9uIiwiYWZvcm8iLCJldmVudG8iLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJyb3dzIiwic2V0SGVhZGVyIiwiZW5kIiwiZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBcEI7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQVdELG1CQUFPLENBQUMsY0FBRCxDQUF4Qjs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsSUFBSUQsSUFBSixDQUFTO0FBQ2xCRSxrQkFBZ0IsRUFBQ0osSUFBSSxDQUFDSyxZQURKO0FBRWxCQyxLQUFHLEVBQUU7QUFDSEMsc0JBQWtCLEVBQUU7QUFEakI7QUFGYSxDQUFULENBQWI7QUFPQUosSUFBSSxDQUFDSyxPQUFMO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsSUFBakIsQzs7Ozs7Ozs7Ozs7QUNaQU0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JMLGNBQVksRUFBRTtBQURELENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsV0FBMkMsRUFBM0MsTUFHUztBQUNMSSxRQUFNLENBQUNDLE9BQVAsR0FBaUJULG1CQUFPLENBQUMsZ0NBQUQsQ0FBeEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNMSDtBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPVSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsTUFBSTtBQUNGLFVBQU07QUFDSkMsWUFESTtBQUVIQyxVQUFJLEVBQUU7QUFBQ0MsY0FBRDtBQUNMQyxxQkFESztBQUVMQyxtQkFGSztBQUdMQyxtQkFISztBQUlMQyxtQkFKSztBQUtMQyxhQUxLO0FBTUxDLGlCQU5LO0FBT0xDLGlCQVBLO0FBUUxDLGdCQVJLO0FBU0xDLGlCQVRLO0FBVVBDO0FBVk87QUFGSCxRQWFGZCxHQWJKOztBQWVBLFlBQVFFLE1BQVI7QUFDRSxXQUFLLEtBQUw7QUFDRSxjQUFNYSxNQUFNLEdBQUcsTUFBTXZCLDhDQUFJLENBQUN3QixLQUFMLENBQVcsNENBQVgsQ0FBckI7QUFDQWYsV0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxNQUFNLENBQUNJLElBQTVCO0FBQ0E7O0FBQ0YsV0FBSyxNQUFMO0FBQ0UsY0FBTTNCLDhDQUFJLENBQUN3QixLQUFMLENBQ0g7QUFDWDtBQUNBLGlFQUhjLEVBSUYsQ0FDRVosTUFERixFQUVFQyxhQUZGLEVBR0VDLFdBSEYsRUFJRUMsV0FKRixFQUtFQyxXQUxGLEVBTUVDLEtBTkYsRUFPRUMsU0FQRixFQVFFQyxTQVJGLEVBU0VDLFFBVEYsRUFVRUMsU0FWRixFQVdFQyxLQVhGLENBSkUsQ0FBTjtBQWlCQWIsV0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCLHlCQUF3QmQsTUFBTyxFQUFyRDtBQUNBOztBQUNGO0FBQ0VILFdBQUcsQ0FBQ21CLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBdkI7QUFDQW5CLFdBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCSSxHQUFoQixDQUFxQixVQUFTbkIsTUFBTyxXQUFyQztBQTNCSjtBQTZCRCxHQTdDRCxDQTZDRSxPQUFPb0IsQ0FBUCxFQUFVO0FBQ1ZyQixPQUFHLENBQUNnQixNQUFKLENBQVdLLENBQUMsQ0FBQ0wsTUFBRixJQUFZLEdBQXZCLEVBQTRCSSxHQUE1QixDQUFnQ0MsQ0FBQyxDQUFDQyxPQUFsQztBQUNEO0FBQ0YsQ0FqREQsRTs7Ozs7Ozs7Ozs7QUNGQSwrQiIsImZpbGUiOiJwYWdlcy9hcGkvZXZlbnRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZXZlbnRvL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qga2V5cyA9IHJlcXVpcmUoJy4va2V5cy9rZXlzLmpzJylcclxuY29uc3QgeyBQb29sIH0gPSByZXF1aXJlKCdwZycpO1xyXG5cclxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICAgIGNvbm5lY3Rpb25TdHJpbmc6a2V5cy5wb3NncmVzcWxVUkksXHJcbiAgICBzc2w6IHtcclxuICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxucG9vbC5jb25uZWN0KCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBvb2w7IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwb3NncmVzcWxVUkk6ICdwb3N0Z3JlczovL2R4ZWl3ZXdveGdubWJrOjU1MGU0MGMyYTNlZWE0YzY0NTBjY2ZjMTM2NjUyYmU2NGNhYTQyYjk2NzZlM2E1M2I1MzY5Yjc0ODFjNTM0ODRAZWMyLTMtMjExLTM3LTExNy5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1NDMyL2RjNGUybDFka2xzMDc5JyxcclxufTsiLCJpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcHJvZCcpO1xyXG4gIH0gZWxzZSB7ICAgIFxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RldicpO1xyXG4gIH0iLCJpbXBvcnQgcG9vbCBmcm9tIFwiLi4vLi4vLi4vbGliL2JkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgICBib2R5OiB7dGl0dWxvLFxyXG4gICAgICAgIGZlY2hhX2luaWNpYWwsXHJcbiAgICAgICAgZmVjaGFfZmluYWwsXHJcbiAgICAgICAgbnVtX2JvbGV0YXMsXHJcbiAgICAgICAgZGVzY3JpcGNpb24sXHJcbiAgICAgICAgbHVnYXIsXHJcbiAgICAgICAgYW5maXRyaW9uLFxyXG4gICAgICAgIGlkX2ltYWdlbixcclxuICAgICAgICB0ZW1hdGljYSxcclxuICAgICAgICBkaXJlY2Npb24sXHJcbiAgICAgIGFmb3JvfSxcclxuICAgIH0gPSByZXFcclxuXHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgIGNvbnN0IGV2ZW50byA9IGF3YWl0IHBvb2wucXVlcnkoJ3NlbGVjdCAqIGZyb20gZXZlbnRvIG5hdHVyYWwgam9pbiBpbWFnZW5lcycpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGV2ZW50by5yb3dzKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICBhd2FpdCBwb29sLnF1ZXJ5KFxyXG4gICAgICAgICAgYElOU0VSVCBJTlRPIGV2ZW50byAodGl0dWxvLCBmZWNoYV9pbmljaWFsLCBmZWNoYV9maW5hbCwgbnVtX2JvbGV0YXMsIGRlc2NyaXAsXHJcbiAgICAgICAgICAgIGx1Z2FyLCBhbmZpdHJpb24sIGlkX2ltYWdlbiwgdGVtYXRpY2EsIGRpcmVjY2lvbiwgYWZvcm8pXHJcbiAgICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTAsICQxMSlgLCBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgIHRpdHVsbyxcclxuICAgICAgICAgICAgICBmZWNoYV9pbmljaWFsLFxyXG4gICAgICAgICAgICAgIGZlY2hhX2ZpbmFsLFxyXG4gICAgICAgICAgICAgIG51bV9ib2xldGFzLFxyXG4gICAgICAgICAgICAgIGRlc2NyaXBjaW9uLFxyXG4gICAgICAgICAgICAgIGx1Z2FyLFxyXG4gICAgICAgICAgICAgIGFuZml0cmlvbixcclxuICAgICAgICAgICAgICBpZF9pbWFnZW4sXHJcbiAgICAgICAgICAgICAgdGVtYXRpY2EsXHJcbiAgICAgICAgICAgICAgZGlyZWNjaW9uLFxyXG4gICAgICAgICAgICAgIGFmb3JvXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYFNlIFJFR0lTVFJPIGVsIGV2ZW50byAke3RpdHVsb31gKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldG9kbyAke21ldGhvZH0gSW52YWxpZG9gKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJlcy5zdGF0dXMoZS5zdGF0dXMgfHwgNTAwKS5lbmQoZS5tZXNzYWdlKVxyXG4gIH1cclxufSBcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=