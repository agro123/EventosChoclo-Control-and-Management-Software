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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/imagen/index.js");
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

/***/ "./node_modules/next-connect/dist/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/next-connect/dist/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Trouter = __webpack_require__(/*! trouter */ "trouter");

const onerror = (err, req, res) =>
  (res.statusCode = err.status || 500) && res.end(err.message);
const isResSent = (res) => res.finished || res.headersSent || res.writableEnded;
const mount = (fn) => (fn.routes ? fn.handle.bind(fn) : fn);

module.exports = function factory({
  onError = onerror,
  onNoMatch = onerror.bind(null, { status: 404, message: "not found" }),
  attachParams = false,
} = {}) {
  function nc(req, res) {
    return nc.run(req, res).then(
      () => !isResSent(res) && onNoMatch(req, res),
      (err) => onError(err, req, res)
    );
  }
  nc.routes = [];
  const _use = Trouter.prototype.use.bind(nc);
  const _find = Trouter.prototype.find.bind(nc);
  const _add = Trouter.prototype.add.bind(nc);
  function add(method, base, ...fns) {
    if (typeof base !== "string") return add(method, "*", base, ...fns);
    _add(method, base, ...fns);
    return nc;
  }
  nc.use = function use(base, ...fns) {
    if (typeof base !== "string") return this.use("/", base, ...fns);
    if (base !== "/") {
      let slashAdded = false;
      fns.unshift((req, _, next) => {
        req.url = req.url.substring(base.length);
        if ((slashAdded = req.url[0] !== "/")) req.url = "/" + req.url;
        next();
      });
      fns.push(
        (req, _, next) =>
          (req.url = base + (slashAdded ? req.url.substring(1) : req.url)) &&
          next()
      );
    }
    _use(base, ...fns.map(mount));
    return nc;
  };
  nc.all = add.bind(nc, "");
  nc.get = add.bind(nc, "GET");
  nc.head = add.bind(nc, "HEAD");
  nc.post = add.bind(nc, "POST");
  nc.put = add.bind(nc, "PUT");
  nc.delete = add.bind(nc, "DELETE");
  nc.options = add.bind(nc, "OPTIONS");
  nc.trace = add.bind(nc, "TRACE");
  nc.patch = add.bind(nc, "PATCH");
  nc.run = function run(req, res) {
    return new Promise((resolve, reject) => {
      this.handle(req, res, (err) => (err ? reject(err) : resolve()));
    });
  };
  nc.handle = function handle(req, res, done) {
    const idx = req.url.indexOf("?");
    const { handlers, params } = _find(
      req.method,
      idx !== -1 ? req.url.substring(0, idx) : req.url
    );
    if (attachParams) req.params = params;
    let i = 0;
    const len = handlers.length;
    const loop = async (next) => handlers[i++](req, res, next);
    const next = (err) => {
      i < len
        ? err
          ? onError(err, req, res, next)
          : loop(next).catch(next)
        : done && done(err);
    };
    next();
  };
  return nc;
}


/***/ }),

/***/ "./pages/api/imagen/index.js":
/*!***********************************!*\
  !*** ./pages/api/imagen/index.js ***!
  \***********************************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _lib_bd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/bd */ "./lib/bd.js");
/* harmony import */ var _lib_bd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_bd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ "./node_modules/next-connect/dist/index.cjs");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);



const multer = __webpack_require__(/*! multer */ "multer");

const fs = __webpack_require__(/*! fs */ "fs");

const diskStorage = multer.diskStorage({
  destination: './imagenes',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const fileUpLoad = multer({
  storage: diskStorage
});
const apiRoute = next_connect__WEBPACK_IMPORTED_MODULE_1___default()({
  onError(error, req, res) {
    res.status(501).json({
      error: `¡Lo siento, sucedió algo! ${error.message}`
    });
  },

  onNoMatch(req, res) {
    res.status(405).json({
      error: `Metodo '${req.method}' no valido`
    });
  }

});
apiRoute.get(async (req, res) => {
  const evento = await _lib_bd__WEBPACK_IMPORTED_MODULE_0___default.a.query('SELECT * FROM imagenes');
  res.status(200).json(evento.rows);
});
apiRoute.use(fileUpLoad.single('image'));
apiRoute.post(async (req, res) => {
  const {
    file
  } = req;
  const nom_imagen = file.originalname;
  const tipo = file.mimetype;
  const datos = fs.readFileSync(`./imagenes/${file.filename}`);
  console.log(datos);
  const response = await _lib_bd__WEBPACK_IMPORTED_MODULE_0___default.a.query(`INSERT INTO imagenes (nom_imagen, tipo, datos)
      VALUES($1, $2, $3) returning id_imagen`, [nom_imagen, tipo, datos]);
  res.status(200).json(response.rows[0]);
});
/* harmony default export */ __webpack_exports__["default"] = (apiRoute);
const config = {
  api: {
    bodyParser: false
  }
};

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "trouter":
/*!**************************!*\
  !*** external "trouter" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("trouter");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2JkLmpzIiwid2VicGFjazovLy8uL2xpYi9rZXlzL2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9saWIva2V5cy9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0LWNvbm5lY3QvZGlzdC9pbmRleC5janMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2ltYWdlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHJvdXRlclwiIl0sIm5hbWVzIjpbImtleXMiLCJyZXF1aXJlIiwiUG9vbCIsInBvb2wiLCJjb25uZWN0aW9uU3RyaW5nIiwicG9zZ3Jlc3FsVVJJIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwiY29ubmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtdWx0ZXIiLCJmcyIsImRpc2tTdG9yYWdlIiwiZGVzdGluYXRpb24iLCJmaWxlbmFtZSIsInJlcSIsImZpbGUiLCJjYiIsIkRhdGUiLCJub3ciLCJvcmlnaW5hbG5hbWUiLCJmaWxlVXBMb2FkIiwic3RvcmFnZSIsImFwaVJvdXRlIiwibmV4dENvbm5lY3QiLCJvbkVycm9yIiwiZXJyb3IiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm9uTm9NYXRjaCIsIm1ldGhvZCIsImdldCIsImV2ZW50byIsInF1ZXJ5Iiwicm93cyIsInVzZSIsInNpbmdsZSIsInBvc3QiLCJub21faW1hZ2VuIiwidGlwbyIsIm1pbWV0eXBlIiwiZGF0b3MiLCJyZWFkRmlsZVN5bmMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7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RUFBRSxDQUFDaUMsWUFBSCxDQUFrQixjQUFhNUIsSUFBSSxDQUFDRixRQUFTLEVBQTdDLENBQWQ7QUFDQStCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRUEsUUFBTUksUUFBUSxHQUFHLE1BQU03Qyw4Q0FBSSxDQUFDaUMsS0FBTCxDQUNwQjtBQUNMLDZDQUZ5QixFQUVxQixDQUFDSyxVQUFELEVBQWFDLElBQWIsRUFBbUJFLEtBQW5CLENBRnJCLENBQXZCO0FBS0FoQixLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQmtCLFFBQVEsQ0FBQ1gsSUFBVCxDQUFjLENBQWQsQ0FBckI7QUFDRCxDQWREO0FBaUJlYix1RUFBZjtBQUdPLE1BQU15QixNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWYsQzs7Ozs7Ozs7Ozs7QUNwRFAsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2ltYWdlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2ltYWdlbi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGtleXMgPSByZXF1aXJlKCcuL2tleXMva2V5cy5qcycpXHJcbmNvbnN0IHsgUG9vbCB9ID0gcmVxdWlyZSgncGcnKTtcclxuXHJcbmNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XHJcbiAgICBjb25uZWN0aW9uU3RyaW5nOmtleXMucG9zZ3Jlc3FsVVJJLFxyXG4gICAgc3NsOiB7XHJcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcclxuICAgIH1cclxuICB9KTtcclxuXHJcbnBvb2wuY29ubmVjdCgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwb29sOyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcG9zZ3Jlc3FsVVJJOiAncG9zdGdyZXM6Ly9keGVpd2V3b3hnbm1iazo1NTBlNDBjMmEzZWVhNGM2NDUwY2NmYzEzNjY1MmJlNjRjYWE0MmI5Njc2ZTNhNTNiNTM2OWI3NDgxYzUzNDg0QGVjMi0zLTIxMS0zNy0xMTcuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206NTQzMi9kYzRlMmwxZGtsczA3OScsXHJcbn07IiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIFxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3Byb2QnKTtcclxuICB9IGVsc2UgeyAgICBcclxuICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZXYnKTtcclxuICB9IiwiY29uc3QgVHJvdXRlciA9IHJlcXVpcmUoJ3Ryb3V0ZXInKTtcblxuY29uc3Qgb25lcnJvciA9IChlcnIsIHJlcSwgcmVzKSA9PlxuICAocmVzLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzIHx8IDUwMCkgJiYgcmVzLmVuZChlcnIubWVzc2FnZSk7XG5jb25zdCBpc1Jlc1NlbnQgPSAocmVzKSA9PiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50IHx8IHJlcy53cml0YWJsZUVuZGVkO1xuY29uc3QgbW91bnQgPSAoZm4pID0+IChmbi5yb3V0ZXMgPyBmbi5oYW5kbGUuYmluZChmbikgOiBmbik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmFjdG9yeSh7XG4gIG9uRXJyb3IgPSBvbmVycm9yLFxuICBvbk5vTWF0Y2ggPSBvbmVycm9yLmJpbmQobnVsbCwgeyBzdGF0dXM6IDQwNCwgbWVzc2FnZTogXCJub3QgZm91bmRcIiB9KSxcbiAgYXR0YWNoUGFyYW1zID0gZmFsc2UsXG59ID0ge30pIHtcbiAgZnVuY3Rpb24gbmMocmVxLCByZXMpIHtcbiAgICByZXR1cm4gbmMucnVuKHJlcSwgcmVzKS50aGVuKFxuICAgICAgKCkgPT4gIWlzUmVzU2VudChyZXMpICYmIG9uTm9NYXRjaChyZXEsIHJlcyksXG4gICAgICAoZXJyKSA9PiBvbkVycm9yKGVyciwgcmVxLCByZXMpXG4gICAgKTtcbiAgfVxuICBuYy5yb3V0ZXMgPSBbXTtcbiAgY29uc3QgX3VzZSA9IFRyb3V0ZXIucHJvdG90eXBlLnVzZS5iaW5kKG5jKTtcbiAgY29uc3QgX2ZpbmQgPSBUcm91dGVyLnByb3RvdHlwZS5maW5kLmJpbmQobmMpO1xuICBjb25zdCBfYWRkID0gVHJvdXRlci5wcm90b3R5cGUuYWRkLmJpbmQobmMpO1xuICBmdW5jdGlvbiBhZGQobWV0aG9kLCBiYXNlLCAuLi5mbnMpIHtcbiAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwic3RyaW5nXCIpIHJldHVybiBhZGQobWV0aG9kLCBcIipcIiwgYmFzZSwgLi4uZm5zKTtcbiAgICBfYWRkKG1ldGhvZCwgYmFzZSwgLi4uZm5zKTtcbiAgICByZXR1cm4gbmM7XG4gIH1cbiAgbmMudXNlID0gZnVuY3Rpb24gdXNlKGJhc2UsIC4uLmZucykge1xuICAgIGlmICh0eXBlb2YgYmFzZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIHRoaXMudXNlKFwiL1wiLCBiYXNlLCAuLi5mbnMpO1xuICAgIGlmIChiYXNlICE9PSBcIi9cIikge1xuICAgICAgbGV0IHNsYXNoQWRkZWQgPSBmYWxzZTtcbiAgICAgIGZucy51bnNoaWZ0KChyZXEsIF8sIG5leHQpID0+IHtcbiAgICAgICAgcmVxLnVybCA9IHJlcS51cmwuc3Vic3RyaW5nKGJhc2UubGVuZ3RoKTtcbiAgICAgICAgaWYgKChzbGFzaEFkZGVkID0gcmVxLnVybFswXSAhPT0gXCIvXCIpKSByZXEudXJsID0gXCIvXCIgKyByZXEudXJsO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICAgIGZucy5wdXNoKFxuICAgICAgICAocmVxLCBfLCBuZXh0KSA9PlxuICAgICAgICAgIChyZXEudXJsID0gYmFzZSArIChzbGFzaEFkZGVkID8gcmVxLnVybC5zdWJzdHJpbmcoMSkgOiByZXEudXJsKSkgJiZcbiAgICAgICAgICBuZXh0KClcbiAgICAgICk7XG4gICAgfVxuICAgIF91c2UoYmFzZSwgLi4uZm5zLm1hcChtb3VudCkpO1xuICAgIHJldHVybiBuYztcbiAgfTtcbiAgbmMuYWxsID0gYWRkLmJpbmQobmMsIFwiXCIpO1xuICBuYy5nZXQgPSBhZGQuYmluZChuYywgXCJHRVRcIik7XG4gIG5jLmhlYWQgPSBhZGQuYmluZChuYywgXCJIRUFEXCIpO1xuICBuYy5wb3N0ID0gYWRkLmJpbmQobmMsIFwiUE9TVFwiKTtcbiAgbmMucHV0ID0gYWRkLmJpbmQobmMsIFwiUFVUXCIpO1xuICBuYy5kZWxldGUgPSBhZGQuYmluZChuYywgXCJERUxFVEVcIik7XG4gIG5jLm9wdGlvbnMgPSBhZGQuYmluZChuYywgXCJPUFRJT05TXCIpO1xuICBuYy50cmFjZSA9IGFkZC5iaW5kKG5jLCBcIlRSQUNFXCIpO1xuICBuYy5wYXRjaCA9IGFkZC5iaW5kKG5jLCBcIlBBVENIXCIpO1xuICBuYy5ydW4gPSBmdW5jdGlvbiBydW4ocmVxLCByZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGUocmVxLCByZXMsIChlcnIpID0+IChlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoKSkpO1xuICAgIH0pO1xuICB9O1xuICBuYy5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMsIGRvbmUpIHtcbiAgICBjb25zdCBpZHggPSByZXEudXJsLmluZGV4T2YoXCI/XCIpO1xuICAgIGNvbnN0IHsgaGFuZGxlcnMsIHBhcmFtcyB9ID0gX2ZpbmQoXG4gICAgICByZXEubWV0aG9kLFxuICAgICAgaWR4ICE9PSAtMSA/IHJlcS51cmwuc3Vic3RyaW5nKDAsIGlkeCkgOiByZXEudXJsXG4gICAgKTtcbiAgICBpZiAoYXR0YWNoUGFyYW1zKSByZXEucGFyYW1zID0gcGFyYW1zO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBsZW4gPSBoYW5kbGVycy5sZW5ndGg7XG4gICAgY29uc3QgbG9vcCA9IGFzeW5jIChuZXh0KSA9PiBoYW5kbGVyc1tpKytdKHJlcSwgcmVzLCBuZXh0KTtcbiAgICBjb25zdCBuZXh0ID0gKGVycikgPT4ge1xuICAgICAgaSA8IGxlblxuICAgICAgICA/IGVyclxuICAgICAgICAgID8gb25FcnJvcihlcnIsIHJlcSwgcmVzLCBuZXh0KVxuICAgICAgICAgIDogbG9vcChuZXh0KS5jYXRjaChuZXh0KVxuICAgICAgICA6IGRvbmUgJiYgZG9uZShlcnIpO1xuICAgIH07XG4gICAgbmV4dCgpO1xuICB9O1xuICByZXR1cm4gbmM7XG59XG4iLCJpbXBvcnQgcG9vbCBmcm9tIFwiLi4vLi4vLi4vbGliL2JkXCI7XHJcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnXHJcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XHJcblxyXG5jb25zdCBkaXNrU3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XHJcbiAgZGVzdGluYXRpb246ICcuL2ltYWdlbmVzJyxcclxuICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcclxuICAgIGNiKG51bGwsIGAke0RhdGUubm93KCl9LSR7ZmlsZS5vcmlnaW5hbG5hbWV9YCk7XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgZmlsZVVwTG9hZCA9IG11bHRlcih7XHJcbiAgc3RvcmFnZTogZGlza1N0b3JhZ2UsXHJcbn0pXHJcblxyXG5jb25zdCBhcGlSb3V0ZSA9IG5leHRDb25uZWN0KHtcclxuICBvbkVycm9yKGVycm9yLCByZXEsIHJlcykge1xyXG4gICAgcmVzLnN0YXR1cyg1MDEpLmpzb24oeyBlcnJvcjogYMKhTG8gc2llbnRvLCBzdWNlZGnDsyBhbGdvISAke2Vycm9yLm1lc3NhZ2V9YCB9KTtcclxuICB9LFxyXG4gIG9uTm9NYXRjaChyZXEsIHJlcykge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogYE1ldG9kbyAnJHtyZXEubWV0aG9kfScgbm8gdmFsaWRvYCB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmFwaVJvdXRlLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBldmVudG8gPSBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGltYWdlbmVzJyk7XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZXZlbnRvLnJvd3MpO1xyXG59KVxyXG5cclxuYXBpUm91dGUudXNlKGZpbGVVcExvYWQuc2luZ2xlKCdpbWFnZScpKTtcclxuXHJcbmFwaVJvdXRlLnBvc3QoYXN5bmMocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7ZmlsZSB9ID0gcmVxXHJcblxyXG4gIGNvbnN0IG5vbV9pbWFnZW4gPSBmaWxlLm9yaWdpbmFsbmFtZTtcclxuICBjb25zdCB0aXBvID0gZmlsZS5taW1ldHlwZTtcclxuICBjb25zdCBkYXRvcyA9IGZzLnJlYWRGaWxlU3luYyggYC4vaW1hZ2VuZXMvJHtmaWxlLmZpbGVuYW1lfWApO1xyXG4gIGNvbnNvbGUubG9nKGRhdG9zKVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICBgSU5TRVJUIElOVE8gaW1hZ2VuZXMgKG5vbV9pbWFnZW4sIHRpcG8sIGRhdG9zKVxyXG4gICAgICBWQUxVRVMoJDEsICQyLCAkMykgcmV0dXJuaW5nIGlkX2ltYWdlbmAsW25vbV9pbWFnZW4sIHRpcG8sIGRhdG9zXVxyXG4gICk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLnJvd3NbMF0pO1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlSb3V0ZTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRyb3V0ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==