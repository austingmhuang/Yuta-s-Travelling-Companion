module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../ssr-module-cache.js"); // The require function
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
    (__webpack_require__.s = "./pages/api/flights/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./pages/api/flights/FlightFetch.js":
      /*!******************************************!*\
  !*** ./pages/api/flights/FlightFetch.js ***!
  \******************************************/
      /*! exports provided: fetchPlacesData, fetchRoutesAndQuotesData */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlacesData", function() { return fetchPlacesData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRoutesAndQuotesData", function() { return fetchRoutesAndQuotesData; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst country = "Japan";\nconst originPlace = "NRT-sky";\nconst destinationPlace = "OSAA-sky";\nconst outboundpartialdate = "2020-09-01";\nconst fetchPlacesData = async () => {\n  try {\n    const {\n      data: {\n        Places\n      }\n    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", {\n      headers: {\n        "content-type": "application/json",\n        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n        "x-rapidapi-key": process.env.REACT_APP_PlacesDataKey,\n        useQueryString: true\n      },\n      params: {\n        query: `${country}`\n      }\n    });\n    console.log(Places);\n  } catch (err) {\n    console.error(err);\n  }\n};\nconst fetchRoutesAndQuotesData = async () => {\n  try {\n    const {\n      data: {\n        Quotes,\n        Places,\n        Carriers\n      }\n    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${outboundpartialdate}`, {\n      headers: {\n        "content-type": "application/json",\n        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",\n        "x-rapidapi-key": process.env.REACT_APP_RoutesDataKey,\n        useQueryString: true\n      }\n    });\n    console.log(Quotes);\n    console.log(Places);\n    console.log(Carriers);\n  } catch (err) {\n    console.log(err);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmxpZ2h0cy9GbGlnaHRGZXRjaC5qcz8xY2VlIl0sIm5hbWVzIjpbImNvdW50cnkiLCJvcmlnaW5QbGFjZSIsImRlc3RpbmF0aW9uUGxhY2UiLCJvdXRib3VuZHBhcnRpYWxkYXRlIiwiZmV0Y2hQbGFjZXNEYXRhIiwiZGF0YSIsIlBsYWNlcyIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfUGxhY2VzRGF0YUtleSIsInVzZVF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJmZXRjaFJvdXRlc0FuZFF1b3Rlc0RhdGEiLCJRdW90ZXMiLCJDYXJyaWVycyIsIlJFQUNUX0FQUF9Sb3V0ZXNEYXRhS2V5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxPQUFPLEdBQUcsT0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxVQUF6QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLFlBQTVCO0FBRU8sTUFBTUMsZUFBZSxHQUFHLFlBQVk7QUFDekMsTUFBSTtBQUNGLFVBQU07QUFDSkMsVUFBSSxFQUFFO0FBQUVDO0FBQUY7QUFERixRQUVGLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FDUiwwR0FEUSxFQUVSO0FBQ0VDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQixrQkFEVDtBQUVQLDJCQUNFLHVEQUhLO0FBSVAsMEJBQWtCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsdUJBSnZCO0FBS1BDLHNCQUFjLEVBQUU7QUFMVCxPQURYO0FBUUVDLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUcsR0FBRWYsT0FBUTtBQURaO0FBUlYsS0FGUSxDQUZWO0FBa0JBZ0IsV0FBTyxDQUFDQyxHQUFSLENBQVlYLE1BQVo7QUFDRCxHQXBCRCxDQW9CRSxPQUFPWSxHQUFQLEVBQVk7QUFDWkYsV0FBTyxDQUFDRyxLQUFSLENBQWNELEdBQWQ7QUFDRDtBQUNGLENBeEJNO0FBMEJBLE1BQU1FLHdCQUF3QixHQUFHLFlBQVk7QUFDbEQsTUFBSTtBQUNGLFVBQU07QUFDSmYsVUFBSSxFQUFFO0FBQUVnQixjQUFGO0FBQVVmLGNBQVY7QUFBa0JnQjtBQUFsQjtBQURGLFFBRUYsTUFBTWYsNENBQUssQ0FBQ0MsR0FBTixDQUNQLDRHQUEyR1AsV0FBWSxJQUFHQyxnQkFBaUIsSUFBR0MsbUJBQW9CLEVBRDNKLEVBRVI7QUFDRU0sYUFBTyxFQUFFO0FBQ1Asd0JBQWdCLGtCQURUO0FBRVAsMkJBQ0UsdURBSEs7QUFJUCwwQkFBa0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSx1QkFKdkI7QUFLUFYsc0JBQWMsRUFBRTtBQUxUO0FBRFgsS0FGUSxDQUZWO0FBZUFHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxNQUFaO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBQ0FVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFaO0FBQ0QsR0FuQkQsQ0FtQkUsT0FBT0osR0FBUCxFQUFZO0FBQ1pGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0Q7QUFDRixDQXZCTSIsImZpbGUiOiIuL3BhZ2VzL2FwaS9mbGlnaHRzL0ZsaWdodEZldGNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBjb3VudHJ5ID0gXCJKYXBhblwiO1xuY29uc3Qgb3JpZ2luUGxhY2UgPSBcIk5SVC1za3lcIjtcbmNvbnN0IGRlc3RpbmF0aW9uUGxhY2UgPSBcIk9TQUEtc2t5XCI7XG5jb25zdCBvdXRib3VuZHBhcnRpYWxkYXRlID0gXCIyMDIwLTA5LTAxXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBsYWNlc0RhdGEgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogeyBQbGFjZXMgfVxuICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBcImh0dHBzOi8vc2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb20vYXBpc2VydmljZXMvYXV0b3N1Z2dlc3QvdjEuMC9VSy9HQlAvZW4tR0IvXCIsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOlxuICAgICAgICAgICAgXCJza3lzY2FubmVyLXNreXNjYW5uZXItZmxpZ2h0LXNlYXJjaC12MS5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgICAgIFwieC1yYXBpZGFwaS1rZXlcIjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BsYWNlc0RhdGFLZXksXG4gICAgICAgICAgdXNlUXVlcnlTdHJpbmc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcXVlcnk6IGAke2NvdW50cnl9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFBsYWNlcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUm91dGVzQW5kUXVvdGVzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IFF1b3RlcywgUGxhY2VzLCBDYXJyaWVycyB9XG4gICAgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL3NreXNjYW5uZXItc2t5c2Nhbm5lci1mbGlnaHQtc2VhcmNoLXYxLnAucmFwaWRhcGkuY29tL2FwaXNlcnZpY2VzL2Jyb3dzZXJvdXRlcy92MS4wL1VTL1VTRC9lbi1VUy8ke29yaWdpblBsYWNlfS8ke2Rlc3RpbmF0aW9uUGxhY2V9LyR7b3V0Ym91bmRwYXJ0aWFsZGF0ZX1gLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJ4LXJhcGlkYXBpLWhvc3RcIjpcbiAgICAgICAgICAgIFwic2t5c2Nhbm5lci1za3lzY2FubmVyLWZsaWdodC1zZWFyY2gtdjEucC5yYXBpZGFwaS5jb21cIixcbiAgICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9Sb3V0ZXNEYXRhS2V5LFxuICAgICAgICAgIHVzZVF1ZXJ5U3RyaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coUXVvdGVzKTtcbiAgICBjb25zb2xlLmxvZyhQbGFjZXMpO1xuICAgIGNvbnNvbGUubG9nKENhcnJpZXJzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/flights/FlightFetch.js\n'
        );

        /***/
      },

    /***/ "./pages/api/flights/index.js":
      /*!************************************!*\
  !*** ./pages/api/flights/index.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FlightFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlightFetch */ "./pages/api/flights/FlightFetch.js");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = "/Users/ethancr0wn/Google Drive/CodeChrysalis/PROJECTS/travelling-rapid-api/pages/api/flights/index.js";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n  const renderCard = (card, index) => {\n    return __jsx("div", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }\n    }, card.carrier.id), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, card.carrier.id), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, card.carrier.id), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {\n      variant: "primary",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, "Go somewhere"))));\n  };\n\n  return __jsx("div", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, _FlightFetch__WEBPACK_IMPORTED_MODULE_1__["fetchRoutesAndQuotesData"].map(renderCard));\n});\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmxpZ2h0cy9pbmRleC5qcz9jNmU1Il0sIm5hbWVzIjpbInJlbmRlckNhcmQiLCJjYXJkIiwiaW5kZXgiLCJjYXJyaWVyIiwiaWQiLCJmZXRjaFJvdXRlc0FuZFF1b3Rlc0RhdGEiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHZSwyRUFBWTtBQUV6QixRQUFNQSxVQUFVLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ2xDLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBTSxTQUFHLEVBQUVBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBY0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEVBQTNCLENBREYsRUFFRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhSCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsRUFBMUIsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0gsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEVBRGhCLENBRkYsRUFLRSxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsQ0FGRixDQURGLENBREY7QUFhRCxHQWREOztBQWdCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MscUVBQXdCLENBQUNDLEdBQXpCLENBQTZCTixVQUE3QixDQURILENBREY7QUFLRDtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZsaWdodHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFJvdXRlc0FuZFF1b3Rlc0RhdGEgfSBmcm9tIFwiLi9GbGlnaHRGZXRjaFwiO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCByZW5kZXJDYXJkID0gKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXJkIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj57Y2FyZC5jYXJyaWVyLmlkfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxDYXJkLlRpdGxlPntjYXJkLmNhcnJpZXIuaWR9PC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAge2NhcmQuY2Fycmllci5pZH1cbiAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkdvIHNvbWV3aGVyZTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZmV0Y2hSb3V0ZXNBbmRRdW90ZXNEYXRhLm1hcChyZW5kZXJDYXJkKX1cbiAgICA8L2Rpdj5cbiAgKVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/flights/index.js\n'
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
      },

    /***/ "react-bootstrap":
      /*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("react-bootstrap");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n'
        );

        /***/
      }

    /******/
  }
);
