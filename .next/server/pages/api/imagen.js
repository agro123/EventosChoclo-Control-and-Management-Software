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

eval("const keys = __webpack_require__(/*! ./keys/keys.js */ \"./lib/keys/keys.js\");\n\nconst {\n  Pool\n} = __webpack_require__(/*! pg */ \"pg\");\n\nconst pool = new Pool({\n  connectionString: keys.posgresqlURI,\n  ssl: {\n    rejectUnauthorized: false\n  }\n});\npool.connect();\nmodule.exports = pool;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYmQuanM/ODUzMiJdLCJuYW1lcyI6WyJrZXlzIiwicmVxdWlyZSIsIlBvb2wiLCJwb29sIiwiY29ubmVjdGlvblN0cmluZyIsInBvc2dyZXNxbFVSSSIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsImNvbm5lY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBcEI7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQVdELG1CQUFPLENBQUMsY0FBRCxDQUF4Qjs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsSUFBSUQsSUFBSixDQUFTO0FBQ2xCRSxrQkFBZ0IsRUFBQ0osSUFBSSxDQUFDSyxZQURKO0FBRWxCQyxLQUFHLEVBQUU7QUFDSEMsc0JBQWtCLEVBQUU7QUFEakI7QUFGYSxDQUFULENBQWI7QUFPQUosSUFBSSxDQUFDSyxPQUFMO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsSUFBakIiLCJmaWxlIjoiLi9saWIvYmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXlzID0gcmVxdWlyZSgnLi9rZXlzL2tleXMuanMnKVxuY29uc3QgeyBQb29sIH0gPSByZXF1aXJlKCdwZycpO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICAgIGNvbm5lY3Rpb25TdHJpbmc6a2V5cy5wb3NncmVzcWxVUkksXG4gICAgc3NsOiB7XG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXG4gICAgfVxuICB9KTtcblxucG9vbC5jb25uZWN0KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9vbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/bd.js\n");

/***/ }),

/***/ "./lib/keys/dev.js":
/*!*************************!*\
  !*** ./lib/keys/dev.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  posgresqlURI: 'postgres://dxeiwewoxgnmbk:550e40c2a3eea4c6450ccfc136652be64caa42b9676e3a53b5369b7481c53484@ec2-3-211-37-117.compute-1.amazonaws.com:5432/dc4e2l1dkls079'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIva2V5cy9kZXYuanM/ZDUxZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicG9zZ3Jlc3FsVVJJIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLGNBQVksRUFBQztBQURBLENBQWpCIiwiZmlsZSI6Ii4vbGliL2tleXMvZGV2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcG9zZ3Jlc3FsVVJJOidwb3N0Z3JlczovL2R4ZWl3ZXdveGdubWJrOjU1MGU0MGMyYTNlZWE0YzY0NTBjY2ZjMTM2NjUyYmU2NGNhYTQyYjk2NzZlM2E1M2I1MzY5Yjc0ODFjNTM0ODRAZWMyLTMtMjExLTM3LTExNy5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo1NDMyL2RjNGUybDFka2xzMDc5JyxcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/keys/dev.js\n");

/***/ }),

/***/ "./lib/keys/keys.js":
/*!**************************!*\
  !*** ./lib/keys/keys.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("if (false) {} else {\n  module.exports = __webpack_require__(/*! ./dev */ \"./lib/keys/dev.js\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIva2V5cy9rZXlzLmpzPzY1NmEiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBLFdBQTJDLEVBQTNDLE1BR1M7QUFDTEEsUUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxtQkFBTyxDQUFDLGdDQUFELENBQXhCO0FBQ0QiLCJmaWxlIjoiLi9saWIva2V5cy9rZXlzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcHJvZCcpO1xuICB9IGVsc2UgeyAgICBcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGV2Jyk7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/keys/keys.js\n");

/***/ }),

/***/ "./node_modules/next-connect/dist/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/next-connect/dist/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Trouter = __webpack_require__(/*! trouter */ \"trouter\");\n\nconst onerror = (err, req, res) =>\n  (res.statusCode = err.status || 500) && res.end(err.message);\nconst isResSent = (res) => res.finished || res.headersSent || res.writableEnded;\nconst mount = (fn) => (fn.routes ? fn.handle.bind(fn) : fn);\n\nmodule.exports = function factory({\n  onError = onerror,\n  onNoMatch = onerror.bind(null, { status: 404, message: \"not found\" }),\n  attachParams = false,\n} = {}) {\n  function nc(req, res) {\n    return nc.run(req, res).then(\n      () => !isResSent(res) && onNoMatch(req, res),\n      (err) => onError(err, req, res)\n    );\n  }\n  nc.routes = [];\n  const _use = Trouter.prototype.use.bind(nc);\n  const _find = Trouter.prototype.find.bind(nc);\n  const _add = Trouter.prototype.add.bind(nc);\n  function add(method, base, ...fns) {\n    if (typeof base !== \"string\") return add(method, \"*\", base, ...fns);\n    _add(method, base, ...fns);\n    return nc;\n  }\n  nc.use = function use(base, ...fns) {\n    if (typeof base !== \"string\") return this.use(\"/\", base, ...fns);\n    if (base !== \"/\") {\n      let slashAdded = false;\n      fns.unshift((req, _, next) => {\n        req.url = req.url.substring(base.length);\n        if ((slashAdded = req.url[0] !== \"/\")) req.url = \"/\" + req.url;\n        next();\n      });\n      fns.push(\n        (req, _, next) =>\n          (req.url = base + (slashAdded ? req.url.substring(1) : req.url)) &&\n          next()\n      );\n    }\n    _use(base, ...fns.map(mount));\n    return nc;\n  };\n  nc.all = add.bind(nc, \"\");\n  nc.get = add.bind(nc, \"GET\");\n  nc.head = add.bind(nc, \"HEAD\");\n  nc.post = add.bind(nc, \"POST\");\n  nc.put = add.bind(nc, \"PUT\");\n  nc.delete = add.bind(nc, \"DELETE\");\n  nc.options = add.bind(nc, \"OPTIONS\");\n  nc.trace = add.bind(nc, \"TRACE\");\n  nc.patch = add.bind(nc, \"PATCH\");\n  nc.run = function run(req, res) {\n    return new Promise((resolve, reject) => {\n      this.handle(req, res, (err) => (err ? reject(err) : resolve()));\n    });\n  };\n  nc.handle = function handle(req, res, done) {\n    const idx = req.url.indexOf(\"?\");\n    const { handlers, params } = _find(\n      req.method,\n      idx !== -1 ? req.url.substring(0, idx) : req.url\n    );\n    if (attachParams) req.params = params;\n    let i = 0;\n    const len = handlers.length;\n    const loop = async (next) => handlers[i++](req, res, next);\n    const next = (err) => {\n      i < len\n        ? err\n          ? onError(err, req, res, next)\n          : loop(next).catch(next)\n        : done && done(err);\n    };\n    next();\n  };\n  return nc;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC1jb25uZWN0L2Rpc3QvaW5kZXguY2pzPzAwMmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQtY29ubmVjdC9kaXN0L2luZGV4LmNqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRyb3V0ZXIgPSByZXF1aXJlKCd0cm91dGVyJyk7XG5cbmNvbnN0IG9uZXJyb3IgPSAoZXJyLCByZXEsIHJlcykgPT5cbiAgKHJlcy5zdGF0dXNDb2RlID0gZXJyLnN0YXR1cyB8fCA1MDApICYmIHJlcy5lbmQoZXJyLm1lc3NhZ2UpO1xuY29uc3QgaXNSZXNTZW50ID0gKHJlcykgPT4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudCB8fCByZXMud3JpdGFibGVFbmRlZDtcbmNvbnN0IG1vdW50ID0gKGZuKSA9PiAoZm4ucm91dGVzID8gZm4uaGFuZGxlLmJpbmQoZm4pIDogZm4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhY3Rvcnkoe1xuICBvbkVycm9yID0gb25lcnJvcixcbiAgb25Ob01hdGNoID0gb25lcnJvci5iaW5kKG51bGwsIHsgc3RhdHVzOiA0MDQsIG1lc3NhZ2U6IFwibm90IGZvdW5kXCIgfSksXG4gIGF0dGFjaFBhcmFtcyA9IGZhbHNlLFxufSA9IHt9KSB7XG4gIGZ1bmN0aW9uIG5jKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG5jLnJ1bihyZXEsIHJlcykudGhlbihcbiAgICAgICgpID0+ICFpc1Jlc1NlbnQocmVzKSAmJiBvbk5vTWF0Y2gocmVxLCByZXMpLFxuICAgICAgKGVycikgPT4gb25FcnJvcihlcnIsIHJlcSwgcmVzKVxuICAgICk7XG4gIH1cbiAgbmMucm91dGVzID0gW107XG4gIGNvbnN0IF91c2UgPSBUcm91dGVyLnByb3RvdHlwZS51c2UuYmluZChuYyk7XG4gIGNvbnN0IF9maW5kID0gVHJvdXRlci5wcm90b3R5cGUuZmluZC5iaW5kKG5jKTtcbiAgY29uc3QgX2FkZCA9IFRyb3V0ZXIucHJvdG90eXBlLmFkZC5iaW5kKG5jKTtcbiAgZnVuY3Rpb24gYWRkKG1ldGhvZCwgYmFzZSwgLi4uZm5zKSB7XG4gICAgaWYgKHR5cGVvZiBiYXNlICE9PSBcInN0cmluZ1wiKSByZXR1cm4gYWRkKG1ldGhvZCwgXCIqXCIsIGJhc2UsIC4uLmZucyk7XG4gICAgX2FkZChtZXRob2QsIGJhc2UsIC4uLmZucyk7XG4gICAgcmV0dXJuIG5jO1xuICB9XG4gIG5jLnVzZSA9IGZ1bmN0aW9uIHVzZShiYXNlLCAuLi5mbnMpIHtcbiAgICBpZiAodHlwZW9mIGJhc2UgIT09IFwic3RyaW5nXCIpIHJldHVybiB0aGlzLnVzZShcIi9cIiwgYmFzZSwgLi4uZm5zKTtcbiAgICBpZiAoYmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIGxldCBzbGFzaEFkZGVkID0gZmFsc2U7XG4gICAgICBmbnMudW5zaGlmdCgocmVxLCBfLCBuZXh0KSA9PiB7XG4gICAgICAgIHJlcS51cmwgPSByZXEudXJsLnN1YnN0cmluZyhiYXNlLmxlbmd0aCk7XG4gICAgICAgIGlmICgoc2xhc2hBZGRlZCA9IHJlcS51cmxbMF0gIT09IFwiL1wiKSkgcmVxLnVybCA9IFwiL1wiICsgcmVxLnVybDtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgICBmbnMucHVzaChcbiAgICAgICAgKHJlcSwgXywgbmV4dCkgPT5cbiAgICAgICAgICAocmVxLnVybCA9IGJhc2UgKyAoc2xhc2hBZGRlZCA/IHJlcS51cmwuc3Vic3RyaW5nKDEpIDogcmVxLnVybCkpICYmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICApO1xuICAgIH1cbiAgICBfdXNlKGJhc2UsIC4uLmZucy5tYXAobW91bnQpKTtcbiAgICByZXR1cm4gbmM7XG4gIH07XG4gIG5jLmFsbCA9IGFkZC5iaW5kKG5jLCBcIlwiKTtcbiAgbmMuZ2V0ID0gYWRkLmJpbmQobmMsIFwiR0VUXCIpO1xuICBuYy5oZWFkID0gYWRkLmJpbmQobmMsIFwiSEVBRFwiKTtcbiAgbmMucG9zdCA9IGFkZC5iaW5kKG5jLCBcIlBPU1RcIik7XG4gIG5jLnB1dCA9IGFkZC5iaW5kKG5jLCBcIlBVVFwiKTtcbiAgbmMuZGVsZXRlID0gYWRkLmJpbmQobmMsIFwiREVMRVRFXCIpO1xuICBuYy5vcHRpb25zID0gYWRkLmJpbmQobmMsIFwiT1BUSU9OU1wiKTtcbiAgbmMudHJhY2UgPSBhZGQuYmluZChuYywgXCJUUkFDRVwiKTtcbiAgbmMucGF0Y2ggPSBhZGQuYmluZChuYywgXCJQQVRDSFwiKTtcbiAgbmMucnVuID0gZnVuY3Rpb24gcnVuKHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlKHJlcSwgcmVzLCAoZXJyKSA9PiAoZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKCkpKTtcbiAgICB9KTtcbiAgfTtcbiAgbmMuaGFuZGxlID0gZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzLCBkb25lKSB7XG4gICAgY29uc3QgaWR4ID0gcmVxLnVybC5pbmRleE9mKFwiP1wiKTtcbiAgICBjb25zdCB7IGhhbmRsZXJzLCBwYXJhbXMgfSA9IF9maW5kKFxuICAgICAgcmVxLm1ldGhvZCxcbiAgICAgIGlkeCAhPT0gLTEgPyByZXEudXJsLnN1YnN0cmluZygwLCBpZHgpIDogcmVxLnVybFxuICAgICk7XG4gICAgaWYgKGF0dGFjaFBhcmFtcykgcmVxLnBhcmFtcyA9IHBhcmFtcztcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGVuID0gaGFuZGxlcnMubGVuZ3RoO1xuICAgIGNvbnN0IGxvb3AgPSBhc3luYyAobmV4dCkgPT4gaGFuZGxlcnNbaSsrXShyZXEsIHJlcywgbmV4dCk7XG4gICAgY29uc3QgbmV4dCA9IChlcnIpID0+IHtcbiAgICAgIGkgPCBsZW5cbiAgICAgICAgPyBlcnJcbiAgICAgICAgICA/IG9uRXJyb3IoZXJyLCByZXEsIHJlcywgbmV4dClcbiAgICAgICAgICA6IGxvb3AobmV4dCkuY2F0Y2gobmV4dClcbiAgICAgICAgOiBkb25lICYmIGRvbmUoZXJyKTtcbiAgICB9O1xuICAgIG5leHQoKTtcbiAgfTtcbiAgcmV0dXJuIG5jO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next-connect/dist/index.cjs\n");

/***/ }),

/***/ "./pages/api/imagen/index.js":
/*!***********************************!*\
  !*** ./pages/api/imagen/index.js ***!
  \***********************************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var _lib_bd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/bd */ \"./lib/bd.js\");\n/* harmony import */ var _lib_bd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_bd__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"./node_modules/next-connect/dist/index.cjs\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst multer = __webpack_require__(/*! multer */ \"multer\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst diskStorage = multer.diskStorage({\n  destination: './imagenes',\n  filename: (req, file, cb) => {\n    cb(null, `${Date.now()}-${file.originalname}`);\n  }\n});\nconst fileUpLoad = multer({\n  storage: diskStorage\n});\nconst apiRoute = next_connect__WEBPACK_IMPORTED_MODULE_1___default()({\n  onError(error, req, res) {\n    res.status(501).json({\n      error: `¡Lo siento, sucedió algo! ${error.message}`\n    });\n  },\n\n  onNoMatch(req, res) {\n    res.status(405).json({\n      error: `Metodo '${req.method}' no valido`\n    });\n  }\n\n});\napiRoute.get(async (req, res) => {\n  const evento = await _lib_bd__WEBPACK_IMPORTED_MODULE_0___default.a.query('SELECT * FROM imagenes');\n  res.status(200).json(evento.rows);\n});\napiRoute.use(fileUpLoad.single('image'));\napiRoute.post(async (req, res) => {\n  const {\n    file\n  } = req;\n  const nom_imagen = file.originalname;\n  const tipo = file.mimetype;\n  const datos = fs.readFileSync(`./imagenes/${file.filename}`);\n  console.log(datos);\n  const response = await _lib_bd__WEBPACK_IMPORTED_MODULE_0___default.a.query(`INSERT INTO imagenes (nom_imagen, tipo, datos)\n      VALUES($1, $2, $3) returning id_imagen`, [nom_imagen, tipo, datos]);\n  res.status(200).json(response.rows[0]);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiRoute);\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW1hZ2VuL2luZGV4LmpzP2FmNDciXSwibmFtZXMiOlsibXVsdGVyIiwicmVxdWlyZSIsImZzIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsImZpbGVuYW1lIiwicmVxIiwiZmlsZSIsImNiIiwiRGF0ZSIsIm5vdyIsIm9yaWdpbmFsbmFtZSIsImZpbGVVcExvYWQiLCJzdG9yYWdlIiwiYXBpUm91dGUiLCJuZXh0Q29ubmVjdCIsIm9uRXJyb3IiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwib25Ob01hdGNoIiwibWV0aG9kIiwiZ2V0IiwiZXZlbnRvIiwicG9vbCIsInF1ZXJ5Iiwicm93cyIsInVzZSIsInNpbmdsZSIsInBvc3QiLCJub21faW1hZ2VuIiwidGlwbyIsIm1pbWV0eXBlIiwiZGF0b3MiLCJyZWFkRmlsZVN5bmMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxFQUFFLEdBQUdELG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFFQSxNQUFNRSxXQUFXLEdBQUdILE1BQU0sQ0FBQ0csV0FBUCxDQUFtQjtBQUNyQ0MsYUFBVyxFQUFFLFlBRHdCO0FBRXJDQyxVQUFRLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEVBQVosS0FBbUI7QUFDM0JBLE1BQUUsQ0FBQyxJQUFELEVBQVEsR0FBRUMsSUFBSSxDQUFDQyxHQUFMLEVBQVcsSUFBR0gsSUFBSSxDQUFDSSxZQUFhLEVBQTFDLENBQUY7QUFDRDtBQUpvQyxDQUFuQixDQUFwQjtBQU9BLE1BQU1DLFVBQVUsR0FBR1osTUFBTSxDQUFDO0FBQ3hCYSxTQUFPLEVBQUVWO0FBRGUsQ0FBRCxDQUF6QjtBQUlBLE1BQU1XLFFBQVEsR0FBR0MsbURBQVcsQ0FBQztBQUMzQkMsU0FBTyxDQUFDQyxLQUFELEVBQVFYLEdBQVIsRUFBYVksR0FBYixFQUFrQjtBQUN2QkEsT0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUgsV0FBSyxFQUFHLDZCQUE0QkEsS0FBSyxDQUFDSSxPQUFRO0FBQXBELEtBQXJCO0FBQ0QsR0FIMEI7O0FBSTNCQyxXQUFTLENBQUNoQixHQUFELEVBQU1ZLEdBQU4sRUFBVztBQUNsQkEsT0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUgsV0FBSyxFQUFHLFdBQVVYLEdBQUcsQ0FBQ2lCLE1BQU87QUFBL0IsS0FBckI7QUFDRDs7QUFOMEIsQ0FBRCxDQUE1QjtBQVNBVCxRQUFRLENBQUNVLEdBQVQsQ0FBYSxPQUFPbEIsR0FBUCxFQUFZWSxHQUFaLEtBQW9CO0FBQy9CLFFBQU1PLE1BQU0sR0FBRyxNQUFNQyw4Q0FBSSxDQUFDQyxLQUFMLENBQVcsd0JBQVgsQ0FBckI7QUFDQVQsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJLLE1BQU0sQ0FBQ0csSUFBNUI7QUFDRCxDQUhEO0FBS0FkLFFBQVEsQ0FBQ2UsR0FBVCxDQUFhakIsVUFBVSxDQUFDa0IsTUFBWCxDQUFrQixPQUFsQixDQUFiO0FBRUFoQixRQUFRLENBQUNpQixJQUFULENBQWMsT0FBTXpCLEdBQU4sRUFBV1ksR0FBWCxLQUFtQjtBQUMvQixRQUFNO0FBQUNYO0FBQUQsTUFBVUQsR0FBaEI7QUFFQSxRQUFNMEIsVUFBVSxHQUFHekIsSUFBSSxDQUFDSSxZQUF4QjtBQUNBLFFBQU1zQixJQUFJLEdBQUcxQixJQUFJLENBQUMyQixRQUFsQjtBQUNBLFFBQU1DLEtBQUssR0FBR2pDLEVBQUUsQ0FBQ2tDLFlBQUgsQ0FBa0IsY0FBYTdCLElBQUksQ0FBQ0YsUUFBUyxFQUE3QyxDQUFkO0FBQ0FnQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUVBLFFBQU1JLFFBQVEsR0FBRyxNQUFNYiw4Q0FBSSxDQUFDQyxLQUFMLENBQ3BCO0FBQ0wsNkNBRnlCLEVBRXFCLENBQUNLLFVBQUQsRUFBYUMsSUFBYixFQUFtQkUsS0FBbkIsQ0FGckIsQ0FBdkI7QUFLQWpCLEtBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCbUIsUUFBUSxDQUFDWCxJQUFULENBQWMsQ0FBZCxDQUFyQjtBQUNELENBZEQ7QUFpQmVkLHVFQUFmO0FBR08sTUFBTTBCLE1BQU0sR0FBRztBQUNwQkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9pbWFnZW4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9vbCBmcm9tIFwiLi4vLi4vLi4vbGliL2JkXCI7XG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0J1xuY29uc3QgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IGRpc2tTdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgZGVzdGluYXRpb246ICcuL2ltYWdlbmVzJyxcbiAgZmlsZW5hbWU6IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgY2IobnVsbCwgYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm9yaWdpbmFsbmFtZX1gKTtcbiAgfVxufSlcblxuY29uc3QgZmlsZVVwTG9hZCA9IG11bHRlcih7XG4gIHN0b3JhZ2U6IGRpc2tTdG9yYWdlLFxufSlcblxuY29uc3QgYXBpUm91dGUgPSBuZXh0Q29ubmVjdCh7XG4gIG9uRXJyb3IoZXJyb3IsIHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cyg1MDEpLmpzb24oeyBlcnJvcjogYMKhTG8gc2llbnRvLCBzdWNlZGnDsyBhbGdvISAke2Vycm9yLm1lc3NhZ2V9YCB9KTtcbiAgfSxcbiAgb25Ob01hdGNoKHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogYE1ldG9kbyAnJHtyZXEubWV0aG9kfScgbm8gdmFsaWRvYCB9KTtcbiAgfSxcbn0pO1xuXG5hcGlSb3V0ZS5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGV2ZW50byA9IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCAqIEZST00gaW1hZ2VuZXMnKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZXZlbnRvLnJvd3MpO1xufSlcblxuYXBpUm91dGUudXNlKGZpbGVVcExvYWQuc2luZ2xlKCdpbWFnZScpKTtcblxuYXBpUm91dGUucG9zdChhc3luYyhyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7ZmlsZSB9ID0gcmVxXG5cbiAgY29uc3Qgbm9tX2ltYWdlbiA9IGZpbGUub3JpZ2luYWxuYW1lO1xuICBjb25zdCB0aXBvID0gZmlsZS5taW1ldHlwZTtcbiAgY29uc3QgZGF0b3MgPSBmcy5yZWFkRmlsZVN5bmMoIGAuL2ltYWdlbmVzLyR7ZmlsZS5maWxlbmFtZX1gKTtcbiAgY29uc29sZS5sb2coZGF0b3MpXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb29sLnF1ZXJ5KFxuICAgIGBJTlNFUlQgSU5UTyBpbWFnZW5lcyAobm9tX2ltYWdlbiwgdGlwbywgZGF0b3MpXG4gICAgICBWQUxVRVMoJDEsICQyLCAkMykgcmV0dXJuaW5nIGlkX2ltYWdlbmAsW25vbV9pbWFnZW4sIHRpcG8sIGRhdG9zXVxuICApO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLnJvd3NbMF0pO1xufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXBpUm91dGU7XG5cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/imagen/index.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtdWx0ZXJcIj9hNzA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im11bHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///multer\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiPzRkYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicGcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pg\n");

/***/ }),

/***/ "trouter":
/*!**************************!*\
  !*** external "trouter" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"trouter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0cm91dGVyXCI/Y2FlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0cm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///trouter\n");

/***/ })

/******/ });