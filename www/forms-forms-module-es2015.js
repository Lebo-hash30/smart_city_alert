(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "9Nm5":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: FormsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageModule", function() { return FormsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-routing.module */ "a03z");
/* harmony import */ var _forms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.page */ "eRVU");







let FormsPageModule = class FormsPageModule {
};
FormsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsPageRoutingModule"]
        ],
        declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]]
    })
], FormsPageModule);



/***/ }),

/***/ "a03z":
/*!***********************************************!*\
  !*** ./src/app/forms/forms-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FormsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPageRoutingModule", function() { return FormsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.page */ "eRVU");




const routes = [
    {
        path: '',
        component: _forms_page__WEBPACK_IMPORTED_MODULE_3__["FormsPage"]
    }
];
let FormsPageRoutingModule = class FormsPageRoutingModule {
};
FormsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormsPageRoutingModule);



/***/ }),

/***/ "dddy":
/*!*************************************!*\
  !*** ./src/app/problems.service.ts ***!
  \*************************************/
/*! exports provided: ProblemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsService", function() { return ProblemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let ProblemsService = class ProblemsService {
    constructor(firestore, // firestore
    loadingController) {
        this.firestore = firestore;
        this.loadingController = loadingController;
    }
    reportProblems(type, duration, severe, comment, lat, lng, status, picture) {
        let id = this.firestore.createId();
        return new Promise((res, rej) => {
            this.firestore.collection("DashProblems").doc(id).set({
                problemType: type,
                duration: duration,
                severity: severe,
                comment: comment,
                picture: picture,
                lat: lat,
                lng: lng,
                status: status
            }).then(() => {
                res('');
            }).catch((error) => {
            });
        });
    }
    getProblem() {
        return new Promise((res, rej) => {
            this.firestore.collection("DashProblems").valueChanges().subscribe((items) => {
                this.presentLoading();
                res(items);
            });
        });
    }
    getFacilities() {
        return new Promise((res, rej) => {
            this.firestore.collection("addFacility").valueChanges().subscribe((items) => {
                res(items);
            });
        });
    }
    getannoucements() {
        return new Promise((res, rej) => {
            this.firestore.collection("Announcements").valueChanges().subscribe((items) => {
                res(items);
            });
        });
    }
    makeBookings(name, email, cell, date, people, description) {
        let id = this.firestore.createId();
        return new Promise((res, rej) => {
            this.firestore.collection("Bookings").doc(id).set({
                name: name,
                email,
                date: date,
                people,
                description,
                cell: cell
            }).then(() => {
                res('');
            }).catch((error) => {
                rej(error);
            });
        });
    }
    getLocation() {
        //-28.74378920728236, 24.765178509039064
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var geocoder = new google.maps.Geocoder;
                var latlng = { lat: -28.74378920728236, lng: 24.765178509039064 };
                geocoder.geocode({ 'location': latlng }, function (results, status) {
                    var address = results[0].address_components[3].short_name;
                    console.log(address);
                    console.log(results[0]);
                    resolve(address);
                }, 8000);
            });
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
ProblemsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ProblemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProblemsService);



/***/ }),

/***/ "dqQA":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center\">Fill in the Forms</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container mt-5\">\r\n  <div class=\"card \">\r\n    <div class=\"container\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"pt-3\" style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n            >Name</label\r\n          >\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n            >Email</label\r\n          >\r\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n            >Cell phone</label\r\n          >\r\n          <input\r\n            type=\"tel\"\r\n            class=\"form-control\"\r\n            maxlength=\"10\"\r\n            [(ngModel)]=\"cell\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n          >Start date</label\r\n        >\r\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"dateS\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n          >End date</label\r\n        >\r\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"dateE\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n          >Number of People</label\r\n        >\r\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"number\" />\r\n\r\n        <ion-list>\r\n          <ion-list-header>\r\n            <ion-label style=\"color: rgb(47, 79, 63); font-weight: bolder\">\r\n              Description\r\n            </ion-label>\r\n          </ion-list-header>\r\n\r\n          <textarea\r\n            class=\"form-control\"\r\n            placeholder=\"Please provide add description to let us better understand your reason for booking this facility\"\r\n            [(ngModel)]=\"description\"\r\n          ></textarea>\r\n        </ion-list>\r\n      </div>\r\n\r\n      <button (click)=\"makeBookings()\" class=\"btn mb-3\" >BOOK</button>\r\n    </div>\r\n\r\n    </div>\r\n    \r\n      \r\n  </div>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "eRVU":
/*!*************************************!*\
  !*** ./src/app/forms/forms.page.ts ***!
  \*************************************/
/*! exports provided: FormsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsPage", function() { return FormsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forms.page.html */ "dqQA");
/* harmony import */ var _forms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.page.scss */ "fq2q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _problems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../problems.service */ "dddy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let FormsPage = class FormsPage {
    constructor(firebase, alertController, router) {
        this.firebase = firebase;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() { }
    makeBookings() {
        this.firebase
            .makeBookings(this.name, this.email, this.cell, this.dateS, this.number, this.description)
            .then(() => {
        })
            .then(() => {
            this.presentAlert("Booked successfully");
            this.router.navigateByUrl('/home');
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Bookings",
                subHeader: "Booking facility",
                message: message,
            });
            yield alert.present();
        });
    }
};
FormsPage.ctorParameters = () => [
    { type: _problems_service__WEBPACK_IMPORTED_MODULE_4__["ProblemsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FormsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-forms",
        template: _raw_loader_forms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FormsPage);



/***/ }),

/***/ "fq2q":
/*!***************************************!*\
  !*** ./src/app/forms/forms.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background-color: #e97171;\n  color: white;\n  margin-left: 10%;\n  width: 70%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJmb3Jtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5NzE3MTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=forms-forms-module-es2015.js.map