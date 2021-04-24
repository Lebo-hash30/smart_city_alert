(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcements-announcements-module"], {
    /***/
    "ARaP":
    /*!***************************************************************!*\
      !*** ./src/app/announcements/announcements-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AnnouncementsPageRoutingModule */

    /***/
    function ARaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementsPageRoutingModule", function () {
        return AnnouncementsPageRoutingModule;
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


      var _announcements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./announcements.page */
      "dFlE");

      var routes = [{
        path: '',
        component: _announcements_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsPage"]
      }];

      var AnnouncementsPageRoutingModule = function AnnouncementsPageRoutingModule() {
        _classCallCheck(this, AnnouncementsPageRoutingModule);
      };

      AnnouncementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnnouncementsPageRoutingModule);
      /***/
    },

    /***/
    "CKXo":
    /*!*******************************************************!*\
      !*** ./src/app/announcements/announcements.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function CKXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap\");\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFubm91bmNlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9IQUFZIiwiZmlsZSI6ImFubm91bmNlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "CrTx":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function CrTx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"text-align: center;\">Announcements</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n<div class=\"container mt-3\">\r\n  <div class=\"card mt-3\" *ngFor=\"let announcement of  announcement\">\r\n    <ion-card-subtitle style=\"text-align: center;\">\r\n      {{announcement.title}}\r\n      <ion-card-title>\r\n        {{announcement.description}}\r\n      </ion-card-title>\r\n    </ion-card-subtitle>\r\n    <ion-card-content>\r\n     {{announcement.area}}\r\n\r\n     <div class=\"mt-3\" style=\"display:flex;justify-content:space-between\">\r\n       <div>\r\n        <small>{{announcement.department}}</small>\r\n       </div> \r\n       <div>\r\n        <small>{{announcement.announcer}}</small>\r\n       </div>\r\n     </div>\r\n    </ion-card-content>\r\n  </div>\r\n</div>\r\n  \r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "FoIO":
    /*!*******************************************************!*\
      !*** ./src/app/announcements/announcements.module.ts ***!
      \*******************************************************/

    /*! exports provided: AnnouncementsPageModule */

    /***/
    function FoIO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementsPageModule", function () {
        return AnnouncementsPageModule;
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


      var _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./announcements-routing.module */
      "ARaP");
      /* harmony import */


      var _announcements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./announcements.page */
      "dFlE");

      var AnnouncementsPageModule = function AnnouncementsPageModule() {
        _classCallCheck(this, AnnouncementsPageModule);
      };

      AnnouncementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsPageRoutingModule"]],
        declarations: [_announcements_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementsPage"]]
      })], AnnouncementsPageModule);
      /***/
    },

    /***/
    "dFlE":
    /*!*****************************************************!*\
      !*** ./src/app/announcements/announcements.page.ts ***!
      \*****************************************************/

    /*! exports provided: AnnouncementsPage */

    /***/
    function dFlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnnouncementsPage", function () {
        return AnnouncementsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_announcements_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./announcements.page.html */
      "CrTx");
      /* harmony import */


      var _announcements_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./announcements.page.scss */
      "CKXo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _problems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../problems.service */
      "dddy");

      var AnnouncementsPage = /*#__PURE__*/function () {
        function AnnouncementsPage(firebase) {
          _classCallCheck(this, AnnouncementsPage);

          this.firebase = firebase;
        }

        _createClass(AnnouncementsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAnnouncement();
          }
        }, {
          key: "getAnnouncement",
          value: function getAnnouncement() {
            var _this = this;

            this.firebase.getannoucements().then(function (items) {
              _this.announcement = items;
              console.log(_this.announcement);
            });
          }
        }]);

        return AnnouncementsPage;
      }();

      AnnouncementsPage.ctorParameters = function () {
        return [{
          type: _problems_service__WEBPACK_IMPORTED_MODULE_4__["ProblemsService"]
        }];
      };

      AnnouncementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-announcements',
        template: _raw_loader_announcements_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_announcements_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AnnouncementsPage);
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
    }
  }]);
})();
//# sourceMappingURL=announcements-announcements-module-es5.js.map