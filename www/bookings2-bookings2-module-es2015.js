(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings2-bookings2-module"],{

/***/ "8fnn":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings2/bookings2.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/booking facility/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"text-align: center;\">GALESHEWE SMME VILLAGE</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <div class=\"container mt-3\">\r\n  \r\n      <div class=\"card\"  style=\"width: 20rem;\">\r\n        <img src=\"..//../assets/images.SMME1.jfif\" class=\"card-img-top\" alt=\"...\" />\r\n        \r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Art center</h5>\r\n          <h3>Description</h3>\r\n          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum cumque vitae deserunt alias delectus\r\n            blanditiis nobis ea soluta eius sunt eum, enim, quas sint labore voluptates repudiandae saepe eaque!</p>\r\n          </div>\r\n          <div class=\"border-top\"></div>\r\n        <div  class=\"container mt-3\" style=\"display: grid; grid-template-columns: 50% 50%; height: 100px;\">\r\n    \r\n          <div>\r\n            <i class=\"fas fa-map-marker-alt\"></i>\r\n            <small class=\"pl-2\">Crn Tyala and Hulana</small><br>\r\n            <small class=\"pl-4\">Direction </small>\r\n          </div>\r\n    \r\n          <div>\r\n            <i class=\"fas fa-phone-alt\"></i><small class=\"pl-2\">07 93393939 </small> \r\n          </div>\r\n\r\n          <div>\r\n            <i class=\"fas fa-envelope-open\"></i> <small class=\"pl-2\"> lebo@gmail.com </small>\r\n          </div>\r\n\r\n\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\"  [routerLink]=\"'/forms'\">Book now</button>\r\n          </div>\r\n       \r\n        </div>\r\n\r\n       \r\n      </div>\r\n    </div>\r\n      \r\n  </ion-list>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "NEEn":
/*!*********************************************!*\
  !*** ./src/app/bookings2/bookings2.page.ts ***!
  \*********************************************/
/*! exports provided: Bookings2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookings2Page", function() { return Bookings2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bookings2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bookings2.page.html */ "8fnn");
/* harmony import */ var _bookings2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookings2.page.scss */ "jgWI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Bookings2Page = class Bookings2Page {
    constructor() { }
    ngOnInit() {
    }
};
Bookings2Page.ctorParameters = () => [];
Bookings2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bookings2',
        template: _raw_loader_bookings2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bookings2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Bookings2Page);



/***/ }),

/***/ "gO8d":
/*!*******************************************************!*\
  !*** ./src/app/bookings2/bookings2-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Bookings2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookings2PageRoutingModule", function() { return Bookings2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bookings2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings2.page */ "NEEn");




const routes = [
    {
        path: '',
        component: _bookings2_page__WEBPACK_IMPORTED_MODULE_3__["Bookings2Page"]
    }
];
let Bookings2PageRoutingModule = class Bookings2PageRoutingModule {
};
Bookings2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Bookings2PageRoutingModule);



/***/ }),

/***/ "jgWI":
/*!***********************************************!*\
  !*** ./src/app/bookings2/bookings2.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Poppins', sans-serif;\n}\np {\n  font-family: 'Poppins', sans-serif;\n}\ni {\n  font-size: 15px;\n  color: #e97171;\n}\n.btn {\n  width: 100px;\n  height: 35px;\n  border: 2px solid #e97171;\n  color: black;\n  padding-bottom: 5px;\n  margin-left: 5px;\n}\nsmall {\n  font-family: 'Poppins', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2tpbmdzMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0hBQVk7QUFFWjtFQUNJLGtDQUFrQztBQUF0QztBQUVBO0VBQ0ksa0NBQWtDO0FBQ3RDO0FBRUE7RUFDSSxlQUFlO0VBQ2YsY0FBYTtBQUNqQjtBQUNBO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFFcEI7QUFDQTtFQUNJLGtDQUFrQztBQUV0QyIsImZpbGUiOiJib29raW5nczIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbmgxLGgyLGgzLGg0LGg1LGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6I2U5NzE3MTtcclxufVxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlOTcxNzE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuc21hbGx7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59Il19 */");

/***/ }),

/***/ "z5Yp":
/*!***********************************************!*\
  !*** ./src/app/bookings2/bookings2.module.ts ***!
  \***********************************************/
/*! exports provided: Bookings2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookings2PageModule", function() { return Bookings2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bookings2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings2-routing.module */ "gO8d");
/* harmony import */ var _bookings2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings2.page */ "NEEn");







let Bookings2PageModule = class Bookings2PageModule {
};
Bookings2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookings2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Bookings2PageRoutingModule"]
        ],
        declarations: [_bookings2_page__WEBPACK_IMPORTED_MODULE_6__["Bookings2Page"]]
    })
], Bookings2PageModule);



/***/ })

}]);
//# sourceMappingURL=bookings2-bookings2-module-es2015.js.map