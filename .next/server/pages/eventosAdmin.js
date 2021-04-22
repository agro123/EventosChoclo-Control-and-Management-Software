module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/eventosAdmin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/database/data.json":
/*!***************************************!*\
  !*** ./components/database/data.json ***!
  \***************************************/
/*! exports provided: eventos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"eventos\":[{\"id\":123,\"titulo\":\"TomorrowLand\",\"fecha_inicial\":\"27/8/2021\",\"fecha_final\":\"5/9/2021\",\"num_boletas\":1000,\"descripcion\":\"Tomorrowland es un festival de y música electrónica de baile celebrado anualmente en la localidad de Boom.\",\"lugar\":\"Boom, Amberes\",\"anfitrion\":\"El jefaso\",\"imagen\":\"https://upload.wikimedia.org/wikipedia/commons/8/8f/Tomorrowland2015.jpg\"},{\"id\":456,\"titulo\":\"Destroy\",\"fecha_inicial\":\"12/6/2021\",\"fecha_final\":\"12/6/2021\",\"num_boletas\":100,\"descripcion\":\"Lugar de lokisa\",\"lugar\":\"Cali\",\"anfitrion\":\"Desconocido\",\"imagen\":\"https://image.api.playstation.com/cdn/EP0096/CUSA04545_00/hopaVXL7hdFE6lKafM0TibQDlPERggHu.png\"},{\"id\":789,\"titulo\":\"Final LLA\",\"fecha_inicial\":\"4/4/2021\",\"fecha_final\":\"4/4/2021\",\"num_boletas\":1000,\"descripcion\":\"Conoceremos al campeón de la Apertura 2021. Sin duda, esta ha sido una de las temporadas más reñidas que hemos tenido.\",\"lugar\":\"Bogota, Movistar Arena\",\"anfitrion\":\"League of Legends\",\"imagen\":\"https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/blt8d8cc6e0b763f8b8/606943eb9a1d7d1050bd4d2c/Final_LLA_Apertura_2021_1600x900.jpg?width=1600&height=900\"},{\"id\":101,\"titulo\":\"Copa America 2021\",\"fecha_inicial\":\"11/6/2021\",\"fecha_final\":\"10/7/2021\",\"num_boletas\":36000,\"descripcion\":\"La Copa América 2021 será la XLVII edición de este torneo.\",\"lugar\":\"Colombia-Argentina\",\"anfitrion\":\"League of Legends\",\"imagen\":\"https://cnnespanol.cnn.com/wp-content/uploads/2021/02/210224155941-copa-america-argentina-colombia-deportes-cnne-full-169.jpg?quality=100&strip=info\"}]}");

/***/ }),

/***/ "./components/database/eventosCrud.js":
/*!********************************************!*\
  !*** ./components/database/eventosCrud.js ***!
  \********************************************/
/*! exports provided: getEventos, deleteEvento, getEventoById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventos", function() { return getEventos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEvento", function() { return deleteEvento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventoById", function() { return getEventoById; });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./components/database/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./components/database/data.json", 1);

const {
  eventos
} = _data_json__WEBPACK_IMPORTED_MODULE_0__;
const getEventos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (eventos) {
        resolve(eventos);
      } else {
        reject('No hay eventos');
      }
    }, 1000);
  });
};
const deleteEvento = id => {
  return new Promise((resolve, reject) => {
    let found = false;
    setTimeout(() => {
      eventos.map((v, i) => {
        if (v.id === id) {
          found = true;
          eventos.splice(i, 1);
        }
      });
      found ? resolve(true) : reject(false);
    }, 1500);
  });
};
const getEventoById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const evento = eventos.find(evento => evento.id === id);
      evento ? resolve(evento) : reject('Not found');
    }, 1000);
  });
};

/***/ }),

/***/ "./components/listarEventos/carrusel.js":
/*!**********************************************!*\
  !*** ./components/listarEventos/carrusel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carrusel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_cardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/cardContext */ "./context/cardContext.js");
/* harmony import */ var _database_eventosCrud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database/eventosCrud */ "./components/database/eventosCrud.js");

var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\components\\listarEventos\\carrusel.js";





const contentStyle = {
  height: "600px",
  background: "inherit"
};

const antIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LoadingOutlined"], {
  style: {
    fontSize: 72
  },
  spin: true
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 17
}, undefined);

function Carrusel() {
  const {
    eventos,
    changeData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_cardContext__WEBPACK_IMPORTED_MODULE_4__["CardContext"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    try {
      const data = await Object(_database_eventosCrud__WEBPACK_IMPORTED_MODULE_5__["getEventos"])();

      if (data) {
        console.log("Informacion cargada:", data);
        changeData(data);
        setLoading(false);
      }
    } catch (e) {
      console.log("Ocurrio un error:", e);
      setLoading(false);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "carruselEventoAdmin",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "carruselHeader",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Eventos Actuales"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Crear Evento"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 42
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      dotPosition: "top",
      style: {
        width: '900px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "listEventos",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
          spinning: loading,
          indicator: antIcon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "list",
            children: eventos
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: contentStyle,
          children: "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/listarEventos/deleteButton.js":
/*!**************************************************!*\
  !*** ./components/listarEventos/deleteButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeleteButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_cardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/cardContext */ "./context/cardContext.js");
/* harmony import */ var _database_eventosCrud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database/eventosCrud */ "./components/database/eventosCrud.js");


var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\components\\listarEventos\\deleteButton.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function DeleteButton({
  id
}) {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    generarEventos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_cardContext__WEBPACK_IMPORTED_MODULE_5__["CardContext"]);

  const showPopconfirm = () => {
    //
    setVisible(true);
  };

  const handleOk = async () => {
    const config = {
      key: 'deleteEvent',
      style: {
        marginTop: '15vh'
      }
    };
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].loading(_objectSpread({
      content: 'Eliminando evento...'
    }, config)); //peticion a servidor para eleminiar un elemento

    try {
      const resp = await Object(_database_eventosCrud__WEBPACK_IMPORTED_MODULE_6__["deleteEvento"])(id);

      if (resp) {
        console.log('El evento fue eliminado');
        setVisible(false);
        generarEventos();
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(_objectSpread({
          content: 'Evento eliminado',
          duration: 2
        }, config));
      }
    } catch (e) {
      console.log(e);
      setVisible(false);
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(_objectSpread({
        content: 'El Evento no pudo ser eliminado',
        duration: 2
      }, config));
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
      title: "Esta acci\xF3n es irreversible",
      visible: visible,
      onConfirm: handleOk,
      onCancel: handleCancel,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DeleteOutlined"], {
        className: "deleteButton",
        onClick: showPopconfirm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false);
}
DeleteButton.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};

/***/ }),

/***/ "./components/listarEventos/eventoCard.js":
/*!************************************************!*\
  !*** ./components/listarEventos/eventoCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventoCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _deleteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteButton */ "./components/listarEventos/deleteButton.js");
/* harmony import */ var _hooks_useDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useDate */ "./hooks/useDate.js");

var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\components\\listarEventos\\eventoCard.js";




/* import propTypes from 'prop-types'; */


function EventoCard({
  info
}) {
  const {
    imagen,
    titulo,
    fecha_inicial,
    fecha_final,
    descripcion,
    lugar,
    id
  } = info;
  const {
    day,
    month,
    sameDates
  } = Object(_hooks_useDate__WEBPACK_IMPORTED_MODULE_5__["useDate"])([fecha_inicial, fecha_final]);
  /* const [loading, setLoading] = useState(true);
  const onChange = () => { setLoading(false); } */

  const mismoDia = () => {
    let u = "";

    if (!sameDates()) {
      u = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "fecha",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "dia",
          children: day(1) || "31"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mes",
          children: month(1) || "Septiembre"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 18
      }, this);
    }

    return u;
  };

  const onClick = e => {
    console.log("editar");
  };
  /*     setTimeout(onChange, 1000); */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "eventoCard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        width: 200,
        height: 320,
        borderRadius: '20px',
        padding: '4px',
        border: '1px solid rgba(59, 66, 72, 0.3)'
      },
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_deleteButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: id
      }, "delete", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
        onClick: onClick
      }, "edit", false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }, this)],
      hoverable: true,
      cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        alt: "example",
        src: imagen || "https://www.bbva.com/wp-content/uploads/2017/08/holi-party-1024x423.png",
        height: "120"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 28
      }, this),
      title: titulo || "Titulo del evento",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "eventoCardLeyenda",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "eventoCardDescripcion",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: descripcion
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "eventoCardFecha",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "fecha",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dia",
              children: day(0) || "31"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mes",
              children: month(0) || "Septiembre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, this), mismoDia()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            textAlign: "center"
          },
          children: lugar || "SomeWhere"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}
/* EventoCard.propTypes = {
    info.propTypes.obje
} */

/***/ }),

/***/ "./context/cardContext.js":
/*!********************************!*\
  !*** ./context/cardContext.js ***!
  \********************************/
/*! exports provided: CardContext, CardProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContext", function() { return CardContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProvider", function() { return CardProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_listarEventos_eventoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/listarEventos/eventoCard */ "./components/listarEventos/eventoCard.js");

var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\context\\cardContext.js";


const CardContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const CardProvider = ({
  children
}) => {
  const {
    0: eventos,
    1: setEventos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const generarEventos = (d = data) => {
    let cards = [];
    d.map((v, i) => {
      cards = [...cards, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_listarEventos_eventoCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        info: v
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)];
    });
    setEventos(cards);
  };

  const changeData = d => {
    setData(d);
    generarEventos(d);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContext.Provider, {
    value: {
      eventos,
      generarEventos,
      changeData
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./hooks/useDate.js":
/*!**************************!*\
  !*** ./hooks/useDate.js ***!
  \**************************/
/*! exports provided: useDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDate", function() { return useDate; });
const meses = ["no", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const useDate = date => {
  //recibe un arreglo strings que contienen fechas en formato dd/mm/aa y retorna un dato especifico de las fechas
  const cut = num => date[num].split('/');

  const day = num => cut(num)[0]; //num: es la posicion de la fecha que se desea usar


  const month = num => meses[cut(num)[1]];

  const year = num => cut(num)[2];

  const sameDates = () => {
    let fi = false;
    date.map((v, i) => {
      fi = date[0] === v ? true : false;
    });
    return fi;
  };

  return {
    month,
    day,
    year,
    sameDates
  };
};

/***/ }),

/***/ "./pages/eventosAdmin/index.js":
/*!*************************************!*\
  !*** ./pages/eventosAdmin/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listarEventos; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_listarEventos_carrusel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/listarEventos/carrusel */ "./components/listarEventos/carrusel.js");
/* harmony import */ var _context_cardContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/cardContext */ "./context/cardContext.js");

var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\pages\\eventosAdmin\\listarEventos.js";



function listarEventos() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_cardContext__WEBPACK_IMPORTED_MODULE_3__["CardProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_listarEventos_carrusel__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRhYmFzZS9ldmVudG9zQ3J1ZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpc3RhckV2ZW50b3MvY2FycnVzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saXN0YXJFdmVudG9zL2RlbGV0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpc3RhckV2ZW50b3MvZXZlbnRvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L2NhcmRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZURhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXZlbnRvc0FkbWluL2xpc3RhckV2ZW50b3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZXZlbnRvcyIsImRhdGEiLCJnZXRFdmVudG9zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZGVsZXRlRXZlbnRvIiwiaWQiLCJmb3VuZCIsIm1hcCIsInYiLCJpIiwic3BsaWNlIiwiZ2V0RXZlbnRvQnlJZCIsImV2ZW50byIsImZpbmQiLCJjb250ZW50U3R5bGUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYW50SWNvbiIsImZvbnRTaXplIiwiQ2FycnVzZWwiLCJjaGFuZ2VEYXRhIiwidXNlQ29udGV4dCIsIkNhcmRDb250ZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlIiwid2lkdGgiLCJEZWxldGVCdXR0b24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImdlbmVyYXJFdmVudG9zIiwic2hvd1BvcGNvbmZpcm0iLCJoYW5kbGVPayIsImNvbmZpZyIsImtleSIsInN0eWxlIiwibWFyZ2luVG9wIiwibWVzc2FnZSIsImNvbnRlbnQiLCJyZXNwIiwic3VjY2VzcyIsImR1cmF0aW9uIiwiZXJyb3IiLCJoYW5kbGVDYW5jZWwiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiRXZlbnRvQ2FyZCIsImluZm8iLCJpbWFnZW4iLCJ0aXR1bG8iLCJmZWNoYV9pbmljaWFsIiwiZmVjaGFfZmluYWwiLCJkZXNjcmlwY2lvbiIsImx1Z2FyIiwiZGF5IiwibW9udGgiLCJzYW1lRGF0ZXMiLCJ1c2VEYXRlIiwibWlzbW9EaWEiLCJ1Iiwib25DbGljayIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJib3JkZXIiLCJ0ZXh0QWxpZ24iLCJjcmVhdGVDb250ZXh0IiwiQ2FyZFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRFdmVudG9zIiwic2V0RGF0YSIsImQiLCJjYXJkcyIsIm1lc2VzIiwiZGF0ZSIsImN1dCIsIm51bSIsInNwbGl0IiwieWVhciIsImZpIiwibGlzdGFyRXZlbnRvcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWNDLHVDQUFwQjtBQUVPLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQzVCLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQ0MsY0FBVSxDQUFDLE1BQU07QUFDYixVQUFJTixPQUFKLEVBQWE7QUFDVEksZUFBTyxDQUFDSixPQUFELENBQVA7QUFDSCxPQUZELE1BRU87QUFDSEssY0FBTSxDQUFDLGdCQUFELENBQU47QUFDSDtBQUNKLEtBTlMsRUFNUCxJQU5PLENBQVY7QUFPSCxHQVJNLENBQVA7QUFTSCxDQVZNO0FBWUEsTUFBTUUsWUFBWSxHQUFHQyxFQUFFLElBQUk7QUFDOUIsU0FBTyxJQUFJTCxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDLFFBQUlJLEtBQUssR0FBRyxLQUFaO0FBQ0FILGNBQVUsQ0FBQyxNQUFNO0FBQ2JOLGFBQU8sQ0FBQ1UsR0FBUixDQUFZLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ2xCLFlBQUlELENBQUMsQ0FBQ0gsRUFBRixLQUFTQSxFQUFiLEVBQWlCO0FBQ2JDLGVBQUssR0FBRyxJQUFSO0FBQ0FULGlCQUFPLENBQUNhLE1BQVIsQ0FBZUQsQ0FBZixFQUFrQixDQUFsQjtBQUNIO0FBQ0osT0FMRDtBQU1BSCxXQUFLLEdBQUNMLE9BQU8sQ0FBQyxJQUFELENBQVIsR0FBZ0JDLE1BQU0sQ0FBQyxLQUFELENBQTNCO0FBQ0gsS0FSUyxFQVFQLElBUk8sQ0FBVjtBQVNILEdBWE0sQ0FBUDtBQVlILENBYk07QUFlQSxNQUFNUyxhQUFhLEdBQUdOLEVBQUUsSUFBSTtBQUMvQixTQUFPLElBQUlMLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcENDLGNBQVUsQ0FBQyxNQUFNO0FBQ2IsWUFBTVMsTUFBTSxHQUFHZixPQUFPLENBQUNnQixJQUFSLENBQWNELE1BQU0sSUFBSUEsTUFBTSxDQUFDUCxFQUFQLEtBQWNBLEVBQXRDLENBQWY7QUFDQU8sWUFBTSxHQUFFWCxPQUFPLENBQUNXLE1BQUQsQ0FBVCxHQUFvQlYsTUFBTSxDQUFDLFdBQUQsQ0FBaEM7QUFDSCxLQUhTLEVBR1AsSUFITyxDQUFWO0FBSUgsR0FMTSxDQUFQO0FBTUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTVksWUFBWSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUsT0FEUztBQUVqQkMsWUFBVSxFQUFFO0FBRkssQ0FBckI7O0FBSUEsTUFBTUMsT0FBTyxnQkFBRyxxRUFBQyxpRUFBRDtBQUFpQixPQUFLLEVBQUU7QUFBRUMsWUFBUSxFQUFFO0FBQVosR0FBeEI7QUFBMEMsTUFBSTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWhCOztBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFDL0IsUUFBTTtBQUFFdEIsV0FBRjtBQUFXdUI7QUFBWCxNQUEwQkMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUVBQyx5REFBUyxDQUFDLFlBQVk7QUFDbEIsUUFBSTtBQUNBLFlBQU01QixJQUFJLEdBQUcsTUFBTUMsd0VBQVUsRUFBN0I7O0FBQ0EsVUFBSUQsSUFBSixFQUFVO0FBQ042QixlQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQzlCLElBQXBDO0FBQ0FzQixrQkFBVSxDQUFDdEIsSUFBRCxDQUFWO0FBQ0EwQixrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIO0FBQ0osS0FQRCxDQU9FLE9BQU9LLENBQVAsRUFBVTtBQUNSRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0MsQ0FBakM7QUFDQUwsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSDtBQUNKLEdBWlEsRUFZTixFQVpNLENBQVQ7QUFjQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUM2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLDZDQUFEO0FBQVUsaUJBQVcsRUFBQyxLQUF0QjtBQUE0QixXQUFLLEVBQUU7QUFBRU0sYUFBSyxFQUFFO0FBQVQsT0FBbkM7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNJLHFFQUFDLHlDQUFEO0FBQU0sa0JBQVEsRUFBRVAsT0FBaEI7QUFBeUIsbUJBQVMsRUFBRU4sT0FBcEM7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLHNCQUNLcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVFJO0FBQUEsK0JBQ0k7QUFBSyxlQUFLLEVBQUVpQixZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTaUIsWUFBVCxDQUFzQjtBQUFFMUI7QUFBRixDQUF0QixFQUE4QjtBQUN6QyxRQUFNO0FBQUEsT0FBQzJCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCUixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUVTO0FBQUYsTUFBcUJiLHdEQUFVLENBQUNDLGdFQUFELENBQXJDOztBQUVBLFFBQU1hLGNBQWMsR0FBRyxNQUFNO0FBQUM7QUFDMUJGLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDSCxHQUZEOztBQUlBLFFBQU1HLFFBQVEsR0FBRyxZQUFZO0FBQ3pCLFVBQU1DLE1BQU0sR0FBRztBQUFFQyxTQUFHLEVBQUUsYUFBUDtBQUFzQkMsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYjtBQUE3QixLQUFmO0FBQ0FDLGdEQUFPLENBQUNsQixPQUFSO0FBQWtCbUIsYUFBTyxFQUFFO0FBQTNCLE9BQXNETCxNQUF0RCxHQUZ5QixDQUd6Qjs7QUFDQSxRQUFJO0FBQ0EsWUFBTU0sSUFBSSxHQUFHLE1BQU12QywwRUFBWSxDQUFDQyxFQUFELENBQS9COztBQUNBLFVBQUlzQyxJQUFKLEVBQVU7QUFDTmhCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FLLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FDLHNCQUFjO0FBQ2RPLG9EQUFPLENBQUNHLE9BQVI7QUFBa0JGLGlCQUFPLEVBQUUsa0JBQTNCO0FBQStDRyxrQkFBUSxFQUFFO0FBQXpELFdBQStEUixNQUEvRDtBQUNIO0FBQ0osS0FSRCxDQVFFLE9BQU9SLENBQVAsRUFBVTtBQUNSRixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWjtBQUNBSSxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBUSxrREFBTyxDQUFDSyxLQUFSO0FBQWdCSixlQUFPLEVBQUUsaUNBQXpCO0FBQTRERyxnQkFBUSxFQUFFO0FBQXRFLFNBQTRFUixNQUE1RTtBQUNIO0FBQ0osR0FqQkQ7O0FBbUJBLFFBQU1VLFlBQVksR0FBRyxNQUFNO0FBQ3ZCcEIsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQUssY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywrQ0FBRDtBQUNJLFdBQUssRUFBQyxnQ0FEVjtBQUVJLGFBQU8sRUFBRUQsT0FGYjtBQUdJLGVBQVMsRUFBRUksUUFIZjtBQUlJLGNBQVEsRUFBRVcsWUFKZDtBQUFBLDZCQU1JLHFFQUFDLGdFQUFEO0FBQWdCLGlCQUFTLEVBQUMsY0FBMUI7QUFBeUMsZUFBTyxFQUFFWjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBWUg7QUFDREosWUFBWSxDQUFDaUIsU0FBYixHQUF5QjtBQUNyQjNDLElBQUUsRUFBRTJDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREEsQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVlLFNBQVNDLFVBQVQsQ0FBb0I7QUFBRUM7QUFBRixDQUFwQixFQUE4QjtBQUN6QyxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsVUFBVjtBQUFpQkMsaUJBQWpCO0FBQWdDQyxlQUFoQztBQUE2Q0MsZUFBN0M7QUFBMERDLFNBQTFEO0FBQWlFckQ7QUFBakUsTUFBd0UrQyxJQUE5RTtBQUVBLFFBQU07QUFBRU8sT0FBRjtBQUFPQyxTQUFQO0FBQWNDO0FBQWQsTUFBNEJDLDhEQUFPLENBQUMsQ0FBQ1AsYUFBRCxFQUFnQkMsV0FBaEIsQ0FBRCxDQUF6QztBQUVBO0FBQ0o7O0FBRUksUUFBTU8sUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBSUMsQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsUUFBSSxDQUFDSCxTQUFTLEVBQWQsRUFBa0I7QUFDZEcsT0FBQyxnQkFDSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGdDQUNHO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBQXNCTCxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESCxlQUVHO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBQXNCQyxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVk7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETDtBQUtIOztBQUNELFdBQU9JLENBQVA7QUFDSCxHQVZEOztBQVdBLFFBQU1DLE9BQU8sR0FBR3BDLENBQUMsSUFBSTtBQUNqQkYsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNILEdBRkQ7QUFHSjs7O0FBRUksc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUVRLHFFQUFDLHlDQUFEO0FBQ0ksV0FBSyxFQUFFO0FBQ0hFLGFBQUssRUFBRSxHQURKO0FBRUhmLGNBQU0sRUFBRSxHQUZMO0FBR0htRCxvQkFBWSxFQUFFLE1BSFg7QUFJSEMsZUFBTyxFQUFFLEtBSk47QUFLSEMsY0FBTSxFQUFFO0FBTEwsT0FEWDtBQVFJLGFBQU8sRUFBRSxjQUNMLHFFQUFDLHFEQUFEO0FBQWMsVUFBRSxFQUFFL0Q7QUFBbEIsU0FBMEIsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURLLGVBRUwscUVBQUMsOERBQUQ7QUFBeUIsZUFBTyxFQUFFNEQ7QUFBbEMsU0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZLLENBUmI7QUFZSSxlQUFTLE1BWmI7QUFhSSxXQUFLLGVBQUU7QUFBSyxXQUFHLEVBQUMsU0FBVDtBQUNILFdBQUcsRUFBRVosTUFBTSxJQUNQLHlFQUZEO0FBR0gsY0FBTSxFQUFDO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJYO0FBbUJJLFdBQUssRUFBRUMsTUFBTSxJQUFJLG1CQW5CckI7QUFBQSw2QkFxQkk7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLHVCQUFmO0FBQUEsaUNBQ0k7QUFBQSxzQkFBSUc7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSx3QkFBc0JFLEdBQUcsQ0FBQyxDQUFELENBQUgsSUFBVTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSyx1QkFBUyxFQUFDLEtBQWY7QUFBQSx3QkFBc0JDLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUtLRyxRQUFRLEVBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBV0k7QUFBRyxlQUFLLEVBQUU7QUFBRU0scUJBQVMsRUFBRTtBQUFiLFdBQVY7QUFBQSxvQkFBb0NYLEtBQUssSUFBSTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIO0FBQ0Q7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUVPLE1BQU1wQyxXQUFXLGdCQUFHZ0QsMkRBQWEsRUFBakM7QUFFQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDMUMsUUFBTTtBQUFBLE9BQUMzRSxPQUFEO0FBQUEsT0FBVTRFO0FBQVYsTUFBd0JoRCxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQzNCLElBQUQ7QUFBQSxPQUFPNEU7QUFBUCxNQUFrQmpELHNEQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFFQSxRQUFNUyxjQUFjLEdBQUcsQ0FBQ3lDLENBQUMsR0FBRzdFLElBQUwsS0FBYztBQUNqQyxRQUFJOEUsS0FBSyxHQUFHLEVBQVo7QUFDQUQsS0FBQyxDQUFDcEUsR0FBRixDQUFNLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ1ptRSxXQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFKLGVBQ0oscUVBQUMsNEVBQUQ7QUFDSSxZQUFJLEVBQUVwRTtBQURWLFNBRVNDLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESSxDQUFSO0FBS0gsS0FORDtBQU9BZ0UsY0FBVSxDQUFDRyxLQUFELENBQVY7QUFDSCxHQVZEOztBQVdBLFFBQU14RCxVQUFVLEdBQUd1RCxDQUFDLElBQUk7QUFDcEJELFdBQU8sQ0FBQ0MsQ0FBRCxDQUFQO0FBQ0F6QyxrQkFBYyxDQUFDeUMsQ0FBRCxDQUFkO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQ3ZCO0FBQ0k5RSxhQURKO0FBRUlxQyxvQkFGSjtBQUdJZDtBQUhKLEtBREo7QUFBQSxjQU9Lb0Q7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFXSCxDQS9CTSxDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUEsTUFBTUssS0FBSyxHQUFHLENBQUMsSUFBRCxFQUFNLE9BQU4sRUFBZSxTQUFmLEVBQTBCLE9BQTFCLEVBQW1DLE9BQW5DLEVBQTRDLE1BQTVDLEVBQW9ELE9BQXBELEVBQTZELE9BQTdELEVBQXNFLFFBQXRFLEVBQ04sWUFETSxFQUNRLFNBRFIsRUFDbUIsV0FEbkIsRUFDZ0MsV0FEaEMsQ0FBZDtBQUdPLE1BQU1mLE9BQU8sR0FBSWdCLElBQUQsSUFBVTtBQUFFO0FBRS9CLFFBQU1DLEdBQUcsR0FBSUMsR0FBRCxJQUFTRixJQUFJLENBQUNFLEdBQUQsQ0FBSixDQUFVQyxLQUFWLENBQWdCLEdBQWhCLENBQXJCOztBQUVBLFFBQU10QixHQUFHLEdBQUlxQixHQUFELElBQVNELEdBQUcsQ0FBQ0MsR0FBRCxDQUFILENBQVMsQ0FBVCxDQUFyQixDQUo2QixDQUlLOzs7QUFFbEMsUUFBTXBCLEtBQUssR0FBSW9CLEdBQUQsSUFBU0gsS0FBSyxDQUFDRSxHQUFHLENBQUNDLEdBQUQsQ0FBSCxDQUFTLENBQVQsQ0FBRCxDQUE1Qjs7QUFFQSxRQUFNRSxJQUFJLEdBQUlGLEdBQUQsSUFBU0QsR0FBRyxDQUFDQyxHQUFELENBQUgsQ0FBUyxDQUFULENBQXRCOztBQUVBLFFBQU1uQixTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFJc0IsRUFBRSxHQUFHLEtBQVQ7QUFDQUwsUUFBSSxDQUFDdkUsR0FBTCxDQUFTLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPO0FBQ1owRSxRQUFFLEdBQUdMLElBQUksQ0FBQyxDQUFELENBQUosS0FBWXRFLENBQVosR0FBZSxJQUFmLEdBQXNCLEtBQTNCO0FBQ0gsS0FGRDtBQUdBLFdBQU8yRSxFQUFQO0FBQ0gsR0FORDs7QUFRQSxTQUFPO0FBQ0h2QixTQURHO0FBRUhELE9BRkc7QUFHSHVCLFFBSEc7QUFJSHJCO0FBSkcsR0FBUDtBQU1ILENBeEJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFHZSxTQUFTdUIsYUFBVCxHQUF5QjtBQUNwQyxzQkFDSSxxRUFBQyxpRUFBRDtBQUFBLDJCQUNRLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDOzs7Ozs7Ozs7OztBQ1hELDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2V2ZW50b3NBZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZXZlbnRvc0FkbWluL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xyXG5jb25zdCB7IGV2ZW50b3MgfSA9IGRhdGE7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RXZlbnRvcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudG9zKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGV2ZW50b3MpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoJ05vIGhheSBldmVudG9zJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlRXZlbnRvID0gaWQgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZXZlbnRvcy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2LmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudG9zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZm91bmQ/cmVzb2x2ZSh0cnVlKTogcmVqZWN0KGZhbHNlKTtcclxuICAgICAgICB9LCAxNTAwKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEV2ZW50b0J5SWQgPSBpZCA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudG8gPSBldmVudG9zLmZpbmQoIGV2ZW50byA9PiBldmVudG8uaWQgPT09IGlkICk7XHJcbiAgICAgICAgICAgIGV2ZW50bz8gcmVzb2x2ZShldmVudG8pIDogcmVqZWN0KCdOb3QgZm91bmQnKTtcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfSlcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQ2FyZENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NhcmRDb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0RXZlbnRvcyB9IGZyb20gJy4uL2RhdGFiYXNlL2V2ZW50b3NDcnVkJztcclxuXHJcbmNvbnN0IGNvbnRlbnRTdHlsZSA9IHtcclxuICAgIGhlaWdodDogXCI2MDBweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJpbmhlcml0XCIsXHJcbn07XHJcbmNvbnN0IGFudEljb24gPSA8TG9hZGluZ091dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiA3MiB9fSBzcGluIC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FycnVzZWwoKSB7XHJcbiAgICBjb25zdCB7IGV2ZW50b3MsIGNoYW5nZURhdGEgfSA9IHVzZUNvbnRleHQoQ2FyZENvbnRleHQpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RXZlbnRvcygpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmZvcm1hY2lvbiBjYXJnYWRhOlwiLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9jdXJyaW8gdW4gZXJyb3I6XCIsIGUpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJydXNlbEV2ZW50b0FkbWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FycnVzZWxIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5FdmVudG9zIEFjdHVhbGVzPC9oMT48aDE+Q3JlYXIgRXZlbnRvPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBkb3RQb3NpdGlvbj1cInRvcFwiIHN0eWxlPXt7IHdpZHRoOiAnOTAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0RXZlbnRvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGluIHNwaW5uaW5nPXtsb2FkaW5nfSBpbmRpY2F0b3I9e2FudEljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudG9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwaW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT4yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvcGNvbmZpcm0sIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRGVsZXRlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IENhcmRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jYXJkQ29udGV4dCc7XHJcbmltcG9ydCB7IGRlbGV0ZUV2ZW50byB9IGZyb20gJy4uL2RhdGFiYXNlL2V2ZW50b3NDcnVkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlQnV0dG9uKHsgaWQgfSkge1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgZ2VuZXJhckV2ZW50b3MgfSA9IHVzZUNvbnRleHQoQ2FyZENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHNob3dQb3Bjb25maXJtID0gKCkgPT4gey8vXHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0geyBrZXk6ICdkZWxldGVFdmVudCcsIHN0eWxlOiB7IG1hcmdpblRvcDogJzE1dmgnIH0gfVxyXG4gICAgICAgIG1lc3NhZ2UubG9hZGluZyh7IGNvbnRlbnQ6ICdFbGltaW5hbmRvIGV2ZW50by4uLicsIC4uLmNvbmZpZyB9KTtcclxuICAgICAgICAvL3BldGljaW9uIGEgc2Vydmlkb3IgcGFyYSBlbGVtaW5pYXIgdW4gZWxlbWVudG9cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZGVsZXRlRXZlbnRvKGlkKTtcclxuICAgICAgICAgICAgaWYgKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbCBldmVudG8gZnVlIGVsaW1pbmFkbycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmFyRXZlbnRvcygpO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKHsgY29udGVudDogJ0V2ZW50byBlbGltaW5hZG8nLCBkdXJhdGlvbjogMiwgLi4uY29uZmlnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoeyBjb250ZW50OiAnRWwgRXZlbnRvIG5vIHB1ZG8gc2VyIGVsaW1pbmFkbycsIGR1cmF0aW9uOiAyLCAuLi5jb25maWcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgY2FuY2VsIGJ1dHRvbicpO1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkVzdGEgYWNjacOzbiBlcyBpcnJldmVyc2libGVcIlxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17aGFuZGxlT2t9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgY2xhc3NOYW1lPVwiZGVsZXRlQnV0dG9uXCIgb25DbGljaz17c2hvd1BvcGNvbmZpcm19IC8+XHJcbiAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5EZWxldGVCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IHByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2tlbGV0b24sIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRWRpdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgRGVsZXRlQnV0dG9uIGZyb20gJy4vZGVsZXRlQnV0dG9uJztcclxuLyogaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJzsgKi9cclxuaW1wb3J0IHsgdXNlRGF0ZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZURhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRvQ2FyZCh7IGluZm8gfSkge1xyXG4gICAgY29uc3QgeyBpbWFnZW4sIHRpdHVsbyxmZWNoYV9pbmljaWFsLCBmZWNoYV9maW5hbCwgZGVzY3JpcGNpb24sIGx1Z2FyLCBpZCB9ID0gaW5mbztcclxuICAgIFxyXG4gICAgY29uc3QgeyBkYXksIG1vbnRoLCBzYW1lRGF0ZXMgfSA9IHVzZURhdGUoW2ZlY2hhX2luaWNpYWwsIGZlY2hhX2ZpbmFsXSk7XHJcbiAgICBcclxuICAgIC8qIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7IHNldExvYWRpbmcoZmFsc2UpOyB9ICovXHJcblxyXG4gICAgY29uc3QgbWlzbW9EaWEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHUgPSBcIlwiXHJcbiAgICAgICAgaWYgKCFzYW1lRGF0ZXMoKSkge1xyXG4gICAgICAgICAgICB1ID1cclxuICAgICAgICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT1cImZlY2hhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFcIj57ZGF5KDEpIHx8IFwiMzFcIn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc1wiPnttb250aCgxKSB8fCBcIlNlcHRpZW1icmVcIn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlZGl0YXJcIilcclxuICAgIH1cclxuLyogICAgIHNldFRpbWVvdXQob25DaGFuZ2UsIDEwMDApOyAqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudG9DYXJkXCI+XHJcbiAgICAgICAgICAgIHsvKiA8U2tlbGV0b24gbG9hZGluZz17bG9hZGluZ30gYWN0aXZlPiAqL31cclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoNTksIDY2LCA3MiwgMC4zKSdcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBpZD17aWR9IGtleT1cImRlbGV0ZVwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiBvbkNsaWNrPXtvbkNsaWNrfSAvPixcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5iYnZhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOC9ob2xpLXBhcnR5LTEwMjR4NDIzLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXR1bG8gfHwgXCJUaXR1bG8gZGVsIGV2ZW50b1wifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRvQ2FyZExleWVuZGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudG9DYXJkRGVzY3JpcGNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50b0NhcmRGZWNoYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWNoYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhXCI+e2RheSgwKSB8fCBcIjMxXCJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNcIj57bW9udGgoMCkgfHwgXCJTZXB0aWVtYnJlXCJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttaXNtb0RpYSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntsdWdhciB8fCBcIlNvbWVXaGVyZVwifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgey8qIDwvU2tlbGV0b24+ICovfVxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG4vKiBFdmVudG9DYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIGluZm8ucHJvcFR5cGVzLm9iamVcclxufSAqLyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXZlbnRvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3RhckV2ZW50b3MvZXZlbnRvQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2V2ZW50b3MsIHNldEV2ZW50b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdlbmVyYXJFdmVudG9zID0gKGQgPSBkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmRzID0gW107XHJcbiAgICAgICAgZC5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgY2FyZHMgPSBbLi4uY2FyZHMsIChcclxuICAgICAgICAgICAgICAgIDxFdmVudG9DYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgaW5mbz17dn1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAvPildXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRFdmVudG9zKGNhcmRzKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBkID0+IHtcclxuICAgICAgICBzZXREYXRhKGQpO1xyXG4gICAgICAgIGdlbmVyYXJFdmVudG9zKGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRvcyxcclxuICAgICAgICAgICAgICAgIGdlbmVyYXJFdmVudG9zLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlRGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcmRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiIsImNvbnN0IG1lc2VzID0gW1wibm9cIixcIkVuZXJvXCIsIFwiRmVicmVyb1wiLCBcIk1hcnpvXCIsIFwiQWJyaWxcIiwgXCJNYXlvXCIsIFwiSnVuaW9cIiwgXCJKdWxpb1wiLCBcIkFnb3N0b1wiLFxyXG4gICAgICAgIFwiU2VwdGllbWJyZVwiLCBcIk9jdHVicmVcIiwgXCJOb3ZpZW1icmVcIiwgXCJEaWNpZW1icmVcIl07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGF0ZSA9IChkYXRlKSA9PiB7IC8vcmVjaWJlIHVuIGFycmVnbG8gc3RyaW5ncyBxdWUgY29udGllbmVuIGZlY2hhcyBlbiBmb3JtYXRvIGRkL21tL2FhIHkgcmV0b3JuYSB1biBkYXRvIGVzcGVjaWZpY28gZGUgbGFzIGZlY2hhc1xyXG5cclxuICAgIGNvbnN0IGN1dCA9IChudW0pID0+IGRhdGVbbnVtXS5zcGxpdCgnLycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXkgPSAobnVtKSA9PiBjdXQobnVtKVswXTsgLy9udW06IGVzIGxhIHBvc2ljaW9uIGRlIGxhIGZlY2hhIHF1ZSBzZSBkZXNlYSB1c2FyXHJcblxyXG4gICAgY29uc3QgbW9udGggPSAobnVtKSA9PiBtZXNlc1tjdXQobnVtKVsxXV07XHJcblxyXG4gICAgY29uc3QgeWVhciA9IChudW0pID0+IGN1dChudW0pWzJdO1xyXG5cclxuICAgIGNvbnN0IHNhbWVEYXRlcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZmkgPSBmYWxzZTtcclxuICAgICAgICBkYXRlLm1hcCgodixpKT0+e1xyXG4gICAgICAgICAgICBmaSA9IGRhdGVbMF0gPT09IHY/IHRydWUgOiBmYWxzZTsgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtb250aCxcclxuICAgICAgICBkYXksXHJcbiAgICAgICAgeWVhcixcclxuICAgICAgICBzYW1lRGF0ZXMsXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJydXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3RhckV2ZW50b3MvY2FycnVzZWwnXHJcbmltcG9ydCB7IENhcmRQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHQvY2FyZENvbnRleHQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RhckV2ZW50b3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkUHJvdmlkZXI+ICBcclxuICAgICAgICAgICAgICAgIDxDYXJydXNlbCAvPlxyXG4gICAgICAgIDwvQ2FyZFByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==