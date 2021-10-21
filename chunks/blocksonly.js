var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["blocksonly"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/blocks-only.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/blocks-only.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".blocks-only_controls_2GEvs {\\n    position: absolute;\\n    z-index: 2;\\n    top: 10px;\\n    right: 15px;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"controls\": \"blocks-only_controls_2GEvs\"\n};\n\n//# sourceURL=webpack://GUI/./src/playground/blocks-only.css?./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss");

/***/ }),

/***/ "./src/playground/blocks-only.css":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./blocks-only.css */ \"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/blocks-only.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://GUI/./src/playground/blocks-only.css?");

/***/ }),

/***/ "./src/playground/blocks-only.jsx":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.jsx ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/controls.jsx */ \"./src/containers/controls.jsx\");\n/* harmony import */ var _containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/blocks.jsx */ \"./src/containers/blocks.jsx\");\n/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/gui.jsx */ \"./src/containers/gui.jsx\");\n/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ \"./src/lib/hash-parser-hoc.jsx\");\n/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ \"./src/lib/app-state-hoc.jsx\");\n/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks-only.css */ \"./src/playground/blocks-only.css\");\n/* harmony import */ var _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_only_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    vm: state.scratchGui.vm\n  };\n};\n\nvar VMBlocks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(_containers_blocks_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar VMControls = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(_containers_controls_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nvar BlocksOnly = function BlocksOnly(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VMBlocks, {\n    grow: 1,\n    options: {\n      media: \"static/blocks-media/\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VMControls, {\n    className: _blocks_only_css__WEBPACK_IMPORTED_MODULE_8___default.a.controls\n  }));\n};\n\nvar App = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(BlocksOnly));\nvar appTarget = document.createElement('div');\ndocument.body.appendChild(appTarget);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), appTarget);\n\n//# sourceURL=webpack://GUI/./src/playground/blocks-only.jsx?");

/***/ })

},[["./src/playground/blocks-only.jsx","lib.min"]]]);