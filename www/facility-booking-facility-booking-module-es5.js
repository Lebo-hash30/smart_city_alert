(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-booking-facility-booking-module"], {
    /***/
    "1pey":
    /*!***********************************************************!*\
      !*** ./src/app/facility-booking/facility-booking.page.ts ***!
      \***********************************************************/

    /*! exports provided: FacilityBookingPage */

    /***/
    function pey(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityBookingPage", function () {
        return FacilityBookingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_facility_booking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./facility-booking.page.html */
      "4/++");
      /* harmony import */


      var _facility_booking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./facility-booking.page.scss */
      "CxB0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _problems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../problems.service */
      "dddy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FacilityBookingPage = /*#__PURE__*/function () {
        function FacilityBookingPage(data, router) {
          var _this = this;

          _classCallCheck(this, FacilityBookingPage);

          this.data = data;
          this.router = router;
          this.data.getFacilities().then(function (items) {
            _this.facilities = items;
            console.log(_this.facilities);
          });
        }

        _createClass(FacilityBookingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "viewMore",
          value: function viewMore(facility) {
            this.router.navigateByUrl('/bookings', {
              state: facility
            });
          }
        }]);

        return FacilityBookingPage;
      }();

      FacilityBookingPage.ctorParameters = function () {
        return [{
          type: _problems_service__WEBPACK_IMPORTED_MODULE_4__["ProblemsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      FacilityBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-facility-booking',
        template: _raw_loader_facility_booking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_facility_booking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FacilityBookingPage);
      /***/
    },

    /***/
    "4/++":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facility-booking/facility-booking.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Facilities</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"container mb-5\">\r\n    <div class=\" mt-3\" *ngFor=\"let facility of facilities\">\r\n      <div class=\"card cardContent\"  (click)=\"viewMore(facility)\">\r\n        <div>\r\n          <img src={{facility.center_image}} style=\"width: 200px\" />\r\n        </div>\r\n  \r\n        <div>\r\n          <h5 class=\"card-title\">{{facility.center_name}}</h5>\r\n  \r\n          <div style=\"display: flex; justify-content: space-between\">\r\n            <div>\r\n              <small>{{facility.center_location}}</small>\r\n            </div>\r\n            <div >\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "CxB0":
    /*!*************************************************************!*\
      !*** ./src/app/facility-booking/facility-booking.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function CxB0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\n.cardContent {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 30% 60%;\n  gap: 10%;\n  height: 140px;\n  font-family: 'Poppins', sans-serif;\n}\n.cardContent img {\n  height: 140px;\n}\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Poppins', sans-serif;\n}\np {\n  font-family: 'Poppins', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhY2lsaXR5LWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9IQUFZO0FBSVo7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsYUFBWTtFQUNaLGtDQUFrQztBQUZ0QztBQUtBO0VBQ0ksYUFBYTtBQUZqQjtBQUtBO0VBQ0ksa0NBQWtDO0FBRnRDO0FBS0E7RUFDSSxrQ0FBa0M7QUFGdEMiLCJmaWxlIjoiZmFjaWxpdHktYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwzMDAmZGlzcGxheT1zd2FwXCIpO1xyXG4uY29udGFpbmVye1xyXG4gICAgXHJcbn1cclxuLmNhcmRDb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjAlO1xyXG4gICAgZ2FwOiAxMCU7XHJcbiAgICBoZWlnaHQ6MTQwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FyZENvbnRlbnQgaW1nIHtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbmgxLGgyLGgzLGg0LGg1LGg2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "L6n7":
    /*!*************************************************************!*\
      !*** ./src/app/facility-booking/facility-booking.module.ts ***!
      \*************************************************************/

    /*! exports provided: FacilityBookingPageModule */

    /***/
    function L6n7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityBookingPageModule", function () {
        return FacilityBookingPageModule;
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


      var _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./facility-booking-routing.module */
      "yKd8");
      /* harmony import */


      var _facility_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./facility-booking.page */
      "1pey");

      var FacilityBookingPageModule = function FacilityBookingPageModule() {
        _classCallCheck(this, FacilityBookingPageModule);
      };

      FacilityBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _facility_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingPageRoutingModule"]],
        declarations: [_facility_booking_page__WEBPACK_IMPORTED_MODULE_6__["FacilityBookingPage"]]
      })], FacilityBookingPageModule);
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
            var _this2 = this;

            var id = this.firestore.createId();
            return new Promise(function (res, rej) {
              _this2.firestore.collection("DashProblems").doc(id).set({
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
            var _this3 = this;

            return new Promise(function (res, rej) {
              _this3.firestore.collection("DashProblems").valueChanges().subscribe(function (items) {
                _this3.presentLoading();

                res(items);
              });
            });
          }
        }, {
          key: "getFacilities",
          value: function getFacilities() {
            var _this4 = this;

            return new Promise(function (res, rej) {
              _this4.firestore.collection("addFacility").valueChanges().subscribe(function (items) {
                res(items);
              });
            });
          }
        }, {
          key: "getannoucements",
          value: function getannoucements() {
            var _this5 = this;

            return new Promise(function (res, rej) {
              _this5.firestore.collection("Announcements").valueChanges().subscribe(function (items) {
                res(items);
              });
            });
          }
        }, {
          key: "makeBookings",
          value: function makeBookings(name, email, cell, date, people, description) {
            var _this6 = this;

            var id = this.firestore.createId();
            return new Promise(function (res, rej) {
              _this6.firestore.collection("Bookings").doc(id).set({
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
    "yKd8":
    /*!*********************************************************************!*\
      !*** ./src/app/facility-booking/facility-booking-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: FacilityBookingPageRoutingModule */

    /***/
    function yKd8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityBookingPageRoutingModule", function () {
        return FacilityBookingPageRoutingModule;
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


      var _facility_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./facility-booking.page */
      "1pey");

      var routes = [{
        path: '',
        component: _facility_booking_page__WEBPACK_IMPORTED_MODULE_3__["FacilityBookingPage"]
      }];

      var FacilityBookingPageRoutingModule = function FacilityBookingPageRoutingModule() {
        _classCallCheck(this, FacilityBookingPageRoutingModule);
      };

      FacilityBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FacilityBookingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=facility-booking-facility-booking-module-es5.js.map