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
    (__webpack_require__.s = "./pages/api/me.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./lib/auth0.js":
      /*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__);\n\n/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_1__["initAuth0"])({\n  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,\n  clientSecret: process.env.AUTH0_CLIENT_SECRET,\n  scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE || "openid profile",\n  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,\n  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || "https://travelling-rapid-api.vercel.app/api/login",\n  postLogoutRedirectUri: process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI || "https://travelling-rapid-api.vercel.app/",\n  session: {\n    cookieSecret: process.env.SESSION_COOKIE_SECRET,\n    cookieLifetime: Number(process.env.SESSION_COOKIE_LIFETIME) || 7200\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aDAuanM/ZDhkYSJdLCJuYW1lcyI6WyJpbml0QXV0aDAiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BVVRIMF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIMF9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJORVhUX1BVQkxJQ19BVVRIMF9TQ09QRSIsImRvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTiIsInJlZGlyZWN0VXJpIiwiTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiTkVYVF9QVUJMSUNfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIlNFU1NJT05fQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwiTnVtYmVyIiwiU0VTU0lPTl9DT09LSUVfTElGRVRJTUUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLG9JQUFTLENBQUM7QUFDdkJDLFVBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDJCQURDO0FBRXZCQyxjQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxtQkFGSDtBQUd2QkMsT0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssdUJBQVosSUFBdUMsZ0JBSHZCO0FBSXZCQyxRQUFNLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyx3QkFKRztBQUt2QkMsYUFBVyxFQUNUVCxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsd0JBQVosSUFDQSxtREFQcUI7QUFRdkJDLHVCQUFxQixFQUNuQlgsT0FBTyxDQUFDQyxHQUFSLENBQVlXLG9DQUFaLElBQ0EsMENBVnFCO0FBV3ZCQyxTQUFPLEVBQUU7QUFDUEMsZ0JBQVksRUFBRWQsT0FBTyxDQUFDQyxHQUFSLENBQVljLHFCQURuQjtBQUVQQyxrQkFBYyxFQUFFQyxNQUFNLENBQUNqQixPQUFPLENBQUNDLEdBQVIsQ0FBWWlCLHVCQUFiLENBQU4sSUFBK0M7QUFGeEQ7QUFYYyxDQUFELENBQXhCIiwiZmlsZSI6Ii4vbGliL2F1dGgwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKHtcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0NMSUVOVF9JRCxcbiAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxuICBzY29wZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfU0NPUEUgfHwgXCJvcGVuaWQgcHJvZmlsZVwiLFxuICBkb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTixcbiAgcmVkaXJlY3RVcmk6XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIHx8XG4gICAgXCJodHRwczovL3RyYXZlbGxpbmctcmFwaWQtYXBpLnZlcmNlbC5hcHAvYXBpL2xvZ2luXCIsXG4gIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTpcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QT1NUX0xPR09VVF9SRURJUkVDVF9VUkkgfHxcbiAgICBcImh0dHBzOi8vdHJhdmVsbGluZy1yYXBpZC1hcGkudmVyY2VsLmFwcC9cIixcbiAgc2Vzc2lvbjoge1xuICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9DT09LSUVfU0VDUkVULFxuICAgIGNvb2tpZUxpZmV0aW1lOiBOdW1iZXIocHJvY2Vzcy5lbnYuU0VTU0lPTl9DT09LSUVfTElGRVRJTUUpIHx8IDcyMDBcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth0.js\n'
        );

        /***/
      },

    /***/ "./pages/api/me.js":
      /*!*************************!*\
  !*** ./pages/api/me.js ***!
  \*************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return me; });\n/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth0 */ "./lib/auth0.js");\n\nasync function me(req, res) {\n  try {\n    await _lib_auth0__WEBPACK_IMPORTED_MODULE_0__["default"].handleProfile(req, res);\n  } catch (error) {\n    console.error(error);\n    res.status(error.status || 500).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWUuanM/YWNiNCJdLCJuYW1lcyI6WyJtZSIsInJlcSIsInJlcyIsImF1dGgwIiwiaGFuZGxlUHJvZmlsZSIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImVuZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsZUFBZUEsRUFBZixDQUFrQkMsR0FBbEIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3pDLE1BQUk7QUFDRixVQUFNQyxrREFBSyxDQUFDQyxhQUFOLENBQW9CSCxHQUFwQixFQUF5QkMsR0FBekIsQ0FBTjtBQUNELEdBRkQsQ0FFRSxPQUFPRyxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQUgsT0FBRyxDQUFDSyxNQUFKLENBQVdGLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixHQUEzQixFQUFnQ0MsR0FBaEMsQ0FBb0NILEtBQUssQ0FBQ0ksT0FBMUM7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gXCIuLi8uLi9saWIvYXV0aDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWUocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhdXRoMC5oYW5kbGVQcm9maWxlKHJlcSwgcmVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cyB8fCA1MDApLmVuZChlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/me.js\n'
        );

        /***/
      },

    /***/ "@auth0/nextjs-auth0":
      /*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        eval(
          'module.exports = require("@auth0/nextjs-auth0");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCI/N2RhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXV0aDAvbmV4dGpzLWF1dGgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGF1dGgwL25leHRqcy1hdXRoMFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@auth0/nextjs-auth0\n'
        );

        /***/
      }

    /******/
  }
);
