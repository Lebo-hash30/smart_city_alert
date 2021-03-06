(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings3-bookings3-module"], {
    /***/
    "66Vr":
    /*!***********************************************!*\
      !*** ./src/app/bookings3/bookings3.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function Vr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nczMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "7fMU":
    /*!*********************************************!*\
      !*** ./src/app/bookings3/bookings3.page.ts ***!
      \*********************************************/

    /*! exports provided: Bookings3Page */

    /***/
    function fMU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings3Page", function () {
        return Bookings3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bookings3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bookings3.page.html */
      "wyYH");
      /* harmony import */


      var _bookings3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bookings3.page.scss */
      "66Vr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Bookings3Page = /*#__PURE__*/function () {
        function Bookings3Page() {
          _classCallCheck(this, Bookings3Page);
        }

        _createClass(Bookings3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Bookings3Page;
      }();

      Bookings3Page.ctorParameters = function () {
        return [];
      };

      Bookings3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings3',
        template: _raw_loader_bookings3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Bookings3Page);
      /***/
    },

    /***/
    "jmVF":
    /*!*******************************************************!*\
      !*** ./src/app/bookings3/bookings3-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Bookings3PageRoutingModule */

    /***/
    function jmVF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings3PageRoutingModule", function () {
        return Bookings3PageRoutingModule;
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


      var _bookings3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bookings3.page */
      "7fMU");

      var routes = [{
        path: '',
        component: _bookings3_page__WEBPACK_IMPORTED_MODULE_3__["Bookings3Page"]
      }];

      var Bookings3PageRoutingModule = function Bookings3PageRoutingModule() {
        _classCallCheck(this, Bookings3PageRoutingModule);
      };

      Bookings3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Bookings3PageRoutingModule);
      /***/
    },

    /***/
    "rIVR":
    /*!***********************************************!*\
      !*** ./src/app/bookings3/bookings3.module.ts ***!
      \***********************************************/

    /*! exports provided: Bookings3PageModule */

    /***/
    function rIVR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Bookings3PageModule", function () {
        return Bookings3PageModule;
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


      var _bookings3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bookings3-routing.module */
      "jmVF");
      /* harmony import */


      var _bookings3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookings3.page */
      "7fMU");

      var Bookings3PageModule = function Bookings3PageModule() {
        _classCallCheck(this, Bookings3PageModule);
      };

      Bookings3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Bookings3PageRoutingModule"]],
        declarations: [_bookings3_page__WEBPACK_IMPORTED_MODULE_6__["Bookings3Page"]]
      })], Bookings3PageModule);
      /***/
    },

    /***/
    "wyYH":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings3/bookings3.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function wyYH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/booking facility/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"text-align: center;\">ROCK ARTS CENTRE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-card class=\"card\">\r\n    <img src=\"..//..//assets/images.Wildebees.jfif\" />\r\n    <ion-card-header>\r\n      <ion-card-subtitle>\r\n        Arts\r\n      </ion-card-subtitle>\r\n      <ion-card-title>Wildebeest Kuil Rock Arts Centre </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum cumque vitae deserunt alias delectus\r\n        blanditiis nobis ea soluta eius sunt eum, enim, quas sint labore voluptates repudiandae saepe eaque!</p>\r\n    </ion-card-content>\r\n\r\n    <div >\r\n        <ion-button class=\"btn\"  [routerLink] = \"'/veiw-report'\">Direction</ion-button>\r\n        <ion-button  class=\"btn\" [routerLink] = \"'/forms'\" >Book Now</ion-button> \r\n\r\n    </div>\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=bookings3-bookings3-module-es5.js.map