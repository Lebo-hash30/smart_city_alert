(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"services mt-5\">\r\n\r\n    <ion-slides pager=\"false\" [options]=\"slideServices\">\r\n      <ion-slide> <div class=\"services_content\" [routerLink]=\"'/report'\">\r\n        <i class=\"fas fa-exclamation-triangle\"></i>\r\n        <h6 style=\"padding-top:15%;padding-left:15%;\">Report case</h6>\r\n      </div>\r\n    </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"services_content\" [routerLink]=\"'/facility-booking'\">\r\n          <i class=\"fas fa-poll-h\"></i>\r\n          <h6 style=\"padding-top: 15%;padding-left:15%;\">Book facility</h6>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"services_content\" [routerLink]=\"'/announcements'\">\r\n          <i class=\"fas fa-bullhorn\"></i>\r\n          <h6 style=\"padding-top: 15%;padding-left:15%;\">Updates</h6>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n   \r\n  </div>\r\n\r\n  <div class=\"report_issues\">\r\n    <h1 style=\"padding-left: 15px; font-family: 'Poppins', sans-serif\">\r\n      Reported issues\r\n    </h1>\r\n    <small style=\"padding-left: 15px; font-family: 'Poppins', sans-serif\"\r\n      >Track cases</small\r\n    >\r\n    <small></small>\r\n    <ion-slides pager=\"false\" [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let issues of issues\">\r\n        <ion-card class=\"card\" (click)=\"viewcase(issues)\">\r\n          <img src=\"{{ issues.picture}}\" />\r\n          <div *ngIf=\"issues.status=='pending'; else elseBlock\" class=\"status\" style=\"background-color: red;\">\r\n                Pending\r\n          </div>\r\n          <ng-template #elseBlock class=\"status\" style=\"background-color: green;\"\r\n            >Resolved</ng-template\r\n          >\r\n          <ion-card-header>\r\n            <ion-card-subtitle> Local Government Issue </ion-card-subtitle>\r\n            <ion-card-title>{{issues.problemType}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <p>{{issues.comment.substring(0,20)}} ......</p>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <div class=\"government_facility\">\r\n    <h1 style=\"padding-left: 15px; font-family: 'Poppins', sans-serif\">\r\n      Government facility\r\n    </h1>\r\n    <small style=\"padding-left: 15px; font-family: 'Poppins', sans-serif\"\r\n      >Any queries and bookings</small\r\n    >\r\n\r\n    <ion-slides\r\n      pager=\"false\"\r\n      [options]=\"slideOpts\"\r\n      class=\"card-background-page\"\r\n    >\r\n      <ion-slide *ngFor=\"let facility of  facilities \">\r\n        <ion-card (click)=\"viewMore(facility)\">\r\n          <img src=\"{{facility.center_image}}\" style=\"height: 150px\" />\r\n          <div class=\"card-title\">{{facility.center_name}}</div>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\n.content {\n  width: 100%;\n  font-family: 'Poppins', sans-serif;\n  background-color: whitesmoke;\n}\np {\n  font-size: 12px;\n  line-height: 18px;\n  color: #777;\n  font-family: 'Poppins', sans-serif;\n}\nh6 {\n  font-size: 10px;\n  padding-top: 10px;\n  line-height: 18px;\n  font-family: 'Poppins', sans-serif;\n}\nh1 {\n  font-size: 25px;\n  padding-top: 10px;\n  line-height: 18px;\n  color: #e97171;\n}\n.services_content {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: solid steelblue 2px;\n  display: inline-block;\n  margin-left: 10%;\n  margin-top: 5%;\n}\ni {\n  text-align: center;\n  padding-left: 20px;\n  padding-top: 25px;\n  font-size: 25px;\n}\n.card {\n  position: relative;\n  height: 250px;\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n.card-title {\n  font-family: 'Poppins', sans-serif;\n}\n.status {\n  position: absolute;\n  top: 80px;\n  left: 85px;\n  padding: 5px;\n  color: white;\n}\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  font-size: 15px;\n}\n.card-background-page .card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\ni {\n  color: #e97171;\n  font-size: 25px;\n  padding-left: 12%;\n}\nion-card-subtitle {\n  font-family: 'Poppins', sans-serif;\n}\ndiv {\n  font-family: 'Poppins', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9IQUFZO0FBRVo7RUFDRSxXQUFVO0VBQ1Qsa0NBQWtDO0VBQ2xDLDRCQUE0QjtBQUEvQjtBQU9BO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0NBQWtDO0FBSnBDO0FBT0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQ0FBa0M7QUFKcEM7QUFPQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFKaEI7QUFRQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFMaEI7QUFRQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFMakI7QUFRQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQWdCO0VBQ2hCLDBEQUFhO0FBTGY7QUFTQTtFQUNFLGtDQUFrQztBQU5wQztBQVFBO0VBQ0Usa0JBQWtCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUVaLFlBR0g7QUFUQTtBQWFBO0VBR0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQVp0QjtBQVFBO0VBUUksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtBQVpuQjtBQUZBO0VBa0JJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0FBWmY7QUFpQkE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQWRuQjtBQWlCQTtFQUNFLGtDQUFrQztBQWRwQztBQWlCQTtFQUNFLGtDQUFrQztBQWRwQyIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDMwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uc2VydmljZSB7XHJcbiBcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmg2e1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICNlOTcxNzE7XHJcbn1cclxuICBcclxuXHJcbi5zZXJ2aWNlc19jb250ZW50e1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiBzb2xpZCBzdGVlbGJsdWUgMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG5pIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNkMWQxZDEsIC01cHggLTVweCAxMHB4ICNGRkZGRkY7XHJcblxyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5zdGF0dXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiA4MHB4O1xyXG4gICBsZWZ0OiA4NXB4OyBcclxuICAgcGFkZGluZzogNXB4O1xyXG4gIFxyXG4gICBjb2xvcjp3aGl0ZVxyXG4gIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2JTtcclxuICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbml7XHJcbiAgY29sb3I6ICNlOTcxNzE7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTIlO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _problems_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../problems.service */ "dddy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");





const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];


let HomePage = class HomePage {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 2,
        };
        this.slideServices = {
            initialSlide: 0,
            slidesPerView: 3,
        };
        this.data.getFacilities().then((items) => {
            this.facilities = items;
            console.log(items);
        });
        this.getIssues();
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].Uri,
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;
            // Can be set to the src of an image now
            this.image = imageUrl;
        });
    }
    viewcase(issues) {
        this.router.navigateByUrl('/viewcase', { state: issues });
    }
    viewMore(facility) {
        this.router.navigateByUrl('/bookings', { state: facility });
    }
    getIssues() {
        this.data.getProblem().then((items) => {
            this.issues = items;
            console.log(this.issues);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _problems_service__WEBPACK_IMPORTED_MODULE_5__["ProblemsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map