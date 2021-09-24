(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "B:\\Projekte\\Bernhard_K\xE4ser\\Vitas_Institut\\components\\Layout.js";




const Menue = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "components_Menue_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Menue.js */ "./components/Menue.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Menue.js */ "./components/Menue.js")],
    modules: ["..\\components\\Layout.js -> " + './Menue.js']
  }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "components_Footer_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Footer */ "./components/Footer.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Footer */ "./components/Footer.js")],
    modules: ["..\\components\\Layout.js -> " + './Footer']
  }
});
const StripeContact = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "components_StripeContact_js").then(__webpack_require__.bind(__webpack_require__, /*! ./StripeContact */ "./components/StripeContact.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./StripeContact */ "./components/StripeContact.js")],
    modules: ["..\\components\\Layout.js -> " + './StripeContact']
  }
});

const layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Menue, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "B:\\Projekte\\Bernhard_K\xE4ser\\Vitas_Institut\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(function (registration) {
          console.log("Service Worker registration successful with scope: ", registration.scope);
        }, function (err) {
          console.log("Service Worker registration failed: ", err);
        });
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 8
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "@react-icons/all-files/ai/AiOutlineMail":
/*!**********************************************************!*\
  !*** external "@react-icons/all-files/ai/AiOutlineMail" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-icons/all-files/ai/AiOutlineMail");

/***/ }),

/***/ "@react-icons/all-files/gi/GiSmartphone":
/*!*********************************************************!*\
  !*** external "@react-icons/all-files/gi/GiSmartphone" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-icons/all-files/gi/GiSmartphone");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/amp");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFNSDs7QUFFRCxpRUFBZUYsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUU3QkEsdUhBQXFEOzs7Ozs7Ozs7Ozs7QUNBckQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0Ly4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvLi9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0L2V4dGVybmFsIFwiQHJlYWN0LWljb25zL2FsbC1maWxlcy9haS9BaU91dGxpbmVNYWlsXCIiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC9leHRlcm5hbCBcIkByZWFjdC1pY29ucy9hbGwtZmlsZXMvZ2kvR2lTbWFydHBob25lXCIiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC9leHRlcm5hbCBcIm5leHQvYW1wXCIiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUuanNcIiIsIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vdml0YXNpbnN0aXR1dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly92aXRhc2luc3RpdHV0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3ZpdGFzaW5zdGl0dXQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmNvbnN0IE1lbnVlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTWVudWUuanMnKSlcclxuY29uc3QgRm9vdGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vRm9vdGVyJykpXHJcbmNvbnN0IFN0cmlwZUNvbnRhY3QgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9TdHJpcGVDb250YWN0JykpXHJcblxyXG4gXHJcblxyXG5cclxuY29uc3QgbGF5b3V0ID0gKCB7Y2hpbGRyZW59ICkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgIHsvKiA8U3RyaXBlQ29udGFjdCAvPiAqL31cclxuICAgICAgICAgICAgPE1lbnVlIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2NzcydcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zZXJ2aWNlV29ya2VyLmpzXCIpLnRoZW4oXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiBcIiwgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgIDwvTGF5b3V0PiBcclxuICAgICkgXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjdC1pY29ucy9hbGwtZmlsZXMvYWkvQWlPdXRsaW5lTWFpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVhY3QtaWNvbnMvYWxsLWZpbGVzL2dpL0dpU21hcnRwaG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2FtcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImxhenkiLCJkeW5hbWljIiwiTWVudWUiLCJGb290ZXIiLCJTdHJpcGVDb250YWN0IiwibGF5b3V0IiwiY2hpbGRyZW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm5vU1NSIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUyIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiTGF5b3V0IiwidXNlRWZmZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzY29wZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=