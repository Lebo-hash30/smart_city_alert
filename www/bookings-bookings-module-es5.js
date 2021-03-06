(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"], {
    /***/
    "GatT":
    /*!*****************************************************!*\
      !*** ./src/app/bookings/bookings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BookingsPageRoutingModule */

    /***/
    function GatT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function () {
        return BookingsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookings.page */
      "RiBf");

      var routes = [{
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
      }];

      var BookingsPageRoutingModule = function BookingsPageRoutingModule() {
        _classCallCheck(this, BookingsPageRoutingModule);
      };

      BookingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookingsPageRoutingModule);
      /***/
    },

    /***/
    "RiBf":
    /*!*******************************************!*\
      !*** ./src/app/bookings/bookings.page.ts ***!
      \*******************************************/

    /*! exports provided: BookingsPage */

    /***/
    function RiBf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPage", function () {
        return BookingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bookings.page.html */
      "RvsI");
      /* harmony import */


      var _bookings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookings.page.scss */
      "tI7M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BookingsPage = /*#__PURE__*/function () {
        function BookingsPage(router) {
          _classCallCheck(this, BookingsPage);

          this.router = router;
        }

        _createClass(BookingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data = this.router.getCurrentNavigation().extras.state;
            console.log(this.data);
          }
        }]);

        return BookingsPage;
      }();

      BookingsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      BookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings',
        template: _raw_loader_bookings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BookingsPage);
      /***/
    },

    /***/
    "RvsI":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function RvsI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"height: 100%\">\r\n  <ion-list>\r\n    <div class=\"m-1\" style=\"height: 100%\">\r\n      <div class=\"card\" style=\"width: 25rem; height: 100%\">\r\n        <img src=\"{{data.center_image}}\" class=\"card-img-top\" alt=\"...\" />\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{data.center_name}}</h5>\r\n          <h3>Description</h3>\r\n          <p class=\"ml-0\">{{data.center_description}}</p>\r\n        </div>\r\n        <div class=\"border-top\"></div>\r\n        <div\r\n          class=\"container mt-3\"\r\n          style=\"\r\n            display: grid;\r\n            grid-template-columns: 50% 50%;\r\n            gap: 12px;\r\n            height: 100%;\r\n          \"\r\n        >\r\n          <div>\r\n            <i class=\"fas fa-map-marker-alt\"></i>\r\n            <small class=\"pl-2\">{{data.center_location}}</small><br />\r\n          </div>\r\n          <div class=\"ml-2\">\r\n            <i class=\"fas fa-phone-alt\"></i\r\n            ><small class=\"pl-2\">{{data.center_number}} </small>\r\n          </div>\r\n          <div class=\"\">\r\n            <i class=\"fas fa-envelope-open\"></i>\r\n            <small class=\"pl-2\"> {{data.center_email}} </small>\r\n          </div>\r\n          <div class=\"ml-2\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-outline-secondary\"\r\n              [routerLink]=\"'/forms'\"\r\n            >\r\n              Book now\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-list>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "tI7M":
    /*!*********************************************!*\
      !*** ./src/app/bookings/bookings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function tI7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Poppins', sans-serif;\n}\np {\n  font-family: 'Poppins', sans-serif;\n}\ni {\n  font-size: 15px;\n  color: #e97171;\n}\n.btn {\n  width: 100px;\n  height: 35px;\n  border: 2px solid #e97171;\n  color: black;\n  padding-bottom: 5px;\n  margin-left: 5px;\n}\nsmall {\n  font-family: 'Poppins', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2tpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvSEFBWTtBQUVaO0VBQ0ksa0NBQWtDO0FBQXRDO0FBRUE7RUFDSSxrQ0FBa0M7QUFDdEM7QUFFQTtFQUNJLGVBQWU7RUFDZixjQUFhO0FBQ2pCO0FBQ0E7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUVwQjtBQUNBO0VBQ0ksa0NBQWtDO0FBRXRDIiwiZmlsZSI6ImJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5oMSxoMixoMyxoNCxoNSxoNntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiNlOTcxNzE7XHJcbn1cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTk3MTcxO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbnNtYWxse1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "tx+c":
    /*!*********************************************!*\
      !*** ./src/app/bookings/bookings.module.ts ***!
      \*********************************************/

    /*! exports provided: BookingsPageModule */

    /***/
    function txC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function () {
        return BookingsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bookings-routing.module */
      "GatT");
      /* harmony import */


      var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookings.page */
      "RiBf");

      var BookingsPageModule = function BookingsPageModule() {
        _classCallCheck(this, BookingsPageModule);
      };

      BookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"]],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
      })], BookingsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bookings-bookings-module-es5.js.map