(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboarding-onboarding-module"], {
    /***/
    "Illq":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Illq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\nion-slides {\n  height: 100%;\n}\nion-slide {\n  display: block;\n}\n.slider-text {\n  padding-top: 20%;\n}\n.slider-text h2 {\n  font-family: 'SF UI Display Semibold';\n}\n.navigator {\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\np {\n  font-family: 'Poppins', sans-serif;\n  color: gray;\n}\nh2 {\n  font-family: 'Poppins', sans-serif;\n  color: #e97171;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLG9IQUFZO0FBRVo7RUFDSSxZQUFZO0FBRGhCO0FBSUE7RUFDSSxjQUFjO0FBRGxCO0FBUUE7RUFDSSxnQkFBZ0I7QUFMcEI7QUFRQTtFQUNJLHFDQUFxQztBQUx6QztBQVFBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxTQUFTO0FBTGI7QUFRQTtFQUNJLGtDQUFrQztFQUNuQyxXQUFXO0FBTGQ7QUFRQTtFQUNJLGtDQUFrQztFQUNsQyxjQUFlO0FBTG5CIiwiZmlsZSI6Im9uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tc2xpZGUgaW1nIHtcclxuICBcclxufVxyXG5cclxuLnNsaWRlci10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5zbGlkZXItdGV4dCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1NGIFVJIERpc3BsYXkgU2VtaWJvbGQnO1xyXG59XHJcblxyXG4ubmF2aWdhdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICAjZTk3MTcxO1xyXG59IFxyXG4iXX0= */";
      /***/
    },

    /***/
    "QKJs":
    /*!***********************************************!*\
      !*** ./src/app/onboarding/onboarding.page.ts ***!
      \***********************************************/

    /*! exports provided: OnboardingPage */

    /***/
    function QKJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPage", function () {
        return OnboardingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./onboarding.page.html */
      "bcPs");
      /* harmony import */


      var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding.page.scss */
      "Illq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OnboardingPage = /*#__PURE__*/function () {
        function OnboardingPage() {
          _classCallCheck(this, OnboardingPage);
        }

        _createClass(OnboardingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "next",
          value: function next() {
            this.slides.slideNext();
          }
        }, {
          key: "skip",
          value: function skip() {
            this.slides.slidePrev();
          }
        }]);

        return OnboardingPage;
      }();

      OnboardingPage.ctorParameters = function () {
        return [];
      };

      OnboardingPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"]]
        }]
      };
      OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-onboarding',
        template: _raw_loader_onboarding_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OnboardingPage);
      /***/
    },

    /***/
    "bcPs":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onboarding/onboarding.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function bcPs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header> </ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-slides pager=\"true\">\n    <ion-slide class=\"ion-padding\">\n      <img\n        src=\"https://blush.design/api/download?shareUri=yO1kz9LJre5E1vv2&c=Skin_0%7E583318-0.1%7Ec68e80&w=800&h=800&fm=png\"\n     style=\"height: 250px;\" />\n\n      <div class=\"slider-text\">\n        <h2>REPORT ISSUES</h2>\n\n        <p>\n          Quick and easy way to report a municipal issue Spot an issue, take a\n          photo and Send!\n        </p>\n      </div>\n\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"skip()\"\n          >Prev</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img  style=\"height: 250px;\"\n        src=\"https://blush.design/api/download?shareUri=iLRbQQJut3rYsPRo&c=Clothing_0%7Eff8333-0.2%7Effc81a-0.3.0.0.2.0%7Eff8333&w=800&h=800&fm=png\"\n      />\n\n      <div class=\"slider-text\">\n        <h2>STAY INFORMED </h2>\n\n        <p>Get the latest reported cases, within a specific areas near you.</p>\n      </div>\n\n      <div class=\"navigator\">\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"skip()\"\n          >Prev</ion-button\n        >\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"next()\"\n          >NEXT</ion-button\n        >\n      </div>\n    </ion-slide>\n    <ion-slide class=\"ion-padding\">\n      <img src=\"..//../assets/Tech Life - Communication.png\"  style=\"height: 250px;\" />\n\n      <div class=\"slider-text\">\n        <h2>EASY ACCESS </h2>\n\n        <p>Booking government facilities fast and quick  at the touch of a button </p>\n      </div>\n\n      <ion-button color=\"danger\" [routerLink]=\"'/home'\">GET STARTED</ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
      /***/
    },

    /***/
    "eQKf":
    /*!*********************************************************!*\
      !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OnboardingPageRoutingModule */

    /***/
    function eQKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function () {
        return OnboardingPageRoutingModule;
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


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onboarding.page */
      "QKJs");

      var routes = [{
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
      }];

      var OnboardingPageRoutingModule = function OnboardingPageRoutingModule() {
        _classCallCheck(this, OnboardingPageRoutingModule);
      };

      OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnboardingPageRoutingModule);
      /***/
    },

    /***/
    "tSXo":
    /*!*************************************************!*\
      !*** ./src/app/onboarding/onboarding.module.ts ***!
      \*************************************************/

    /*! exports provided: OnboardingPageModule */

    /***/
    function tSXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function () {
        return OnboardingPageModule;
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


      var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onboarding-routing.module */
      "eQKf");
      /* harmony import */


      var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding.page */
      "QKJs");

      var OnboardingPageModule = function OnboardingPageModule() {
        _classCallCheck(this, OnboardingPageModule);
      };

      OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]]
      })], OnboardingPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=onboarding-onboarding-module-es5.js.map