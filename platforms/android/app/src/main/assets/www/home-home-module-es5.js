(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n     \n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <ion-slides #slides pager=\"true\" (ionSlideDidChange)=\"ionSlideChange(slides)\">\n\n    <ion-slide>\n      <img src=\"../../assets/taxi-app-development-banner.png\"  />\n        <img src=\"../../assets/GM-Cab_Final-Logo.png\" style=\"width:10rem; height:10rem\"/>\n        <h2>जीएम कॅब ड्रायव्हर मध्ये आपले स्वागत आहे</h2>\n        <p><b></b> </p>\n   \n    </ion-slide>\n\n    <!-- <ion-slide>\n      <img src=\"../../assets/105421125-drift-car-logo-automotive-logo-design-template.jpg\"/>\n      <h2>What is</h2>\n      <p><b></b> </p>\n    </ion-slide> -->\n\n  </ion-slides>\n  <!-- <ion-button class=\"tour-button\" click=\"next('t')\">\n     Next\n  </ion-button> -->\n<!-- </div> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
        }])],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --overflow:hidden;\n  text-align: center;\n}\n\nion-slide {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  min-height: 100%;\n  flex-direction: column;\n}\n\nion-slide p {\n  margin: 0;\n  font-size: 13px !important;\n  line-height: 15px !important;\n  color: #000;\n  margin-top: 0 !important;\n  padding-left: 35px;\n  padding-right: 35px;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  margin-bottom: 10px;\n}\n\n.center {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(49%, 49%);\n  width: 90%;\n}\n\nion-slides {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBM0JGOztBQThCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBM0JGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSw4QkFBQTtFQUNBLFVBQUE7QUExQkY7O0FBNkJBO0VBQ0UsaUJBQUE7QUExQkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI2NvbnRhaW5lciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIHN0cm9uZyB7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vICNjb250YWluZXIgcCB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbi8vICAgY29sb3I6ICM4YzhjOGM7XG5cbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIGEge1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzpoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXNsaWRle1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tc2xpZGUgcHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDsgIFxuICBwYWRkaW5nLWJvdHRvbTozMHB4O1xuICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG4uY2VudGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOjUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0OSUsNDklKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDklLDQ5JSk7XG4gIHdpZHRoOjkwJTtcbn1cblxuaW9uLXNsaWRlc3tcbiAgcGFkZGluZy10b3A6MTBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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

      var HomePage = /*#__PURE__*/function () {
        function HomePage(router, loadingCtrl, navCtrl) {
          _classCallCheck(this, HomePage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            setTimeout(function () {
              _this.router.navigate(['/main']);
            }, 2000);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map