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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/CrearEventos/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dates/cardDate.js":
/*!**************************************!*\
  !*** ./components/Dates/cardDate.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _manejoFechas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manejoFechas */ "./components/Dates/manejoFechas.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\components\\Dates\\cardDate.js";




const CardDate = ({
  semana = _manejoFechas__WEBPACK_IMPORTED_MODULE_2__["inicio"].semana,
  dia = _manejoFechas__WEBPACK_IMPORTED_MODULE_2__["inicio"].dia,
  mes = _manejoFechas__WEBPACK_IMPORTED_MODULE_2__["inicio"].mes,
  año = _manejoFechas__WEBPACK_IMPORTED_MODULE_2__["inicio"].año,
  hora = _manejoFechas__WEBPACK_IMPORTED_MODULE_2__["inicio"].hora
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "cardEv-date",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: semana == "undefined" ? _manejoFechas__WEBPACK_IMPORTED_MODULE_2__["inicio"].semana : semana
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "dia-cardEv",
        children: dia
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [mes + " ", año]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
        className: "hr-cardDate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: hora
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

CardDate.propTypes = {
  semana: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  dia: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  mes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  año: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  hora: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardDate);

/***/ }),

/***/ "./components/Dates/manejoFechas.js":
/*!******************************************!*\
  !*** ./components/Dates/manejoFechas.js ***!
  \******************************************/
/*! exports provided: agregar0, semanaAc, convertirMes, cierre, inicio, convertDate, convertirImagen, fechaActual, fechaMas1, validarFecha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agregar0", function() { return agregar0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semanaAc", function() { return semanaAc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertirMes", function() { return convertirMes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cierre", function() { return cierre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inicio", function() { return inicio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDate", function() { return convertDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertirImagen", function() { return convertirImagen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fechaActual", function() { return fechaActual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fechaMas1", function() { return fechaMas1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validarFecha", function() { return validarFecha; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const fechaActual = new Date();
let fechaMas1 = new Date();
fechaMas1.setHours(fechaMas1.getHours() + 1);

const agregar0 = hora => {
  let hora0;

  if (String(hora).length == 1) {
    hora0 = "0" + hora;
  } else {
    hora0 = hora;
  }

  return hora0;
};

const horaActual = tipo => {
  const horaI = `${agregar0(fechaActual.getHours())}:${agregar0(fechaActual.getMinutes())}:${agregar0(fechaActual.getSeconds())}`;
  const horaF = `${agregar0(fechaMas1.getHours())}:${agregar0(fechaMas1.getMinutes())}:${agregar0(fechaMas1.getSeconds())}`;
  return tipo ? horaI : horaF;
};

const semanaAc = num => {
  let dia = num;

  if (dia + 1 > 7) {
    dia = 0;
  }

  switch (dia) {
    case 0:
      return "Domingo";

    case 1:
      return "Lunes";

    case 2:
      return "Martes";

    case 3:
      return "Miercoles";

    case 4:
      return "Jueves";

    case 5:
      return "Viernes";

    case 6:
      return "Sabado";
  }
};

const mesAc = num => {
  let mes = num;

  if (mes + 1 > 12) {
    mes = 1;
  }

  switch (mes) {
    case 0:
      return "Enero";

    case 1:
      return "Febrero";

    case 2:
      return "Marzo";

    case 3:
      return "Abril";

    case 4:
      return "Mayo";

    case 5:
      return "Junio";

    case 6:
      return "Julio";

    case 7:
      return "Agosto";

    case 8:
      return "Septiembre";

    case 9:
      return "Octubre";

    case 10:
      return "Noviembre";

    case 11:
      return "Diciembre";
  }
};

const inicio = {
  semana: semanaAc(fechaActual.getDay()),
  dia: fechaActual.getDate(),
  mes: mesAc(fechaActual.getMonth()),
  año: fechaActual.getFullYear(),
  hora: horaActual(true)
};
const cierre = {
  semana: semanaAc(fechaMas1.getDay()),
  dia: fechaMas1.getDate(),
  mes: mesAc(fechaMas1.getMonth()),
  año: fechaMas1.getFullYear(),
  hora: horaActual(false)
};

const convertirSemana = semana => {
  switch (semana) {
    case "Mon":
      return "Lunes";

    case "Tue":
      return "Martes";

    case "Wed":
      return "Miercoles";

    case "Thu":
      return "Jueves";

    case "Fri":
      return "Viernes";

    case "Sat":
      return "Sabado";

    case "Sun":
      return "Domingo";
  }
};

const convertirMes = mes => {
  switch (mes) {
    case "Jan":
      return "Enero";

    case "Feb":
      return "Febrero";

    case "Mar":
      return "Marzo";

    case "Apr":
      return "Abril";

    case "May":
      return "Mayo";

    case "Jun":
      return "Junio";

    case "Jul":
      return "Julio";

    case "Aug":
      return "Agosto";

    case "Sep":
      return "Septiembre";

    case "Oct":
      return "Octubre";

    case "Nov":
      return "Noviembre";

    case "Dec":
      return "Diciembre";
  }
};

const convertirMesNum = mes => {
  switch (mes) {
    case "Enero":
      return 1;

    case "Febrero":
      return 2;

    case "Marzo":
      return 3;

    case "Abril":
      return 4;

    case "Mayo":
      return 5;

    case "Junio":
      return 6;

    case "Julio":
      return 7;

    case "Agosto":
      return 8;

    case "Septiembre":
      return 9;

    case "Octubre":
      return 10;

    case "Noviembre":
      return 11;

    case "Diciembre":
      return 12;
  }
};

const convertDate = date => {
  const convertDate = String(_objectSpread({}, date)._d).split(" ");
  const dates = {
    semana: convertirSemana(convertDate[0]),
    mes: convertirMes(convertDate[1]),
    dia: convertDate[2],
    año: convertDate[3],
    hora: convertDate[4]
  };
  return dates;
};

const convertirImagen = file => {
  const formdata = new FormData();
  formdata.append("image", file);
  return formdata;
};

const validarFecha = (fechaI, fechaF) => {
  if (parseInt(fechaF.año) > parseInt(fechaI.año)) {
    return true;
  } else if (convertirMesNum(fechaF.mes) > convertirMesNum(fechaI.mes)) {
    return true;
  } else if (parseInt(fechaF.dia) > parseInt(fechaI.dia)) {
    return true;
  } else if (parseInt(fechaF.hora.substr(0, 2)) > parseInt(fechaI.hora.substr(0, 2))) {
    return true;
  } else if (parseInt(fechaF.hora.substr(3, 2)) > parseInt(fechaI.hora.substr(3, 2))) {
    return true;
  } else if (parseInt(fechaF.hora.substr(6, 2)) > parseInt(fechaI.hora.substr(6, 2))) {
    return true;
  } else {
    return false;
  }
};



/***/ }),

/***/ "./pages/CrearEventos/index.js":
/*!*************************************!*\
  !*** ./pages/CrearEventos/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrearEventos; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dates_cardDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Dates/cardDate */ "./components/Dates/cardDate.js");
/* harmony import */ var _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Dates/manejoFechas */ "./components/Dates/manejoFechas.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\crist\\Documents\\ds2\\EventosChoclo-Control-and-Management-Software\\pages\\CrearEventos\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function CrearEventos() {
  //Estado de la imagen como URL para mostrarla
  const {
    0: imagen,
    1: setImagen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); //Estado de la imagen formateada para enviarla

  const {
    0: formImagen,
    1: setFormImagen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null); //Estado de fecha tanto formateada como para las Cards

  const {
    0: fecha,
    1: setFecha
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    inicio: _objectSpread({}, _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["inicio"]),
    inicioFormt: _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["fechaActual"],
    cierre: _objectSpread({}, _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["cierre"]),
    cierreFormt: _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["fechaMas1"],
    error: false
  }); //Estado del input de fecha solo para mostrarlo

  const {
    0: inputFecha,
    1: setInputFecha
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    inicio: null,
    cierre: null
  }); //Hook Form con el estado de todos los inputs del formulario

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const {
    Title
  } = antd__WEBPACK_IMPORTED_MODULE_5__["Typography"]; //SetValue de la fecha de incio, tanto la del input como para la Card

  const onChangeInicio = date => {
    const dates = Object(_components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["convertDate"])(date);
    setFecha(_objectSpread(_objectSpread({}, fecha), {}, {
      inicio: date ? _objectSpread({}, dates) : _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["inicio"],
      inicioFormt: date ? date._d : _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["fechaActual"]
    }));
    setInputFecha(_objectSpread(_objectSpread({}, inputFecha), {}, {
      inicio: date ? date : null
    }));
  }; //SetValue de la fecha de cierre, tanto la del input como para la Card


  const onChangeCierre = date => {
    const dates = Object(_components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["convertDate"])(date);
    setFecha(_objectSpread(_objectSpread({}, fecha), {}, {
      cierre: date ? _objectSpread({}, dates) : _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["cierre"],
      cierreFormt: date ? date._d : _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["fechaMas1"]
    }));
    setInputFecha(_objectSpread(_objectSpread({}, inputFecha), {}, {
      cierre: date ? date : null
    }));
  }; //Se valida ue la fecha inicial sea menor ue la final


  const valFecha = () => {
    const valida = Object(_components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["validarFecha"])(fecha.inicio, fecha.cierre);

    if (!valida) {
      setFecha(_objectSpread(_objectSpread({}, fecha), {}, {
        error: true
      }));
      return false;
    } else {
      setFecha(_objectSpread(_objectSpread({}, fecha), {}, {
        error: false
      }));
      return true;
    }
  }; //Envio de datos del evento


  const onSubmit = async (data, e) => {
    const valida = valFecha();

    if (!valida) {
      return;
    }

    const formdata = Object(_components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["convertirImagen"])(formImagen);

    try {
      const idImagen = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/imagen", formdata);

      if (idImagen.status === 200) {
        const body = {
          titulo: data.titulo,
          fecha_inicial: fecha.inicioFormt,
          fecha_final: fecha.cierreFormt,
          num_boletas: parseInt(data.boletas),
          aforo: parseInt(data.aforo),
          descripcion: data.descripcion,
          lugar: data.lugar,
          anfitrion: data.anfitrion,
          tematica: data.tematica,
          direccion: data.direccion,
          id_imagen: idImagen.data.id_imagen
        };
        const respuesta = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/evento", body);
        alert(respuesta.data);
        resetValues(e);
      } else {
        alert("No se pudo enviar la imagen, intente de nuevo");
      }
    } catch (e) {
      alert(e);
    }
  }; //Reset de todos los datos


  const resetValues = e => {
    setImagen(null);
    setFormImagen(null);
    setFecha(_objectSpread(_objectSpread({}, fecha), {}, {
      inicio: _objectSpread({}, _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["inicio"]),
      inicioFormt: _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["fechaActual"],
      cierre: _objectSpread({}, _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["cierre"]),
      cierreFormt: _components_Dates_manejoFechas__WEBPACK_IMPORTED_MODULE_4__["fechaMas1"]
    }));
    setInputFecha({
      inicio: null,
      cierre: null
    });
    e.target.reset();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "crearEV_Container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "titulo",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
        level: 2,
        children: "Crear Eventos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "contend",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "form-eventos",
        id: "formEvento",
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
          className: "input-title",
          placeholder: "Titulo del Evento"
        }, register("titulo", {
          required: true
        })), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), errors.titulo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "spanError errorTitle",
          children: "Este campo es obligatorio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
          className: "event-hr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "cont-options",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "cont-options-img",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "cont-img",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Image"], {
                preview: false,
                width: "100%",
                height: "100%",
                src: imagen || "https://i.pinimg.com/originals/50/f6/0a/50f60a6eb9966f0cbbfa8ef052b0d3ed.jpg",
                alt: "Imagen del Evento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              className: "input-img",
              type: "file",
              name: "imagen",
              accept: "image/*",
              onChange: e => {
                setFormImagen(e.target.files[0]);
                setImagen(URL.createObjectURL(e.target.files[0]));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "options-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "options-right-h3 ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "contenedorDate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "right-date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
                    level: 4,
                    children: "Inicio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dates_cardDate__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, fecha.inicio), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "fecha",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
                    id: "fechaInicio",
                    name: "inicio",
                    value: inputFecha.inicio,
                    onChange: onChangeInicio,
                    className: "place-pick",
                    locale: "es",
                    placeholder: "Fecha Incial",
                    showTime: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, this), fecha.error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "spanError",
                children: "La fecha inicial debe ser antes de la de cierre"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "contenedorDate",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "right-date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
                    level: 4,
                    children: "Cierre"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dates_cardDate__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, fecha.cierre), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "fecha",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], {
                    id: "fechaCierre",
                    name: "cierre",
                    value: inputFecha.cierre,
                    onChange: onChangeCierre,
                    className: "place",
                    placeholder: "Fecha Cierre",
                    showTime: true,
                    locale: "es"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "right-inputs",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
                level: 3,
                children: "Informaci\xF3n General"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "contenedor-inputs",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "inputs-info",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inputs-info-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "lugar",
                      children: "Lugar: (*)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      id: "lugar",
                      name: "lugar",
                      className: "inputs-Eventos"
                    }, register("lugar", {
                      required: true
                    })), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 23
                    }, this), errors.lugar && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "spanError",
                      children: "Este campo es obligatorio"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "tematica",
                      children: "Tematica: (*)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      id: "tematica",
                      name: "tematica",
                      className: "inputs-Eventos"
                    }, register("tematica", {
                      required: true
                    })), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 23
                    }, this), errors.tematica && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "spanError",
                      children: "Este campo es obligatorio"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 265,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "direccion",
                      children: "Dirección: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      id: "direccion",
                      name: "direccion",
                      className: "inputs-Eventos"
                    }, register("direccion")), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inputs-info-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "aforo",
                      children: "Aforo: (*)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 278,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      id: "aforo",
                      className: "inputs-Eventos",
                      type: "number",
                      name: "aforo"
                    }, register("aforo", {
                      required: true
                    })), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 23
                    }, this), errors.aforo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "spanError",
                      children: "Este campo es obligatorio"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 287,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "boletas",
                      children: "Boletas Permitidas: (*)"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      id: "boletas",
                      className: "inputs-Eventos",
                      type: "number",
                      name: "boletas"
                    }, register("boletas", {
                      required: true
                    })), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 23
                    }, this), errors.boletas && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "spanError",
                      children: "Este campo es obligatorio"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      htmlFor: "anfitrion",
                      children: "Anfitrión: "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 307,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
                      id: "anfitrion",
                      name: "anfitrion",
                      className: "inputs-Eventos"
                    }, register("anfitrion")), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", _objectSpread({
                  className: "input-textarea",
                  placeholder: "Descripci\xF3n",
                  name: "descripcion"
                }, register("descripcion")), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "button-crearEv",
      type: "submit",
      size: "small",
      form: "formEvento",
      children: "Crear Evento"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRlcy9jYXJkRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGVzL21hbmVqb0ZlY2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9DcmVhckV2ZW50b3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaG9vay1mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2FyZERhdGUiLCJzZW1hbmEiLCJpbmljaW8iLCJkaWEiLCJtZXMiLCJhw7FvIiwiaG9yYSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJmZWNoYUFjdHVhbCIsIkRhdGUiLCJmZWNoYU1hczEiLCJzZXRIb3VycyIsImdldEhvdXJzIiwiYWdyZWdhcjAiLCJob3JhMCIsIlN0cmluZyIsImxlbmd0aCIsImhvcmFBY3R1YWwiLCJ0aXBvIiwiaG9yYUkiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImhvcmFGIiwic2VtYW5hQWMiLCJudW0iLCJtZXNBYyIsImdldERheSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiY2llcnJlIiwiY29udmVydGlyU2VtYW5hIiwiY29udmVydGlyTWVzIiwiY29udmVydGlyTWVzTnVtIiwiY29udmVydERhdGUiLCJkYXRlIiwiX2QiLCJzcGxpdCIsImRhdGVzIiwiY29udmVydGlySW1hZ2VuIiwiZmlsZSIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ2YWxpZGFyRmVjaGEiLCJmZWNoYUkiLCJmZWNoYUYiLCJwYXJzZUludCIsInN1YnN0ciIsIkNyZWFyRXZlbnRvcyIsImltYWdlbiIsInNldEltYWdlbiIsInVzZVN0YXRlIiwiZm9ybUltYWdlbiIsInNldEZvcm1JbWFnZW4iLCJmZWNoYSIsInNldEZlY2hhIiwiaW5pY2lvRm9ybXQiLCJjaWVycmVGb3JtdCIsImVycm9yIiwiaW5wdXRGZWNoYSIsInNldElucHV0RmVjaGEiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsIlRpdGxlIiwiVHlwb2dyYXBoeSIsIm9uQ2hhbmdlSW5pY2lvIiwib25DaGFuZ2VDaWVycmUiLCJ2YWxGZWNoYSIsInZhbGlkYSIsIm9uU3VibWl0IiwiZGF0YSIsImUiLCJpZEltYWdlbiIsImF4aW9zIiwicG9zdCIsInN0YXR1cyIsImJvZHkiLCJ0aXR1bG8iLCJmZWNoYV9pbmljaWFsIiwiZmVjaGFfZmluYWwiLCJudW1fYm9sZXRhcyIsImJvbGV0YXMiLCJhZm9ybyIsImRlc2NyaXBjaW9uIiwibHVnYXIiLCJhbmZpdHJpb24iLCJ0ZW1hdGljYSIsImRpcmVjY2lvbiIsImlkX2ltYWdlbiIsInJlc3B1ZXN0YSIsImFsZXJ0IiwicmVzZXRWYWx1ZXMiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFDaEJDLFFBQU0sR0FBR0Msb0RBQU0sQ0FBQ0QsTUFEQTtBQUVoQkUsS0FBRyxHQUFHRCxvREFBTSxDQUFDQyxHQUZHO0FBR2hCQyxLQUFHLEdBQUdGLG9EQUFNLENBQUNFLEdBSEc7QUFJaEJDLEtBQUcsR0FBR0gsb0RBQU0sQ0FBQ0csR0FKRztBQUtoQkMsTUFBSSxHQUFHSixvREFBTSxDQUFDSTtBQUxFLENBQUQsS0FNWDtBQUNKLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUlMLE1BQU0sSUFBSSxXQUFWLEdBQXdCQyxvREFBTSxDQUFDRCxNQUEvQixHQUF3Q0E7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUEsa0JBQTJCRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxtQkFDR0MsR0FBRyxHQUFHLEdBRFQsRUFFR0MsR0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFPRTtBQUFJLGlCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBUUU7QUFBQSxrQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBckJEOztBQXVCQU4sUUFBUSxDQUFDTyxTQUFULEdBQXFCO0FBQ25CTixRQUFNLEVBQUVPLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJQLEtBQUcsRUFBRUssaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGSDtBQUduQk4sS0FBRyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhIO0FBSW5CTCxLQUFHLEVBQUVHLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJELFVBSkg7QUFLbkJKLE1BQUksRUFBRUUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFMSixDQUFyQjtBQVFlVix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQSxNQUFNWSxXQUFXLEdBQUcsSUFBSUMsSUFBSixFQUFwQjtBQUVBLElBQUlDLFNBQVMsR0FBRyxJQUFJRCxJQUFKLEVBQWhCO0FBRUFDLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQkQsU0FBUyxDQUFDRSxRQUFWLEtBQXVCLENBQTFDOztBQUVBLE1BQU1DLFFBQVEsR0FBSVgsSUFBRCxJQUFVO0FBQ3pCLE1BQUlZLEtBQUo7O0FBQ0EsTUFBSUMsTUFBTSxDQUFDYixJQUFELENBQU4sQ0FBYWMsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM1QkYsU0FBSyxHQUFHLE1BQU1aLElBQWQ7QUFDRCxHQUZELE1BRU87QUFDTFksU0FBSyxHQUFHWixJQUFSO0FBQ0Q7O0FBQ0QsU0FBT1ksS0FBUDtBQUNELENBUkQ7O0FBU0EsTUFBTUcsVUFBVSxHQUFJQyxJQUFELElBQVU7QUFDM0IsUUFBTUMsS0FBSyxHQUFJLEdBQUVOLFFBQVEsQ0FBQ0wsV0FBVyxDQUFDSSxRQUFaLEVBQUQsQ0FBeUIsSUFBR0MsUUFBUSxDQUMzREwsV0FBVyxDQUFDWSxVQUFaLEVBRDJELENBRTNELElBQUdQLFFBQVEsQ0FBQ0wsV0FBVyxDQUFDYSxVQUFaLEVBQUQsQ0FBMkIsRUFGeEM7QUFHQSxRQUFNQyxLQUFLLEdBQUksR0FBRVQsUUFBUSxDQUFDSCxTQUFTLENBQUNFLFFBQVYsRUFBRCxDQUF1QixJQUFHQyxRQUFRLENBQ3pESCxTQUFTLENBQUNVLFVBQVYsRUFEeUQsQ0FFekQsSUFBR1AsUUFBUSxDQUFDSCxTQUFTLENBQUNXLFVBQVYsRUFBRCxDQUF5QixFQUZ0QztBQUdBLFNBQU9ILElBQUksR0FBR0MsS0FBSCxHQUFXRyxLQUF0QjtBQUNELENBUkQ7O0FBVUEsTUFBTUMsUUFBUSxHQUFJQyxHQUFELElBQVM7QUFDeEIsTUFBSXpCLEdBQUcsR0FBR3lCLEdBQVY7O0FBRUEsTUFBSXpCLEdBQUcsR0FBRyxDQUFOLEdBQVUsQ0FBZCxFQUFpQjtBQUNmQSxPQUFHLEdBQUcsQ0FBTjtBQUNEOztBQUNELFVBQVFBLEdBQVI7QUFDRSxTQUFLLENBQUw7QUFDRSxhQUFPLFNBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sUUFBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLFdBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxRQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sU0FBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLFFBQVA7QUFkSjtBQWdCRCxDQXRCRDs7QUF3QkEsTUFBTTBCLEtBQUssR0FBSUQsR0FBRCxJQUFTO0FBQ3JCLE1BQUl4QixHQUFHLEdBQUd3QixHQUFWOztBQUNBLE1BQUl4QixHQUFHLEdBQUcsQ0FBTixHQUFVLEVBQWQsRUFBa0I7QUFDaEJBLE9BQUcsR0FBRyxDQUFOO0FBQ0Q7O0FBQ0QsVUFBUUEsR0FBUjtBQUNFLFNBQUssQ0FBTDtBQUNFLGFBQU8sT0FBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLFNBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sT0FBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLE1BQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sT0FBUDs7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPLFFBQVA7O0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTyxZQUFQOztBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU8sU0FBUDs7QUFDRixTQUFLLEVBQUw7QUFDRSxhQUFPLFdBQVA7O0FBQ0YsU0FBSyxFQUFMO0FBQ0UsYUFBTyxXQUFQO0FBeEJKO0FBMEJELENBL0JEOztBQWlDQSxNQUFNRixNQUFNLEdBQUc7QUFDYkQsUUFBTSxFQUFFMEIsUUFBUSxDQUFDZixXQUFXLENBQUNrQixNQUFaLEVBQUQsQ0FESDtBQUViM0IsS0FBRyxFQUFFUyxXQUFXLENBQUNtQixPQUFaLEVBRlE7QUFHYjNCLEtBQUcsRUFBRXlCLEtBQUssQ0FBQ2pCLFdBQVcsQ0FBQ29CLFFBQVosRUFBRCxDQUhHO0FBSWIzQixLQUFHLEVBQUVPLFdBQVcsQ0FBQ3FCLFdBQVosRUFKUTtBQUtiM0IsTUFBSSxFQUFFZSxVQUFVLENBQUMsSUFBRDtBQUxILENBQWY7QUFPQSxNQUFNYSxNQUFNLEdBQUc7QUFDYmpDLFFBQU0sRUFBRTBCLFFBQVEsQ0FBQ2IsU0FBUyxDQUFDZ0IsTUFBVixFQUFELENBREg7QUFFYjNCLEtBQUcsRUFBRVcsU0FBUyxDQUFDaUIsT0FBVixFQUZRO0FBR2IzQixLQUFHLEVBQUV5QixLQUFLLENBQUNmLFNBQVMsQ0FBQ2tCLFFBQVYsRUFBRCxDQUhHO0FBSWIzQixLQUFHLEVBQUVTLFNBQVMsQ0FBQ21CLFdBQVYsRUFKUTtBQUtiM0IsTUFBSSxFQUFFZSxVQUFVLENBQUMsS0FBRDtBQUxILENBQWY7O0FBUUEsTUFBTWMsZUFBZSxHQUFJbEMsTUFBRCxJQUFZO0FBQ2xDLFVBQVFBLE1BQVI7QUFDRSxTQUFLLEtBQUw7QUFDRSxhQUFPLE9BQVA7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBTyxRQUFQOztBQUNGLFNBQUssS0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLFFBQVA7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBTyxTQUFQOztBQUNGLFNBQUssS0FBTDtBQUNFLGFBQU8sUUFBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLFNBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQkEsTUFBTW1DLFlBQVksR0FBSWhDLEdBQUQsSUFBUztBQUM1QixVQUFRQSxHQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssS0FBTDtBQUNFLGFBQU8sU0FBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLE9BQVA7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssS0FBTDtBQUNFLGFBQU8sTUFBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLE9BQVA7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBTyxPQUFQOztBQUNGLFNBQUssS0FBTDtBQUNFLGFBQU8sUUFBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLFlBQVA7O0FBQ0YsU0FBSyxLQUFMO0FBQ0UsYUFBTyxTQUFQOztBQUNGLFNBQUssS0FBTDtBQUNFLGFBQU8sV0FBUDs7QUFDRixTQUFLLEtBQUw7QUFDRSxhQUFPLFdBQVA7QUF4Qko7QUEwQkQsQ0EzQkQ7O0FBNkJBLE1BQU1pQyxlQUFlLEdBQUlqQyxHQUFELElBQVM7QUFDL0IsVUFBUUEsR0FBUjtBQUNFLFNBQUssT0FBTDtBQUNFLGFBQU8sQ0FBUDs7QUFDRixTQUFLLFNBQUw7QUFDRSxhQUFPLENBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBTyxDQUFQOztBQUNGLFNBQUssT0FBTDtBQUNFLGFBQU8sQ0FBUDs7QUFDRixTQUFLLE1BQUw7QUFDRSxhQUFPLENBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBTyxDQUFQOztBQUNGLFNBQUssT0FBTDtBQUNFLGFBQU8sQ0FBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLENBQVA7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsYUFBTyxDQUFQOztBQUNGLFNBQUssU0FBTDtBQUNFLGFBQU8sRUFBUDs7QUFDRixTQUFLLFdBQUw7QUFDRSxhQUFPLEVBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsYUFBTyxFQUFQO0FBeEJKO0FBMEJELENBM0JEOztBQTZCQSxNQUFNa0MsV0FBVyxHQUFJQyxJQUFELElBQVU7QUFDNUIsUUFBTUQsV0FBVyxHQUFHbkIsTUFBTSxDQUFDLGtCQUFLb0IsSUFBTCxFQUFZQyxFQUFiLENBQU4sQ0FBdUJDLEtBQXZCLENBQTZCLEdBQTdCLENBQXBCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHO0FBQ1p6QyxVQUFNLEVBQUVrQyxlQUFlLENBQUNHLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FEWDtBQUVabEMsT0FBRyxFQUFFZ0MsWUFBWSxDQUFDRSxXQUFXLENBQUMsQ0FBRCxDQUFaLENBRkw7QUFHWm5DLE9BQUcsRUFBRW1DLFdBQVcsQ0FBQyxDQUFELENBSEo7QUFJWmpDLE9BQUcsRUFBRWlDLFdBQVcsQ0FBQyxDQUFELENBSko7QUFLWmhDLFFBQUksRUFBRWdDLFdBQVcsQ0FBQyxDQUFEO0FBTEwsR0FBZDtBQU9BLFNBQU9JLEtBQVA7QUFDRCxDQVZEOztBQVlBLE1BQU1DLGVBQWUsR0FBSUMsSUFBRCxJQUFVO0FBQ2hDLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELFVBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QkgsSUFBekI7QUFDQSxTQUFPQyxRQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEtBQW9CO0FBQ3ZDLE1BQUlDLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDN0MsR0FBUixDQUFSLEdBQXVCOEMsUUFBUSxDQUFDRixNQUFNLENBQUM1QyxHQUFSLENBQW5DLEVBQWlEO0FBQy9DLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJZ0MsZUFBZSxDQUFDYSxNQUFNLENBQUM5QyxHQUFSLENBQWYsR0FBOEJpQyxlQUFlLENBQUNZLE1BQU0sQ0FBQzdDLEdBQVIsQ0FBakQsRUFBK0Q7QUFDcEUsV0FBTyxJQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUkrQyxRQUFRLENBQUNELE1BQU0sQ0FBQy9DLEdBQVIsQ0FBUixHQUF1QmdELFFBQVEsQ0FBQ0YsTUFBTSxDQUFDOUMsR0FBUixDQUFuQyxFQUFpRDtBQUN0RCxXQUFPLElBQVA7QUFDRCxHQUZNLE1BRUEsSUFDTGdELFFBQVEsQ0FBQ0QsTUFBTSxDQUFDNUMsSUFBUCxDQUFZOEMsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFELENBQVIsR0FBcUNELFFBQVEsQ0FBQ0YsTUFBTSxDQUFDM0MsSUFBUCxDQUFZOEMsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFELENBRHhDLEVBRUw7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUpNLE1BSUEsSUFDTEQsUUFBUSxDQUFDRCxNQUFNLENBQUM1QyxJQUFQLENBQVk4QyxNQUFaLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQUQsQ0FBUixHQUFxQ0QsUUFBUSxDQUFDRixNQUFNLENBQUMzQyxJQUFQLENBQVk4QyxNQUFaLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQUQsQ0FEeEMsRUFFTDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSk0sTUFJQSxJQUNMRCxRQUFRLENBQUNELE1BQU0sQ0FBQzVDLElBQVAsQ0FBWThDLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBRCxDQUFSLEdBQXFDRCxRQUFRLENBQUNGLE1BQU0sQ0FBQzNDLElBQVAsQ0FBWThDLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBRCxDQUR4QyxFQUVMO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FKTSxNQUlBO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQXRCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsWUFBVCxHQUF3QjtBQUNyQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxJQUFELENBQXBDLENBRnFDLENBR3JDOztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBQyxJQUFELENBQTVDLENBSnFDLENBS3JDOztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQztBQUNqQ3RELFVBQU0sb0JBQU9BLHFFQUFQLENBRDJCO0FBRWpDMkQsZUFBVyxFQUFFakQsMEVBRm9CO0FBR2pDc0IsVUFBTSxvQkFBT0EscUVBQVAsQ0FIMkI7QUFJakM0QixlQUFXLEVBQUVoRCx3RUFKb0I7QUFLakNpRCxTQUFLLEVBQUU7QUFMMEIsR0FBRCxDQUFsQyxDQU5xQyxDQWFyQzs7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJULHNEQUFRLENBQUM7QUFDM0N0RCxVQUFNLEVBQUUsSUFEbUM7QUFFM0NnQyxVQUFNLEVBQUU7QUFGbUMsR0FBRCxDQUE1QyxDQWRxQyxDQWtCckM7O0FBQ0EsUUFBTTtBQUNKZ0MsWUFESTtBQUVKQyxnQkFGSTtBQUdKQyxTQUhJO0FBSUpDLGFBQVMsRUFBRTtBQUFFQztBQUFGO0FBSlAsTUFLRkMsK0RBQU8sRUFMWDtBQU9BLFFBQU07QUFBRUM7QUFBRixNQUFZQywrQ0FBbEIsQ0ExQnFDLENBMkJyQzs7QUFDQSxRQUFNQyxjQUFjLEdBQUluQyxJQUFELElBQVU7QUFDL0IsVUFBTUcsS0FBSyxHQUFHSixrRkFBVyxDQUFDQyxJQUFELENBQXpCO0FBRUFxQixZQUFRLGlDQUNIRCxLQURHO0FBRU56RCxZQUFNLEVBQUVxQyxJQUFJLHFCQUFRRyxLQUFSLElBQWtCeEMscUVBRnhCO0FBR04yRCxpQkFBVyxFQUFFdEIsSUFBSSxHQUFHQSxJQUFJLENBQUNDLEVBQVIsR0FBYTVCLDBFQUFXQTtBQUhuQyxPQUFSO0FBS0FxRCxpQkFBYSxpQ0FDUkQsVUFEUTtBQUVYOUQsWUFBTSxFQUFFcUMsSUFBSSxHQUFHQSxJQUFILEdBQVU7QUFGWCxPQUFiO0FBSUQsR0FaRCxDQTVCcUMsQ0F5Q3JDOzs7QUFDQSxRQUFNb0MsY0FBYyxHQUFJcEMsSUFBRCxJQUFVO0FBQy9CLFVBQU1HLEtBQUssR0FBR0osa0ZBQVcsQ0FBQ0MsSUFBRCxDQUF6QjtBQUNBcUIsWUFBUSxpQ0FDSEQsS0FERztBQUVOekIsWUFBTSxFQUFFSyxJQUFJLHFCQUFRRyxLQUFSLElBQWtCUixxRUFGeEI7QUFHTjRCLGlCQUFXLEVBQUV2QixJQUFJLEdBQUdBLElBQUksQ0FBQ0MsRUFBUixHQUFhMUIsd0VBQVNBO0FBSGpDLE9BQVI7QUFLQW1ELGlCQUFhLGlDQUNSRCxVQURRO0FBRVg5QixZQUFNLEVBQUVLLElBQUksR0FBR0EsSUFBSCxHQUFVO0FBRlgsT0FBYjtBQUlELEdBWEQsQ0ExQ3FDLENBdURyQzs7O0FBQ0EsUUFBTXFDLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFVBQU1DLE1BQU0sR0FBRzdCLG1GQUFZLENBQUNXLEtBQUssQ0FBQ3pELE1BQVAsRUFBZXlELEtBQUssQ0FBQ3pCLE1BQXJCLENBQTNCOztBQUNBLFFBQUksQ0FBQzJDLE1BQUwsRUFBYTtBQUNYakIsY0FBUSxpQ0FDSEQsS0FERztBQUVOSSxhQUFLLEVBQUU7QUFGRCxTQUFSO0FBSUEsYUFBTyxLQUFQO0FBQ0QsS0FORCxNQU1PO0FBQ0xILGNBQVEsaUNBQ0hELEtBREc7QUFFTkksYUFBSyxFQUFFO0FBRkQsU0FBUjtBQUlBLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FmRCxDQXhEcUMsQ0F5RXJDOzs7QUFDQSxRQUFNZSxRQUFRLEdBQUcsT0FBT0MsSUFBUCxFQUFhQyxDQUFiLEtBQW1CO0FBQ2xDLFVBQU1ILE1BQU0sR0FBR0QsUUFBUSxFQUF2Qjs7QUFDQSxRQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYO0FBQ0Q7O0FBRUQsVUFBTWhDLFFBQVEsR0FBR0Ysc0ZBQWUsQ0FBQ2MsVUFBRCxDQUFoQzs7QUFFQSxRQUFJO0FBQ0YsWUFBTXdCLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUEwQnRDLFFBQTFCLENBQXZCOztBQUVBLFVBQUlvQyxRQUFRLENBQUNHLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsY0FBTUMsSUFBSSxHQUFHO0FBQ1hDLGdCQUFNLEVBQUVQLElBQUksQ0FBQ08sTUFERjtBQUVYQyx1QkFBYSxFQUFFNUIsS0FBSyxDQUFDRSxXQUZWO0FBR1gyQixxQkFBVyxFQUFFN0IsS0FBSyxDQUFDRyxXQUhSO0FBSVgyQixxQkFBVyxFQUFFdEMsUUFBUSxDQUFDNEIsSUFBSSxDQUFDVyxPQUFOLENBSlY7QUFLWEMsZUFBSyxFQUFFeEMsUUFBUSxDQUFDNEIsSUFBSSxDQUFDWSxLQUFOLENBTEo7QUFNWEMscUJBQVcsRUFBRWIsSUFBSSxDQUFDYSxXQU5QO0FBT1hDLGVBQUssRUFBRWQsSUFBSSxDQUFDYyxLQVBEO0FBUVhDLG1CQUFTLEVBQUVmLElBQUksQ0FBQ2UsU0FSTDtBQVNYQyxrQkFBUSxFQUFFaEIsSUFBSSxDQUFDZ0IsUUFUSjtBQVVYQyxtQkFBUyxFQUFFakIsSUFBSSxDQUFDaUIsU0FWTDtBQVdYQyxtQkFBUyxFQUFFaEIsUUFBUSxDQUFDRixJQUFULENBQWNrQjtBQVhkLFNBQWI7QUFjQSxjQUFNQyxTQUFTLEdBQUcsTUFBTWhCLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQTBCRSxJQUExQixDQUF4QjtBQUVBYyxhQUFLLENBQUNELFNBQVMsQ0FBQ25CLElBQVgsQ0FBTDtBQUNBcUIsbUJBQVcsQ0FBQ3BCLENBQUQsQ0FBWDtBQUNELE9BbkJELE1BbUJPO0FBQ0xtQixhQUFLLENBQUMsK0NBQUQsQ0FBTDtBQUNEO0FBQ0YsS0F6QkQsQ0F5QkUsT0FBT25CLENBQVAsRUFBVTtBQUNWbUIsV0FBSyxDQUFDbkIsQ0FBRCxDQUFMO0FBQ0Q7QUFDRixHQXBDRCxDQTFFcUMsQ0ErR3JDOzs7QUFDQSxRQUFNb0IsV0FBVyxHQUFJcEIsQ0FBRCxJQUFPO0FBQ3pCekIsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRyxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBRSxZQUFRLGlDQUNIRCxLQURHO0FBRU56RCxZQUFNLG9CQUFPQSxxRUFBUCxDQUZBO0FBR04yRCxpQkFBVyxFQUFFakQsMEVBSFA7QUFJTnNCLFlBQU0sb0JBQU9BLHFFQUFQLENBSkE7QUFLTjRCLGlCQUFXLEVBQUVoRCx3RUFBU0E7QUFMaEIsT0FBUjtBQU9BbUQsaUJBQWEsQ0FBQztBQUNaL0QsWUFBTSxFQUFFLElBREk7QUFFWmdDLFlBQU0sRUFBRTtBQUZJLEtBQUQsQ0FBYjtBQUlBOEMsS0FBQyxDQUFDcUIsTUFBRixDQUFTakMsS0FBVDtBQUNELEdBZkQ7O0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUMsY0FEWjtBQUVFLFVBQUUsRUFBQyxZQUZMO0FBR0UsZ0JBQVEsRUFBRUQsWUFBWSxDQUFDVyxRQUFELENBSHhCO0FBQUEsZ0NBS0U7QUFDRSxtQkFBUyxFQUFDLGFBRFo7QUFFRSxxQkFBVyxFQUFDO0FBRmQsV0FHTVosUUFBUSxDQUFDLFFBQUQsRUFBVztBQUFFb0Msa0JBQVEsRUFBRTtBQUFaLFNBQVgsQ0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLEVBVUdoQyxNQUFNLENBQUNnQixNQUFQLGlCQUNDO0FBQU0sbUJBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosZUFlRTtBQUFJLG1CQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGLGVBZ0JFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLGtCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSxxQ0FDRSxxRUFBQywwQ0FBRDtBQUNFLHVCQUFPLEVBQUUsS0FEWDtBQUVFLHFCQUFLLEVBQUMsTUFGUjtBQUdFLHNCQUFNLEVBQUMsTUFIVDtBQUlFLG1CQUFHLEVBQ0RoQyxNQUFNLElBQ04sOEVBTko7QUFRRSxtQkFBRyxFQUFDO0FBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFhRTtBQUNFLHVCQUFTLEVBQUMsV0FEWjtBQUVFLGtCQUFJLEVBQUMsTUFGUDtBQUdFLGtCQUFJLEVBQUMsUUFIUDtBQUlFLG9CQUFNLEVBQUMsU0FKVDtBQUtFLHNCQUFRLEVBQUcwQixDQUFELElBQU87QUFDZnRCLDZCQUFhLENBQUNzQixDQUFDLENBQUNxQixNQUFGLENBQVNFLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBYjtBQUNBaEQseUJBQVMsQ0FBQ2lELEdBQUcsQ0FBQ0MsZUFBSixDQUFvQnpCLENBQUMsQ0FBQ3FCLE1BQUYsQ0FBU0UsS0FBVCxDQUFlLENBQWYsQ0FBcEIsQ0FBRCxDQUFUO0FBQ0Q7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQXlCRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxtQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxnQkFBZjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyxZQUFmO0FBQUEsMENBQ0UscUVBQUMsS0FBRDtBQUFPLHlCQUFLLEVBQUUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUdFLHFFQUFDLGtFQUFELG9CQUFjNUMsS0FBSyxDQUFDekQsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFNRTtBQUFLLDJCQUFTLEVBQUMsT0FBZjtBQUFBLHlDQUNFLHFFQUFDLCtDQUFEO0FBQ0Usc0JBQUUsRUFBQyxhQURMO0FBRUUsd0JBQUksRUFBQyxRQUZQO0FBR0UseUJBQUssRUFBRThELFVBQVUsQ0FBQzlELE1BSHBCO0FBSUUsNEJBQVEsRUFBRXdFLGNBSlo7QUFLRSw2QkFBUyxFQUFDLFlBTFo7QUFNRSwwQkFBTSxFQUFDLElBTlQ7QUFPRSwrQkFBVyxFQUFDLGNBUGQ7QUFRRSw0QkFBUTtBQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQW9CR2YsS0FBSyxDQUFDSSxLQUFOLGlCQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFyQkosZUF5QkU7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSwwQ0FDRSxxRUFBQyxLQUFEO0FBQU8seUJBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBR0UscUVBQUMsa0VBQUQsb0JBQWNKLEtBQUssQ0FBQ3pCLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBTUU7QUFBSywyQkFBUyxFQUFDLE9BQWY7QUFBQSx5Q0FDRSxxRUFBQywrQ0FBRDtBQUNFLHNCQUFFLEVBQUMsYUFETDtBQUVFLHdCQUFJLEVBQUMsUUFGUDtBQUdFLHlCQUFLLEVBQUU4QixVQUFVLENBQUM5QixNQUhwQjtBQUlFLDRCQUFRLEVBQUV5QyxjQUpaO0FBS0UsNkJBQVMsRUFBQyxPQUxaO0FBTUUsK0JBQVcsRUFBQyxjQU5kO0FBT0UsNEJBQVEsTUFQVjtBQVFFLDBCQUFNLEVBQUM7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQThDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFLHFFQUFDLEtBQUQ7QUFBTyxxQkFBSyxFQUFFLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUMsbUJBQWY7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUMsYUFBZjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQyxtQkFBZjtBQUFBLDRDQUNFO0FBQU8sNkJBQU8sRUFBQyxPQUFmO0FBQUEsZ0NBQXdCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRTtBQUNFLHdCQUFFLEVBQUMsT0FETDtBQUVFLDBCQUFJLEVBQUMsT0FGUDtBQUdFLCtCQUFTLEVBQUM7QUFIWix1QkFJTVQsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUFFb0MsOEJBQVEsRUFBRTtBQUFaLHFCQUFWLENBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixFQVFHaEMsTUFBTSxDQUFDdUIsS0FBUCxpQkFDQztBQUFNLCtCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVEosZUFhRTtBQUFPLDZCQUFPLEVBQUMsVUFBZjtBQUFBLGdDQUEyQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWJGLGVBY0U7QUFDRSx3QkFBRSxFQUFDLFVBREw7QUFFRSwwQkFBSSxFQUFDLFVBRlA7QUFHRSwrQkFBUyxFQUFDO0FBSFosdUJBSU0zQixRQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVvQyw4QkFBUSxFQUFFO0FBQVoscUJBQWIsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWRGLEVBb0JHaEMsTUFBTSxDQUFDeUIsUUFBUCxpQkFDQztBQUFNLCtCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBckJKLGVBeUJFO0FBQU8sNkJBQU8sRUFBQyxXQUFmO0FBQUEsZ0NBQTRCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBekJGLGVBMEJFO0FBQ0Usd0JBQUUsRUFBQyxXQURMO0FBRUUsMEJBQUksRUFBQyxXQUZQO0FBR0UsK0JBQVMsRUFBQztBQUhaLHVCQUlNN0IsUUFBUSxDQUFDLFdBQUQsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFrQ0U7QUFBSyw2QkFBUyxFQUFDLGtCQUFmO0FBQUEsNENBQ0U7QUFBTyw2QkFBTyxFQUFDLE9BQWY7QUFBQSxnQ0FBd0I7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQ0Usd0JBQUUsRUFBQyxPQURMO0FBRUUsK0JBQVMsRUFBQyxnQkFGWjtBQUdFLDBCQUFJLEVBQUMsUUFIUDtBQUlFLDBCQUFJLEVBQUM7QUFKUCx1QkFLTUEsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUFFb0MsOEJBQVEsRUFBRTtBQUFaLHFCQUFWLENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixFQVNHaEMsTUFBTSxDQUFDcUIsS0FBUCxpQkFDQztBQUFNLCtCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVkosZUFjRTtBQUFPLDZCQUFPLEVBQUMsU0FBZjtBQUFBLGdDQUNHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFkRixlQWlCRTtBQUNFLHdCQUFFLEVBQUMsU0FETDtBQUVFLCtCQUFTLEVBQUMsZ0JBRlo7QUFHRSwwQkFBSSxFQUFDLFFBSFA7QUFJRSwwQkFBSSxFQUFDO0FBSlAsdUJBS016QixRQUFRLENBQUMsU0FBRCxFQUFZO0FBQUVvQyw4QkFBUSxFQUFFO0FBQVoscUJBQVosQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWpCRixFQXdCR2hDLE1BQU0sQ0FBQ29CLE9BQVAsaUJBQ0M7QUFBTSwrQkFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQXpCSixlQThCRTtBQUFPLDZCQUFPLEVBQUMsV0FBZjtBQUFBLGdDQUE0QjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTlCRixlQStCRTtBQUNFLHdCQUFFLEVBQUMsV0FETDtBQUVFLDBCQUFJLEVBQUMsV0FGUDtBQUdFLCtCQUFTLEVBQUM7QUFIWix1QkFJTXhCLFFBQVEsQ0FBQyxXQUFELENBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUEwRUU7QUFDRSwyQkFBUyxFQUFDLGdCQURaO0FBRUUsNkJBQVcsRUFBQyxnQkFGZDtBQUdFLHNCQUFJLEVBQUM7QUFIUCxtQkFJTUEsUUFBUSxDQUFDLGFBQUQsQ0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBb0xFO0FBQ0UsZUFBUyxFQUFDLGdCQURaO0FBRUUsVUFBSSxFQUFDLFFBRlA7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLFVBQUksRUFBQyxZQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcExGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0xELEM7Ozs7Ozs7Ozs7O0FDalZELGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL0NyZWFyRXZlbnRvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvQ3JlYXJFdmVudG9zL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpbmljaW8gfSBmcm9tIFwiLi9tYW5lam9GZWNoYXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgQ2FyZERhdGUgPSAoe1xyXG4gIHNlbWFuYSA9IGluaWNpby5zZW1hbmEsXHJcbiAgZGlhID0gaW5pY2lvLmRpYSxcclxuICBtZXMgPSBpbmljaW8ubWVzLFxyXG4gIGHDsW8gPSBpbmljaW8uYcOxbyxcclxuICBob3JhID0gaW5pY2lvLmhvcmEsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkRXYtZGF0ZVwiPlxyXG4gICAgICAgIDxwPntzZW1hbmEgPT0gXCJ1bmRlZmluZWRcIiA/IGluaWNpby5zZW1hbmEgOiBzZW1hbmF9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpYS1jYXJkRXZcIj57ZGlhfTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHttZXMgKyBcIiBcIn1cclxuICAgICAgICAgIHthw7FvfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHItY2FyZERhdGVcIiAvPlxyXG4gICAgICAgIDxwPntob3JhfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQ2FyZERhdGUucHJvcFR5cGVzID0ge1xyXG4gIHNlbWFuYTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRpYTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG1lczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGHDsW86IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBob3JhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkRGF0ZTtcclxuIiwiY29uc3QgZmVjaGFBY3R1YWwgPSBuZXcgRGF0ZSgpO1xyXG5cclxubGV0IGZlY2hhTWFzMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5mZWNoYU1hczEuc2V0SG91cnMoZmVjaGFNYXMxLmdldEhvdXJzKCkgKyAxKTtcclxuXHJcbmNvbnN0IGFncmVnYXIwID0gKGhvcmEpID0+IHtcclxuICBsZXQgaG9yYTA7XHJcbiAgaWYgKFN0cmluZyhob3JhKS5sZW5ndGggPT0gMSkge1xyXG4gICAgaG9yYTAgPSBcIjBcIiArIGhvcmE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhvcmEwID0gaG9yYTtcclxuICB9XHJcbiAgcmV0dXJuIGhvcmEwO1xyXG59O1xyXG5jb25zdCBob3JhQWN0dWFsID0gKHRpcG8pID0+IHtcclxuICBjb25zdCBob3JhSSA9IGAke2FncmVnYXIwKGZlY2hhQWN0dWFsLmdldEhvdXJzKCkpfToke2FncmVnYXIwKFxyXG4gICAgZmVjaGFBY3R1YWwuZ2V0TWludXRlcygpXHJcbiAgKX06JHthZ3JlZ2FyMChmZWNoYUFjdHVhbC5nZXRTZWNvbmRzKCkpfWA7XHJcbiAgY29uc3QgaG9yYUYgPSBgJHthZ3JlZ2FyMChmZWNoYU1hczEuZ2V0SG91cnMoKSl9OiR7YWdyZWdhcjAoXHJcbiAgICBmZWNoYU1hczEuZ2V0TWludXRlcygpXHJcbiAgKX06JHthZ3JlZ2FyMChmZWNoYU1hczEuZ2V0U2Vjb25kcygpKX1gO1xyXG4gIHJldHVybiB0aXBvID8gaG9yYUkgOiBob3JhRjtcclxufTtcclxuXHJcbmNvbnN0IHNlbWFuYUFjID0gKG51bSkgPT4ge1xyXG4gIGxldCBkaWEgPSBudW07XHJcblxyXG4gIGlmIChkaWEgKyAxID4gNykge1xyXG4gICAgZGlhID0gMDtcclxuICB9XHJcbiAgc3dpdGNoIChkaWEpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIFwiRG9taW5nb1wiO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICByZXR1cm4gXCJMdW5lc1wiO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gXCJNYXJ0ZXNcIjtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIFwiTWllcmNvbGVzXCI7XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIHJldHVybiBcIkp1ZXZlc1wiO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICByZXR1cm4gXCJWaWVybmVzXCI7XHJcbiAgICBjYXNlIDY6XHJcbiAgICAgIHJldHVybiBcIlNhYmFkb1wiO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IG1lc0FjID0gKG51bSkgPT4ge1xyXG4gIGxldCBtZXMgPSBudW07XHJcbiAgaWYgKG1lcyArIDEgPiAxMikge1xyXG4gICAgbWVzID0gMTtcclxuICB9XHJcbiAgc3dpdGNoIChtZXMpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIFwiRW5lcm9cIjtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIFwiRmVicmVyb1wiO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gXCJNYXJ6b1wiO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICByZXR1cm4gXCJBYnJpbFwiO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gXCJNYXlvXCI7XHJcbiAgICBjYXNlIDU6XHJcbiAgICAgIHJldHVybiBcIkp1bmlvXCI7XHJcbiAgICBjYXNlIDY6XHJcbiAgICAgIHJldHVybiBcIkp1bGlvXCI7XHJcbiAgICBjYXNlIDc6XHJcbiAgICAgIHJldHVybiBcIkFnb3N0b1wiO1xyXG4gICAgY2FzZSA4OlxyXG4gICAgICByZXR1cm4gXCJTZXB0aWVtYnJlXCI7XHJcbiAgICBjYXNlIDk6XHJcbiAgICAgIHJldHVybiBcIk9jdHVicmVcIjtcclxuICAgIGNhc2UgMTA6XHJcbiAgICAgIHJldHVybiBcIk5vdmllbWJyZVwiO1xyXG4gICAgY2FzZSAxMTpcclxuICAgICAgcmV0dXJuIFwiRGljaWVtYnJlXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pY2lvID0ge1xyXG4gIHNlbWFuYTogc2VtYW5hQWMoZmVjaGFBY3R1YWwuZ2V0RGF5KCkpLFxyXG4gIGRpYTogZmVjaGFBY3R1YWwuZ2V0RGF0ZSgpLFxyXG4gIG1lczogbWVzQWMoZmVjaGFBY3R1YWwuZ2V0TW9udGgoKSksXHJcbiAgYcOxbzogZmVjaGFBY3R1YWwuZ2V0RnVsbFllYXIoKSxcclxuICBob3JhOiBob3JhQWN0dWFsKHRydWUpLFxyXG59O1xyXG5jb25zdCBjaWVycmUgPSB7XHJcbiAgc2VtYW5hOiBzZW1hbmFBYyhmZWNoYU1hczEuZ2V0RGF5KCkpLFxyXG4gIGRpYTogZmVjaGFNYXMxLmdldERhdGUoKSxcclxuICBtZXM6IG1lc0FjKGZlY2hhTWFzMS5nZXRNb250aCgpKSxcclxuICBhw7FvOiBmZWNoYU1hczEuZ2V0RnVsbFllYXIoKSxcclxuICBob3JhOiBob3JhQWN0dWFsKGZhbHNlKSxcclxufTtcclxuXHJcbmNvbnN0IGNvbnZlcnRpclNlbWFuYSA9IChzZW1hbmEpID0+IHtcclxuICBzd2l0Y2ggKHNlbWFuYSkge1xyXG4gICAgY2FzZSBcIk1vblwiOlxyXG4gICAgICByZXR1cm4gXCJMdW5lc1wiO1xyXG4gICAgY2FzZSBcIlR1ZVwiOlxyXG4gICAgICByZXR1cm4gXCJNYXJ0ZXNcIjtcclxuICAgIGNhc2UgXCJXZWRcIjpcclxuICAgICAgcmV0dXJuIFwiTWllcmNvbGVzXCI7XHJcbiAgICBjYXNlIFwiVGh1XCI6XHJcbiAgICAgIHJldHVybiBcIkp1ZXZlc1wiO1xyXG4gICAgY2FzZSBcIkZyaVwiOlxyXG4gICAgICByZXR1cm4gXCJWaWVybmVzXCI7XHJcbiAgICBjYXNlIFwiU2F0XCI6XHJcbiAgICAgIHJldHVybiBcIlNhYmFkb1wiO1xyXG4gICAgY2FzZSBcIlN1blwiOlxyXG4gICAgICByZXR1cm4gXCJEb21pbmdvXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY29udmVydGlyTWVzID0gKG1lcykgPT4ge1xyXG4gIHN3aXRjaCAobWVzKSB7XHJcbiAgICBjYXNlIFwiSmFuXCI6XHJcbiAgICAgIHJldHVybiBcIkVuZXJvXCI7XHJcbiAgICBjYXNlIFwiRmViXCI6XHJcbiAgICAgIHJldHVybiBcIkZlYnJlcm9cIjtcclxuICAgIGNhc2UgXCJNYXJcIjpcclxuICAgICAgcmV0dXJuIFwiTWFyem9cIjtcclxuICAgIGNhc2UgXCJBcHJcIjpcclxuICAgICAgcmV0dXJuIFwiQWJyaWxcIjtcclxuICAgIGNhc2UgXCJNYXlcIjpcclxuICAgICAgcmV0dXJuIFwiTWF5b1wiO1xyXG4gICAgY2FzZSBcIkp1blwiOlxyXG4gICAgICByZXR1cm4gXCJKdW5pb1wiO1xyXG4gICAgY2FzZSBcIkp1bFwiOlxyXG4gICAgICByZXR1cm4gXCJKdWxpb1wiO1xyXG4gICAgY2FzZSBcIkF1Z1wiOlxyXG4gICAgICByZXR1cm4gXCJBZ29zdG9cIjtcclxuICAgIGNhc2UgXCJTZXBcIjpcclxuICAgICAgcmV0dXJuIFwiU2VwdGllbWJyZVwiO1xyXG4gICAgY2FzZSBcIk9jdFwiOlxyXG4gICAgICByZXR1cm4gXCJPY3R1YnJlXCI7XHJcbiAgICBjYXNlIFwiTm92XCI6XHJcbiAgICAgIHJldHVybiBcIk5vdmllbWJyZVwiO1xyXG4gICAgY2FzZSBcIkRlY1wiOlxyXG4gICAgICByZXR1cm4gXCJEaWNpZW1icmVcIjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjb252ZXJ0aXJNZXNOdW0gPSAobWVzKSA9PiB7XHJcbiAgc3dpdGNoIChtZXMpIHtcclxuICAgIGNhc2UgXCJFbmVyb1wiOlxyXG4gICAgICByZXR1cm4gMTtcclxuICAgIGNhc2UgXCJGZWJyZXJvXCI6XHJcbiAgICAgIHJldHVybiAyO1xyXG4gICAgY2FzZSBcIk1hcnpvXCI6XHJcbiAgICAgIHJldHVybiAzO1xyXG4gICAgY2FzZSBcIkFicmlsXCI6XHJcbiAgICAgIHJldHVybiA0O1xyXG4gICAgY2FzZSBcIk1heW9cIjpcclxuICAgICAgcmV0dXJuIDU7XHJcbiAgICBjYXNlIFwiSnVuaW9cIjpcclxuICAgICAgcmV0dXJuIDY7XHJcbiAgICBjYXNlIFwiSnVsaW9cIjpcclxuICAgICAgcmV0dXJuIDc7XHJcbiAgICBjYXNlIFwiQWdvc3RvXCI6XHJcbiAgICAgIHJldHVybiA4O1xyXG4gICAgY2FzZSBcIlNlcHRpZW1icmVcIjpcclxuICAgICAgcmV0dXJuIDk7XHJcbiAgICBjYXNlIFwiT2N0dWJyZVwiOlxyXG4gICAgICByZXR1cm4gMTA7XHJcbiAgICBjYXNlIFwiTm92aWVtYnJlXCI6XHJcbiAgICAgIHJldHVybiAxMTtcclxuICAgIGNhc2UgXCJEaWNpZW1icmVcIjpcclxuICAgICAgcmV0dXJuIDEyO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbnZlcnREYXRlID0gKGRhdGUpID0+IHtcclxuICBjb25zdCBjb252ZXJ0RGF0ZSA9IFN0cmluZyh7IC4uLmRhdGUgfS5fZCkuc3BsaXQoXCIgXCIpO1xyXG4gIGNvbnN0IGRhdGVzID0ge1xyXG4gICAgc2VtYW5hOiBjb252ZXJ0aXJTZW1hbmEoY29udmVydERhdGVbMF0pLFxyXG4gICAgbWVzOiBjb252ZXJ0aXJNZXMoY29udmVydERhdGVbMV0pLFxyXG4gICAgZGlhOiBjb252ZXJ0RGF0ZVsyXSxcclxuICAgIGHDsW86IGNvbnZlcnREYXRlWzNdLFxyXG4gICAgaG9yYTogY29udmVydERhdGVbNF0sXHJcbiAgfTtcclxuICByZXR1cm4gZGF0ZXM7XHJcbn07XHJcblxyXG5jb25zdCBjb252ZXJ0aXJJbWFnZW4gPSAoZmlsZSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybWRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSk7XHJcbiAgcmV0dXJuIGZvcm1kYXRhO1xyXG59O1xyXG5cclxuY29uc3QgdmFsaWRhckZlY2hhID0gKGZlY2hhSSwgZmVjaGFGKSA9PiB7XHJcbiAgaWYgKHBhcnNlSW50KGZlY2hhRi5hw7FvKSA+IHBhcnNlSW50KGZlY2hhSS5hw7FvKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmIChjb252ZXJ0aXJNZXNOdW0oZmVjaGFGLm1lcykgPiBjb252ZXJ0aXJNZXNOdW0oZmVjaGFJLm1lcykpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAocGFyc2VJbnQoZmVjaGFGLmRpYSkgPiBwYXJzZUludChmZWNoYUkuZGlhKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHBhcnNlSW50KGZlY2hhRi5ob3JhLnN1YnN0cigwLCAyKSkgPiBwYXJzZUludChmZWNoYUkuaG9yYS5zdWJzdHIoMCwgMikpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgcGFyc2VJbnQoZmVjaGFGLmhvcmEuc3Vic3RyKDMsIDIpKSA+IHBhcnNlSW50KGZlY2hhSS5ob3JhLnN1YnN0cigzLCAyKSlcclxuICApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBwYXJzZUludChmZWNoYUYuaG9yYS5zdWJzdHIoNiwgMikpID4gcGFyc2VJbnQoZmVjaGFJLmhvcmEuc3Vic3RyKDYsIDIpKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGFncmVnYXIwLFxyXG4gIHNlbWFuYUFjLFxyXG4gIGNvbnZlcnRpck1lcyxcclxuICBjaWVycmUsXHJcbiAgaW5pY2lvLFxyXG4gIGNvbnZlcnREYXRlLFxyXG4gIGNvbnZlcnRpckltYWdlbixcclxuICBmZWNoYUFjdHVhbCxcclxuICBmZWNoYU1hczEsXHJcbiAgdmFsaWRhckZlY2hhLFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgQ2FyZERhdGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRGF0ZXMvY2FyZERhdGVcIjtcclxuaW1wb3J0IHtcclxuICBpbmljaW8sXHJcbiAgY2llcnJlLFxyXG4gIGNvbnZlcnREYXRlLFxyXG4gIGNvbnZlcnRpckltYWdlbixcclxuICBmZWNoYUFjdHVhbCxcclxuICBmZWNoYU1hczEsXHJcbiAgdmFsaWRhckZlY2hhLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RhdGVzL21hbmVqb0ZlY2hhc1wiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXJFdmVudG9zKCkge1xyXG4gIC8vRXN0YWRvIGRlIGxhIGltYWdlbiBjb21vIFVSTCBwYXJhIG1vc3RyYXJsYVxyXG4gIGNvbnN0IFtpbWFnZW4sIHNldEltYWdlbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvL0VzdGFkbyBkZSBsYSBpbWFnZW4gZm9ybWF0ZWFkYSBwYXJhIGVudmlhcmxhXHJcbiAgY29uc3QgW2Zvcm1JbWFnZW4sIHNldEZvcm1JbWFnZW5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy9Fc3RhZG8gZGUgZmVjaGEgdGFudG8gZm9ybWF0ZWFkYSBjb21vIHBhcmEgbGFzIENhcmRzXHJcbiAgY29uc3QgW2ZlY2hhLCBzZXRGZWNoYV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbmljaW86IHsgLi4uaW5pY2lvIH0sXHJcbiAgICBpbmljaW9Gb3JtdDogZmVjaGFBY3R1YWwsXHJcbiAgICBjaWVycmU6IHsgLi4uY2llcnJlIH0sXHJcbiAgICBjaWVycmVGb3JtdDogZmVjaGFNYXMxLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIC8vRXN0YWRvIGRlbCBpbnB1dCBkZSBmZWNoYSBzb2xvIHBhcmEgbW9zdHJhcmxvXHJcbiAgY29uc3QgW2lucHV0RmVjaGEsIHNldElucHV0RmVjaGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaW5pY2lvOiBudWxsLFxyXG4gICAgY2llcnJlOiBudWxsLFxyXG4gIH0pO1xyXG4gIC8vSG9vayBGb3JtIGNvbiBlbCBlc3RhZG8gZGUgdG9kb3MgbG9zIGlucHV0cyBkZWwgZm9ybXVsYXJpb1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyLFxyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgcmVzZXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuICAvL1NldFZhbHVlIGRlIGxhIGZlY2hhIGRlIGluY2lvLCB0YW50byBsYSBkZWwgaW5wdXQgY29tbyBwYXJhIGxhIENhcmRcclxuICBjb25zdCBvbkNoYW5nZUluaWNpbyA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlcyA9IGNvbnZlcnREYXRlKGRhdGUpO1xyXG5cclxuICAgIHNldEZlY2hhKHtcclxuICAgICAgLi4uZmVjaGEsXHJcbiAgICAgIGluaWNpbzogZGF0ZSA/IHsgLi4uZGF0ZXMgfSA6IGluaWNpbyxcclxuICAgICAgaW5pY2lvRm9ybXQ6IGRhdGUgPyBkYXRlLl9kIDogZmVjaGFBY3R1YWwsXHJcbiAgICB9KTtcclxuICAgIHNldElucHV0RmVjaGEoe1xyXG4gICAgICAuLi5pbnB1dEZlY2hhLFxyXG4gICAgICBpbmljaW86IGRhdGUgPyBkYXRlIDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgLy9TZXRWYWx1ZSBkZSBsYSBmZWNoYSBkZSBjaWVycmUsIHRhbnRvIGxhIGRlbCBpbnB1dCBjb21vIHBhcmEgbGEgQ2FyZFxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2llcnJlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IGRhdGVzID0gY29udmVydERhdGUoZGF0ZSk7XHJcbiAgICBzZXRGZWNoYSh7XHJcbiAgICAgIC4uLmZlY2hhLFxyXG4gICAgICBjaWVycmU6IGRhdGUgPyB7IC4uLmRhdGVzIH0gOiBjaWVycmUsXHJcbiAgICAgIGNpZXJyZUZvcm10OiBkYXRlID8gZGF0ZS5fZCA6IGZlY2hhTWFzMSxcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXRGZWNoYSh7XHJcbiAgICAgIC4uLmlucHV0RmVjaGEsXHJcbiAgICAgIGNpZXJyZTogZGF0ZSA/IGRhdGUgOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9TZSB2YWxpZGEgdWUgbGEgZmVjaGEgaW5pY2lhbCBzZWEgbWVub3IgdWUgbGEgZmluYWxcclxuICBjb25zdCB2YWxGZWNoYSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZhbGlkYSA9IHZhbGlkYXJGZWNoYShmZWNoYS5pbmljaW8sIGZlY2hhLmNpZXJyZSk7XHJcbiAgICBpZiAoIXZhbGlkYSkge1xyXG4gICAgICBzZXRGZWNoYSh7XHJcbiAgICAgICAgLi4uZmVjaGEsXHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRGZWNoYSh7XHJcbiAgICAgICAgLi4uZmVjaGEsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9FbnZpbyBkZSBkYXRvcyBkZWwgZXZlbnRvXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSwgZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhID0gdmFsRmVjaGEoKTtcclxuICAgIGlmICghdmFsaWRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtZGF0YSA9IGNvbnZlcnRpckltYWdlbihmb3JtSW1hZ2VuKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZEltYWdlbiA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2ltYWdlblwiLCBmb3JtZGF0YSk7XHJcblxyXG4gICAgICBpZiAoaWRJbWFnZW4uc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgdGl0dWxvOiBkYXRhLnRpdHVsbyxcclxuICAgICAgICAgIGZlY2hhX2luaWNpYWw6IGZlY2hhLmluaWNpb0Zvcm10LFxyXG4gICAgICAgICAgZmVjaGFfZmluYWw6IGZlY2hhLmNpZXJyZUZvcm10LFxyXG4gICAgICAgICAgbnVtX2JvbGV0YXM6IHBhcnNlSW50KGRhdGEuYm9sZXRhcyksXHJcbiAgICAgICAgICBhZm9ybzogcGFyc2VJbnQoZGF0YS5hZm9ybyksXHJcbiAgICAgICAgICBkZXNjcmlwY2lvbjogZGF0YS5kZXNjcmlwY2lvbixcclxuICAgICAgICAgIGx1Z2FyOiBkYXRhLmx1Z2FyLFxyXG4gICAgICAgICAgYW5maXRyaW9uOiBkYXRhLmFuZml0cmlvbixcclxuICAgICAgICAgIHRlbWF0aWNhOiBkYXRhLnRlbWF0aWNhLFxyXG4gICAgICAgICAgZGlyZWNjaW9uOiBkYXRhLmRpcmVjY2lvbixcclxuICAgICAgICAgIGlkX2ltYWdlbjogaWRJbWFnZW4uZGF0YS5pZF9pbWFnZW4sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvZXZlbnRvXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICBhbGVydChyZXNwdWVzdGEuZGF0YSk7XHJcbiAgICAgICAgcmVzZXRWYWx1ZXMoZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJObyBzZSBwdWRvIGVudmlhciBsYSBpbWFnZW4sIGludGVudGUgZGUgbnVldm9cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgYWxlcnQoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvL1Jlc2V0IGRlIHRvZG9zIGxvcyBkYXRvc1xyXG4gIGNvbnN0IHJlc2V0VmFsdWVzID0gKGUpID0+IHtcclxuICAgIHNldEltYWdlbihudWxsKTtcclxuICAgIHNldEZvcm1JbWFnZW4obnVsbCk7XHJcbiAgICBzZXRGZWNoYSh7XHJcbiAgICAgIC4uLmZlY2hhLFxyXG4gICAgICBpbmljaW86IHsgLi4uaW5pY2lvIH0sXHJcbiAgICAgIGluaWNpb0Zvcm10OiBmZWNoYUFjdHVhbCxcclxuICAgICAgY2llcnJlOiB7IC4uLmNpZXJyZSB9LFxyXG4gICAgICBjaWVycmVGb3JtdDogZmVjaGFNYXMxLFxyXG4gICAgfSk7XHJcbiAgICBzZXRJbnB1dEZlY2hhKHtcclxuICAgICAgaW5pY2lvOiBudWxsLFxyXG4gICAgICBjaWVycmU6IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXJFVl9Db250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXR1bG9cIj5cclxuICAgICAgICA8VGl0bGUgbGV2ZWw9ezJ9PkNyZWFyIEV2ZW50b3M8L1RpdGxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5kXCI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZXZlbnRvc1wiXHJcbiAgICAgICAgICBpZD1cImZvcm1FdmVudG9cIlxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXR1bG8gZGVsIEV2ZW50b1wiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInRpdHVsb1wiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtlcnJvcnMudGl0dWxvICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhbkVycm9yIGVycm9yVGl0bGVcIj5cclxuICAgICAgICAgICAgICBFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZXZlbnQtaHJcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250LW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250LW9wdGlvbnMtaW1nXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZW4gfHxcclxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy81MC9mNi8wYS81MGY2MGE2ZWI5OTY2ZjBjYmJmYThlZjA1MmIwZDNlZC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlbiBkZWwgRXZlbnRvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRGb3JtSW1hZ2VuKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VuKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy1yaWdodC1oMyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvckRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs0fT5JbmljaW88L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERhdGUgey4uLmZlY2hhLmluaWNpb30gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVjaGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWNoYUluaWNpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW5pY2lvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZlY2hhLmluaWNpb31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUluaWNpb31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYWNlLXBpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPVwiZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGZWNoYSBJbmNpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2ZlY2hhLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhbkVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTGEgZmVjaGEgaW5pY2lhbCBkZWJlIHNlciBhbnRlcyBkZSBsYSBkZSBjaWVycmVcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvckRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs0fT5DaWVycmU8L1RpdGxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERhdGUgey4uLmZlY2hhLmNpZXJyZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVjaGFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWNoYUNpZXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2llcnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dEZlY2hhLmNpZXJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNpZXJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmVjaGEgQ2llcnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9XCJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXszfT5JbmZvcm1hY2nDs24gR2VuZXJhbDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3ItaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRzLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0cy1pbmZvLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImx1Z2FyXCI+e1wiTHVnYXI6ICgqKVwifTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsdWdhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsdWdhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0cy1FdmVudG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibHVnYXJcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmx1Z2FyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhbkVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3Jpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZW1hdGljYVwiPntcIlRlbWF0aWNhOiAoKilcIn08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVtYXRpY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVtYXRpY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dHMtRXZlbnRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInRlbWF0aWNhXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy50ZW1hdGljYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5FcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlyZWNjaW9uXCI+e1wiRGlyZWNjacOzbjogXCJ9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRpcmVjY2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXJlY2Npb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dHMtRXZlbnRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRpcmVjY2lvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dHMtaW5mby1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFmb3JvXCI+e1wiQWZvcm86ICgqKVwifTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZm9yb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0cy1FdmVudG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZm9yb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImFmb3JvXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5hZm9ybyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5FcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGUgY2FtcG8gZXMgb2JsaWdhdG9yaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYm9sZXRhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJCb2xldGFzIFBlcm1pdGlkYXM6ICgqKVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJvbGV0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dHMtRXZlbnRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYm9sZXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImJvbGV0YXNcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmJvbGV0YXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuRXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RlIGNhbXBvIGVzIG9ibGlnYXRvcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbmZpdHJpb25cIj57XCJBbmZpdHJpw7NuOiBcIn08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW5maXRyaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFuZml0cmlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0cy1FdmVudG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYW5maXRyaW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXBjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXBjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJkZXNjcmlwY2lvblwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tY3JlYXJFdlwiXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBmb3JtPVwiZm9ybUV2ZW50b1wiXHJcbiAgICAgID5cclxuICAgICAgICBDcmVhciBFdmVudG9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=