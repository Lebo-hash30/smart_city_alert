(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"], {
    /***/
    "9Nm5":
    /*!***************************************!*\
      !*** ./src/app/forms/forms.module.ts ***!
      \***************************************/

    /*! exports provided: FormsPageModule */

    /***/
    function Nm5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsPageModule", function () {
        return FormsPageModule;
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


      var _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forms-routing.module */
      "a03z");
      /* harmony import */


      var _forms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forms.page */
      "eRVU");

      var FormsPageModule = function FormsPageModule() {
        _classCallCheck(this, FormsPageModule);
      };

      FormsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormsPageRoutingModule"]],
        declarations: [_forms_page__WEBPACK_IMPORTED_MODULE_6__["FormsPage"]]
      })], FormsPageModule);
      /***/
    },

    /***/
    "a03z":
    /*!***********************************************!*\
      !*** ./src/app/forms/forms-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: FormsPageRoutingModule */

    /***/
    function a03z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsPageRoutingModule", function () {
        return FormsPageRoutingModule;
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


      var _forms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forms.page */
      "eRVU");

      var routes = [{
        path: '',
        component: _forms_page__WEBPACK_IMPORTED_MODULE_3__["FormsPage"]
      }];

      var FormsPageRoutingModule = function FormsPageRoutingModule() {
        _classCallCheck(this, FormsPageRoutingModule);
      };

      FormsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormsPageRoutingModule);
      /***/
    },

    /***/
    "dddy":
    /*!*************************************!*\
      !*** ./src/app/problems.service.ts ***!
      \*************************************/

    /*! exports provided: ProblemsService */

    /***/
    function dddy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProblemsService", function () {
        return ProblemsService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ProblemsService = /*#__PURE__*/function () {
        function ProblemsService(firestore, // firestore
        loadingController) {
          _classCallCheck(this, ProblemsService);

          this.firestore = firestore;
          this.loadingController = loadingController;
        }

        _createClass(ProblemsService, [{
          key: "reportProblems",
          value: function reportProblems(type, duration, severe, comment, lat, lng, status, picture) {
            var _this = this;

            var id = this.firestore.createId();
            return new Promise(function (res, rej) {
              _this.firestore.collection("DashProblems").doc(id).set({
                problemType: type,
                duration: duration,
                severity: severe,
                comment: comment,
                picture: picture,
                lat: lat,
                lng: lng,
                status: status
              }).then(function () {
                res('');
              })["catch"](function (error) {});
            });
          }
        }, {
          key: "getProblem",
          value: function getProblem() {
            var _this2 = this;

            return new Promise(function (res, rej) {
              _this2.firestore.collection("DashProblems").valueChanges().subscribe(function (items) {
                _this2.presentLoading();

                res(items);
              });
            });
          }
        }, {
          key: "getFacilities",
          value: function getFacilities() {
            var _this3 = this;

            return new Promise(function (res, rej) {
              _this3.firestore.collection("addFacility").valueChanges().subscribe(function (items) {
                res(items);
              });
            });
          }
        }, {
          key: "getannoucements",
          value: function getannoucements() {
            var _this4 = this;

            return new Promise(function (res, rej) {
              _this4.firestore.collection("Announcements").valueChanges().subscribe(function (items) {
                res(items);
              });
            });
          }
        }, {
          key: "makeBookings",
          value: function makeBookings(name, email, cell, date, people, description) {
            var _this5 = this;

            var id = this.firestore.createId();
            return new Promise(function (res, rej) {
              _this5.firestore.collection("Bookings").doc(id).set({
                name: name,
                email: email,
                date: date,
                people: people,
                description: description,
                cell: cell
              }).then(function () {
                res('');
              })["catch"](function (error) {
                rej(error);
              });
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            //-28.74378920728236, 24.765178509039064
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                var geocoder = new google.maps.Geocoder();
                var latlng = {
                  lat: -28.74378920728236,
                  lng: 24.765178509039064
                };
                geocoder.geocode({
                  'location': latlng
                }, function (results, status) {
                  var address = results[0].address_components[3].short_name;
                  console.log(address);
                  console.log(results[0]);
                  resolve(address);
                }, 8000);
              });
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;
                      console.log('Loading dismissed!');

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProblemsService;
      }();

      ProblemsService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      ProblemsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProblemsService);
      /***/
    },

    /***/
    "dqQA":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/forms.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function dqQA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center\">Fill in the Forms</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container mt-5\">\r\n  <div class=\"card \">\r\n    <div class=\"container\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label class=\"pt-3\" style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n            >Name</label\r\n          >\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n            >Email</label\r\n          >\r\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" />\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n            >Cell phone</label\r\n          >\r\n          <input\r\n            type=\"tel\"\r\n            class=\"form-control\"\r\n            maxlength=\"10\"\r\n            [(ngModel)]=\"cell\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n          >Start date</label\r\n        >\r\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"dateS\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n          >End date</label\r\n        >\r\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"dateE\" />\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label style=\"color: rgb(47, 79, 63); font-weight: bolder\"\r\n          >Number of People</label\r\n        >\r\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"number\" />\r\n\r\n        <ion-list>\r\n          <ion-list-header>\r\n            <ion-label style=\"color: rgb(47, 79, 63); font-weight: bolder\">\r\n              Description\r\n            </ion-label>\r\n          </ion-list-header>\r\n\r\n          <textarea\r\n            class=\"form-control\"\r\n            placeholder=\"Please provide add description to let us better understand your reason for booking this facility\"\r\n            [(ngModel)]=\"description\"\r\n          ></textarea>\r\n        </ion-list>\r\n      </div>\r\n\r\n      <button (click)=\"makeBookings()\" class=\"btn mb-3\" >BOOK</button>\r\n    </div>\r\n\r\n    </div>\r\n    \r\n      \r\n  </div>\r\n\r\n  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "eRVU":
    /*!*************************************!*\
      !*** ./src/app/forms/forms.page.ts ***!
      \*************************************/

    /*! exports provided: FormsPage */

    /***/
    function eRVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsPage", function () {
        return FormsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forms.page.html */
      "dqQA");
      /* harmony import */


      var _forms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms.page.scss */
      "fq2q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _problems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../problems.service */
      "dddy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FormsPage = /*#__PURE__*/function () {
        function FormsPage(firebase, alertController, router) {
          _classCallCheck(this, FormsPage);

          this.firebase = firebase;
          this.alertController = alertController;
          this.router = router;
        }

        _createClass(FormsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "makeBookings",
          value: function makeBookings() {
            var _this6 = this;

            this.firebase.makeBookings(this.name, this.email, this.cell, this.dateS, this.number, this.description).then(function () {}).then(function () {
              _this6.presentAlert("Booked successfully");

              _this6.router.navigateByUrl('/home');
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: "my-custom-class",
                        header: "Bookings",
                        subHeader: "Booking facility",
                        message: message
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return FormsPage;
      }();

      FormsPage.ctorParameters = function () {
        return [{
          type: _problems_service__WEBPACK_IMPORTED_MODULE_4__["ProblemsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      FormsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-forms",
        template: _raw_loader_forms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormsPage);
      /***/
    },

    /***/
    "fq2q":
    /*!***************************************!*\
      !*** ./src/app/forms/forms.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function fq2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background-color: #e97171;\n  color: white;\n  margin-left: 10%;\n  width: 70%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJmb3Jtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5NzE3MTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=forms-forms-module-es5.js.map