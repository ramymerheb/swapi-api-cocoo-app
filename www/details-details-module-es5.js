(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 class=\"mid\" *ngIf = \"!character\">Loading Characters</h2>\n  <ion-spinner *ngIf = \"!character\"></ion-spinner>\n\n  <span *ngIf = \"character\">\n    <ion-card>\n      <ion-card-title *ngIf=\"character.name\"><ion-label  [innerHtml]=\"character.name\"></ion-label></ion-card-title>\n      <ion-item *ngIf=\"character.height\"><ion-label>Height: {{character.height}}</ion-label></ion-item>\n      <ion-item *ngIf=\"character.mass\"><ion-label>Mass: {{character.mass}}</ion-label></ion-item>\n      <ion-item *ngIf=\"character.hair_color\"><ion-label>Hair color: {{character.hair_color}}</ion-label></ion-item>\n      <ion-item *ngIf=\"character.skin_color\"><ion-label>Skin color: {{character.skin_color}}</ion-label></ion-item>\n      <ion-item *ngIf=\"character.eye_color\"><ion-label>Eye color: {{character.eye_color}}</ion-label></ion-item>\n      <ion-item *ngIf=\"character.birth_year\"><ion-label>Birth year: {{character.birth_year}}</ion-label></ion-item>\n      <ion-item lines=\"none\" *ngIf=\"character.gender\" ><ion-label>Gender:  {{character.gender}}</ion-label></ion-item>\n    </ion-card>\n\n    <ion-card>\n      <ion-item  *ngFor=\"let film of character.films\" >\n        <ion-label [innerHtml]=\"film\"></ion-label>\n      </ion-item>\n    </ion-card>\n  </span>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/details/details-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/details/details-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function srcAppDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/details/details.page.ts");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/details/details.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/details/details.module.ts ***!
      \*******************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function srcAppDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "./src/app/details/details-routing.module.ts");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/details/details.page.ts");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "./src/app/details/details.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/details/details.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/details/details.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/details/details.page.ts ***!
      \*****************************************/

    /*! exports provided: DetailsPage */

    /***/
    function srcAppDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_characters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/characters.service */
      "./src/app/_services/characters.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(route, charactersService, storage, platform) {
          _classCallCheck(this, DetailsPage);

          this.route = route;
          this.charactersService = charactersService;
          this.storage = storage;
          this.platform = platform;
          this.filmList = [];
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getFilms();
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
              return _this.charactersService.getCharacter(params['id']);
            })).subscribe(function (data) {
              data.films.map(function (film) {
                //to retrun the film id
                var id = film.replace(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseAppUrl + 'films/', "").replace('/', ""); //replace film url with film name

                _this.filmList.push(_this.films[id]);
              });
              data.films = _this.filmList;
              _this.character = data;
            });
          }
        }, {
          key: "getFilms",
          value: function getFilms() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.storage.get("films").then(function (data) {
                        return _this2.films = data;
                      });
                      console.log(" this.films  ", this.films);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_characters_service__WEBPACK_IMPORTED_MODULE_6__["CharactersService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.page.scss */
        "./src/app/details/details.page.scss"))["default"]]
      })], DetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=details-details-module-es5.js.map