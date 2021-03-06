(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-booking-facility-booking-module"],{

/***/ "1pey":
/*!***********************************************************!*\
  !*** ./src/app/facility-booking/facility-booking.page.ts ***!
  \***********************************************************/
/*! exports provided: FacilityBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingPage", function() { return FacilityBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_facility_booking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./facility-booking.page.html */ "4/++");
/* harmony import */ var _facility_booking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facility-booking.page.scss */ "CxB0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _problems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../problems.service */ "dddy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let FacilityBookingPage = class FacilityBookingPage {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.data.getFacilities().then((items) => {
            this.facilities = items;
            console.log(this.facilities);
        });
    }
    ngOnInit() {
    }
    viewMore(facility) {
        this.router.navigateByUrl('/bookings', { state: facility });
    }
};
FacilityBookingPage.ctorParameters = () => [
    { type: _problems_service__WEBPACK_IMPORTED_MODULE_4__["ProblemsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FacilityBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-facility-booking',
        template: _raw_loader_facility_booking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_facility_booking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FacilityBookingPage);



/***/ }),

/***/ "4/++":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facility-booking/facility-booking.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Facilities</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"container mb-5\">\r\n    <div class=\" mt-3\" *ngFor=\"let facility of facilities\">\r\n      <div class=\"card cardContent\"  (click)=\"viewMore(facility)\">\r\n        <div>\r\n          <img src={{facility.center_image}} style=\"width: 200px\" />\r\n        </div>\r\n  \r\n        <div>\r\n          <h5 class=\"card-title\">{{facility.center_name}}</h5>\r\n  \r\n          <div style=\"display: flex; justify-content: space-between\">\r\n            <div>\r\n              <small>{{facility.center_location}}</small>\r\n            </div>\r\n            <div >\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "CxB0":
/*!*************************************************************!*\
  !*** ./src/app/facility-booking/facility-booking.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\n.cardContent {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 30% 60%;\n  gap: 10%;\n  height: 140px;\n  font-family: 'Poppins', sans-serif;\n}\n.cardContent img {\n  height: 140px;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Poppins', sans-serif;\n}\np {\n  font-family: 'Poppins', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhY2lsaXR5LWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9IQUFZO0FBSVo7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsYUFBWTtFQUNaLGtDQUFrQztBQUZ0QztBQUtBO0VBQ0ksYUFBYTtBQUZqQjtBQUtBO0VBQ0ksa0NBQWtDO0FBRnRDO0FBS0E7RUFDSSxrQ0FBa0M7QUFGdEMiLCJmaWxlIjoiZmFjaWxpdHktYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG4uY29udGFpbmVye1xyXG4gICAgXHJcbn1cclxuLmNhcmRDb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjAlO1xyXG4gICAgZ2FwOiAxMCU7XHJcbiAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZENvbnRlbnQgaW1nIHtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbmgxLGgyLGgzLGg0LGg1LGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ "L6n7":
/*!*************************************************************!*\
  !*** ./src/app/facility-booking/facility-booking.module.ts ***!
  \*************************************************************/
/*! exports provided: FacilityBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingPageModule", function() { return FacilityBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facility-booking-routing.module */ "yKd8");
/* harmony import */ var _facility_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facility-booking.page */ "1pey");







let FacilityBookingPageModule = class FacilityBookingPageModule {
};
FacilityBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingPageRoutingModule"]
        ],
        declarations: [_facility_booking_page__WEBPACK_IMPORTED_MODULE_6__["FacilityBookingPage"]]
    })
], FacilityBookingPageModule);



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

/***/ "yKd8":
/*!*********************************************************************!*\
  !*** ./src/app/facility-booking/facility-booking-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FacilityBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingPageRoutingModule", function() { return FacilityBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _facility_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-booking.page */ "1pey");




const routes = [
    {
        path: '',
        component: _facility_booking_page__WEBPACK_IMPORTED_MODULE_3__["FacilityBookingPage"]
    }
];
let FacilityBookingPageRoutingModule = class FacilityBookingPageRoutingModule {
};
FacilityBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FacilityBookingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=facility-booking-facility-booking-module-es2015.js.map