(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings1-bookings1-module"], {
    /***/
    "Adst":
    /*!***********************************************!*\
      !*** ./src/app/bookings1/bookings1.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Adst(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Poppins', sans-serif;\n}\np {\n  font-family: 'Poppins', sans-serif;\n}\ni {\n  font-size: 15px;\n  color: #e97171;\n}\n.btn {\n  width: 100px;\n  height: 35px;\n  border: 2px solid #e97171;\n  color: black;\n  padding-bottom: 5px;\n  margin-left: 5px;\n}\nsmall {\n  font-family: 'Poppins', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2tpbmdzMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0hBQVk7QUFFWjtFQUNJLGtDQUFrQztBQUF0QztBQUVBO0VBQ0ksa0NBQWtDO0FBQ3RDO0FBRUE7RUFDSSxlQUFlO0VBQ2YsY0FBYTtBQUNqQjtBQUNBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFFcEI7QUFDQTtFQUNJLGtDQUFrQztBQUV0QyIsImZpbGUiOiJib29raW5nczEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbmgxLGgyLGgzLGg0LGg1LGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6I2U5NzE3MTtcclxufVxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOTcxNzE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuc21hbGx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59Il19 */";
      /***/
    },

    /***/
    "I92p":
    /*!*******************************************************!*\
      !*** ./src/app/bookings1/bookings1-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Bookings1PageRoutingModule */

    /***/
    function I92p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings1PageRoutingModule", function () {
        return Bookings1PageRoutingModule;
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


      var _bookings1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookings1.page */
      "VCHF");

      var routes = [{
        path: '',
        component: _bookings1_page__WEBPACK_IMPORTED_MODULE_3__["Bookings1Page"]
      }];

      var Bookings1PageRoutingModule = function Bookings1PageRoutingModule() {
        _classCallCheck(this, Bookings1PageRoutingModule);
      };

      Bookings1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Bookings1PageRoutingModule);
      /***/
    },

    /***/
    "ODtQ":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings1/bookings1.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function ODtQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/booking facility/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"text-align: center;\">WILLIAM HUMPHERY</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-list>\r\n    <div class=\"container mt-3\">\r\n  \r\n      <div class=\"card\"  style=\"width: 20rem;\">\r\n        <img src=\"..//../assets/download.William1.jfif\" class=\"card-img-top\" alt=\"...\" />\r\n        \r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Art center</h5>\r\n          <h3>Description</h3>\r\n          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum cumque vitae deserunt alias delectus\r\n            blanditiis nobis ea soluta eius sunt eum, enim, quas sint labore voluptates repudiandae saepe eaque!</p>\r\n          </div>\r\n          <div class=\"border-top\"></div>\r\n        <div  class=\"container mt-3\" style=\"display: grid; grid-template-columns: 50% 50%; height: 100px;\">\r\n    \r\n          <div>\r\n            <i class=\"fas fa-map-marker-alt\"></i>\r\n            <small class=\"pl-2\">Kimberley</small><br>\r\n            <small class=\"pl-4\">Direction </small>\r\n          </div>\r\n    \r\n          <div>\r\n            <i class=\"fas fa-phone-alt\"></i><small class=\"pl-2\">07 93393939 </small> \r\n          </div>\r\n\r\n          <div>\r\n            <i class=\"fas fa-envelope-open\"></i> <small class=\"pl-2\"> lebo@gmail.com </small>\r\n          </div>\r\n\r\n\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\"  [routerLink]=\"'/forms'\">Book now</button>\r\n          </div>\r\n       \r\n        </div>\r\n\r\n       \r\n      </div>\r\n    </div>\r\n      \r\n  </ion-list>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "VCHF":
    /*!*********************************************!*\
      !*** ./src/app/bookings1/bookings1.page.ts ***!
      \*********************************************/

    /*! exports provided: Bookings1Page */

    /***/
    function VCHF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings1Page", function () {
        return Bookings1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bookings1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bookings1.page.html */
      "ODtQ");
      /* harmony import */


      var _bookings1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookings1.page.scss */
      "Adst");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Bookings1Page = /*#__PURE__*/function () {
        function Bookings1Page() {
          _classCallCheck(this, Bookings1Page);
        }

        _createClass(Bookings1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Bookings1Page;
      }();

      Bookings1Page.ctorParameters = function () {
        return [];
      };

      Bookings1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings1',
        template: _raw_loader_bookings1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Bookings1Page);
      /***/
    },

    /***/
    "cexL":
    /*!***********************************************!*\
      !*** ./src/app/bookings1/bookings1.module.ts ***!
      \***********************************************/

    /*! exports provided: Bookings1PageModule */

    /***/
    function cexL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings1PageModule", function () {
        return Bookings1PageModule;
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


      var _bookings1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bookings1-routing.module */
      "I92p");
      /* harmony import */


      var _bookings1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookings1.page */
      "VCHF");

      var Bookings1PageModule = function Bookings1PageModule() {
        _classCallCheck(this, Bookings1PageModule);
      };

      Bookings1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Bookings1PageRoutingModule"]],
        declarations: [_bookings1_page__WEBPACK_IMPORTED_MODULE_6__["Bookings1Page"]]
      })], Bookings1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bookings1-bookings1-module-es5.js.map