function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"about section-bg\" data-aos=\"fade-up\">\n    <div class=\"container pt-5\">\n        <div class=\"section-title\">\n            <h2>About </h2>\n            <h3 class=\"pt-2\">About <span>Me</span></h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4 text-center\" >\n                <img width=\"250px\" height=\"250px\" src=\"../../../assets/prashant.png\" class=\"rounded-circle\" alt=\"Cinque Terre\">\n            </div>\n            <div class=\"col-md-8 pt-4\">\n                <div>\n                    <div class=\"d-lg-block d-none\">\n                        <h3>Hello, I'm Prashant Katiyar</h3>\n                        <!-- <h3></h3> -->\n                        <h5>Mean Stack Developer </h5>\n                    </div>\n                     <div class=\"text-center d-sm-block d-lg-none\">\n                        <h3>Hello!</h3>\n                        <h3>I'm Prashant Katiyar</h3>\n                        <h5>Mean Stack Developer </h5>\n                    </div>\n                    <div>\n                        <p class=\"pt-2\">A dedicated and enthusiastic developer with a passion for web technologies. I enjoy learning new programming languages and frameworks, staying updated with the latest trends, and building scalable, user-friendly applications. With strong problem-solving skills and a love for coding, I strive to deliver high-quality solutions in every project I take on.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"d-flex flex-row\">\n                    <div class=\"p-3 \"><a href=\"https://www.linkedin.com/in/prashant-katiyar-259378177/\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></div>\n                    <div class=\"p-3 \"><a href=\"https://twitter.com/Prashan06902633\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></div>\n                    <div class=\"p-3 \"> <a href=\"https://github.com/prashantkat18\"><i class=\"fa fa-github-square\" aria-hidden=\"true\"></i></a></div>\n                    <div class=\"p-3 \">\n                        <a href=\"https://www.facebook.com/prashant.kat.77\"> <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div class=\"p-3 \"> <a href=\"https://www.youtube.com/watch?v=cg9VyPBHu94\"><i class=\"fa fa-youtube-square\" aria-hidden=\"true\"></i></a></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- <app-footer></app-footer> -->";
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
      return AboutRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/pages/about/about.component.ts");

    var routes = [{
      path: '',
      component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }];

    var AboutRoutingModule = function AboutRoutingModule() {
      _classCallCheck(this, AboutRoutingModule);
    };

    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/about/about.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 span {\n  color: #106eea;\n  font-weight: bold;\n}\n\na {\n  color: #000;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudGthdGl5YXIvRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0L3BlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHNwYW4ge1xuICAgIGNvbG9yOiMxMDZlZWE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcbn1cblxuYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufSIsImgyIHNwYW4ge1xuICBjb2xvcjogIzEwNmVlYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
          this.scrollToTop();
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - currentScroll / 5);
            }
          })();
        }
      }]);

      return AboutComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AboutComponent.prototype, "dataIs", void 0);
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/pages/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/pages/about/about.component.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]]
    })], AboutModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-about-module-es5.js.map