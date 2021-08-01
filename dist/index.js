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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/descriptors.ts":
/*!****************************!*\
  !*** ./src/descriptors.ts ***!
  \****************************/
/*! exports provided: SyncDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncDescriptor", function() { return SyncDescriptor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


/* 用于包裹构造函数，延迟初始化类 */
var SyncDescriptor = function SyncDescriptor(ctor) {
  var staticArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var supportsDelayedInstantiation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SyncDescriptor);

  this.ctor = ctor;
  this.staticArguments = staticArguments;
  this.supportsDelayedInstantiation = supportsDelayedInstantiation;
};

/***/ }),

/***/ "./src/graph.ts":
/*!**********************!*\
  !*** ./src/graph.ts ***!
  \**********************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



function newNode(data) {
  return {
    data: data,
    incoming: Object.create(null),
    outcoming: Object.create(null)
  };
}

var Graph = /*#__PURE__*/function () {
  function Graph(keyFn) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Graph);

    this.keyFn = keyFn;
    this.nodes = Object.create(null);
  }
  /* 获取图结构的叶子节点 */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Graph, [{
    key: "root",
    value: function root() {
      var ret = [];

      for (var nodeKey in this.nodes) {
        if (Object.prototype.hasOwnProperty.call(this.nodes, nodeKey)) {
          var nodeElement = this.nodes[nodeKey];

          if (Object.getOwnPropertyNames(nodeElement.outcoming).length === 0) {
            ret.push(nodeElement);
          }
        }
      }

      return ret;
    }
    /* 从图结构中获取节点，如果节点不存在就创建一个并插入图中 */

  }, {
    key: "lookupOrInsertNode",
    value: function lookupOrInsertNode(data) {
      var key = this.keyFn(data);
      var node = this.nodes[key];

      if (!node) {
        node = newNode(data);
        this.nodes[key] = node;
      }

      return node;
    }
    /* 在图结构中插入一条边 */

  }, {
    key: "insertEdge",
    value: function insertEdge(from, to) {
      var fromNode = this.lookupOrInsertNode(from);
      var toNode = this.lookupOrInsertNode(to);
      var fromKey = this.keyFn(from);
      var toKey = this.keyFn(to);
      fromNode.outcoming[toKey] = toNode;
      toNode.incoming[fromKey] = fromNode;
    }
    /* 在图结构中移除一个节点 */

  }, {
    key: "removeNode",
    value: function removeNode(data) {
      var delKey = this.keyFn(data);
      delete this.nodes[delKey];

      for (var nodeKey in this.nodes) {
        if (Object.prototype.hasOwnProperty.call(this.nodes, nodeKey)) {
          var nodeElement = this.nodes[nodeKey];
          delete nodeElement.outcoming[delKey];
          delete nodeElement.incoming[delKey];
        }
      }
    }
    /* 在图结构中查询节点 */

  }, {
    key: "lookup",
    value: function lookup(data) {
      return this.nodes[this.keyFn(data)];
    }
    /* 判断图结构是否为空 */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return Object.keys(this.nodes).length === 0;
    }
  }]);

  return Graph;
}();

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instantiation */ "./src/instantiation.ts");
/* harmony import */ var _instantiationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instantiationService */ "./src/instantiationService.ts");
/* harmony import */ var _serviceCollection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceCollection */ "./src/serviceCollection.ts");




var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = undefined && undefined.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};





var A = /*#__PURE__*/function () {
  function A() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, A);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(A, [{
    key: "echo",
    value: function echo() {
      return 'A';
    }
  }]);

  return A;
}();

var B = /*#__PURE__*/function () {
  function B() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, B);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(B, [{
    key: "echo",
    value: function echo() {
      return 'B';
    }
  }]);

  return B;
}(); // 装饰器


var serviceA = Object(_instantiation__WEBPACK_IMPORTED_MODULE_3__["createDecorator"])('A');
var serviceB = Object(_instantiation__WEBPACK_IMPORTED_MODULE_3__["createDecorator"])('B');

var C = /*#__PURE__*/function () {
  function C(a, b) {
    var leftText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var rightText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, C);

    this.a = a;
    this.b = b;
    this.leftText = leftText;
    this.rightText = rightText;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(C, [{
    key: "echo",
    value: function echo() {
      return "".concat(this.a.echo()).concat(this.b.echo()).concat(this.leftText).concat(this.rightText);
    }
  }]);

  return C;
}();

C = __decorate([__param(0, serviceA), __param(1, serviceB)], C);
var aInstance = new A();
var bInstance = new B();
var svrsCollection = new _serviceCollection__WEBPACK_IMPORTED_MODULE_5__["ServiceCollection"]();
svrsCollection.set(serviceA, aInstance);
svrsCollection.set(serviceB, bInstance);
var instantiationService = new _instantiationService__WEBPACK_IMPORTED_MODULE_4__["InstantiationService"](svrsCollection);
var cInstance = instantiationService.createInstance(C, 'L', 'R');
console.log(instantiationService);
console.log(cInstance);
var echoText = cInstance.echo();
console.log(echoText);
instantiationService.invokeFunction(function (accessor) {
  console.log(accessor);
  var bInstance2 = accessor.get(serviceA);
});

/***/ }),

/***/ "./src/instantiation.ts":
/*!******************************!*\
  !*** ./src/instantiation.ts ***!
  \******************************/
/*! exports provided: _util, storeServiceDependency, createDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_util", function() { return _util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeServiceDependency", function() { return storeServiceDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDecorator", function() { return createDecorator; });
// 用于获取target的$di$dependencies属性存储的依赖关系
var _util;

(function (_util) {
  _util.serviceIds = new Map();
  _util.DI_TARGET = '$di$target';
  _util.DI_DEPENDENCIES = '$di$dependencies'; // 获取 $di$dependencies 依赖

  function getServiceDependencies(ctor) {
    return ctor[_util.DI_DEPENDENCIES] || [];
  }

  _util.getServiceDependencies = getServiceDependencies;
})(_util || (_util = {})); // 用于在target的$di$dependencies属性存储依赖关系


function storeServiceDependency(id, target, index, optional) {
  if (target[_util.DI_TARGET] === target) {
    target[_util.DI_DEPENDENCIES].push({
      id: id,
      index: index,
      optional: optional
    });
  } else {
    target[_util.DI_TARGET] = target;
    target[_util.DI_DEPENDENCIES] = [{
      id: id,
      index: index,
      optional: optional
    }];
  }
} // 创建decorator

function createDecorator(serviceId) {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId);
  }

  var id = function serviceIdentifier(target, key, index) {
    if (arguments.length !== 3) {
      throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
    }

    storeServiceDependency(id, target, index, false);
  };

  id.toString = function () {
    return serviceId;
  };

  _util.serviceIds.set(serviceId, id);

  return id;
}

/***/ }),

/***/ "./src/instantiationService.ts":
/*!*************************************!*\
  !*** ./src/instantiationService.ts ***!
  \*************************************/
/*! exports provided: IdleValue, InstantiationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleValue", function() { return IdleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstantiationService", function() { return InstantiationService; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph */ "./src/graph.ts");
/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instantiation */ "./src/instantiation.ts");
/* harmony import */ var _serviceCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceCollection */ "./src/serviceCollection.ts");
/* harmony import */ var _descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./descriptors */ "./src/descriptors.ts");





function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var IdleValue = /*#__PURE__*/function () {
  function IdleValue(executor) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, IdleValue);

    this.didRun = false;

    this.executor = function () {
      try {
        _this.value = executor();
      } catch (error) {
        _this.error = error;
      } finally {
        _this.didRun = true;
      }
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(IdleValue, [{
    key: "getValue",
    value: function getValue() {
      if (!this.didRun) {
        this.executor();
      }

      if (this.error) {
        throw this.error;
      }

      return this.value;
    }
  }]);

  return IdleValue;
}();
var InstantiationService = /*#__PURE__*/function () {
  function InstantiationService() {
    var serices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _serviceCollection__WEBPACK_IMPORTED_MODULE_6__["ServiceCollection"]();

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, InstantiationService);

    this.services = serices;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(InstantiationService, [{
    key: "createInstance",
    value: function createInstance(ctorOrDescriptor) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      var result = this.createCtorInstance(ctorOrDescriptor, rest);
      return result;
    }
  }, {
    key: "invokeFunction",
    value: function invokeFunction(fn) {
      var _this2 = this;

      var done = false;

      try {
        var accessor = {
          get: function get(id) {
            if (done) {
              throw new Error('service accessor is only valid during the invocation of its target method');
            }

            var result = _this2.getOrCreateServiceInstance(id);

            if (!result) {
              throw new Error("[invokeFunction] unknown service '".concat(id, "'"));
            }

            return result;
          }
        };

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return fn.apply(void 0, [accessor].concat(args));
      } finally {
        done = true;
      }
    }
  }, {
    key: "createCtorInstance",
    value: function createCtorInstance(ctor) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var serviceDependencies = _instantiation__WEBPACK_IMPORTED_MODULE_5__["_util"].getServiceDependencies(ctor).sort(function (a, b) {
        return a.index - b.index;
      });

      var serviceArgs = [];

      var _iterator = _createForOfIteratorHelper(serviceDependencies),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dependency = _step.value;
          var serviceInstance = this.getOrCreateServiceInstance(dependency.id);
          serviceArgs.push(serviceInstance);
        } // eslint-disable-next-line new-cap

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(ctor, [].concat(serviceArgs, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)));
    }
  }, {
    key: "getOrCreateServiceInstance",
    value: function getOrCreateServiceInstance(id) {
      var thing = this.getServiceInstanceOrDescriptor(id);

      if (thing instanceof _descriptors__WEBPACK_IMPORTED_MODULE_7__["SyncDescriptor"]) {
        return this.createAndCacheServiceInstance(id, thing);
      }

      return thing;
    }
  }, {
    key: "getServiceInstanceOrDescriptor",
    value: function getServiceInstanceOrDescriptor(id) {
      var instanceOrDesc = this.services.get(id);

      if (!instanceOrDesc) {
        throw new Error("service ".concat(id.toString(), " is not in collection"));
      }

      return instanceOrDesc;
    }
  }, {
    key: "createAndCacheServiceInstance",
    value: function createAndCacheServiceInstance(id, desc) {
      var graph = new _graph__WEBPACK_IMPORTED_MODULE_4__["Graph"](function (data) {
        return data.id.toString();
      });
      var stack = [{
        id: id,
        desc: desc
      }];

      while (stack.length) {
        var item = stack.pop();
        graph.lookupOrInsertNode(item);

        var _iterator2 = _createForOfIteratorHelper(_instantiation__WEBPACK_IMPORTED_MODULE_5__["_util"].getServiceDependencies(item.desc.ctor)),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var dependency = _step2.value;
            var instanceOrDesc = this.getServiceInstanceOrDescriptor(dependency.id);

            if (instanceOrDesc instanceof _descriptors__WEBPACK_IMPORTED_MODULE_7__["SyncDescriptor"]) {
              var dItem = {
                id: dependency.id,
                desc: instanceOrDesc
              };
              graph.insertEdge(item, dItem);
              stack.push(dItem);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      /* eslint-disable-next-line no-constant-condition */


      while (true) {
        var roots = graph.root();

        if (roots.length === 0) {
          break;
        }

        var _iterator3 = _createForOfIteratorHelper(roots),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var data = _step3.value.data;

            var _service = this.createServiceInstance(data.id, data.desc.ctor, data.desc.staticArguments, data.desc.supportsDelayedInstantiation);

            this.services.set(data.id, _service);
            graph.removeNode(data);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      var service = this.getOrCreateServiceInstance(id);
      return service;
    }
  }, {
    key: "createServiceInstance",
    value: function createServiceInstance(id, ctor, args, supportsDelayedInstantiation) {
      var _this3 = this;

      if (!(this.services.get(id) instanceof _descriptors__WEBPACK_IMPORTED_MODULE_7__["SyncDescriptor"])) {
        throw Error("illegalState - create UNKNOW service instance ".concat(id.toString()));
      }

      if (!supportsDelayedInstantiation) {
        return this.createCtorInstance(ctor, args);
      }

      var idleObj = new IdleValue(function () {
        return _this3.createCtorInstance(ctor, args);
      });
      return new Proxy(Object.create(null), {
        get: function get(target, key) {
          if (key in target) {
            return target[key];
          }

          var obj = idleObj.getValue();
          var prop = obj[key];

          if (typeof prop === 'function') {
            var bindProp = prop.bind(obj);
            target[key] = bindProp;
            return bindProp;
          }

          target[key] = prop;
          return prop;
        },
        set: function set(target, key, value) {
          var obj = idleObj.getValue();
          obj[key] = value;
          return true;
        }
      });
    }
  }]);

  return InstantiationService;
}();

/***/ }),

/***/ "./src/serviceCollection.ts":
/*!**********************************!*\
  !*** ./src/serviceCollection.ts ***!
  \**********************************/
/*! exports provided: ServiceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCollection", function() { return ServiceCollection; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var ServiceCollection = /*#__PURE__*/function () {
  function ServiceCollection() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ServiceCollection);

    this.entries = new Map();

    for (var _len = arguments.length, entries = new Array(_len), _key = 0; _key < _len; _key++) {
      entries[_key] = arguments[_key];
    }

    for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
      var _entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_entries[_i], 2),
          id = _entries$_i[0],
          service = _entries$_i[1];

      this.set(id, service);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ServiceCollection, [{
    key: "set",
    value: function set(id, instanceOrDescriptor) {
      var result = this.entries.get(id);
      this.entries.set(id, instanceOrDescriptor);
      return result;
    }
  }, {
    key: "has",
    value: function has(id) {
      return this.entries.has(id);
    }
  }, {
    key: "get",
    value: function get(id) {
      return this.entries.get(id);
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.entries.forEach(function (value, key) {
        callback(key, value);
      });
    }
  }]);

  return ServiceCollection;
}();

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map