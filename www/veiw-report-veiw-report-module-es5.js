(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["veiw-report-veiw-report-module"], {
    /***/
    "CJec":
    /*!***************************************************!*\
      !*** ./src/app/veiw-report/veiw-report.module.ts ***!
      \***************************************************/

    /*! exports provided: VeiwReportPageModule */

    /***/
    function CJec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeiwReportPageModule", function () {
        return VeiwReportPageModule;
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


      var _veiw_report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./veiw-report-routing.module */
      "cC/g");
      /* harmony import */


      var _veiw_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./veiw-report.page */
      "F6pS");

      var VeiwReportPageModule = function VeiwReportPageModule() {
        _classCallCheck(this, VeiwReportPageModule);
      };

      VeiwReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _veiw_report_routing_module__WEBPACK_IMPORTED_MODULE_5__["VeiwReportPageRoutingModule"]],
        declarations: [_veiw_report_page__WEBPACK_IMPORTED_MODULE_6__["VeiwReportPage"]]
      })], VeiwReportPageModule);
      /***/
    },

    /***/
    "F6pS":
    /*!*************************************************!*\
      !*** ./src/app/veiw-report/veiw-report.page.ts ***!
      \*************************************************/

    /*! exports provided: VeiwReportPage */

    /***/
    function F6pS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeiwReportPage", function () {
        return VeiwReportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_veiw_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./veiw-report.page.html */
      "x33Y");
      /* harmony import */


      var _veiw_report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./veiw-report.page.scss */
      "xyKS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VeiwReportPage = /*#__PURE__*/function () {
        function VeiwReportPage() {
          _classCallCheck(this, VeiwReportPage);
        }

        _createClass(VeiwReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VeiwReportPage;
      }();

      VeiwReportPage.ctorParameters = function () {
        return [];
      };

      VeiwReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-veiw-report',
        template: _raw_loader_veiw_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_veiw_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VeiwReportPage);
      /***/
    },

    /***/
    "cC/g":
    /*!***********************************************************!*\
      !*** ./src/app/veiw-report/veiw-report-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: VeiwReportPageRoutingModule */

    /***/
    function cCG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeiwReportPageRoutingModule", function () {
        return VeiwReportPageRoutingModule;
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


      var _veiw_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./veiw-report.page */
      "F6pS");

      var routes = [{
        path: '',
        component: _veiw_report_page__WEBPACK_IMPORTED_MODULE_3__["VeiwReportPage"]
      }];

      var VeiwReportPageRoutingModule = function VeiwReportPageRoutingModule() {
        _classCallCheck(this, VeiwReportPageRoutingModule);
      };

      VeiwReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VeiwReportPageRoutingModule);
      /***/
    },

    /***/
    "x33Y":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/veiw-report/veiw-report.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function x33Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"success\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/facility booking\"></ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title  style=\"text-align: center;\">Case Report Area</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  \r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "xyKS":
    /*!***************************************************!*\
      !*** ./src/app/veiw-report/veiw-report.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function xyKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWl3LXJlcG9ydC5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=veiw-report-veiw-report-module-es5.js.map