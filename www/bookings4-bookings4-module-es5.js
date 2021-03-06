(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings4-bookings4-module"], {
    /***/
    "5TsQ":
    /*!*********************************************!*\
      !*** ./src/app/bookings4/bookings4.page.ts ***!
      \*********************************************/

    /*! exports provided: Bookings4Page */

    /***/
    function TsQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings4Page", function () {
        return Bookings4Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bookings4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bookings4.page.html */
      "RrH0");
      /* harmony import */


      var _bookings4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookings4.page.scss */
      "mrBd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Bookings4Page = /*#__PURE__*/function () {
        function Bookings4Page() {
          _classCallCheck(this, Bookings4Page);
        }

        _createClass(Bookings4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Bookings4Page;
      }();

      Bookings4Page.ctorParameters = function () {
        return [];
      };

      Bookings4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings4',
        template: _raw_loader_bookings4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Bookings4Page);
      /***/
    },

    /***/
    "RrH0":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings4/bookings4.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function RrH0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/booking facility/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\">NORTHERN-CAPE SMME VILLAGE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-card class=\"card\">\r\n    <img src=\"..//../assets/nc.SMME.jpg\" />\r\n    <ion-card-header>\r\n      <ion-card-subtitle>\r\n        SMME Centre\r\n      </ion-card-subtitle>\r\n      <ion-card-title>Floors SMME</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum cumque vitae deserunt alias delectus\r\n        blanditiis nobis ea soluta eius sunt eum, enim, quas sint labore voluptates repudiandae saepe eaque!</p>\r\n    </ion-card-content>\r\n\r\n    <div >\r\n        <ion-button class=\"btn\"  [routerLink] = \"'/veiw-report'\">Direction</ion-button>\r\n        <ion-button  class=\"btn\" [routerLink] = \"'/forms'\" >Book Now</ion-button> \r\n\r\n    </div>\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "WrU0":
    /*!***********************************************!*\
      !*** ./src/app/bookings4/bookings4.module.ts ***!
      \***********************************************/

    /*! exports provided: Bookings4PageModule */

    /***/
    function WrU0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings4PageModule", function () {
        return Bookings4PageModule;
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


      var _bookings4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bookings4-routing.module */
      "d94M");
      /* harmony import */


      var _bookings4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookings4.page */
      "5TsQ");

      var Bookings4PageModule = function Bookings4PageModule() {
        _classCallCheck(this, Bookings4PageModule);
      };

      Bookings4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Bookings4PageRoutingModule"]],
        declarations: [_bookings4_page__WEBPACK_IMPORTED_MODULE_6__["Bookings4Page"]]
      })], Bookings4PageModule);
      /***/
    },

    /***/
    "d94M":
    /*!*******************************************************!*\
      !*** ./src/app/bookings4/bookings4-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Bookings4PageRoutingModule */

    /***/
    function d94M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings4PageRoutingModule", function () {
        return Bookings4PageRoutingModule;
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


      var _bookings4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookings4.page */
      "5TsQ");

      var routes = [{
        path: '',
        component: _bookings4_page__WEBPACK_IMPORTED_MODULE_3__["Bookings4Page"]
      }];

      var Bookings4PageRoutingModule = function Bookings4PageRoutingModule() {
        _classCallCheck(this, Bookings4PageRoutingModule);
      };

      Bookings4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Bookings4PageRoutingModule);
      /***/
    },

    /***/
    "mrBd":
    /*!***********************************************!*\
      !*** ./src/app/bookings4/bookings4.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function mrBd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nczQucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=bookings4-bookings4-module-es5.js.map