(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("UserAgent", [], factory);
	else if(typeof exports === 'object')
		exports["UserAgent"] = factory();
	else
		root["UserAgent"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nvar isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ \"./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js\");\n\nfunction _construct(Parent, args, Class) {\n  if (isNativeReflectConstruct()) {\n    module.exports = _construct = Reflect.construct;\n  } else {\n    module.exports = _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n      var Constructor = Function.bind.apply(Parent, a);\n      var instance = new Constructor();\n      if (Class) setPrototypeOf(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\nmodule.exports = _construct;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/construct.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nmodule.exports = _isNativeReflectConstruct;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(n);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://UserAgent/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/descriptors.ts":
/*!****************************!*\
  !*** ./src/descriptors.ts ***!
  \****************************/
/*! exports provided: SyncDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SyncDescriptor\", function() { return SyncDescriptor; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* 用于包裹构造函数，延迟初始化类 */\nvar SyncDescriptor = function SyncDescriptor(ctor) {\n  var staticArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var supportsDelayedInstantiation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SyncDescriptor);\n\n  this.ctor = ctor;\n  this.staticArguments = staticArguments;\n  this.supportsDelayedInstantiation = supportsDelayedInstantiation;\n};\n\n//# sourceURL=webpack://UserAgent/./src/descriptors.ts?");

/***/ }),

/***/ "./src/graph.ts":
/*!**********************!*\
  !*** ./src/graph.ts ***!
  \**********************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graph\", function() { return Graph; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction newNode(data) {\n  return {\n    data: data,\n    incoming: Object.create(null),\n    outcoming: Object.create(null)\n  };\n}\n\nvar Graph = /*#__PURE__*/function () {\n  function Graph(keyFn) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Graph);\n\n    this.keyFn = keyFn;\n    this.nodes = Object.create(null);\n  }\n  /* 获取图结构的叶子节点 */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Graph, [{\n    key: \"root\",\n    value: function root() {\n      var ret = [];\n\n      for (var nodeKey in this.nodes) {\n        if (Object.prototype.hasOwnProperty.call(this.nodes, nodeKey)) {\n          var nodeElement = this.nodes[nodeKey];\n\n          if (Object.getOwnPropertyNames(nodeElement.outcoming).length === 0) {\n            ret.push(nodeElement);\n          }\n        }\n      }\n\n      return ret;\n    }\n    /* 从图结构中获取节点，如果节点不存在就创建一个并插入图中 */\n\n  }, {\n    key: \"lookupOrInsertNode\",\n    value: function lookupOrInsertNode(data) {\n      var key = this.keyFn(data);\n      var node = this.nodes[key];\n\n      if (!node) {\n        node = newNode(data);\n        this.nodes[key] = node;\n      }\n\n      return node;\n    }\n    /* 在图结构中插入一条边 */\n\n  }, {\n    key: \"insertEdge\",\n    value: function insertEdge(from, to) {\n      var fromNode = this.lookupOrInsertNode(from);\n      var toNode = this.lookupOrInsertNode(to);\n      var fromKey = this.keyFn(from);\n      var toKey = this.keyFn(to);\n      fromNode.outcoming[toKey] = toNode;\n      toNode.incoming[fromKey] = fromNode;\n    }\n    /* 在图结构中移除一个节点 */\n\n  }, {\n    key: \"removeNode\",\n    value: function removeNode(data) {\n      var delKey = this.keyFn(data);\n      delete this.nodes[delKey];\n\n      for (var nodeKey in this.nodes) {\n        if (Object.prototype.hasOwnProperty.call(this.nodes, nodeKey)) {\n          var nodeElement = this.nodes[nodeKey];\n          delete nodeElement.outcoming[delKey];\n          delete nodeElement.incoming[delKey];\n        }\n      }\n    }\n    /* 在图结构中查询节点 */\n\n  }, {\n    key: \"lookup\",\n    value: function lookup(data) {\n      return this.nodes[this.keyFn(data)];\n    }\n    /* 判断图结构是否为空 */\n\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      return Object.keys(this.nodes).length === 0;\n    }\n  }]);\n\n  return Graph;\n}();\n\n//# sourceURL=webpack://UserAgent/./src/graph.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instantiation */ \"./src/instantiation.ts\");\n/* harmony import */ var _instantiationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instantiationService */ \"./src/instantiationService.ts\");\n/* harmony import */ var _serviceCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceCollection */ \"./src/serviceCollection.ts\");\n\n\n\n\nvar __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {\n  var c = arguments.length,\n      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n      d;\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n  }\n  return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nvar __param = undefined && undefined.__param || function (paramIndex, decorator) {\n  return function (target, key) {\n    decorator(target, key, paramIndex);\n  };\n};\n\n\n\n\n\nvar A = /*#__PURE__*/function () {\n  function A() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, A);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(A, [{\n    key: \"echo\",\n    value: function echo() {\n      return 'A';\n    }\n  }]);\n\n  return A;\n}();\n\nvar B = /*#__PURE__*/function () {\n  function B() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, B);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(B, [{\n    key: \"echo\",\n    value: function echo() {\n      return 'B';\n    }\n  }]);\n\n  return B;\n}(); // 装饰器\n\n\nvar serviceA = Object(_instantiation__WEBPACK_IMPORTED_MODULE_3__[\"createDecorator\"])('A');\nvar serviceB = Object(_instantiation__WEBPACK_IMPORTED_MODULE_3__[\"createDecorator\"])('B');\n\nvar C = /*#__PURE__*/function () {\n  function C(a, b) {\n    var leftText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n    var rightText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, C);\n\n    this.a = a;\n    this.b = b;\n    this.leftText = leftText;\n    this.rightText = rightText;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(C, [{\n    key: \"echo\",\n    value: function echo() {\n      return \"\".concat(this.a.echo()).concat(this.b.echo()).concat(this.leftText).concat(this.rightText);\n    }\n  }]);\n\n  return C;\n}();\n\nC = __decorate([__param(0, serviceA), __param(1, serviceB)], C);\nvar aInstance = new A();\nvar bInstance = new B();\nvar svrsCollection = new _serviceCollection__WEBPACK_IMPORTED_MODULE_5__[\"ServiceCollection\"]();\nsvrsCollection.set(serviceA, aInstance);\nsvrsCollection.set(serviceB, bInstance);\nvar instantiationService = new _instantiationService__WEBPACK_IMPORTED_MODULE_4__[\"InstantiationService\"](svrsCollection);\nvar cInstance = instantiationService.createInstance(C, 'L', 'R');\nconsole.log(instantiationService);\nconsole.log(cInstance);\nvar echoText = cInstance.echo();\nconsole.log(echoText);\ninstantiationService.invokeFunction(function (accessor) {\n  console.log(accessor);\n  var bInstance2 = accessor.get(serviceA);\n});\n\n//# sourceURL=webpack://UserAgent/./src/index.ts?");

/***/ }),

/***/ "./src/instantiation.ts":
/*!******************************!*\
  !*** ./src/instantiation.ts ***!
  \******************************/
/*! exports provided: _util, storeServiceDependency, createDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_util\", function() { return _util; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storeServiceDependency\", function() { return storeServiceDependency; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDecorator\", function() { return createDecorator; });\n// 用于获取target的$di$dependencies属性存储的依赖关系\nvar _util;\n\n(function (_util) {\n  _util.serviceIds = new Map();\n  _util.DI_TARGET = '$di$target';\n  _util.DI_DEPENDENCIES = '$di$dependencies';\n\n  function getServiceDependencies(ctor) {\n    return ctor[_util.DI_DEPENDENCIES] || [];\n  }\n\n  _util.getServiceDependencies = getServiceDependencies;\n})(_util || (_util = {})); // 用于在target的$di$dependencies属性存储依赖关系\n\n\nfunction storeServiceDependency(id, target, index, optional) {\n  if (target[_util.DI_TARGET] === target) {\n    target[_util.DI_DEPENDENCIES].push({\n      id: id,\n      index: index,\n      optional: optional\n    });\n  } else {\n    target[_util.DI_TARGET] = target;\n    target[_util.DI_DEPENDENCIES] = [{\n      id: id,\n      index: index,\n      optional: optional\n    }];\n  }\n} // 创建decorator\n\nfunction createDecorator(serviceId) {\n  if (_util.serviceIds.has(serviceId)) {\n    return _util.serviceIds.get(serviceId);\n  }\n\n  var id = function serviceIdentifier(target, key, index) {\n    if (arguments.length !== 3) {\n      throw new Error('@IServiceName-decorator can only be used to decorate a parameter');\n    }\n\n    storeServiceDependency(id, target, index, false);\n  };\n\n  id.toString = function () {\n    return serviceId;\n  };\n\n  _util.serviceIds.set(serviceId, id);\n\n  return id;\n}\n\n//# sourceURL=webpack://UserAgent/./src/instantiation.ts?");

/***/ }),

/***/ "./src/instantiationService.ts":
/*!*************************************!*\
  !*** ./src/instantiationService.ts ***!
  \*************************************/
/*! exports provided: IdleValue, InstantiationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IdleValue\", function() { return IdleValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InstantiationService\", function() { return InstantiationService; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ \"./node_modules/@babel/runtime/helpers/construct.js\");\n/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph */ \"./src/graph.ts\");\n/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instantiation */ \"./src/instantiation.ts\");\n/* harmony import */ var _serviceCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceCollection */ \"./src/serviceCollection.ts\");\n/* harmony import */ var _descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./descriptors */ \"./src/descriptors.ts\");\n\n\n\n\n\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar IdleValue = /*#__PURE__*/function () {\n  function IdleValue(executor) {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, IdleValue);\n\n    this.didRun = false;\n\n    this.executor = function () {\n      try {\n        _this.value = executor();\n      } catch (error) {\n        _this.error = error;\n      } finally {\n        _this.didRun = true;\n      }\n    };\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(IdleValue, [{\n    key: \"getValue\",\n    value: function getValue() {\n      if (!this.didRun) {\n        this.executor();\n      }\n\n      if (this.error) {\n        throw this.error;\n      }\n\n      return this.value;\n    }\n  }]);\n\n  return IdleValue;\n}();\nvar InstantiationService = /*#__PURE__*/function () {\n  function InstantiationService() {\n    var serices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _serviceCollection__WEBPACK_IMPORTED_MODULE_6__[\"ServiceCollection\"]();\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, InstantiationService);\n\n    this.services = serices;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(InstantiationService, [{\n    key: \"createInstance\",\n    value: function createInstance(ctorOrDescriptor) {\n      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        rest[_key - 1] = arguments[_key];\n      }\n\n      var result = this.createCtorInstance(ctorOrDescriptor, rest);\n      return result;\n    }\n  }, {\n    key: \"invokeFunction\",\n    value: function invokeFunction(fn) {\n      var _this2 = this;\n\n      var done = false;\n\n      try {\n        var accessor = {\n          get: function get(id) {\n            if (done) {\n              throw new Error('service accessor is only valid during the invocation of its target method');\n            }\n\n            var result = _this2.getOrCreateServiceInstance(id);\n\n            if (!result) {\n              throw new Error(\"[invokeFunction] unknown service '\".concat(id, \"'\"));\n            }\n\n            return result;\n          }\n        };\n\n        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n          args[_key2 - 1] = arguments[_key2];\n        }\n\n        return fn.apply(void 0, [accessor].concat(args));\n      } finally {\n        done = true;\n      }\n    }\n  }, {\n    key: \"createCtorInstance\",\n    value: function createCtorInstance(ctor) {\n      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n      var serviceDependencies = _instantiation__WEBPACK_IMPORTED_MODULE_5__[\"_util\"].getServiceDependencies(ctor).sort(function (a, b) {\n        return a.index - b.index;\n      });\n\n      var serviceArgs = [];\n\n      var _iterator = _createForOfIteratorHelper(serviceDependencies),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var dependency = _step.value;\n          var serviceInstance = this.getOrCreateServiceInstance(dependency.id);\n          serviceArgs.push(serviceInstance);\n        } // eslint-disable-next-line new-cap\n\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(ctor, [].concat(serviceArgs, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)));\n    }\n  }, {\n    key: \"getOrCreateServiceInstance\",\n    value: function getOrCreateServiceInstance(id) {\n      var thing = this.getServiceInstanceOrDescriptor(id);\n\n      if (thing instanceof _descriptors__WEBPACK_IMPORTED_MODULE_7__[\"SyncDescriptor\"]) {\n        return this.createAndCacheServiceInstance(id, thing);\n      }\n\n      return thing;\n    }\n  }, {\n    key: \"getServiceInstanceOrDescriptor\",\n    value: function getServiceInstanceOrDescriptor(id) {\n      var instanceOrDesc = this.services.get(id);\n\n      if (!instanceOrDesc) {\n        throw new Error(\"service \".concat(id.toString(), \" is not in collection\"));\n      }\n\n      return instanceOrDesc;\n    }\n  }, {\n    key: \"createAndCacheServiceInstance\",\n    value: function createAndCacheServiceInstance(id, desc) {\n      var graph = new _graph__WEBPACK_IMPORTED_MODULE_4__[\"Graph\"](function (data) {\n        return data.id.toString();\n      });\n      var stack = [{\n        id: id,\n        desc: desc\n      }];\n\n      while (stack.length) {\n        var item = stack.pop();\n        graph.lookupOrInsertNode(item);\n\n        var _iterator2 = _createForOfIteratorHelper(_instantiation__WEBPACK_IMPORTED_MODULE_5__[\"_util\"].getServiceDependencies(item.desc.ctor)),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var dependency = _step2.value;\n            var instanceOrDesc = this.getServiceInstanceOrDescriptor(dependency.id);\n\n            if (instanceOrDesc instanceof _descriptors__WEBPACK_IMPORTED_MODULE_7__[\"SyncDescriptor\"]) {\n              var dItem = {\n                id: dependency.id,\n                desc: instanceOrDesc\n              };\n              graph.insertEdge(item, dItem);\n              stack.push(dItem);\n            }\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n      /* eslint-disable-next-line no-constant-condition */\n\n\n      while (true) {\n        var roots = graph.root();\n\n        if (roots.length === 0) {\n          break;\n        }\n\n        var _iterator3 = _createForOfIteratorHelper(roots),\n            _step3;\n\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var data = _step3.value.data;\n\n            var _service = this.createServiceInstance(data.id, data.desc.ctor, data.desc.staticArguments, data.desc.supportsDelayedInstantiation);\n\n            this.services.set(data.id, _service);\n            graph.removeNode(data);\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n      }\n\n      var service = this.getOrCreateServiceInstance(id);\n      return service;\n    }\n  }, {\n    key: \"createServiceInstance\",\n    value: function createServiceInstance(id, ctor, args, supportsDelayedInstantiation) {\n      var _this3 = this;\n\n      if (!(this.services.get(id) instanceof _descriptors__WEBPACK_IMPORTED_MODULE_7__[\"SyncDescriptor\"])) {\n        throw Error(\"illegalState - create UNKNOW service instance \".concat(id.toString()));\n      }\n\n      if (!supportsDelayedInstantiation) {\n        return this.createCtorInstance(ctor, args);\n      }\n\n      var idleObj = new IdleValue(function () {\n        return _this3.createCtorInstance(ctor, args);\n      });\n      return new Proxy(Object.create(null), {\n        get: function get(target, key) {\n          if (key in target) {\n            return target[key];\n          }\n\n          var obj = idleObj.getValue();\n          var prop = obj[key];\n\n          if (typeof prop === 'function') {\n            var bindProp = prop.bind(obj);\n            target[key] = bindProp;\n            return bindProp;\n          }\n\n          target[key] = prop;\n          return prop;\n        },\n        set: function set(target, key, value) {\n          var obj = idleObj.getValue();\n          obj[key] = value;\n          return true;\n        }\n      });\n    }\n  }]);\n\n  return InstantiationService;\n}();\n\n//# sourceURL=webpack://UserAgent/./src/instantiationService.ts?");

/***/ }),

/***/ "./src/serviceCollection.ts":
/*!**********************************!*\
  !*** ./src/serviceCollection.ts ***!
  \**********************************/
/*! exports provided: ServiceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceCollection\", function() { return ServiceCollection; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar ServiceCollection = /*#__PURE__*/function () {\n  function ServiceCollection() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ServiceCollection);\n\n    this.entries = new Map();\n\n    for (var _len = arguments.length, entries = new Array(_len), _key = 0; _key < _len; _key++) {\n      entries[_key] = arguments[_key];\n    }\n\n    for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {\n      var _entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_entries[_i], 2),\n          id = _entries$_i[0],\n          service = _entries$_i[1];\n\n      this.set(id, service);\n    }\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ServiceCollection, [{\n    key: \"set\",\n    value: function set(id, instanceOrDescriptor) {\n      var result = this.entries.get(id);\n      this.entries.set(id, instanceOrDescriptor);\n      return result;\n    }\n  }, {\n    key: \"has\",\n    value: function has(id) {\n      return this.entries.has(id);\n    }\n  }, {\n    key: \"get\",\n    value: function get(id) {\n      return this.entries.get(id);\n    }\n  }, {\n    key: \"forEach\",\n    value: function forEach(callback) {\n      this.entries.forEach(function (value, key) {\n        callback(key, value);\n      });\n    }\n  }]);\n\n  return ServiceCollection;\n}();\n\n//# sourceURL=webpack://UserAgent/./src/serviceCollection.ts?");

/***/ })

/******/ });
});