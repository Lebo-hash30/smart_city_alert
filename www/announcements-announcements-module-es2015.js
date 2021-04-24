(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcements-announcements-module"],{

/***/ "ARaP":
/*!***************************************************************!*\
  !*** ./src/app/announcements/announcements-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AnnouncementsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsPageRoutingModule", function() { return AnnouncementsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _announcements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcements.page */ "dFlE");




const routes = [
    {
        path: '',
        component: _announcements_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsPage"]
    }
];
let AnnouncementsPageRoutingModule = class AnnouncementsPageRoutingModule {
};
AnnouncementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnnouncementsPageRoutingModule);



/***/ }),

/***/ "CKXo":
/*!*******************************************************!*\
  !*** ./src/app/announcements/announcements.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFubm91bmNlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9IQUFZIiwiZmlsZSI6ImFubm91bmNlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "CrTx":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"text-align: center;\">Announcements</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n<div class=\"container mt-3\">\r\n  <div class=\"card mt-3\" *ngFor=\"let announcement of  announcement\">\r\n    <ion-card-subtitle style=\"text-align: center;\">\r\n      {{announcement.title}}\r\n      <ion-card-title>\r\n        {{announcement.description}}\r\n      </ion-card-title>\r\n    </ion-card-subtitle>\r\n    <ion-card-content>\r\n     {{announcement.area}}\r\n\r\n     <div class=\"mt-3\" style=\"display:flex;justify-content:space-between\">\r\n       <div>\r\n        <small>{{announcement.department}}</small>\r\n       </div> \r\n       <div>\r\n        <small>{{announcement.announcer}}</small>\r\n       </div>\r\n     </div>\r\n    </ion-card-content>\r\n  </div>\r\n</div>\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "FoIO":
/*!*******************************************************!*\
  !*** ./src/app/announcements/announcements.module.ts ***!
  \*******************************************************/
/*! exports provided: AnnouncementsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsPageModule", function() { return AnnouncementsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./announcements-routing.module */ "ARaP");
/* harmony import */ var _announcements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./announcements.page */ "dFlE");







let AnnouncementsPageModule = class AnnouncementsPageModule {
};
AnnouncementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsPageRoutingModule"]
        ],
        declarations: [_announcements_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementsPage"]]
    })
], AnnouncementsPageModule);



/***/ }),

/***/ "dFlE":
/*!*****************************************************!*\
  !*** ./src/app/announcements/announcements.page.ts ***!
  \*****************************************************/
/*! exports provided: AnnouncementsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsPage", function() { return AnnouncementsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_announcements_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./announcements.page.html */ "CrTx");
/* harmony import */ var _announcements_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcements.page.scss */ "CKXo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _problems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../problems.service */ "dddy");





let AnnouncementsPage = class AnnouncementsPage {
    constructor(firebase) {
        this.firebase = firebase;
    }
    ngOnInit() {
        this.getAnnouncement();
    }
    getAnnouncement() {
        this.firebase.getannoucements().then((items) => {
            this.announcement = items;
            console.log(this.announcement);
        });
    }
};
AnnouncementsPage.ctorParameters = () => [
    { type: _problems_service__WEBPACK_IMPORTED_MODULE_4__["ProblemsService"] }
];
AnnouncementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-announcements',
        template: _raw_loader_announcements_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_announcements_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AnnouncementsPage);



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



/***/ })

}]);
//# sourceMappingURL=announcements-announcements-module-es2015.js.map