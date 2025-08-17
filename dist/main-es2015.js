(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div style=\"margin-top: 5%;\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section-bg\">\n    <div class=\"container mt-4\">\n        <div class=\"row mt-5 mb-4\">\n            <div class=\"col-md-8\">\n                <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <img src=\"../../../assets/preview16.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h5>Please Sign In</h5>\n                                <p>Some representative placeholder content for the first slide.</p>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img src=\"../../../assets/preview16.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h5>Please Sign In</h5>\n                                <p>Some representative placeholder content for the second slide.</p>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img src=\"../../../assets/preview16.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h5>Please Sign In</h5>\n                                <p>Some representative placeholder content for the third slide.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-4 border p-4\" style=\"background-color: #ffff;\">\n                <div class=\"section-title mt-1\">\n                    <h3>Sign <span> In</span></h3>\n                </div>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onClickSubmit(loginForm.value)\" class=\"form-signin\">\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputPassword1\">Email</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputPassword1\">Password</label>\n                        <input class=\"form-control\" type=\"password\" id=\"inputPassword\" class=\"form-control\"\n                            formControlName=\"password\" placeholder=\"Password\" required>\n                    </div>\n\n                    <div class=\"d-flex flex-row bd-highlight mb-3\">\n                        <div class=\"p-2 bd-highlight\"> <button type=\"submit\"\n                                class=\"btn btn-outline-primary text-uppercase\">Sign In</button>\n                        </div>\n                        <div class=\"p-2 bd-highlight\">\n                            <p class=\"pt-2\">Don't have an account ? <span routerLink=\"/signup\">Sign Up</span></p>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section-bg\">\n    <div class=\"container mt-4\">\n        <div class=\"row mt-5 mb-4\">\n            <div class=\"col-md-8\">\n                <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            <img src=\"../../../assets/preview16.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h5>Please Sign up</h5>\n                                <p>Some representative placeholder content for the first slide.</p>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img src=\"../../../assets/preview16.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h5>Please Signup</h5>\n                                <p>Some representative placeholder content for the second slide.</p>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <img src=\"../../../assets/preview16.jpg\" class=\"d-block w-100\" alt=\"...\">\n                            <div class=\"carousel-caption d-none d-md-block\">\n                                <h5>Please Signup</h5>\n                                <p>Some representative placeholder content for the third slide.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-4 border p-4\" style=\"background-color: #ffff;\">\n                <div class=\"section-title\">\n                    <h3>Sign <span> Up</span></h3>\n                </div>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\n                    <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" formControlName=\"name\" placeholder=\"Name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-center mb-2\">\n                        <div class=\"p-2 bd-highlight\"> <button \n                                class=\"btn btn-outline-primary text-uppercase\">Sign Up</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer id=\"footer\">\n  <div class=\"footer-top\" style=\"background-color: #000000;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 \">\n          <h3>Prashant Kat</h3>\n          <p> <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> &nbsp;Mobile Number :-  <span class=\"font-weight-bold\"> +91 8840091275</span><br><br>\n             <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp;\n              Email:- prashantkat10796@gmail.com<br>\n          </p>\n        </div>\n        <div class=\"col-lg-6 col-md-6 footer-links\">\n          <!-- <h3> Contact Info</h3> -->\n          <h4> <i class=\"fa fa-map-marker\"></i> &nbsp;\n            Address </h4>\n          <p>Plot No. 2154, 5th Floor, HUDA Colony, Sector 46, Gurugram, Haryana 122001</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div style=\"background-color: #131111;color: #e5e2e2; \">\n  <div class=\"container\">\n    <div class=\"row py-3 \">\n      <div class=\"col-md-6 pt-4\">\n       <p> Copyright © Prashantkat 2021</p>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"d-flex flex-row\">\n          <div class=\"p-3 \"><a href=\"https://www.linkedin.com/in/prashant-katiyar-259378177/\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></div>\n          <div class=\"p-3 \"><a href=\"https://twitter.com/Prashan06902633\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></div>\n          <div class=\"p-3 \"> <a href=\"https://github.com/prashantkat18\"><i class=\"fa fa-github-square\" aria-hidden=\"true\"></i></a></div>\n          <div class=\"p-3 \"><a href=\"https://www.facebook.com/prashant.kat.77\"> <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></div>\n          <div class=\"p-3 \"> <a href=\"https://www.youtube.com/watch?v=cg9VyPBHu94\"><i class=\"fa fa-youtube-square\" aria-hidden=\"true\"></i></a></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"topbar\" class=\"d-none d-lg-flex p-4 align-items-center fixed-top\">\n    <div class=\"container d-flex\">\n        <div class=\"contact-info mr-auto pt-2\">\n            <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp;\n            <a class=\"h6\">prashantkat10796@gmail.com</a>\n        </div>\n        <div class=\"contact-info ml-auto pt-2 h6\">\n            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +91 8840091275 &nbsp;\n            <a href=\"https://www.linkedin.com/in/prashant-katiyar-259378177/\"><i class=\"fa fa-linkedin-square\"\n                    aria-hidden=\"true\"></i></a> &nbsp;\n            <a href=\"https://twitter.com/prashantkat18\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a> &nbsp;\n            <a href=\"https://www.facebook.com/prashant.kat.77\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a>\n        </div>\n        <div class=\"social-links\">\n            <i style=\"background-color: aliceblue;\" styclass=\"icofont-twitter\"></i>\n        </div>&nbsp;\n        <!-- <div class=\"pt-2 pr-2 pl-2 text-warning h6\">{{this.addProvider.userName}}</div>s -->\n        <!-- <div *ngIf=\"!this.addProvider.isUserLoggedIn\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" routerLink=\"login\">Sign In</button>\n        </div>\n        <div *ngIf=\"this.addProvider.isUserLoggedIn\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"logout()\">logout</button>\n        </div> -->\n    </div>\n</div>\n\n\n<header id=\"header\" class=\"fixed-top\">\n    <div class=\"container p-0\">\n        <nav class=\"navbar navbar-expand-lg navbar-light pt-0 pb-0 \">\n            <h1 class=\"navbar-brand logo\">Prashant <span>Kat</span></h1>\n            <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse show\" id=\"navbarSupportedContent\" [ngClass]=\"{ 'show': navbarOpen }\">\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item \" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">\n                        <a class=\"nav-link \" routerLink=\"home\">HOME</a>\n                    </li>\n                    <li class=\"nav-item\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">\n                        <a class=\"nav-link \" routerLink=\"/about\">ABOUT</a>\n                    </li>\n                    <li class=\"nav-item \" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">\n                        <a class=\"nav-link \" routerLink=\"projects\">PROJECTS</a>\n                    </li>\n                    <li class=\"nav-item\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">\n                        <a class=\"nav-link \" routerLink=\"otherInfo\">OTHER INFO</a>\n                    </li>\n                    <li class=\"nav-item\" (click)=\"toggleNavbar()\" routerLinkActive=\"active\">\n                        <a class=\"nav-link \" routerLink=\"contactus\">CONTACT US</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <p class=\"text-center h5 text-dark p-3\">Sorry you can't see </p>\n    <p class=\"text-center h6 p-2 text-dark\">First of all sign up then you can login and see all details</p>\n    <div class=\"text-center pb-2\"><button type=\"button\" class=\"btn btn-outline-light text-dark\" (click)=\"onNoClick()\">OK</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"pk_welcome\" class=\"d-flex align-items-center\">\n    <div class=\"container\" data-aos=\"zoom-in-down\">\n        <h1>Welcome To <span>My Portfolio! </span>\n        </h1>\n        <div class=\"d-flex mt-4\">\n            <a href=\"https://www.youtube.com/watch?v=cg9VyPBHu94\" class=\"venobox btn-watch-video\"\n                class=\"btn-get-started scrollto\" data-vbtype=\"video\" data-autoplay=\"true\"> Watch Video <i\n                    class=\"icofont-play-alt-2\"></i></a>\n        </div>\n    </div>\n</section>\n<div id=\"middle\">\n    <div class=\"container \">\n        <div class=\"row \">\n            <div class=\"col-md-3  d-none d-lg-block\" >\n                <h3>Download Resume </h3>\n            </div>\n            <div class=\"ml-auto  d-none d-lg-block\">\n                <a href=\"../../../assets/prashant_resume.pdf\" download>\n                    <button type=\"button\" class=\"btn btn-outline-light\"> <i class=\"fa fa-download\"\n                            aria-hidden=\"true\"></i> &nbsp;Download Resume</button></a>\n            </div>\n\n        </div>\n        <div class=\"d-sm-block d-lg-none\">\n            <a href=\"../../../assets/Prashant.pdf\" download>\n                <button type=\"button\" class=\"btn btn-outline-light\"> <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                    &nbsp;Download Resume</button></a>\n        </div>\n    </div>\n</div>\n<main id=\"main\">\n    <!-- ======= About Section ======= -->\n    <section class=\"about \" data-aos=\"fade-up\">\n        <div class=\"container\">\n            <div class=\"section-title\">\n                <h2>About</h2>\n                <h3>About <span> Me</span></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 text-center\" data-aos=\"fade-up\">\n                    <img width=\"250px\" height=\"250px\" src=\"../../../assets/prashant.png\" class=\"rounded-circle\"\n                        alt=\"Cinque Terre\">\n                </div>\n                <div class=\"col-md-8 pt-4\" data-aos=\"fade-up\">\n                    <div>\n                        <div>\n                          <h2>Hello, I'm <span>Prashant Katiyar</span></h2>\n                          <h5>MEAN Stack Developer</h5>\n                        </div>\n                        <div>\n                          <p class=\"pt-2\">\n                            A dedicated and enthusiastic developer with a passion for web technologies. \n                            I enjoy learning new programming languages and frameworks, staying updated with \n                            the latest trends, and building scalable, user-friendly applications. \n                            With strong problem-solving skills and a love for coding, I strive to deliver \n                            high-quality solutions in every project I take on.\n                          </p>\n                        </div>\n                      </div>\n                      \n                </div>\n            </div>\n        </div>\n    </section>\n\n\n\n    <section class=\"services section-bg\">\n        <div class=\"container\" data-aos=\"fade-up\">\n            <div class=\"section-title\">\n                <h2>Education</h2>\n                <h3> My <span> Qualification</span></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6 mb-1\" data-aos=\"fade-up\">\n                    <div class=\"card item-card card-block\">\n                        <img class=\"pk_img\" src=\"../../assets/img/img/education/Tezpur-University-1140x570.jpg\"\n                            alt=\"Photo of sunset\">\n                        <h5 class=\"card-title mt-3 mb-3 text-center\">Tezpur University</h5>\n                        <p class=\"card-text text-center\">Masters of Computer Applications</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6 mb-1\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n                    <div class=\"card item-card card-block\">\n                        <img class=\"pk_img\" src=\"../../assets/img/img/education/pratap.jpg\" alt=\"Photo of sunset\">\n                        <h5 class=\"card-title mt-3 mb-3 text-center\">Pratap University</h5>\n                        <p class=\"card-text text-center\">Bachelor of Computer Application</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6 mb-1\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n                    <div class=\"card item-card card-block\">\n                        <img class=\"pk_img\" src=\"../../assets/img/img/education/nvic.jpeg\" alt=\"Photo of sunset\">\n                        <h5 class=\"card-title mt-3 mb-3 text-center\">NVIC Kanpur Nagar</h5>\n                        <p class=\"card-text text-center\">Intermediate</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6 mb-1\" data-aos=\"fade-up\" data-aos-delay=\"500\">\n                    <div class=\"card item-card card-block\">\n                        <img class=\"pk_img\" src=\"../../assets/img/img/education/nvic.jpeg\" alt=\"Photo of sunset\">\n                        <h5 class=\"card-title mt-3 mb-3 text-center\">NVIC Kanpur Nagar</h5>\n                        <p class=\"card-text text-center\">High School</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- work experience -->\n    <section class=\"page-section\" data-aos=\"fade-up\">\n        <div class=\"container\">\n            <div class=\"section-title\">\n              <h2>Work Experience</h2>\n              <h3>Work <span> Experience</span></h3>\n            </div>\n            <ul class=\"timeline\">\n              \n              <!-- Amantya Technologies -->\n              <li data-aos=\"fade-up\">\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"../../../assets/amantya.png\" alt=\"Amantya Technologies Logo\" />\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>May 2024 - Present</h4>\n                    <h4 class=\"subheading\">Senior Software Engineer</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Currently working at <b>Amantya Technologies</b> as a Senior Software Engineer focusing on front-end and MEAN stack development.</p>\n                    <p>Website:- \n                      <a href=\"https://www.amantyatech.com/\" target=\"_blank\">https://www.amantyatech.com/</a>\n                    </p>\n                  </div>\n                </div>\n              </li>\n          \n              <!-- Biz2Credit -->\n              <li class=\"timeline-inverted\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid py-4\" src=\"../../../assets/biz.png\" alt=\"Biz2Credit\" />\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>July 2022 - May 2024</h4>\n                    <h4 class=\"subheading\">Software Engineer</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Worked as a MEAN Stack Developer handling scalable web applications.</p>\n                    <p>Website:- \n                      <a href=\"https://www.biz2credit.com/\" target=\"_blank\">https://www.biz2credit.com/</a>\n                    </p>\n                  </div>\n                </div>\n              </li>\n          \n              <!-- HFCL -->\n              <li data-aos=\"fade-up\">\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"../../../assets/img/img/projectImage/photogrid_plus_1620723522720.jpeg\" alt=\"HFCL\" />\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>October 2021 - June 2022 | 10 Months</h4>\n                    <h4 class=\"subheading\">Senior Engineer</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Worked as a MEAN Stack Developer contributing to enterprise-level projects.</p>\n                    <p>Website:- \n                      <a href=\"https://io.hfcl.com/\" target=\"_blank\">https://io.hfcl.com/</a>\n                    </p>\n                  </div>\n                </div>\n              </li>\n          \n              <!-- V-Labs -->\n              <li class=\"timeline-inverted\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n                <div class=\"timeline-image\">\n                  <img class=\"rounded-circle img-fluid\" src=\"../../../assets/img/img/projectImage/1.png\" alt=\"V-Labs\" />\n                </div>\n                <div class=\"timeline-panel\">\n                  <div class=\"timeline-heading\">\n                    <h4>November 2019 - May 2021 | 1 year 7 months</h4>\n                    <h4 class=\"subheading\">Software Engineer</h4>\n                  </div>\n                  <div class=\"timeline-body\">\n                    <p class=\"text-muted\">Worked as a Full Stack Developer on AI-driven solutions.</p>\n                    <p>Website:- \n                      <a href=\"http://www.v-labs.ai/\" target=\"_blank\">http://www.v-labs.ai/</a>\n                    </p>\n                  </div>\n                </div>\n              </li>\n          \n              <!-- Closing -->\n              <li class=\"timeline-inverted\" data-aos=\"fade-up\" data-aos-delay=\"400\">\n                <div class=\"timeline-image bg-primary\">\n                  <h4>\n                    Be Part\n                    <br /> Of Our\n                    <br /> Story!\n                  </h4>\n                </div>\n              </li>\n            </ul>\n          </div>\n          \n    </section>\n\n    <!-- technical skills -->\n    <section class=\"page-section section-bg\" data-aos=\"fade-up\">\n        <div class=\"container\">\n            <div class=\"section-title\">\n                <h2>Skills</h2>\n                <h3>Technical <span> Skills</span></h3>\n            </div>\n\n            <div class=\"pk_section_4\">\n                <div class=\"container\">\n                    <div class=\"row card_mrgin\">\n                        <div class=\"col-md-9 col-sm-12 py-1\" data-aos=\"fade-up\">\n                            <div class=\"card tab-code-content\">\n                                <div class=\"card-header\">\n                                    <ul class=\"nav\">\n\n                                        <li class=\"nav-item \"\n                                            [ngClass]=\"(this.viewType == 0) ? 'selectedView' : 'unSelectedView'\"\n                                            (click)=changeView(0)>\n                                            JSON\n                                        </li>\n                                        <li class=\"nav-item \"\n                                            [ngClass]=\"(this.viewType == 1) ? 'selectedView' : 'unSelectedView'\"\n                                            (click)=changeView(1)>\n                                            Java Script\n                                        </li>\n                                        <li class=\"nav-item \"\n                                            [ngClass]=\"(this.viewType == 2) ? 'selectedView' : 'unSelectedView'\"\n                                            (click)=changeView(2)>\n                                            MongoDB\n                                        </li>\n                                        <li class=\"nav-item \"\n                                            [ngClass]=\"(this.viewType == 3) ? 'selectedView' : 'unSelectedView'\"\n                                            (click)=changeView(3)>\n                                            Express js\n                                        </li>\n                                        <li class=\"nav-item\"\n                                            [ngClass]=\"(this.viewType == 4) ? 'selectedView' : 'unSelectedView'\"\n                                            (click)=changeView(4)>\n                                            Angular 2+\n                                        </li>\n                                        <li class=\"nav-item \"\n                                            [ngClass]=\"(this.viewType == 5) ? 'selectedView' : 'unSelectedView'\"\n                                            (click)=changeView(5)>\n                                            Node js\n                                        </li>\n                                    </ul>\n                                </div>\n                                <div class=\"card-body\">\n\n                                    <!-- for json -->\n                                    <div *ngIf=\"viewType == 0\">\n                                        <div class=\"curl-code code_text\">\n                                            <div><span class=\"light-gray\">{{leftCurly}}</span></div>\n                                            <div class=\"pl-3\">\n                                                <div> <span class=\"yellow\">\"description\" </span>: \"Getting Started with\n                                                    the kat Model\",</div>\n                                                <div> <span class=\"yellow\">\"link\" </span>:\n                                                    \"http://prashant18.herokuapp.com\",</div>\n                                                <div> <span class=\"yellow\">\"link_text\" </span>: \"See the event\",</div>\n                                                <div> <span class=\"yellow\">\"title\" </span>: \"kat Meetup Registration\",\n                                                </div>\n                                                <div> <span class=\"yellow\">\"activity_type\" </span>:\n                                                    \"eventkat:registration\", </div>\n                                                <div> <span class=\"yellow\">\"key\" </span>: \"eventkat_attendee_id\", </div>\n                                                <div> <span class=\"yellow\">\"occurred_at\" </span>: \"2021-06-05\",</div>\n                                                <div> <span class=\"yellow\">\"member\" </span>: <span>{{leftCurly}}</span>\n                                                </div>\n                                                <div> <span class=\"yellow pl-2\"> \"github\" </span>:\n                                                    \"github.com/PrashantKat18\", </div>\n                                                <div> <span class=\"yellow pl-2\">\"email\" </span>:\n                                                    \"prashantkat10796@gmail.com\" </div>\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\">{{rightCurly}}</span> </div>\n                                            <div> <span class=\"light-gray\">{{rightCurly}}</span> </div>\n                                        </div>\n                                    </div>\n\n                                    <!-- for javascript÷ -->\n                                    <div *ngIf=\"viewType == 1\">\n                                        <div class=\"curl-code code_text\">\n                                            <div><span class=\"blue\">function </span> <span class=\"yellow\"> init()\n                                                </span> <span class=\"light-gray\"> {{leftCurly}} </span></div>\n                                            <div> <span class=\"blue pl-2\">var </span> <span class=\"sky\">name</span>\n                                                <span class=\"blue\"> = </span> <span class=\"orange\">'Prashant'</span>\n                                                <span class=\"light-gray\">; </span> // name is a local variable created\n                                                by init\n                                            </div>\n                                            <div> <span class=\"blue pl-2\"> function </span> <span\n                                                    class=\"yellow\">displayName() </span><span class=\"light-gray\">\n                                                    {{leftCurly}}</span> // displayName() is the inner function, a\n                                                closure</div>\n                                            <div> <span class=\"yellow pl-2\"> alert <span class=\"light-gray\">( <span\n                                                            class=\"blue\"> name </span>); </span></span> // use variable\n                                                declared in the parent function </div>\n                                            <div> <span class=\"pl-2 light-gray\">{{rightCurly}}</span> </div>\n                                            <div> <span class=\"yellow\">displayName();</span> </div>\n                                            <div> <span class=\"light-gray\">{{rightCurly}}</span> </div>\n                                            <div> <span class=\"yellow\">init()</span> <span class=\"light-gray\">;</span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <!-- for MongoDb -->\n\n                                    <div *ngIf=\"viewType== 2\">\n                                        <div class=\"yellow\">{{leftCurly}}</div>\n                                        <div class=\"ml-3\">\n                                            <div class=\"sky\">\n                                                \"_id\" <span class=\"orange\">: </span><span\n                                                    class=\"yellow\">\"54e9b497799u98b\" </span>,\n                                            </div>\n                                            <div class=\"sky\">\n                                                \"date\" <span class=\"orange\">: </span> <span\n                                                    class=\"yellow\">\"2021-02-03T00:00:00.000Z\"</span>,\n                                            </div>\n                                            <div class=\"sky\">\n                                                \"distance\" <span class=\"orange\">: </span> <span\n                                                    class=\"pink\">6.05</span>,\n                                            </div>\n                                            <div class=\"sky\">\n                                                \"minutes_sedetary\" <span class=\"orange\">: </span><span\n                                                    class=\"pink\">654</span>,\n                                            </div>\n                                            <div class=\"sky\">\n                                                \"steps\" <span class=\"orange\">: </span> <span class=\"pink\"> 8885 </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"yellow\">{{rightCurly}}</div>\n\n                                    </div>\n\n                                    <!-- for express -->\n                                    <div *ngIf=\"viewType == 3\">\n                                        <div class=\"pink\"> import\n                                            <span class=\"sky\"> express </span>\n                                            from <span class=\"orange\">'express' ;</span>\n                                        </div>\n\n                                        <div class=\"pink\"> import <span class=\"sky\"> {{leftCurly}} ApiClass\n                                                {{rightCurly}} </span> from <span\n                                                class=\"orange\">'example-shared/apiClass' ;</span>\n                                        </div>\n                                        <div>\n                                            <span class=\"sky-dark\"> const </span> <span class=\"sky\"> app </span> = <span\n                                                class=\"yellow\">express(); </span>\n                                        </div>\n                                        <div class=\"light-gray\">\n                                            <span class=\"sky\"><span class=\"sky-dark\">app</span></span><span\n                                                class=\"yellow\">.get</span>(<span class=\"orange\"> '/ ' </span>,(req,\n                                            <span class=\"sky\">res </span>) <span class=\"sky-dark\">=></span>\n                                            {{leftCurly}}\n                                            <div class=\"sky\"> <span class=\"sky-dark\">let </span>apiClass = new <span\n                                                    class=\"curl-code\">apiClass</span><span class=\"light-gray\"> (\n                                                </span><span class=\"orange\"> 'hello' </span><span class=\"light-gray\">\n                                                    );</span></div>\n                                            <div class=\"sky\"> <span class=\"sky-dark\">let </span> apiClassJson <span\n                                                    class=\"light-gray\"> = </span>Json<span\n                                                    class=\"yellow\">.stringify</span><span class=\"light-gray\">(</span>\n                                                apiClass <span class=\"light-gray\">);</span></div>\n                                            <div><span class=\"sky\"><span class=\"sky-dark\">res</span></span><span\n                                                    class=\"yellow\">.send</span>(<span class=\"orange\">`Serialized\n                                                    ApiClass instance </span> <span class=\"sky\"><span\n                                                        class=\"sky-dark\">${{leftCurly}}</span>apiClassJson<span\n                                                        class=\"sky-dark\">{{rightCurly}}</span></span> <span\n                                                    class=\"orange\">`</span>);</div>\n                                            <div>{{rightCurly}});</div>\n                                        </div>\n                                    </div>\n\n                                    <!-- for angular -->\n                                    <div *ngIf=\"viewType == 4\">\n                                        <div class=\"pink\"> import <span class=\"light-gray\"> {{leftCurly}}\n                                            </span><span class=\"sky\"> Component </span> <span\n                                                class=\"light-gray\">{{rightCurly}}</span> from <span\n                                                class=\"orange\">'@angular/core';</span></div>\n                                        <div class=\"yellow\"> <span class=\"light-gray\">@</span>Component<span\n                                                class=\"light-gray\"> ( {{leftCurly}}</span></div>\n                                        <div class=\"sky pl-3\"> selector: <span class=\"orange\">'app-root'</span><span\n                                                class=\"light-gray\">,</span></div>\n                                        <div class=\"sky pl-3\"> templateUrl: <span\n                                                class=\"orange\">'.app.component.html'</span><span\n                                                class=\"light-gray\">,</span></div>\n                                        <div class=\"sky pl-3\">styleUrls: <span class=\"orange\">\n                                                ['.app.component.css']\n                                            </span></div>\n                                        <div class=\"light-gray\"> <span>{{rightCurly}}</span> ) </div>\n                                        <div class=\"pink\">export <span class=\"blue\">class</span> <span\n                                                class=\"curl-code\"> AppComponent </span> <span\n                                                class=\"light-gray\">{{leftCurly}}</span></div>\n                                        <div class=\"sky pl-2\">title <span class=\"light-gray\"> = </span> <span\n                                                class=\"orange\">'Hello World' <span class=\"light-gray\">;</span></span>\n                                        </div>\n                                        <div class=\"light-gray\"> {{rightCurly}} </div>\n                                    </div>\n\n                                    <!-- for node -->\n                                    <div *ngIf=\"viewType == 5\">\n                                        <div class=\"curl-code code_text pb-4\">\n                                            <div> <span class=\"pink\">const </span> <span class=\"light-gray\">fetch\n                                                </span> <span class=\"blue\"> = </span> <span class=\"orange\">require\n                                                </span> <span class=\"light-gray\"> ( </span> 'node-fetch' <span\n                                                    class=\"light-gray\">);</span> </div>\n                                            <div><span class=\"pink\">let </span> <span class=\"light-gray\"> url\n                                                </span>\n                                                <span class=\"blue\"> = </span> 'http://prashant18.herokuapp.com'\n                                                <span class=\"light-gray\">;</span>\n                                            </div>\n                                            <div> <span class=\"pink\"> let </span> <span class=\"light-gray\"> options\n                                                </span> = <span>{{leftCurly}}</span></div>\n                                            <div> <span class=\"light-gray pl-2\">method:</span> 'POST' <span\n                                                    class=\"light-gray\">,</span> </div>\n                                            <div> <span class=\"light-gray pl-2\"> headers: </span> {{leftCurly}}\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\"> Accept: </span> 'application/json',\n                                            </div>\n                                            <div class=\"pl-4\">'Content-Type': 'application/json',</div>\n                                            <div class=\"pl-4\"> 'Authorization: ' <span class=\"light-gray\">Bearer\n                                                    kat-api-key'</span></div>\n                                            <div> <span class=\"light-gray\">{{rightCurly}}</span>,</div>\n                                            <div> <span class=\"light-gray\">body </span>: <span\n                                                    class=\"yellow\">JSON</span>.<span class=\"orange\">stringify</span>\n                                                ({{leftCurly}} </div>\n                                            <div> <span class=\"light-gray pl-2\">activity </span>: {{leftCurly}}\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\">description </span>: 'Getting\n                                                Started\n                                                with the kat Model', </div>\n                                            <div> <span class=\"light-gray pl-3\">link </span>:\n                                                'http://prashant18.herokuapp.com', </div>\n                                            <div> <span class=\"light-gray pl-3\">link_text </span>: 'See the event',\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\">title</span>: 'kat Meetup\n                                                Registration',\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\">activity_type </span>:\n                                                'eventbrite:registration', </div>\n                                            <div> <span class=\"light-gray pl-3\">occurred_at </span>: '2020-05-10',\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\">member </span>: {{leftCurly}} </div>\n                                            <div> <span class=\"light-gray pl-3\">github </span>: 'user-github',\n                                            </div>\n                                            <div> <span class=\"light-gray pl-3\">email </span>: 'user@email.com'\n                                            </div>\n                                            <div class=\"light-gray pl-3\"> {{rightCurly}} </div>\n                                            <div class=\"light-gray pl-2\"> {{rightCurly}} </div>\n                                            <div class=\"light-gray pl-1\"> {{rightCurly}}) </div>\n                                            <div class=\"light-gray pl-0 \"> {{rightCurly}};</div>\n\n                                            <div> <span class=\"orange\">fetch </span> <span class=\"light-gray\"> (url,\n                                                    options) </span></div>\n                                            <div> .<span class=\"orange\">then</span> <span class=\"light-gray\"> (res\n                                                    <span class=\"blue\">=></span> res.<span class=\"orange\">json</span>())\n                                                </span></div>\n                                            <div> .<span class=\"orange\">then</span>(json <span class=\"blue\">=></span>\n                                                console.<span class=\"orange\">log</span>(json)); </div>\n                                        </div>\n                                    </div>\n\n\n\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3 col-sm-12 py-1\" data-aos=\"fade-up\">\n                            <div class=\"card_mrgin\">\n                                <div class=\"card tab-code-content\">\n                                    <div class=\"card-header text-center\">\n                                        Other Skills\n                                    </div>\n                                    <div class=\"card-body text-center\">\n                                        <div class=\"yellow py-2\"> Git</div>\n                                        <div> Mac OS</div>\n                                        <div class=\"py-2\"> Ubntu </div>\n                                        <div class=\"yellow py-2\"> Windows </div>\n                                        <div class=\"py-2\"> Ms office</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section *ngIf=\"this.addProvider.isUserLoggedIn\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                        <div class=\"mainflip\">\n                            <div class=\"frontside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center\">\n                                        <p>\n                                            <img class=\"img-fluid\" src=\"../../../assets/img/img/projectImage/tms.png\"\n                                                alt=\"card image\">\n                                        </p>\n                                        <h4 class=\"card-title\">TMS</h4>\n                                        <p class=\"card-text\">Temperature Monitoring System</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"backside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center mt-4\">\n                                        <h4 class=\"card-title\">TMS</h4>\n                                        <p class=\"card-text\">This project is used to check the temperature of person and\n                                            show in the dashboards.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                        <div class=\"mainflip\">\n                            <div class=\"frontside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center\">\n                                        <p>\n                                            <img class=\"img-fluid\" src=\"../../../assets/img/img/projectImage/tms-fr.png\"\n                                                alt=\"card image\">\n                                        </p>\n                                        <h4 class=\"card-title\">TMS-FR</h4>\n                                        <p class=\"card-text\">Temperature Monitoring System - Face Recoganize</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"backside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center mt-4\">\n                                        <h4 class=\"card-title\">TMS-FR</h4>\n                                        <p class=\"card-text\">Temperature Monitoring System Face Recoganize is AI based\n                                            web application So According to this Application we can recoganize\n                                            individual tempreature of a person.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                        <div class=\"mainflip\">\n                            <div class=\"frontside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center\">\n                                        <p>\n                                            <img class=\"img-fluid\" src=\"../../../assets/img/img/projectImage/pws.png\"\n                                                alt=\"card image\">\n                                        </p>\n                                        <h4 class=\"card-title\">PWS</h4>\n                                        <p class=\"card-text\">Perimeter Watch System</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"backside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center mt-4\">\n                                        <h4 class=\"card-title\">PWS</h4>\n                                        <p class=\"card-text\">Perimeter Watch System is AI based web application So\n                                            According to this Application we can track object within particular area .\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                        <div class=\"mainflip\">\n                            <div class=\"frontside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center\">\n                                        <p>\n                                            <img class=\"img-fluid\" src=\"../../../assets/img/img/projectImage/hcms.png\"\n                                                alt=\"card image\">\n                                        </p>\n                                        <h4 class=\"card-title\">AMS</h4>\n                                        <p class=\"card-text\">Attendance Management System</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"backside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center mt-4\">\n                                        <h4 class=\"card-title\">AMS</h4>\n                                        <p class=\"card-text\">Attendance management system is AI based web application So\n                                            According to this application we can recoganize employee entry and exit time\n                                            and also record.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                        <div class=\"mainflip\">\n                            <div class=\"frontside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center\">\n                                        <p>\n                                            <img class=\"img-fluid\" src=\"../../../assets/img/img/projectImage/sms.png\"\n                                                alt=\"card image\">\n                                        </p>\n                                        <h4 class=\"card-title\">SMS</h4>\n                                        <p class=\"card-text\">Showroom Management System</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"backside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center mt-4\">\n                                        <h4 class=\"card-title\">SMS</h4>\n                                        <p class=\"card-text\">Showroom Management System is an application which is only\n                                            for the customer.According to this application customer check all details\n                                            particular vehicle.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                        <div class=\"mainflip\">\n                            <div class=\"frontside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center\">\n                                        <p>\n                                            <img class=\"img-fluid\" src=\"../../../assets/img/img/projectImage/hcms.png\"\n                                                alt=\"card image\">\n                                        </p>\n                                        <h4 class=\"card-title\">HCMS</h4>\n                                        <p class=\"card-text\">Health Care Management System</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"backside\">\n                                <div class=\"card\">\n                                    <div class=\"card-body text-center mt-4\">\n                                        <h4 class=\"card-title\">HCMS</h4>\n                                        <p class=\"card-text\">This is basic card with image on top, title, description\n                                            and button.This is basic card with image on top, title, description and\n                                            button.This is basic card with image on top, title, description and button.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- ======= Contact Section ======= -->\n    <section class=\"contact section-bg\">\n        <div class=\"container\" data-aos=\"fade-up\">\n            <div class=\"section-title\">\n                <h2> Contact</h2>\n                <h3>Contact <span>Us</span></h3>\n            </div>\n            <div class=\"row\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n                <div class=\"col-lg-6\">\n                    <div class=\"info-box mb-4\">\n                        <i class=\"fa fa-map-marker\"></i>\n                        <h3>Our Address</h3>\n                        <p>\n                            Plot No. 2154, 5th Floor, HUDA Colony, Sector 46, Gurugram, Haryana – 122001\n                          </p>\n                          \n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"info-box  mb-4\">\n                        <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n                        <h3>Email Us</h3>\n                        <p>prashantkat10796@gmail.com</p>\n                    </div>\n                </div>\n                <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"info-box  mb-4\">\n                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                        <h3>Call Us</h3>\n                        <p> +91 8840091275</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </section>\n\n    <!--Scroll to top-->\n    <div class=\"for_scroll_button\">\n        <div [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"scrollToTop()\" class=\"scroll-to-top\">\n            <i class=\"fa fa-arrow-up\" style=\"font-size: 18px;\" aria-hidden=\"true\"></i>\n        </div>\n    </div>\n\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/add-user/add-user.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/add-user/add-user.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-user works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>setting works!</p>\n<div class=\"mt-5\">\n    <button routerLink=\"addUser\">Add user</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");






const routes = [
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "./src/app/pages/about/about.module.ts")).then(m => m.AboutModule)
    },
    {
        path: 'otherInfo',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-other-info-other-info-module */ "pages-other-info-other-info-module").then(__webpack_require__.bind(null, /*! ./pages/other-info/other-info.module */ "./src/app/pages/other-info/other-info.module.ts")).then(m => m.OtherInfoModule)
    },
    {
        path: 'projects',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-project-project-module */ "pages-project-project-module").then(__webpack_require__.bind(null, /*! ./pages/project/project.module */ "./src/app/pages/project/project.module.ts")).then(m => m.ProjectModule)
    },
    {
        path: 'contactus',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-contactus-contactus-module */ "pages-contactus-contactus-module").then(__webpack_require__.bind(null, /*! ./pages/contactus/contactus.module */ "./src/app/pages/contactus/contactus.module.ts")).then(m => m.ContactusModule)
    },
    // {
    //   path:'setting',
    //   component:SettingComponent, canActivateChild:[ActivatechildguardGuard],
    //   children:[
    //   {
    //     path:'addUser',
    //     component:AddUserComponent
    //   },
    // ]},
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.data = {
            name: 'prashant',
            katitlet: 'katiyar'
        };
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/add */ "./src/app/services/add.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _pages_setting_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/setting/add-user/add-user.component */ "./src/app/pages/setting/add-user/add-user.component.ts");
/* harmony import */ var _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/setting/setting.component */ "./src/app/pages/setting/setting.component.ts");




















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
            _components_message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"],
            _pages_setting_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_18__["AddUserComponent"],
            _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_19__["SettingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
        ],
        providers: [
            _services_add__WEBPACK_IMPORTED_MODULE_8__["AddProvider"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"],
        ],
        entryComponents: [
            _components_message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 14px;\n}\np span {\n  color: #106eea;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudGthdGl5YXIvRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0L3BlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQ0NEO0FEQUM7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUwiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gZm9udC1zaXplOiAxNHB4O1xuIHNwYW4ge1xuICAgICBjb2xvcjogIzEwNmVlYTtcbiAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbn0iLCJwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxucCBzcGFuIHtcbiAgY29sb3I6ICMxMDZlZWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _src_app_services_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/app/services/add */ "./src/app/services/add.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginComponent = class LoginComponent {
    constructor(addProvider, formBuilder, router) {
        this.addProvider = addProvider;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
    }
    onClickSubmit(data) {
        this.email = data.email;
        this.password = data.password;
        this.addProvider.login(this.email, this.password)
            .subscribe(data => {
            console.log("Is Login Success: " + data);
            if (data)
                this.router.navigate(['/home']);
        });
    }
    get f() { return this.loginForm.controls; }
    onReset() {
        this.loginForm.reset();
    }
    kk() {
        this.title = "this is local storage";
        localStorage.setItem("token", this.title);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _src_app_services_add__WEBPACK_IMPORTED_MODULE_3__["AddProvider"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 14px;\n}\np span {\n  color: #106eea;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudGthdGl5YXIvRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0L3BlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzEwNmVlYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIH0iLCJwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxucCBzcGFuIHtcbiAgY29sb3I6ICMxMDZlZWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _src_app_services_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/app/services/add */ "./src/app/services/add.ts");






let SignupComponent = class SignupComponent {
    constructor(formBuilder, cookie, addProvider, router) {
        this.formBuilder = formBuilder;
        this.cookie = cookie;
        this.addProvider = addProvider;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        var reqBody = {
            name: this.registerForm.value.name,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        };
        this.addProvider.signUp(reqBody);
        console.log(reqBody, "is");
        if (reqBody) {
            this.router.navigate(['/login']);
        }
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _src_app_services_add__WEBPACK_IMPORTED_MODULE_5__["AddProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
    })
], SignupComponent);

// onClickSubmit() {
//   var reqBody = {
//     name: this.signUpForm.value.name,
//     email: this.signUpForm.value.email,
//     password: this.signUpForm.value.password
//   }
//   this.addProvider.signUp(reqBody)
//   // .subscribe(data => {
//   //   console.log("Is Login Success: " + data);
//   //   if (data) this.router.navigate(['/home']);
//   // });
// }
// convenience getter for easy access to form fields


/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  color: #fff;\n}\n\np {\n  color: #dad4d4;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n}\n\na i {\n  color: #fff;\n  font-size: 25px;\n}\n\ni {\n  color: #fff;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudGthdGl5YXIvRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0L3BlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgY29sb3I6ICNmZmY7XG59XG5we1xuICAgIGNvbG9yOiAjZGFkNGQ0O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbmEgaSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5pe1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDsgICBcbn0iLCJoMyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5wIHtcbiAgY29sb3I6ICNkYWQ0ZDQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmEgaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav ul li a {\n  color: #222222;\n  transition: 0.3s;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nh6 {\n  font-size: 11px;\n}\n\nbutton {\n  margin: 0px;\n  height: 35px;\n  color: #fff;\n}\n\n.active {\n  border-bottom: 2px solid #106eea;\n}\n\n.active .nav-link {\n  color: #106eea !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudGthdGl5YXIvRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0L3BlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0U7RUFJRSxnQ0FBQTtBQ0hKOztBREFJO0VBQ0UseUJBQUE7QUNFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgbmF2IHVsIGxpICBhIHtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgaDZ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG5cbiAgYnV0dG9ue1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG5cbiAgLmFjdGl2ZXsgXG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiAjMTA2ZWVhICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTA2ZWVhO1xuICB9IiwibmF2IHVsIGxpIGEge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEwNmVlYTtcbn1cbi5hY3RpdmUgLm5hdi1saW5rIHtcbiAgY29sb3I6ICMxMDZlZWEgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _src_app_services_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/app/services/add */ "./src/app/services/add.ts");




let HeaderComponent = class HeaderComponent {
    constructor(addProvider, router) {
        this.addProvider = addProvider;
        this.router = router;
        this.isUserLoggedIn = false;
        this.navbarOpen = false;
    }
    ngOnInit() {
        console.log(this.addProvider.userName);
    }
    logout() {
        this.addProvider.logout();
        this.router.navigate(['/home']);
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    toggleNavbar1() {
        this.navbarOpen = !this.navbarOpen;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _src_app_services_add__WEBPACK_IMPORTED_MODULE_3__["AddProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/message/message.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MessageComponent = class MessageComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
MessageComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.scss */ "./src/app/components/message/message.component.scss")).default]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pk_section_4 {\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.5;\n  font-size: 18px;\n}\n.pk_section_4 .pink {\n  color: #cc99cd;\n}\n.pk_section_4 .yellow {\n  display: inline-block;\n  color: #f8c544;\n}\n.pk_section_4 .blue {\n  color: #67cdcc;\n}\n.pk_section_4 .sky {\n  color: #8edef8;\n}\n.pk_section_4 .sky-dark {\n  color: #3468a3;\n}\n.pk_section_4 .orange {\n  color: #f08139;\n}\n.pk_section_4 .light-gray {\n  color: #ccc;\n}\n.pk_section_4 .code_text {\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.4;\n}\n.pk_section_4 .light-gray {\n  color: #cccccc;\n}\n.pk_section_4 .curl-code {\n  color: #7ec67d;\n}\n.pk_section_4 .node-text {\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.4;\n}\n.pk_section_4 .node-text .pink {\n  color: #cc99cd;\n}\n.pk_section_4 .node-text .light-gray {\n  color: #ccc;\n}\n.pk_section_4 .node-text .orange {\n  color: #f08139;\n}\n.pk_section_4 .node-text .yellow {\n  display: inline-block;\n  color: #f8c544;\n}\n.pk_section_4 .card_mrgin .card-header {\n  background-color: #2a2734;\n  color: #fff;\n  border: none;\n}\n.pk_section_4 .card_mrgin .tab-code-content {\n  display: flex;\n  overflow: auto;\n  width: 100%;\n  height: 500px;\n  background-color: #2d2d2d;\n  color: #7ec67d;\n}\n.pk_section_4 .card_mrgin .nav-item {\n  font-size: 16px;\n  padding: 4px 10px;\n  margin: 0px 16px 0px 0px;\n  border-radius: 8px;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.4;\n}\n.pk_section_4 .card_mrgin .selectedView {\n  color: #ebe7fe;\n  background-color: #48435a;\n}\n.pk_section_4 .card_mrgin .unSelectedView {\n  font-size: 16px;\n  padding: 4px 10px;\n  margin: 0px 16px 0px 0px;\n  border-radius: 8px;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudGthdGl5YXIvRGVza3RvcC9QZXJzb25hbCBwcm9qZWN0L3BlcnNvbmFsLXdlYnNpdGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQUNJLGNBQUE7QUNBUjtBREVJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQU47QURFSTtFQUNJLGNBQUE7QUNBUjtBREVJO0VBQ0UsY0FBQTtBQ0FOO0FER0k7RUFDRSxjQUFBO0FDRE47QURHSTtFQUNJLGNBQUE7QUNEUjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FER0k7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0FDRE47QURHSTtFQUNJLGNBQUE7QUNEUjtBRElJO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNGTjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FER007RUFDRSxXQUFBO0FDRFI7QURHTTtFQUNFLGNBQUE7QUNEUjtBREdNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDRFI7QURVTTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QUNUUjtBRFdNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQ1ZSO0FEYU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ1hSO0FEY007RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNaUjtBRGVNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8gdHJvZGwgc2VjdGlvbiA0XG4gIC5wa19zZWN0aW9uXzQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLnBpbmsge1xuICAgICAgICBjb2xvcjogI2NjOTljZDtcbiAgICAgIH1cbiAgICAueWVsbG93IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGNvbG9yOiAjZjhjNTQ0O1xuICAgIH1cbiAgICAuYmx1ZXtcbiAgICAgICAgY29sb3I6ICM2N2NkY2M7XG4gICAgfVxuICAgIC5za3l7XG4gICAgICBjb2xvcjojOGVkZWY4O1xuICAgIH1cblxuICAgIC5za3ktZGFya3tcbiAgICAgIGNvbG9yOiMzNDY4YTM7XG4gICAgfVxuICAgIC5vcmFuZ2Uge1xuICAgICAgICBjb2xvcjogI2YwODEzOTtcbiAgICB9XG4gICAgLmxpZ2h0LWdyYXkge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICB9XG4gICAgLmNvZGVfdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgfVxuICAgIC5saWdodC1ncmF5IHtcbiAgICAgIGNvbG9yOiAjY2NjY2NjO1xuICAgIH1cbiAgICAuY3VybC1jb2RlIHtcbiAgICAgICAgY29sb3I6ICM3ZWM2N2Q7XG4gICAgfVxuXG4gICAgLm5vZGUtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAucGluayB7XG4gICAgICAgIGNvbG9yOiAjY2M5OWNkO1xuICAgICAgfVxuICAgICAgLmxpZ2h0LWdyYXkge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICAgIC5vcmFuZ2Uge1xuICAgICAgICBjb2xvcjogI2YwODEzOTtcbiAgICAgIH1cbiAgICAgIC55ZWxsb3cge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZjhjNTQ0O1xuICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAuY2FyZF9tcmdpbiB7XG4gICAgLy8gICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTI3MzQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgICAudGFiLWNvZGUtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgLy8gcGFkZGluZzogMjRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgICAgICAgY29sb3I6ICM3ZWM2N2Q7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB9XG4gICAgICAubmF2LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICBtYXJnaW46IDBweCAxNnB4IDBweCAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWxlY3RlZFZpZXcge1xuICAgICAgICBjb2xvcjogI2ViZTdmZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDM1YTtcbiAgICAgIH1cblxuICAgICAgLnVuU2VsZWN0ZWRWaWV3IHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTZweCAwcHggMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi5wa19zZWN0aW9uXzQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnBrX3NlY3Rpb25fNCAucGluayB7XG4gIGNvbG9yOiAjY2M5OWNkO1xufVxuLnBrX3NlY3Rpb25fNCAueWVsbG93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2Y4YzU0NDtcbn1cbi5wa19zZWN0aW9uXzQgLmJsdWUge1xuICBjb2xvcjogIzY3Y2RjYztcbn1cbi5wa19zZWN0aW9uXzQgLnNreSB7XG4gIGNvbG9yOiAjOGVkZWY4O1xufVxuLnBrX3NlY3Rpb25fNCAuc2t5LWRhcmsge1xuICBjb2xvcjogIzM0NjhhMztcbn1cbi5wa19zZWN0aW9uXzQgLm9yYW5nZSB7XG4gIGNvbG9yOiAjZjA4MTM5O1xufVxuLnBrX3NlY3Rpb25fNCAubGlnaHQtZ3JheSB7XG4gIGNvbG9yOiAjY2NjO1xufVxuLnBrX3NlY3Rpb25fNCAuY29kZV90ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5wa19zZWN0aW9uXzQgLmxpZ2h0LWdyYXkge1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5wa19zZWN0aW9uXzQgLmN1cmwtY29kZSB7XG4gIGNvbG9yOiAjN2VjNjdkO1xufVxuLnBrX3NlY3Rpb25fNCAubm9kZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5wa19zZWN0aW9uXzQgLm5vZGUtdGV4dCAucGluayB7XG4gIGNvbG9yOiAjY2M5OWNkO1xufVxuLnBrX3NlY3Rpb25fNCAubm9kZS10ZXh0IC5saWdodC1ncmF5IHtcbiAgY29sb3I6ICNjY2M7XG59XG4ucGtfc2VjdGlvbl80IC5ub2RlLXRleHQgLm9yYW5nZSB7XG4gIGNvbG9yOiAjZjA4MTM5O1xufVxuLnBrX3NlY3Rpb25fNCAubm9kZS10ZXh0IC55ZWxsb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZjhjNTQ0O1xufVxuLnBrX3NlY3Rpb25fNCAuY2FyZF9tcmdpbiAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNzM0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuLnBrX3NlY3Rpb25fNCAuY2FyZF9tcmdpbiAudGFiLWNvZGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgY29sb3I6ICM3ZWM2N2Q7XG59XG4ucGtfc2VjdGlvbl80IC5jYXJkX21yZ2luIC5uYXYtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIG1hcmdpbjogMHB4IDE2cHggMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5wa19zZWN0aW9uXzQgLmNhcmRfbXJnaW4gLnNlbGVjdGVkVmlldyB7XG4gIGNvbG9yOiAjZWJlN2ZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0MzVhO1xufVxuLnBrX3NlY3Rpb25fNCAuY2FyZF9tcmdpbiAudW5TZWxlY3RlZFZpZXcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBtYXJnaW46IDBweCAxNnB4IDBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _src_app_services_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/app/services/add */ "./src/app/services/add.ts");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);





let HomeComponent = class HomeComponent {
    constructor(addProvider, dialog) {
        this.addProvider = addProvider;
        this.dialog = dialog;
        this.panelOpenState = false;
        this.panelOpenState1 = false;
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.viewType = 0;
        this.leftCurly = '{';
        this.rightCurly = '}';
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]({
            offset: 100,
        });
        this.scrollToTop();
    }
    onWindowScroll() {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    }
    changeView(i) {
        this.viewType = i;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _src_app_services_add__WEBPACK_IMPORTED_MODULE_3__["AddProvider"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
], HomeComponent.prototype, "onWindowScroll", null);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/setting/add-user/add-user.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/setting/add-user/add-user.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/setting/add-user/add-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/setting/add-user/add-user.component.ts ***!
  \**************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddUserComponent = class AddUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.scss */ "./src/app/pages/setting/add-user/add-user.component.scss")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/pages/setting/setting.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/setting/setting.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/setting/setting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/setting/setting.component.ts ***!
  \****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingComponent = class SettingComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/setting/setting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.scss */ "./src/app/pages/setting/setting.component.scss")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/services/add.ts":
/*!*********************************!*\
  !*** ./src/app/services/add.ts ***!
  \*********************************/
/*! exports provided: AddProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProvider", function() { return AddProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AddProvider = class AddProvider {
    constructor(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.isUserLoggedIn = false;
        this.hostAddress = "";
    }
    login(email, password) {
        this.emailId = this.cookie.get("email");
        this.passwordId = this.cookie.get("password");
        this.userName = this.cookie.get("name");
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        this.isUserLoggedIn = email == this.emailId && password == this.passwordId;
        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.isUserLoggedIn).pipe();
    }
    logout() {
        this.userName = "";
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
        this.cookie.deleteAll();
    }
    signUp(reqBody) {
        this.cookie.set("name", reqBody.name);
        this.cookie.set("email", reqBody.email);
        this.cookie.set("password", reqBody.password);
        this.name = this.cookie.get("name");
        this.emailId = this.cookie.get("email");
        this.passwordId = this.cookie.get("password");
        return reqBody;
    }
    contactUs(req) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.hostAddress}`, req).subscribe((resp) => {
                if (resp.status == true) {
                    resolve(resp);
                }
                else {
                    reject(resp);
                }
            });
        });
    }
};
AddProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AddProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AddProvider);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    hostIpAddress1: `http://localhost:3000`,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/prashantkatiyar/Desktop/Personal project/personal-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map