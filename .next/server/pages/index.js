module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./pages/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./pages/api/flights/Flights.js":
      /*!**************************************!*\
  !*** ./pages/api/flights/Flights.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./pages/api/flights/index.js");\nvar _jsxFileName = "/Users/ethancr0wn/Google Drive/CodeChrysalis/PROJECTS/travelling-rapid-api/pages/api/flights/Flights.js";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Flights() {\n  return __jsx("div", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, _index__WEBPACK_IMPORTED_MODULE_1__["fetchPlacesData"]);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (Flights);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmxpZ2h0cy9GbGlnaHRzLmpzPzY0YjkiXSwibmFtZXMiOlsiRmxpZ2h0cyIsImZldGNoUGxhY2VzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLHNEQURILENBREY7QUFLRDs7QUFFY0Qsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cy9GbGlnaHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmZXRjaFBsYWNlc0RhdGF9IGZyb20gXCIuL2luZGV4XCI7XG5cbmZ1bmN0aW9uIEZsaWdodHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtmZXRjaFBsYWNlc0RhdGF9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/flights/Flights.js\n'
        );

        /***/
      },

    /***/ "./pages/api/flights/index.js":
      /*!************************************!*\
  !*** ./pages/api/flights/index.js ***!
  \************************************/
      /*! exports provided: fetchPlacesData, fetchRoutesAndQuotesData */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlacesData", function() { return fetchPlacesData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoutesAndQuotesData", function() { return fetchRoutesAndQuotesData; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst country = "Japan";\nconst originPlace = "NRT-sky";\nconst destinationPlace = "OSAA-sky";\nconst outboundpartialdate = "2020-09-01";\nconst fetchPlacesData = async () => {\n  try {\n    const {\n      data: {\n        Places\n      }\n    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", {\n      headers: {\n        "content-type": "application/json",\n        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n        "x-rapidapi-key": `${process.env.REACT_APP_PlacesDataKey}`,\n        useQueryString: true\n      },\n      params: {\n        query: `${country}`\n      }\n    });\n    console.log(Places);\n  } catch (err) {\n    console.error(err);\n  }\n};\nconst fetchRoutesAndQuotesData = async () => {\n  try {\n    const {\n      data: {\n        Quotes,\n        Places,\n        Carriers\n      }\n    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundpartialdate}`, {\n      headers: {\n        "content-type": "application/json",\n        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n        "x-rapidapi-key": `${process.env.REACT_APP_RoutesDataKey}`,\n        useQueryString: true\n      }\n    });\n    console.log(Quotes);\n    console.log(Places);\n    console.log(Carriers);\n  } catch (err) {\n    console.log(err);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmxpZ2h0cy9pbmRleC5qcz9jNmU1Il0sIm5hbWVzIjpbImNvdW50cnkiLCJvcmlnaW5QbGFjZSIsImRlc3RpbmF0aW9uUGxhY2UiLCJvdXRib3VuZHBhcnRpYWxkYXRlIiwiZmV0Y2hQbGFjZXNEYXRhIiwiZGF0YSIsIlBsYWNlcyIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfUGxhY2VzRGF0YUtleSIsInVzZVF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJmZXRjaFJvdXRlc0FuZFF1b3Rlc0RhdGEiLCJRdW90ZXMiLCJDYXJyaWVycyIsIlJFQUNUX0FQUF9Sb3V0ZXNEYXRhS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUcsT0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxVQUF6QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLFlBQTVCO0FBRU8sTUFBTUMsZUFBZSxHQUFHLFlBQVk7QUFDekMsTUFBSTtBQUNGLFVBQU07QUFDSkMsVUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFERixRQUVGLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FDUiwwR0FEUSxFQUVSO0FBQ0VDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQixrQkFEVDtBQUVQLDJCQUNFLHVEQUhLO0FBSVAsMEJBQW1CLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFBd0IsRUFKbEQ7QUFLUEMsc0JBQWMsRUFBRTtBQUxULE9BRFg7QUFRRUMsWUFBTSxFQUFFO0FBQ05DLGFBQUssRUFBRyxHQUFFZixPQUFRO0FBRFo7QUFSVixLQUZRLENBRlY7QUFrQkFnQixXQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBWjtBQUNELEdBcEJELENBb0JFLE9BQU9ZLEdBQVAsRUFBWTtBQUNaRixXQUFPLENBQUNHLEtBQVIsQ0FBY0QsR0FBZDtBQUNEO0FBQ0YsQ0F4Qk07QUEyQkEsTUFBTUUsd0JBQXdCLEdBQUcsWUFBWTtBQUNsRCxNQUFJO0FBQ0YsVUFBTTtBQUNKZixVQUFJLEVBQUU7QUFBRWdCLGNBQUY7QUFBVWYsY0FBVjtBQUFrQmdCO0FBQWxCO0FBREYsUUFFRixNQUFNZiw0Q0FBSyxDQUFDQyxHQUFOLENBQ1AsNEdBQTJHUCxXQUFZLElBQUdDLGdCQUFpQixJQUFHQyxtQkFBb0IsRUFEM0osRUFFUjtBQUNFTSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0Isa0JBRFQ7QUFFUCwyQkFDRSx1REFISztBQUlQLDBCQUFtQixHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVksdUJBQXdCLEVBSmxEO0FBS1BWLHNCQUFjLEVBQUU7QUFMVDtBQURYLEtBRlEsQ0FGVjtBQWVBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUksTUFBWjtBQUNBTCxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBWjtBQUNBVSxXQUFPLENBQUNDLEdBQVIsQ0FBWUssUUFBWjtBQUNELEdBbkJELENBbUJFLE9BQU9KLEdBQVAsRUFBWTtBQUNaRixXQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNEO0FBQ0YsQ0F2Qk0iLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmxpZ2h0cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgY291bnRyeSA9IFwiSmFwYW5cIjtcbmNvbnN0IG9yaWdpblBsYWNlID0gXCJOUlQtc2t5XCI7XG5jb25zdCBkZXN0aW5hdGlvblBsYWNlID0gXCJPU0FBLXNreVwiO1xuY29uc3Qgb3V0Ym91bmRwYXJ0aWFsZGF0ZSA9IFwiMjAyMC0wOS0wMVwiO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQbGFjZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgUGxhY2VzIH1cbiAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgXCJodHRwczovL3NreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tL2FwaXNlcnZpY2VzL2F1dG9zdWdnZXN0L3YxLjAvVUsvR0JQL2VuLUdCL1wiLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjpcbiAgICAgICAgICAgIFwic2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb21cIixcbiAgICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9QbGFjZXNEYXRhS2V5fWAsXG4gICAgICAgICAgdXNlUXVlcnlTdHJpbmc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcXVlcnk6IGAke2NvdW50cnl9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFBsYWNlcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcblxuXG5leHBvcnQgY29uc3QgZmV0Y2hSb3V0ZXNBbmRRdW90ZXNEYXRhID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgUXVvdGVzLCBQbGFjZXMsIENhcnJpZXJzIH1cbiAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYnJvd3Nlcm91dGVzL3YxLjAvVVMvVVNEL2VuLVVTLyR7b3JpZ2luUGxhY2V9LyR7ZGVzdGluYXRpb25QbGFjZX0vJHtvdXRib3VuZHBhcnRpYWxkYXRlfWAsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOlxuICAgICAgICAgICAgXCJza3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1JvdXRlc0RhdGFLZXl9YCxcbiAgICAgICAgICB1c2VRdWVyeVN0cmluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFF1b3Rlcyk7XG4gICAgY29uc29sZS5sb2coUGxhY2VzKTtcbiAgICBjb25zb2xlLmxvZyhDYXJyaWVycyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/flights/index.js\n'
        );

        /***/
      },

    /***/ "./pages/index.js":
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_flights_Flights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/flights/Flights */ "./pages/api/flights/Flights.js");\nvar _jsxFileName = "/Users/ethancr0wn/Google Drive/CodeChrysalis/PROJECTS/travelling-rapid-api/pages/index.js";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home() {\n  return __jsx("div", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx("title", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, "Create Next App"), __jsx("link", {\n    rel: "icon",\n    href: "/favicon.ico",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  })), __jsx("main", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx("h1", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, "Welcome to ", __jsx("a", {\n    href: "https://nextjs.org",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 22\n    }\n  }, "Next.js!")), __jsx("p", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, "Get started by editing", " ", __jsx("code", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.code,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, "pages/index.js")), __jsx("div", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx("a", {\n    href: "https://nextjs.org/docs",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, "Documentation \\u2192"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, "Find in-depth information about Next.js features and API.")), __jsx("a", {\n    href: "https://nextjs.org/learn",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, "Learn \\u2192"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, "Learn about Next.js in an interactive course with quizzes!")), __jsx("a", {\n    href: "https://github.com/vercel/next.js/tree/master/examples",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, "Examples \\u2192"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, "Discover and deploy boilerplate example Next.js projects.")), __jsx("a", {\n    href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx("h3", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, "Deploy \\u2192"), __jsx("p", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, "Instantly deploy your Next.js site to a public URL with Vercel.")))), __jsx("footer", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx("a", {\n    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",\n    target: "_blank",\n    rel: "noopener noreferrer",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, "Powered by", " ", __jsx("img", {\n    src: "/vercel.svg",\n    alt: "Vercel Logo",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJncmlkIiwiY2FyZCIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQU1FO0FBQU0sYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2E7QUFBRyxRQUFJLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYixDQURGLEVBS0U7QUFBRyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ3lCLEdBRHpCLEVBRUU7QUFBTSxhQUFTLEVBQUVKLDhEQUFNLENBQUNLLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsQ0FMRixFQVVFO0FBQUssYUFBUyxFQUFFTCw4REFBTSxDQUFDTSxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMseUJBQVI7QUFBa0MsYUFBUyxFQUFFTiw4REFBTSxDQUFDTyxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUVBRkYsQ0FERixFQU1FO0FBQUcsUUFBSSxFQUFDLDBCQUFSO0FBQW1DLGFBQVMsRUFBRVAsOERBQU0sQ0FBQ08sSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtFQUZGLENBTkYsRUFXRTtBQUNFLFFBQUksRUFBQyx3REFEUDtBQUVFLGFBQVMsRUFBRVAsOERBQU0sQ0FBQ08sSUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQUxGLENBWEYsRUFtQkU7QUFDRSxRQUFJLEVBQUMsOEhBRFA7QUFFRSxhQUFTLEVBQUVQLDhEQUFNLENBQUNPLElBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFMRixDQW5CRixDQVZGLENBTkYsRUErQ0U7QUFBUSxhQUFTLEVBQUVQLDhEQUFNLENBQUNRLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx3R0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBS2EsR0FMYixFQU1FO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsT0FBRyxFQUFDLGFBQTNCO0FBQXlDLGFBQVMsRUFBRVIsOERBQU0sQ0FBQ1MsSUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0EvQ0YsQ0FERjtBQTRERCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEZsaWdodHMgZnJvbSBcIi4vYXBpL2ZsaWdodHMvRmxpZ2h0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITwvYT5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3tcIiBcIn1cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC5qczwvY29kZT5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDM+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMz5MZWFybiAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL21hc3Rlci9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5FeGFtcGxlcyAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL2ltcG9ydD9maWx0ZXI9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5EZXBsb3kgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n'
        );

        /***/
      },

    /***/ "./styles/Home.module.css":
      /*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          '// Exports\nmodule.exports = {\n\t"container": "Home_container__1EcsU",\n\t"main": "Home_main__1x8gC",\n\t"footer": "Home_footer__1WdhD",\n\t"title": "Home_title__3DjR7",\n\t"description": "Home_description__17Z4F",\n\t"code": "Home_code__axx2Y",\n\t"grid": "Home_grid__2Ei2F",\n\t"card": "Home_card__2SdtB",\n\t"logo": "Home_logo__1YbrH"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n'
        );

        /***/
      },

    /***/ axios:
      /*!************************!*\
  !*** external "axios" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("axios");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n'
        );

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("next/head");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n'
        );

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n'
        );

        /***/
      }

    /******/
  }
);
