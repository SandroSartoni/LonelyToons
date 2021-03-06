(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n  }\r\n  \r\n  .content {\r\n    flex: 1 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .header {\r\n    flex: 0 1 auto;\r\n  }\r\n  \r\n  .footer {\r\n    flex-shrink: 0;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div [hidden]=\"isLoading() === false\">\n    <app-loader></app-loader>\n  </div>\n\n  <div class=\"page\" [hidden]=\"isLoading() === true\">\n\n    <div class=\"content\">\n      <app-header class=\"header\"></app-header>\n      <router-outlet class=\"router-flex\" #o=\"outlet\"></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <app-footer></app-footer>\n    </div>\n\n  </div>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isAppReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isAppReady = true;
        }, 2000);
    };
    AppComponent.prototype.isLoading = function () {
        return !this.isAppReady;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/loader/loader.component */ "./src/app/components/layout/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Footer -->\n    <footer class=\"py-3 bg-dark\">\n      <div class=\"container\">\n        <p class=\"m-0 text-center text-white\">Copyright &copy; Cyli {{year}}</p>\n      </div>\n    </footer>\n    "

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link,\r\n.dropdown-item {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/\">Loonly Toons</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        \n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\"></div>\n<div class=\"shadow\"></div>\n"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@keyframes mainAnimation {\n  0% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 50px;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 150px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(0deg);\n            transform: translateX(-50px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 150px;\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right;\n    -webkit-transform: translateX(-150px) translateY(0px) rotate(90deg);\n            transform: translateX(-150px) translateY(0px) rotate(90deg); }\n  80% {\n    width: 50px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(90deg);\n            transform: translateX(-25px) translateY(0px) rotate(90deg); }\n  100% {\n    width: 50px;\n    -webkit-transform: translateX(-50px) translateY(0px) rotate(90deg);\n            transform: translateX(-50px) translateY(0px) rotate(90deg); } }\n\n@-webkit-keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@keyframes secundaryAnimation {\n  0% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  20% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  40% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); }\n  60% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  80% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg); }\n  100% {\n    -webkit-transform: translateX(0px) translateY(0px) rotate(180deg);\n            transform: translateX(0px) translateY(0px) rotate(180deg); } }\n\n@-webkit-keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@keyframes shadowAnimation {\n  0% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  20% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  40% {\n    width: 200px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); }\n  60% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  80% {\n    width: 75px;\n    -webkit-transform: translateX(37.5px) translateY(0px) rotate(0deg);\n            transform: translateX(37.5px) translateY(0px) rotate(0deg); }\n  100% {\n    width: 150px;\n    -webkit-transform: translateX(-25px) translateY(0px) rotate(0deg);\n            transform: translateX(-25px) translateY(0px) rotate(0deg); } }\n\n@-webkit-keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\n@keyframes float {\n  0% {\n    top: 50%; }\n  50% {\n    top: 51%; }\n  100% {\n    top: 50%; } }\n\nhtml, body {\n  height: 100%; }\n\nbody {\n  position: relative;\n  background: #99d2e4;\n  background: linear-gradient(135deg, #99d2e4 0%, #ffd4da 100%); }\n\n.loader {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  left: 50%;\n  margin-top: -25px;\n  margin-left: -25px;\n  background-color: #FFF5A5;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: mainAnimation 2.6s ease 0s infinite forwards;\n          animation: mainAnimation 2.6s ease 0s infinite forwards;\n  z-index: 2; }\n\n.loader:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    top: 0;\n    left: -50px;\n    background-color: #FFF5A5;\n    -webkit-transform-origin: top right;\n            transform-origin: top right;\n    -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n            transform: translateX(0px) translateY(0px) rotate(0deg);\n    -webkit-animation: secundaryAnimation 2.6s ease 0s infinite forwards;\n            animation: secundaryAnimation 2.6s ease 0s infinite forwards; }\n\n.shadow {\n  position: absolute;\n  width: 100px;\n  height: 10px;\n  top: 50%;\n  left: 50%;\n  margin-top: 50px;\n  margin-left: -75px;\n  border-radius: 50%;\n  background-color: #95a5a6;\n  -webkit-transform: translateX(0px) translateY(0px) rotate(0deg);\n          transform: translateX(0px) translateY(0px) rotate(0deg);\n  -webkit-animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n          animation: shadowAnimation 2.6s ease 0s infinite forwards,\r float 5s ease-in-out 0s infinite forwards;\n  z-index: 1; }\n\n.logo {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  width: 42px;\n  height: 42px;\n  padding: 12px 5px;\n  margin-left: -21px;\n  box-sizing: border-box;\n  background-color: white;\n  border-radius: 50%;\n  transition: -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.logo:hover {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4); }\n\n.logo img {\n    width: 100%;\n    height: auto;\n    margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/layout/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/layout/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/layout/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\LonelyToons\src\webapp\LonelyToons.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map