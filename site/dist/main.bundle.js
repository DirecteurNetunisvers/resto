webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('infosUtilisateur')) {
            // logged in so return true
            return true;
        }
        console.log('not logged in');
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/_directives/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_directives/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/admin-header/admin-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/admin-header/admin-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\n    <nav class=\"navbar top-navbar navbar-toggleable-sm navbar-light\">\n        <!-- ============================================================== -->\n        <!-- Logo -->\n        <!-- ============================================================== -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/\" style=\"color: white; font-size: 30px;\">\n                <!-- Logo icon -->\n                <img \n                    src=\"assets/images/logo_bo-40.png\" \n                    alt=\"homepage\" \n                    class=\"light-logo\"\n                />\n                <b>\n                    <span class=\"light-logo\">\n                        Resto 1\n                    </span>\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n                    \n                    <!-- Light Logo icon -->\n                </b>\n                <!--End Logo icon -->\n                <!-- Logo text -->\n             </a>\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Logo -->\n        <!-- ============================================================== -->\n        <div class=\"navbar-collapse\">\n            <!-- ============================================================== -->\n            <!-- toggle and nav items -->\n            <!-- ============================================================== -->\n            <ul class=\"navbar-nav mr-auto mt-md-0\">\n                <!-- This is  -->\n                <li class=\"nav-item\"> \n                    <a \n                        class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"\n                        (click)=\"menuShowHide()\"\n                    >\n                        <i class=\"mdi mdi-menu\"></i>\n                    </a> \n                </li>\n                <!-- ============================================================== -->\n                <!-- Search -->\n                <!-- ============================================================== -->\n                <!-- \n                    <li class=\"nav-item hidden-sm-down search-box\"> <a class=\"nav-link hidden-sm-down text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-search\"></i></a>\n                        <form class=\"app-search\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a class=\"srh-btn\"><i class=\"ti-close\"></i></a> \n                        </form>\n                    </li>\n                -->\n            </ul>\n            <!-- ============================================================== -->\n            <!-- User profile and search -->\n            <!-- ============================================================== -->\n            <ul class=\"navbar-nav my-lg-0\">\n                <!-- ============================================================== -->\n                <!-- Profile -->\n                <!-- ============================================================== -->\n                <li class=\"nav-item dropdown\">\n                    <a \n                        class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" \n                        data-toggle=\"dropdown\" \n                        aria-haspopup=\"true\" \n                        aria-expanded=\"false\"\n                    >\n                        <img \n                            src=\"assets/images/profil.png\" \n                            alt=\"utilisateur\" \n                            class=\"profile-pic m-r-10\"\n                        />\n                        Bonjour {{ user.prenom }}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/_layout/admin-header/admin-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('infosUtilisateur'));
        this.user = user.user;
    };
    AdminHeaderComponent.prototype.menuShowHide = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("body").toggleClass("show-sidebar");
    };
    AdminHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'admin-header',
            template: __webpack_require__("../../../../../src/app/_layout/admin-header/admin-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/admin-header/admin-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/admin-layout/admin-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\n\t<admin-header></admin-header>\n\t<admin-sidebar></admin-sidebar>\n\n\t<div class=\"page-wrapper\">\n\t    <!-- ============================================================== -->\n\t    <!-- Container fluid  -->\n\t    <!-- ============================================================== -->\n\t    <div class=\"container-fluid\">\n\t        <!-- ============================================================== -->\n\t        <!-- Bread crumb and right sidebar toggle -->\n\t        <!-- ============================================================== -->\n\t        <div class=\"row page-titles\">\n\t            <div class=\"col-md-5 col-8 align-self-center\">\n\t                <h3 class=\"text-themecolor\">Tableau de bord</h3>\n\t                <ol class=\"breadcrumb\">\n\t                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Accueil</a></li>\n\t                    <li class=\"breadcrumb-item active\">Tableau de bord</li>\n\t                </ol>\n\t            </div>\n\t        </div>\t\n\t\t\n\t\t\t<router-outlet></router-outlet>\n\n\t    </div>\n\t    <!-- ============================================================== -->\n\t    <!-- End Container fluid  -->\n\t    <!-- ============================================================== -->\n\t    <!-- ============================================================== -->\n\t    <!-- footer -->\n\t    <!-- ============================================================== -->\n\t    <footer class=\"footer\">\n\t\t\t<p style=\"text-align: center; padding-top: 10px;\">\n\t\t\t\t<a href=\"https://www.kook-agency.fr/\" target=\"blank\"> \n\t\t\t\t\t© {{currentYear}} KOOK AGENCY \n\t\t\t\t</a>\n\t\t\t</p>\t    \t\n\t    </footer>\n\t    <!-- ============================================================== -->\n\t    <!-- End footer -->\n\t    <!-- ============================================================== -->\n\t</div>\t\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/_layout/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-layout',
            template: __webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-sidebar\">\n    <!-- Sidebar scroll-->\n    <div class=\"scroll-sidebar\">\n        <!-- Sidebar navigation-->\n        <nav class=\"sidebar-nav\">\n            <ul id=\"sidebarnav\">\n                <li> \n                \t<a \n                \t\tclass=\"waves-effect waves-dark\" \n                \t\trouterLink=\"/admin\"\n                \t\taria-expanded=\"false\"\n                \t>\n                \t\t<i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\">Tableau de bord</span>\n                \t</a>\n                </li>\n                <li> \n                \t<a \n\t                \tclass=\"waves-effect waves-dark\" \n\t                \trouterLink=\"/admin/utilisateur\"\n\t                \taria-expanded=\"false\"\n                \t>\n                \t\t<i class=\"mdi mdi-account-check\"></i><span class=\"hide-menu\">Profil</span>\n                \t</a>\n                </li>\n                <li> \n                    <a \n                        class=\"waves-effect waves-dark\" \n                        routerLink=\"/admin/boisson/liste\"\n                        aria-expanded=\"false\"\n                    >\n                        <i class=\"mdi mdi-beer\"></i><span class=\"hide-menu\">Boisson</span>\n                    </a>\n                </li>\n                <li> \n                \t<a \n                \t\tclass=\"waves-effect waves-dark\" \n                \t\trouterLink=\"/admin/pizza/liste\"\n                \t\taria-expanded=\"false\"\n                \t>\n                \t\t<i class=\"mdi mdi-cards-playing-outline\"></i><span class=\"hide-menu\">Menu</span>\n                \t</a>\n                </li>\n            </ul>\n        </nav>\n        <!-- End Sidebar navigation -->\n    </div>\n    <!-- End Sidebar scroll-->\n    <!-- Bottom points-->\n    <div class=\"sidebar-footer\">\n        <!-- \n        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Configuration\">\n        \t<i class=\"ti-settings\"></i>\n        </a> \n        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Email\">\n        \t<i class=\"mdi mdi-gmail\"></i>\n        </a>\n        -->\n        <a \n            class=\"link\" \n            data-toggle=\"tooltip\" \n            title=\"Deconnexion\"\n            (click)=\"deconnexion()\"\n        >\n            <i class=\"mdi mdi-power\"></i>\n        </a> \n    </div>\n    <!-- End Bottom points-->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent(router) {
        this.router = router;
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminSidebarComponent.prototype.deconnexion = function () {
        localStorage.removeItem('infosUtilisateur');
        this.router.navigate(['/']);
    };
    AdminSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'admin-sidebar',
            template: __webpack_require__("../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carte {\n    margin-left: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: 1px solid #656328;\n    color: #4e5217;\t\n}\n\n.carte:hover {\n\tcolor: #bf7f09;\n\tborder: 1px solid #bf7f09;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <footer style=\"margin-top: 15px;\">\n\t\t\t<p style=\"text-align: center; padding-top: 10px;\">\n\t\t\t\t<a href=\"https://www.kook-agency.fr/\" target=\"blank\"> \n\t\t\t\t\t© {{currentYear}} KOOK AGENCY \n\t\t\t\t</a>\n\t\t\t\t<a routerLink=\"/admin/dashboard\" class=\"carte\"> \n\t\t\t\t\tMa carte \n\t\t\t\t</a>\n\t\t\t</p>\t    \t\n    </footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteFooterComponent = /** @class */ (function () {
    function SiteFooterComponent() {
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
    };
    SiteFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'site-footer',
            template: __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\" title=\"This Header is rendered by /app/_layout/site-header/site-header.component.html\"> -->\n  <!-- \n  <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/\">\n            Accueil\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/pizza\">\n            Notre carte\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">\n            Horaires & contact\n          </a>\n        </li>        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login Page<small>(No layout)</small></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register Page<small>(No layout)</small></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small>(App layout)</small></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\">Profile<small>(App layout)</small></a>\n        </li>\n      </ul>\n      <a \n        routerLink=\"/admin/dashboard\" \n        class=\"btn btn-success\"\n        style=\"background: green; border: 1px solid green;\" \n      >\n        Admninstration\n      </a>\n    </div>\n  </nav>\n  -->"

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent() {
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'site-header',
            template: __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<site-header></site-header>\n<router-outlet></router-outlet>\n<site-footer></site-footer>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-site-layout',
            template: __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (url) {
        return this.http.get(url);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('accesUtilisateur');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });


// export * from './user.service';


/***/ }),

/***/ "../../../../../src/app/_services/table/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    /* getAll() {
      return this.http.get<Users[]>('/api/users');
    } */
    /* getById(id: number) {
      return this.http.get('/api/users/' + id);
    } */
    UsersService.prototype.create = function (user) {
        // return this.http.post('https://www.aretmic.com/api/server/web/app_dev.php/users', user);
        return this.http.post('http://jsonplaceholder.typicode.com/users', user);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_parallaxscroll__ = __webpack_require__("../../../../ng2-parallaxscroll/modules/ng2-parallaxscroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_admin_layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_admin_header_admin_header_component__ = __webpack_require__("../../../../../src/app/_layout/admin-header/admin-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_site_footer_site_footer_component__ = __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layout_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pizza_pizza_component__ = __webpack_require__("../../../../../src/app/pages/pizza/pizza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layout_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_alert_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/_auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_table_users_service__ = __webpack_require__("../../../../../src/app/_services/table/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_onepage_onepage_component__ = __webpack_require__("../../../../../src/app/pages/onepage/onepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_boisson_boisson_component__ = __webpack_require__("../../../../../src/app/pages/boisson/boisson.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { PagesModule } from './pages/pages.module';
// rooting

// components for layout





// components




// directives

// Services








// import { JwtInterceptor } from './_helpers';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layout_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pizza_pizza_component__["a" /* PizzaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_site_footer_site_footer_component__["a" /* SiteFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layout_site_header_site_header_component__["a" /* SiteHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__layout_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__directives_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_23__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_onepage_onepage_component__["a" /* OnepageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_boisson_boisson_component__["a" /* BoissonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // PagesModule,
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCZeDurG5gamvy7AGTl-zerIuq-kzoNrRc'
                }),
                __WEBPACK_IMPORTED_MODULE_7_ng2_parallaxscroll__["a" /* ParallaxScrollModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__["a" /* Ng2PageScrollModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__auth_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_20__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_20__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_22__services_table_users_service__["a" /* UsersService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_admin_layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pizza_pizza_component__ = __webpack_require__("../../../../../src/app/pages/pizza/pizza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_onepage_onepage_component__ = __webpack_require__("../../../../../src/app/pages/onepage/onepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/_auth/auth-guard.service.ts");

// Layout


// Component






// Guard

var appRoutes = [
    // Site routes goes here
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__pages_onepage_onepage_component__["a" /* OnepageComponent */], pathMatch: 'full' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */] },
            { path: 'pizza', component: __WEBPACK_IMPORTED_MODULE_4__pages_pizza_pizza_component__["a" /* PizzaComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact_component__["a" /* ContactComponent */] },
        ]
    },
    // App routes goes here here
    // { path: 'admin', redirectTo: 'admin/dashboard' },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: '', loadChildren: './admin/admin.module#AdminModule' },
        ],
    },
    // no layout routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/config/host.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlApi; });
var host = 'https://aretmic.com/api/resto1/web/app_dev.php';
//const host = 'http://localhost/net_api/web/app_dev.php';
var urlApi = host;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n\tfont-family:\"Trebuchet MS\", \"Myriad Pro\", Arial, sans-serif;\n\tfont-size:14px;\n\t/*background:#f4f4f4 url(../images/bg.gif) repeat top left;*/\n\tcolor:#333;\n\ttext-shadow:1px 1px 1px #fff;\n\toverflow-y:scroll;\n}\nh1{\n\tfont-size:56px;\n}\nh2{\n\tfont-size:20px;\n\tpadding:0px 0px 40px 0px;\n\tcolor:#aaa;\n}\nh2 span{\n\tcolor:#ffa800;\n}\na{\n\tcolor:#777;\n}\na:hover{\n\tcolor:#222;\n}\np{\n\tpadding:5px 0px;\n}\n.wrapper{\n\twidth:960px;\n\tmargin:20px auto;\n\tmin-height:550px;\n}\n.box{\n\twidth:49%;\n}\n.left{\n\tfloat:left;\n}\n.right{\n\tfloat:right;\n}\n.clear{\n\tclear:both;\n}\na.back{\n\tcolor:#777;\n\tposition:fixed;\n\ttop:5px;\n\tright:10px;\n\ttext-decoration:none;\n}\n/* Form Style */\n.form_wrapper{\n\tbackground:#fff;\n\tborder:1px solid #ddd;\n\tmargin:0 auto;\n\twidth:350px;\n\tfont-size:16px;\n\t-webkit-box-shadow:1px 1px 7px #ccc;\n\tbox-shadow:1px 1px 7px #ccc;\n}\n.form_wrapper h3{\n\tpadding:20px 30px 20px 30px;\n\tbackground-color:#444;\n\tcolor:#fff;\n\tfont-size:25px;\n\tborder-bottom:1px solid #ddd;\n}\n.form_wrapper form{\n\tbackground:#fff;\n}\n.form_wrapper .column{\n\twidth:47%;\n\tfloat:left;\n}\nform.active{\n\tdisplay:block;\n}\nform.login{\n\twidth:350px;\n}\nform.register{\n\twidth:550px;\n}\nform.forgot_password{\n\twidth:300px;\n}\n.form_wrapper a{\n\ttext-decoration:none;\n\tcolor:#777;\n\tfont-size:12px;\n}\n.form_wrapper a:hover{\n\tcolor:#000;\n}\n.form_wrapper label{\n\tdisplay:block;\n\tpadding:10px 30px 0px 30px;\n\tmargin:10px 0px 0px 0px;\n}\n.form_wrapper input[type=\"text\"],\n.form_wrapper input[type=\"password\"]{\n\tborder: solid 1px #E5E5E5;\n\tbackground: #FFFFFF;\n\tmargin: 5px 30px 0px 30px;\n\tpadding: 9px;\n\tdisplay:block;\n\tfont-size:16px;\n\twidth:76%;\n\tbackground: \n\t\t-moz-linear-gradient(\n\t\t\ttop,\n\t\t\t#FFFFFF,\n\t\t\t#EEEEEE 1px,\n\t\t\t#FFFFFF 25px\n\t\t\t);\n\t-webkit-box-shadow: 0px 0px 8px #f0f0f0;\n\tbox-shadow: 0px 0px 8px #f0f0f0;\n}\n.form_wrapper input[type=\"text\"]:focus,\n.form_wrapper input[type=\"password\"]:focus{\n\tbackground:#feffef;\n}\n.form_wrapper .bottom{\n\tbackground-color:#444;\n\tborder-top:1px solid #ddd;\n\tmargin-top:20px;\n\tclear:both;\n\tcolor:#fff;\n\ttext-shadow:1px 1px 1px #000;\n}\n.form_wrapper .bottom a{\n\tclear:both;\n\tpadding:10px 30px;\n\ttext-align:right;\n\tcolor:#ffa800;\n\ttext-shadow:1px 1px 1px #000;\n}\n.form_wrapper a.forgot{\n\tfloat:right;\n\tfont-style:italic;\n\tline-height:24px;\n\tcolor:#ffa800;\n\ttext-shadow:1px 1px 1px #fff;\n}\n.form_wrapper a.forgot:hover{\n\tcolor:#000;\n}\n.form_wrapper div.remember{\n\tfloat:left;\n\twidth:140px;\n\tmargin:20px 0px 20px 30px;\n\tfont-size:11px;\n}\n.form_wrapper div.remember input{\n\tfloat:left;\n\tmargin:2px 5px 0px 0px;\n}\n.form_wrapper span.error{\n\tvisibility:hidden;\n\tcolor:red;\n\tfont-size:11px;\n\tfont-style:italic;\n\tdisplay:block;\n\tmargin:4px 30px;\n}\n.form_wrapper input[type=\"submit\"] {\n\tbackground: #e3e3e3;\n\tborder: 1px solid #ccc;\n\tcolor: #333;\n\tfont-family: \"Trebuchet MS\", \"Myriad Pro\", sans-serif;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tpadding: 8px 0 9px;\n\ttext-align: center;\n\twidth: 150px;\n\tcursor:pointer;\n\tmargin:15px 20px 10px 10px;\n\ttext-shadow: 0px 1px 0px #fff;\n\tborder-radius: 4px;\n\t-webkit-box-shadow: 0px 0px 2px #fff inset;\n\tbox-shadow: 0px 0px 2px #fff inset;\n}\n.form_wrapper input[type=\"submit\"]:hover {\n\tbackground: #d9d9d9;\n\t-webkit-box-shadow: 0px 0px 2px #eaeaea inset;\n\tbox-shadow: 0px 0px 2px #eaeaea inset;\n\tcolor: #222;\n}\nalert {\n\ttext-align: center;\n}\n.help-block {\n\ttext-align: center;\n\tcolor: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">  \n        <div class=\"col-md-12\" style=\"margin: auto;\">\n            <alert></alert>\n\n            <div style=\"margin-top: 50px;\">\n                <div class=\"content\">\n                    <div id=\"form_wrapper\" class=\"form_wrapper\">\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                            <h3>Connexion</h3>\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !pseudo.valid }\" >\n                                <label>Pseudo</label>\n                                <input \n                                    type=\"text\" \n                                    class=\"form-control\" \n                                    name=\"pseudo\" \n                                    [(ngModel)]=\"model.pseudo\" #pseudo=\"ngModel\" \n                                    required \n                                    placeholder=\"Entrer votre pseudo\"\n                                />\n                                <div \n                                    *ngIf=\"f.submitted && !pseudo.valid\" \n                                    class=\"help-block\"\n                                >\n                                    Le champs pseudo est obligatoire\n                                </div>\n                            </div>\n                            <div [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\"\n                            >\n                                <label>Password</label>\n                                <input \n                                    type=\"password\" \n                                    class=\"form-control\" \n                                    name=\"password\" \n                                    [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                                    required \n                                    placeholder=\"Entrer votre mot de passe\"\n                                />\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\n                                    Le champs mot de passe est obligatoire\n                                </div>\n                            </div>                \n                            <div class=\"bottom\">\n                                <input type=\"submit\" value=\"Envoyer\" />\n                                <a [routerLink]=\"['/']\" class=\"linkform\">\n                                    Revenir sur le site\n                                </a>\n                                <div class=\"clear\"></div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"clear\"></div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var sha1 = __webpack_require__("../../../../sha1/sha1.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //this.model.pseudo, this.model.password
        this.loading = true;
        var url = __WEBPACK_IMPORTED_MODULE_5__config_host__["a" /* urlApi */] + '/utilisateur/' + this.model.pseudo;
        this.authenticationService.login(url)
            .subscribe(function (data) {
            var idtf = sha1(data['id']);
            var access = sha1(_this.model.password) == data['password'];
            if (access) {
                localStorage.setItem('infosUtilisateur', JSON.stringify({ 'user': data }));
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.alertService.error('Erreur de mot de passe');
                _this.loading = false;
            }
            return false;
        }, function (error) {
            _this.alertService.error(error.error.message);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // selector: 'app-login',
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 2;\n    cursor: pointer;\n}\n\n#text{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 20px;\n    color: white;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n}\n\n.parallax-boisson {\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/boisson/boisson.webp")) + ") no-repeat center center fixed;\n    height: 300px;\n    background-size: cover;\n}\n\n#show-mobile{\n    display: none !important;\n}\n\n@media screen and (min-width: 768px) {\n    #prix_pm{\n        margin-left: 0%;\n    }\n    #prix_gm{\n        margin-left: 0%;\n    }\n}\n\n@media screen and (max-width: 767px) {\n    #hide-mobile{\n    display: none !important;\n    }\n\n    #show-mobile{\n    display: block !important;\n    }\n    #list-prix{\n     display: -webkit-inline-box !important;\n     display: -ms-inline-flexbox !important;\n     display: inline-flex !important;\n    }\n    #prix_pm{\n    margin-left: 68%;\n    position: absolute;\n    }\n    #prix_gm{\n    margin-left: 68%;\n    position: absolute;\n    }\n\n    .aff_mobile {\n        border: 1px solid #a7ada7;\n        margin-right: 1px;\n        margin-bottom: 2px;        \n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"overlay\" *ngIf=\"!boissonsCharger;\">\n        <div id=\"text\">Chargement des boissons en cours...</div>\n    </div>\n    <div class=\"row\" style=\"margin-top: 40px;\">\n        <div class=\"col-md-4\">\n            <h1>NOS BOISSONS</h1>\n            <hr style=\"border-bottom: 3px solid rgba(153, 153, 153, 1) !important;\">\n        </div>\n    </div>\n    \n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            \n        </div>\n        <div class=\"col-md-2\">\n            <p id=\"hide-mobile\"><strong>33cl</strong></p>\n        </div>\n        <div class=\"col-md-2\">\n            <p id=\"hide-mobile\"><strong>50cl</strong></p>\n        </div>\n    </div>  \n\n    <div class=\"row aff_mobile\" *ngFor=\"let i of boissons\">\n        <div class=\"col-md-8\">\n            <p><strong>{{i.nom | uppercase}}</strong></p>\n        </div>\n        <div class=\"col-md-2\" id=\"list-prix\">\n            <p id=\"show-mobile\"><strong>33cl</strong></p>\n            <p id=\"prix_pm\">{{i.pm}}</p>\n        </div>\n        <div class=\"col-md-2\" id=\"list-prix\">\n            <p id=\"show-mobile\"><strong>50cl</strong></p>\n            <p id=\"prix_gm\">{{i.gm}}</p>\n        </div>\n    </div>  \n</div>\n\n<div parallax class=\"parallax-boisson\" [config]=\"{axis: X, speed: -.0}\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoissonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoissonComponent = /** @class */ (function () {
    function BoissonComponent(http) {
        this.http = http;
        this.boissonsCharger = false;
    }
    BoissonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/menu/boisson';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.boissons = data;
            _this.boissonsCharger = true;
        });
    };
    BoissonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-boisson',
            template: __webpack_require__("../../../../../src/app/pages/boisson/boisson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/boisson/boisson.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BoissonComponent);
    return BoissonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.webp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "boisson.20d5e156c4d79e1bb42d.webp";

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px;\n}\n\n.font_5 {\n    font: normal normal normal 36px/1.4em impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif;\n    color: #222222;\n}\n\n.txtNew {\n    word-wrap: break-word;\n    text-align: start;\n    pointer-events: none;\n}\n\n.txtNew p {\n    margin: 0;\n    line-height: normal;\n    letter-spacing: normal;\n}\n\n.txtNew > * {\n    pointer-events: auto;\n}\n\n.font_7 {\n    font: normal normal normal 18px/1.4em helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;\n    color: #222222;\n}\n\n.font_8 {\n    font: normal normal normal 16px/1.4em helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;\n    color: #535353;\n    margin: 0 !important;\n}\n\n#show-mobile{\n    display: none !important;\n}\n\n@media screen and (max-width: 767px) \n{\n     #show-mobile{\n     display: block !important;\n    }\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\n\t<br><br><br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h5 style=\"text-align:center;\" class=\"font_5\">\n\t\t\t\t<span style=\"letter-spacing:0.08em;\">NOUS VOUS ATTENDONS !</span>\n\t\t\t</h5>\n\t\t</div>\n\t</div>\n\n\t<br><br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<p style=\"text-align:center;\" class=\"font_7\">\n\t\t\t\tADRESSE\n\t\t\t</p>\n\n\t\t\t<p style=\"text-align:center; line-height:1.5em;\" class=\"font_8\">\n\t\t\t\t<span style=\"line-height:1.5em;\">1 rue du Château</span>\n\t\t\t</p>\n\n\t\t\t<p style=\"text-align:center; line-height:1.5em;\" class=\"font_8\">\n\t\t\t\t<span style=\"line-height:1.5em;\">75001 Paris, France</span>\n\t\t\t</p>\n\n\t\t\t<p style=\"text-align:center; line-height:1.5em;\" class=\"font_8\">\n\t\t\t\t<span style=\"line-height:1.5em;\">\n\t\t\t\t\t<object height=\"0\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"auto-generated-link\" \n\t\t\t\t\t\t\tdata-auto-recognition=\"true\" \n\t\t\t\t\t\t\tdata-content=\"info@monsite.com\" \n\t\t\t\t\t\t\thref=\"mailto:info@monsite.com\" \n\t\t\t\t\t\t\tdata-type=\"mail\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tinfo@monsite.com\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</object> \\\\ Tel: 01 23 45 67 89\n\t\t\t\t</span>\n\t\t\t</p>\n\t\t</div>\n\t\t<div id=\"show-mobile\">\n\t\t\t<br><br>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<p style=\"text-align:center;\" class=\"font_7\">\n\t\t\t\tHEURES D'OUVERTURE\n\t\t\t</p>\n\n\t\t\t<p style=\"text-align:center; line-height:1.5em;\" class=\"font_8\">\n\t\t\t\t<span style=\"line-height:1.5em;\">lundi – vendredi 07h00 – 22h00</span>\n\t\t\t</p>\n\n\t\t\t<p style=\"text-align:center; line-height:1.5em;\" class=\"font_8\">\n\t\t\t\t<span style=\"line-height:1.5em;\">samedi 09h00 – 22h00</span>\n\t\t\t</p>\n\n\t\t\t<p style=\"text-align:center; line-height:1.5em;\" class=\"font_8\">\n\t\t\t\t<span style=\"line-height:1.5em;\">dimanche 08h00 –23h00</span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n\n<br><br>\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".commander {\n    text-transform: uppercase;\n    height: 40px;\n    border: 1px solid;\n    width: 150px;\n    margin: auto;\n    padding-top: 6px;\n    cursor: pointer;\n    background: black;\n    color: white;       \n}\n\n.commander:hover {\n    background: white;\n    color: black;\n}\n\n#home {\n    padding-top: 60px;\n}\n\n.parallax-home {\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/home/slider_template_1.jpg")) + ") no-repeat center center fixed;\n    background-size: cover;\n}\n\n.img_accueil_centre {\n\n}\n\n.content_accueil {\n    text-align: center;\n    padding-top: 140px;\n}\n\n@media screen and (max-width: 1024px ) and (min-width: 769px){\n    #img-responsive{\n    width: 31%;\n    }\n}\n\n@media screen and (max-width: 768px ) and (min-width: 601px) {\n    #img-responsive{\n    width: 34%;\n    margin-top: 9%;\n    }\n}\n\n@media screen and (max-width: 600px ) and (min-width: 321px) {\n    #img-responsive{\n    width: 40%;\n    margin-top: 13%;\n    }\n}\n\n@media screen and (max-width: 320px ) {\n    #img-responsive{\n    width: 54%;\n    margin-top: 23%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div parallax class=\"parallax-home\" [config]=\"{axis: X, speed: -.2}\">\n    <div class=\"content_accueil\">\n        <img id=\"img-responsive\" class=\"img_accueil_centre\" src=\"https://static.wixstatic.com/media/4654e9_120d56e9ef664b3aac04e662aa42f3c3~mv2.png/v1/fill/w_382,h_390,al_c,usm_0.66_1.00_0.01/4654e9_120d56e9ef664b3aac04e662aa42f3c3~mv2.png\">\n\n        <br><br><br>\n        <div class=\"commander\">\n            Notre carte\n        </div>\n        <br><br><br>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/slider_template_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slider_template_1.cd3b8393b4dd1ddc5304.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/boisson.webp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "boisson.20d5e156c4d79e1bb42d.webp";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/onepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Styles go here */\n* { -webkit-box-sizing: border-box; box-sizing: border-box};\nlegend {background-color: #fff};\nul {list-style: none}\nul li {display: inline-block; border: 1px solid #999; padding: 10px; cursor: pointer;}\nul li.current { background: #333; color: #fff}\nul.window {\n  position: fixed; \n  top: 0; \n  left: 0; \n  background: yellow; \n  z-index: 1;\n}\nul.window li {display: block; }\n.horizontal {\n  height: 100px;\n  width: 100%;\n  max-width: 450px;\n  white-space: nowrap;\n  overflow-y: hidden !important;\n}\n.horizontal > div {\n  border: 1px solid #666;\n  width: 200px;\n  height: 800px;\n  display: inline-block;\n  text-align: center;\n}\n.menu {\n    height: 60px;\n    background: #292b2c;\n    padding-top: 15px;\n    z-index: 9999;\n    width: 100%;\n    position: fixed;\n}\n.menu a {\n    cursor: pointer;\n    color: white;\n}\n.menu a:hover {\n    cursor: pointer;\n    color: white;\n}\n@media screen and (max-width: 768px) {\n .menu {\n    /* height: 189px !important; */\n    background: #292b2c;\n    padding-top: 15px;\n    z-index: 9999;\n    width: 100%;\n    position: fixed;\n  }\n  .pull-right{\n    float: left;\n  }\n}\n/* @media screen and (max-width: 1199px){\n  .col-md-2 {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 16.666667%;\n        -ms-flex: 0 0 16.666667%;\n            flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n} */\n#pizza {\n  height: auto;\n  padding-top: 60px;\n}\n#boisson {\n  height: auto;\n}\n.parallax-boisson {\n    background-image: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/boisson.webp")) + ") no-repeat center center fixed;\n    height: 300px;\n    background-size: cover;\n}\n/*Pour la section accueil*/\n.txtNew {\n    word-wrap: break-word;\n    text-align: start;\n    pointer-events: none;\n}\n.txtNew h3 {\n    margin: 0;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.color_32 {\n    color: #FFC880;\n}\n.font_3 {\n    font: normal normal normal 58px/1.4em impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif;\n    color: #222222;\n}\n#menu-mobile .navbar-nav li {\n    border: none !important;\n}\n@media screen and (min-width: 1200px) \n{\n  #menu-bureau-small{\n    display: none !important;\n  }\n\n  #menu-tablet{\n   display: none !important;\n  }\n   #menu-mobile{\n   display: none  !important;\n  }\n  #menu-tablet-min{\n    display: none !important;\n  }\n}\n@media screen and (max-width: 1199px) and (min-width: 1050px)\n{\n  #menu-bureau{\n    display: none !important;\n  }\n   #menu-bureau-small{\n    display: block !important;\n  }\n  #menu-tablet{\n   display: none !important;\n  }\n  #menu-tablet-min{\n    display: none !important;\n  }\n   #menu-mobile{\n   display: none  !important;\n  }\n}\n@media screen and (max-width: 1049px) and (min-width: 849px)\n{\n  #menu-bureau{\n    display: none !important;\n  }\n   #menu-bureau-small{\n    display: none !important;\n  }\n  #menu-tablet{\n   display: block  !important;\n  }\n  #menu-tablet-min{\n    display: none !important;\n  }\n   #menu-mobile{\n   display: none  !important;\n  }\n  \n}\n@media screen and (max-width: 848px) and (min-width: 769px)\n{\n  #menu-bureau{\n    display: none !important;\n  }\n   #menu-bureau-small{\n    display: none !important;\n  }\n  #menu-tablet{\n   display: none  !important;\n  }\n  #menu-tablet-min{\n    display: block  !important;\n  }\n   #menu-mobile{\n   display: none  !important;\n  }\n  \n  \n}\n@media screen and (max-width: 768px) \n{\n  #menu-bureau{\n    display: none !important;\n  }\n   #menu-bureau-small{\n    display: none !important;\n  }\n  #menu-tablet{\n   display: none  !important;\n  }\n  #menu-tablet-min{\n    display: none !important;\n  }\n  #menu-mobile{\n   display: block  !important;\n  }\n  \n}\n.topnav {\n  overflow: hidden;\n  background-color: #333;\n}\n.topnav a {\n  float: left;\n  display: block;\n  color: #ddd;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n.topnav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n.active {\n  background-color: #4CAF50;\n  color: white;\n}\n.topnav .icon {\n  display: none;\n}\n@media screen and (max-width: 600px) {\n  .topnav a:not(:first-child) {display: none;}\n  .topnav a.icon {\n    float: right;\n    display: block;\n  }\n}\n@media screen and (max-width: 600px) {\n  .topnav.responsive {position: relative;}\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n}\n/*Fin pour la section accueil*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/onepage/onepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\n<div class=\"menu\" id=\"nav-mobile\">\n\t<div class=\"container\" id=\"menu-bureau\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-left k\"\n\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tAccueil\n\t\t\t\t\t\t</a>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"text-center\"\n\t\t\t\t\t\t\t(click)=\"goTo('#pizza')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tNotre carte\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-right\"\n\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tHoraires & contact\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\n\t\t\t\t</a>\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo_instagram.png\">\n\t\t\t\t</a>\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\n\t\t\t\t</a>\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo_etoil.png\">\n\t\t\t\t</a>\n\t\t\t</div>\t\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"container-fluid\" id=\"menu-bureau-small\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-left k\"\n\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tAccueil\n\t\t\t\t\t\t</a>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"text-center\"\n\t\t\t\t\t\t\t(click)=\"goTo('#pizza')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tNotre carte\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-right\"\n\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tHoraires & contact\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\n\t\t\t\t</a>\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo_instagram.png\">\n\t\t\t\t</a>\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\n\t\t\t\t</a>\n\t\t\t\t<a \n\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t>\n\t\t\t\t\t<img src=\"assets/images/logo/logo_etoil.png\">\n\t\t\t\t</a>\n\t\t\t</div>\t\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"container-fluid\" id=\"menu-tablet\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-md-10\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-left k\"\n\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tAccueil\n\t\t\t\t\t\t</a>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"text-center\"\n\t\t\t\t\t\t\t(click)=\"goTo('#pizza')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tNotre carte\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-right\"\n\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tHoraires & contact\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_instagram.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_etoil.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"container-fluid\" id=\"menu-tablet-min\">\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-left k\"\n\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tAccueil\n\t\t\t\t\t\t</a>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"text-center\"\n\t\t\t\t\t\t\t(click)=\"goTo('#pizza')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tNotre carte\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\tclass=\"pull-right\"\n\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tHoraires & contact\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_instagram.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\trouterLink=\"/\"\t\t\t\t\t \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_etoil.png\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t\t\n\t\t</div>\n\t</div>\n\n\t<div id=\"menu-mobile\">\n\t\t<div class=\"topnav\" id=\"myTopnav\">\n\t\t\t  <a \t\t(click)=\"goTo('#home')\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\tAccueil\n\t\t\t\t\t\t</a>\n\t\t\t  <a \n\t\t\t\t\t\t\t(click)=\"goTo('#pizza')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tNotre carte\n\t\t\t\t\t\t</a>\n\t\t\t  <a \n\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tHoraires & contact\n\t\t\t\t\t\t</a>\n\t\t\t \n\t\t\t  <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\n\t\t</div>\n\t\t\n\t\t\n\t</div>\n\t\n</div>\n\n \n<!-- Fin menu -->\n\n<div id=\"home\">\n\t<app-home></app-home>\n</div>\n<div class=\"container\">\t\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<h3 \n\t\t\t\tclass=\"font_3\" \n\t\t\t\tstyle=\"line-height:0.9em; text-align:center; margin-top: 50px;\"\n\t\t\t>\n\t\t\t\t<span class=\"color_32\">\n\t\t\t\t\t<span style=\"font-family:marck script,cursive;\">\n\t\t\t\t\t\tWelcome chez Pizza Hut\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</h3>\n\t\t\t<h2 \n\t\t\t\tclass=\"font_2\" \n\t\t\t\tstyle=\"font-size:42px; line-height:0.9em; text-align:center;\"\n\t\t\t>\n\t\t\t\t<span style=\"font-family:marck script,cursive;\">\n\t\t\t\t\t<span style=\"font-size:42px;\">Qui nous sommes&nbsp;</span>\n\t\t\t\t</span>\n\t\t\t</h2>\n\t\t\t<h2 class=\"font_2\" style=\"font-size:42px; text-align:center;\">\n\t\t\t\t<span style=\"font-family:marck script,cursive;\">\n\t\t\t\t\t<span style=\"font-size:42px;\">\n\t\t\t\t\t\t<span class=\"wixGuard\">​</span>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</h2>\n\t\t\t<p class=\"font_8\" style=\"text-align:center;\">\n\t\t\t\t<span style=\"font-family:marck script,cursive;\">\n\t\t\t\t\tThe people, food and the prime locations make Rodich the perfect place good friends &amp; family to come together and have great time. Everytime you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.\n\t\t\t\t</span>\n\t\t\t</p>\t\t\t\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\"pizza\">\n\t<app-pizza></app-pizza>\n</div>\n\n<div id=\"boisson\">\n\t<app-boisson></app-boisson>\n</div>\n\n<div id=\"contact\">\n\t<app-contact></app-contact>\n</div>\n\n\n<script>\n\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/pages/onepage/onepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var OnepageComponent = /** @class */ (function () {
    function OnepageComponent(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    OnepageComponent.prototype.ngOnInit = function () { };
    OnepageComponent.prototype.goToHome = function () {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].simpleInstance(this.document, '#home');
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.goTo = function (destination) {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].simpleInstance(this.document, destination);
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.scrollSomewhereHorizontally = function () {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({
            document: this.document,
            scrollTarget: '#targetToTheRight',
            verticalScrolling: false
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.goToHeadingInContainer = function () {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({
            document: this.document,
            scrollTarget: '.headingClass',
            scrollingViews: [this.container.nativeElement]
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], OnepageComponent.prototype, "container", void 0);
    OnepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-onepage',
            template: __webpack_require__("../../../../../src/app/pages/onepage/onepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/onepage/onepage.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollService */], Object])
    ], OnepageComponent);
    return OnepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pizza/fonts-googleapis-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* cyrillic */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOEDuSfQZQ.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOECOSfQZQ.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOEBeSfQZQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOEBOSfQZQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOECuSf.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKerUC7WQ.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKfLUC7WQ.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKcbUC7WQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKcLUC7WQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Amatic SC';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Anton';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Anton Regular'), local('Anton-Regular'), url(https://fonts.gstatic.com/s/anton/v9/1Ptgg87LROyAm3K8-C8QSw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Anton';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Anton Regular'), local('Anton-Regular'), url(https://fonts.gstatic.com/s/anton/v9/1Ptgg87LROyAm3K9-C8QSw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Anton';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Anton Regular'), local('Anton-Regular'), url(https://fonts.gstatic.com/s/anton/v9/1Ptgg87LROyAm3Kz-C8.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Barlow';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Barlow Italic'), local('Barlow-Italic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHrv4kjgoGqM7E_Cfs1wH8RnA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Barlow';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Barlow Italic'), local('Barlow-Italic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHrv4kjgoGqM7E_Cfs7wH8.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Barlow';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Barlow Bold Italic'), local('Barlow-BoldItalic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHsv4kjgoGqM7E_CfOA5WogvTobdw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Barlow';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Barlow Bold Italic'), local('Barlow-BoldItalic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHsv4kjgoGqM7E_CfOA5WouvTo.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Barlow';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Barlow Regular'), local('Barlow-Regular'), url(https://fonts.gstatic.com/s/barlow/v1/7cHpv4kjgoGqM7E_Ass52Hs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Barlow';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Barlow Regular'), local('Barlow-Regular'), url(https://fonts.gstatic.com/s/barlow/v1/7cHpv4kjgoGqM7E_DMs5.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Barlow';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Barlow Bold'), local('Barlow-Bold'), url(https://fonts.gstatic.com/s/barlow/v1/7cHqv4kjgoGqM7E3t-4s6VospT4.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Barlow';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Barlow Bold'), local('Barlow-Bold'), url(https://fonts.gstatic.com/s/barlow/v1/7cHqv4kjgoGqM7E3t-4s51os.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Basic';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Basic Regular'), local('Basic-Regular'), url(https://fonts.gstatic.com/s/basic/v7/xfu_0WLxV2_XKTN-6FHlyQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Basic';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Basic Regular'), local('Basic-Regular'), url(https://fonts.gstatic.com/s/basic/v7/xfu_0WLxV2_XKTNw6FE.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKPtbo-Ew.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKAtbo-Ew.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKNtbo-Ew.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKDtbo.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8NMpWeGQ.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8CMpWeGQ.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8PMpWeGQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Caudex';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8BMpU.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4wfKBrb4.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4zvKBrb4.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4w_KBrb4.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4zfKB.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUnp8DKpE.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUkZ8DKpE.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUnJ8DKpE.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Caudex';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUkp8D.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Chelsea Market';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Chelsea Market'), local('ChelseaMarket-Regular'), url(https://fonts.gstatic.com/s/chelseamarket/v5/BCawqZsHqfr89WNP_IApC8tzKChsJg8eKg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Chelsea Market';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Chelsea Market'), local('ChelseaMarket-Regular'), url(https://fonts.gstatic.com/s/chelseamarket/v5/BCawqZsHqfr89WNP_IApC8tzKChiJg8.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Cinzel';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cinzel Regular'), local('Cinzel-Regular'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIJ7ww63mVu7gt7-GT7LEc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Cinzel';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cinzel Regular'), local('Cinzel-Regular'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIJ7ww63mVu7gt79mT7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Cinzel';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cinzel Bold'), local('Cinzel-Bold'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIK7ww63mVu7gtzTUHuHWZaC_w.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Cinzel';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cinzel Bold'), local('Cinzel-Bold'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIK7ww63mVu7gtzTUHuE2Za.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Cookie';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cookie-Regular'), url(https://fonts.gstatic.com/s/cookie/v8/syky-y18lb0tSbf9kgqS.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Corben';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Corben Regular'), local('Corben-Regular'), url(https://fonts.gstatic.com/s/corben/v11/LYjDdGzzklQtCMpNqQNFlVs.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Corben';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Corben Regular'), local('Corben-Regular'), url(https://fonts.gstatic.com/s/corben/v11/LYjDdGzzklQtCMpNpwNF.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Corben';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Corben'), url(https://fonts.gstatic.com/s/corben/v11/LYjAdGzzklQtCMpFHCZQpHoqbN4.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Corben';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Corben'), url(https://fonts.gstatic.com/s/corben/v11/LYjAdGzzklQtCMpFHCZQqnoq.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtFmSq17w.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtMmSq17w.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtHmSq17w.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtGmSq17w.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSo.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-HzhO7_w.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-OzhO7_w.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-FzhO7_w.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-EzhO7_w.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-KzhM.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtKgS4.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrXtKgS4.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpntKgS4.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYp3tKgS4.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fsw-I1hc.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fug-I1hc.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fsQ-I1hc.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fsA-I1hc.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Cormorant Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fvg-I.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Damion';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Damion'), url(https://fonts.gstatic.com/s/damion/v7/hv-XlzJ3KEUe_YZkamw2.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Dancing Script';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLviuEViw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Dancing Script';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEViw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Dancing Script';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Dancing Script';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QlqiMurg.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Dancing Script';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QkqiMurg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Dancing Script';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QqqiM.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDY1ZzPJ.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweD81ZzPJ.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDc1ZzPJ.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDg1ZzPJ.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDQ1ZzPJ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDU1ZzPJ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 400;\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDs1Zw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgHoqFC_.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgjoqFC_.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgDoqFC_.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcg_oqFC_.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgPoqFC_.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgLoqFC_.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: italic;\n  font-weight: 700;\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgzoqA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR4SDktYw.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GRxSDktYw.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR5SDktYw.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR2SDktYw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR6SDktYw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR7SDktYw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 400;\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR1SDk.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwfQg7wrA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwWQg7wrA.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSweQg7wrA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwRQg7wrA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwdQg7wrA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwcQg7wrA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'EB Garamond';\n  font-style: normal;\n  font-weight: 700;\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwSQg4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Enriqueta';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Enriqueta-Regular'), url(https://fonts.gstatic.com/s/enriqueta/v6/goksH6L7AUFrRvV44HVjQkqioP0.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Enriqueta';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Enriqueta-Regular'), url(https://fonts.gstatic.com/s/enriqueta/v6/goksH6L7AUFrRvV44HVjTEqi.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Enriqueta';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Enriqueta-Bold'), url(https://fonts.gstatic.com/s/enriqueta/v6/gokpH6L7AUFrRvV44HVr92-3kdxFm6Q.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Enriqueta';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Enriqueta-Bold'), url(https://fonts.gstatic.com/s/enriqueta/v6/gokpH6L7AUFrRvV44HVr92-3n9xF.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Forum';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IcOpIq3g.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Forum';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IVOpIq3g.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Forum';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IfOpIq3g.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Forum';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IROpI.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Fredericka the Great';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fredericka the Great'), local('FrederickatheGreat'), url(https://fonts.gstatic.com/s/frederickathegreat/v6/9Bt33CxNwt7aOctW2xjbCstzwVKsIBVV--Sjxbc.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Jockey One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jockey One'), local('JockeyOne-Regular'), url(https://fonts.gstatic.com/s/jockeyone/v7/HTxpL2g2KjCFj4x8WI6AnI_xHLOk.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Jockey One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jockey One'), local('JockeyOne-Regular'), url(https://fonts.gstatic.com/s/jockeyone/v7/HTxpL2g2KjCFj4x8WI6AnIHxHA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Slab';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Josefin Slab Italic'), local('JosefinSlab-Italic'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-nwjwOK3Ps5GSJlNNkMalnrz6tDs8.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Slab';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Josefin Slab Bold Italic'), local('JosefinSlab-BoldItalic'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-kwjwOK3Ps5GSJlNNkMalnrzYWK9rnHg4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Josefin Slab Regular'), local('JosefinSlab-Regular'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-5wjwOK3Ps5GSJlNNkMalnqg6v.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Josefin Slab';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Josefin Slab Bold'), local('JosefinSlab-Bold'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-mwjwOK3Ps5GSJlNNkMalvESu6Kerl.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXclJURRD.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcBJURRD.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXchJURRD.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcdJURRD.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXctJURRD.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcpJURRD.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcRJUQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCZi0aTV.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRC9i0aTV.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCdi0aTV.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRChi0aTV.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCRi0aTV.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCVi0aTV.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Jura';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCti0Q.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Kelly Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Kelly Slab'), local('KellySlab-Regular'), url(https://fonts.gstatic.com/s/kellyslab/v7/-W_7XJX0Rz3cxUnJC5t6fkALfq0k.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Kelly Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Kelly Slab'), local('KellySlab-Regular'), url(https://fonts.gstatic.com/s/kellyslab/v7/-W_7XJX0Rz3cxUnJC5t6fkoLfq0k.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Kelly Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Kelly Slab'), local('KellySlab-Regular'), url(https://fonts.gstatic.com/s/kellyslab/v7/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAUi-qJCY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAXC-q.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_FQft1dw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_Gwft.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Libre Baskerville';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWx8QDP2V.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Libre Baskerville';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQDA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Libre Baskerville';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Libre Baskerville'), local('LibreBaskerville-Regular'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Libre Baskerville';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Libre Baskerville'), local('LibreBaskerville-Regular'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Libre Baskerville';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY5KcCsww.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Libre Baskerville';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Lobster';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zo-mM5Ez.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Lobster';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zoamM5Ez.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Lobster';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zo2mM5Ez.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Lobster';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zoymM5Ez.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Lobster';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zoKmMw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Marck Script';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Marck Script'), local('MarckScript-Regular'), url(https://fonts.gstatic.com/s/marckscript/v8/nwpTtK2oNgBA3Or78gapdwuyzCg_WMM.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Marck Script';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Marck Script'), local('MarckScript-Regular'), url(https://fonts.gstatic.com/s/marckscript/v8/nwpTtK2oNgBA3Or78gapdwuyxig_WMM.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Marck Script';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Marck Script'), local('MarckScript-Regular'), url(https://fonts.gstatic.com/s/marckscript/v8/nwpTtK2oNgBA3Or78gapdwuyyCg_.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Monoton';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Monoton'), local('Monoton-Regular'), url(https://fonts.gstatic.com/s/monoton/v7/5h1aiZUrOngCibe4TkHLQg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mr De Haviland';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Mr De Haviland Regular'), local('MrDeHaviland-Regular'), url(https://fonts.gstatic.com/s/mrdehaviland/v6/OpNVnooIhJj96FdB73296ksbOg3L60PlNQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mr De Haviland';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Mr De Haviland Regular'), local('MrDeHaviland-Regular'), url(https://fonts.gstatic.com/s/mrdehaviland/v6/OpNVnooIhJj96FdB73296ksbOg3F60M.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Niconne';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Niconne'), local('Niconne-Regular'), url(https://fonts.gstatic.com/s/niconne/v7/w8gaH2QvRug1_rTfnQKn2W4O.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Niconne';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Niconne'), local('Niconne-Regular'), url(https://fonts.gstatic.com/s/niconne/v7/w8gaH2QvRug1_rTfnQyn2Q.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Noticia Text Italic'), local('NoticiaText-Italic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJodNDF2Yv9qppOePKYRP12YwtVn07tpQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Noticia Text Italic'), local('NoticiaText-Italic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJodNDF2Yv9qppOePKYRP12YwtUn07tpQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Noticia Text Italic'), local('NoticiaText-Italic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJodNDF2Yv9qppOePKYRP12Ywtan04.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Noticia Text Bold Italic'), local('NoticiaText-BoldItalic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJrdNDF2Yv9qppOePKYRP12YwPhulvdhDXUeA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Noticia Text Bold Italic'), local('NoticiaText-BoldItalic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJrdNDF2Yv9qppOePKYRP12YwPhulvchDXUeA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Noticia Text Bold Italic'), local('NoticiaText-BoldItalic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJrdNDF2Yv9qppOePKYRP12YwPhulvShDU.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Noticia Text'), local('NoticiaText-Regular'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJ2dNDF2Yv9qppOePKYRP12aTtYh0o.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Noticia Text'), local('NoticiaText-Regular'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJ2dNDF2Yv9qppOePKYRP12aDtYh0o.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Noticia Text'), local('NoticiaText-Regular'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJ2dNDF2Yv9qppOePKYRP12ZjtY.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Noticia Text Bold'), local('NoticiaText-Bold'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJpdNDF2Yv9qppOePKYRP1-3R5Nt2vQnDE.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Noticia Text Bold'), local('NoticiaText-Bold'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJpdNDF2Yv9qppOePKYRP1-3R5NtmvQnDE.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Noticia Text';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Noticia Text Bold'), local('NoticiaText-Bold'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJpdNDF2Yv9qppOePKYRP1-3R5NuGvQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDujMR6WR.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuHMR6WR.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDunMR6WR.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDubMR6WR.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDurMR6WR.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuvMR6WR.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDujMR6WR.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuHMR6WR.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDunMR6WR.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDubMR6WR.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDurMR6WR.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuvMR6WR.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans Condensed';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuXMRw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752HT8Ghe4.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752Fj8Ghe4.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752Fz8Ghe4.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752GT8G.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTvs9CE5Q.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTtc9CE5Q.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTtM9CE5Q.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Oswald';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTus9C.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Overlock';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Overlock Italic'), local('Overlock-Italic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XTDmdMWRiN1_T9Z7Tc2OCsk4GC.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Overlock';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Overlock Italic'), local('Overlock-Italic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XTDmdMWRiN1_T9Z7Tc2O6skw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Overlock';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Overlock Bold Italic'), local('Overlock-BoldItalic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XQDmdMWRiN1_T9Z7Tc0FWJhrCj8RLT.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Overlock';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Overlock Bold Italic'), local('Overlock-BoldItalic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XQDmdMWRiN1_T9Z7Tc0FWJhr6j8Q.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Overlock';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Overlock Regular'), local('Overlock-Regular'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XVDmdMWRiN1_T9Z7TX6Oy0lw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Overlock';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Overlock Regular'), local('Overlock-Regular'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XVDmdMWRiN1_T9Z7TZ6Ow.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Overlock';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Overlock Bold'), local('Overlock-Bold'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XSDmdMWRiN1_T9Z7xizfmFtry79Q.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Overlock';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Overlock Bold'), local('Overlock-Bold'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XSDmdMWRiN1_T9Z7xizfmLtrw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Patrick Hand';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7s.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Patrick Hand';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8UMLLq7s.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Patrick Hand';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8XsLL.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtg2H68T.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtE2H68T.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtY2H68T.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvto2H68T.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvts2H68T.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtU2Hw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCp0y2knT.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCpQy2knT.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCpMy2knT.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCp8y2knT.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCp4y2knT.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Play';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCpAy2g.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnohkk72xU.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojUk72xU.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojEk72xU.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu4DRmBKY.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6zRmBKY.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6jRmBKY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRm.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWoe5ixi.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWEe5ixi.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5ixi.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5g.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Poppins';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrJJLucXtAKPY.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Poppins';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiDyp8kv8JHgFVrJJLmy15VFteOcEg.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin */\n@font-face {\n  font-family: 'Questrial';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Questrial'), local('Questrial-Regular'), url(https://fonts.gstatic.com/s/questrial/v7/QdVUSTchPBm7nuUeVf70viFl.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptsg8zYS_SKggPNyCg4Q4FqPfE.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptsg8zYS_SKggPNyCg4TYFq.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptpg8zYS_SKggPNyCgw9qR_DNCb_Vo.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptpg8zYS_SKggPNyCgw9qR_AtCb.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqhPAMif.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic3CsTKlA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic-CsTKlA.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic2CsTKlA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic5CsTKlA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTKlA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTKlA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 700;\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Rozha One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Rozha One Regular'), local('RozhaOne-Regular'), url(https://fonts.gstatic.com/s/rozhaone/v4/AlZy_zVFtYP12Zncg2kRc335bB0.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Rozha One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Rozha One Regular'), local('RozhaOne-Regular'), url(https://fonts.gstatic.com/s/rozhaone/v4/AlZy_zVFtYP12Zncg2kRfH35bB0.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Rozha One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Rozha One Regular'), local('RozhaOne-Regular'), url(https://fonts.gstatic.com/s/rozhaone/v4/AlZy_zVFtYP12Zncg2kRcn35.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Sacramento';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Sacramento'), local('Sacramento-Regular'), url(https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4CMf_exL.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Sacramento';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Sacramento'), local('Sacramento-Regular'), url(https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f_Q.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Sail';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Sail'), local('Sail-Regular'), url(https://fonts.gstatic.com/s/sail/v8/DPEjYwiBxwYJJB3JAQYA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Sail';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Sail'), local('Sail-Regular'), url(https://fonts.gstatic.com/s/sail/v8/DPEjYwiBxwYJJBPJAQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Sarina';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Sarina'), local('Sarina-Regular'), url(https://fonts.gstatic.com/s/sarina/v6/-F6wfjF3ITQwasLRJ0rVniA.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Sarina';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Sarina'), local('Sarina-Regular'), url(https://fonts.gstatic.com/s/sarina/v6/-F6wfjF3ITQwasLRKUrV.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Signika Regular'), local('Signika-Regular'), url(https://fonts.gstatic.com/s/signika/v8/vEFR2_JTCgwQ5ejvG18mBkho.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Signika Regular'), local('Signika-Regular'), url(https://fonts.gstatic.com/s/signika/v8/vEFR2_JTCgwQ5ejvG1EmBg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Signika Bold'), local('Signika-Bold'), url(https://fonts.gstatic.com/s/signika/v8/vEFU2_JTCgwQ5ejvE-oDE3lJanAd.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Signika';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Signika Bold'), local('Signika-Bold'), url(https://fonts.gstatic.com/s/signika/v8/vEFU2_JTCgwQ5ejvE-oDE3dJag.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Spinnaker';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Spinnaker'), local('Spinnaker-Regular'), url(https://fonts.gstatic.com/s/spinnaker/v9/w8gYH2oyX-I0_rvR6HmX1XYKmOo.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Spinnaker';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Spinnaker'), local('Spinnaker-Regular'), url(https://fonts.gstatic.com/s/spinnaker/v9/w8gYH2oyX-I0_rvR6HmX23YK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Suez One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v2/taiJGmd_EZ6rqscQgOFMmouQ-A.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Suez One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v2/taiJGmd_EZ6rqscQgOFAmouQ-A.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Suez One';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v2/taiJGmd_EZ6rqscQgOFOmos.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Work Sans'), local('WorkSans-Regular'), url(https://fonts.gstatic.com/s/worksans/v3/QGYsz_wNahGAdqQ43Rh_cqDpp_k.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Work Sans'), local('WorkSans-Regular'), url(https://fonts.gstatic.com/s/worksans/v3/QGYsz_wNahGAdqQ43Rh_fKDp.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Work Sans Bold'), local('WorkSans-Bold'), url(https://fonts.gstatic.com/s/worksans/v3/QGYpz_wNahGAdqQ43Rh3x4X8lthN2fk.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Work Sans Bold'), local('WorkSans-Bold'), url(https://fonts.gstatic.com/s/worksans/v3/QGYpz_wNahGAdqQ43Rh3x4X8mNhN.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txtNew {\n    word-wrap: break-word;\n    text-align: start;\n    pointer-events: none;\n}\n\n.txtNew h3 {\n    margin: 0;\n    line-height: normal;\n    letter-spacing: normal;\n}\n\n.color_32 {\n    color: #FFC880;\n}\n\n.font_3 {\n    font: normal normal normal 58px/1.4em impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif;\n    color: #222222;\n}\n\n#overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 2;\n    cursor: pointer;\n}\n\n#text{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    font-size: 20px;\n    color: white;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    -ms-transform: translate(-50%,-50%);\n}\n\n.parallax-pizza {\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/pizza/pizza.webp")) + ") no-repeat center center fixed;\n    height: 300px;\n    background-size: cover;\n}\n\n#show-mobile{\n    display: none !important;\n}\n\n@media screen and (min-width: 768px) {\n    #prix_pm{\n        margin-left: 0%;\n    }\n    #prix_gm{\n        margin-left: 0%;\n    }\n}\n\n@media screen and (max-width: 767px) {\n  #hide-mobile{\n    display: none !important;\n  }\n\n  #show-mobile{\n    display: block !important;\n  }\n  #list-prix{\n     display: -webkit-inline-box !important;\n     display: -ms-inline-flexbox !important;\n     display: inline-flex !important;\n  }\n  #prix_pm{\n    margin-left: 68%;\n    position: absolute;\n  }\n  #prix_gm{\n    margin-left: 68%;\n    position: absolute;\n  }\n\n  .aff_mobile {\n    border: 1px solid #a7ada7;\n    margin-right: 1px;\n    margin-bottom: 2px;\n  }\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"overlay\" *ngIf=\"!pizzasCharger;\">\n        <div id=\"text\">Chargement des pizzas en cours...</div>\n    </div>    \n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <h1>NOS PIZZAS</h1>\n            <hr style=\"border-bottom: 3px solid rgba(153, 153, 153, 1) !important;\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            \n        </div>\n        <div class=\"col-md-2\">\n            <p id=\"hide-mobile\"><strong>Petite</strong></p>\n        </div>\n        <div class=\"col-md-2\">\n            <p id=\"hide-mobile\"><strong>Grande</strong></p>\n        </div>\n    </div>  \n\n    <div class=\"row aff_mobile\" *ngFor=\"let i of pizza\">\n        <div class=\"col-md-8\">\n            <h3>{{i.nom | uppercase}}</h3>\n            <p>{{i.ingredient}}<p>\n        </div>\n        <div class=\"col-md-2\" id=\"list-prix\">\n            <p id=\"show-mobile\"><strong>Petite</strong></p>\n            <p id=\"prix_pm\">{{i.pm}}<p>\n        </div>\n        <div class=\"col-md-2\" id=\"list-prix\">\n            <p id=\"show-mobile\"><strong>Grande</strong></p>\n            <p id=\"prix_gm\">{{i.gm}}<p>\n        </div>\n    </div>\n</div>\n\n<div parallax class=\"parallax-pizza\" [config]=\"{axis: X, speed: -.0}\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PizzaComponent = /** @class */ (function () {
    function PizzaComponent(http) {
        this.http = http;
        this.pizzasCharger = false;
    }
    PizzaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/menu/pizza';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.pizza = data;
            _this.pizzasCharger = true;
        });
    };
    PizzaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pizza',
            template: __webpack_require__("../../../../../src/app/pages/pizza/pizza.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pizza/pizza.component.css"), __webpack_require__("../../../../../src/app/pages/pizza/fonts-googleapis-component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PizzaComponent);
    return PizzaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.webp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pizza.577efe31ffac39c552c0.webp";

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <alert></alert>\n\n            <div class=\"col-md-6 col-md-offset-3\">\n                <h2>Register</h2>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                        <label for=\"firstname\">First Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !firstname.valid\" class=\"help-block\">First Name is required</div>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                        <label for=\"lastname\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !lastname.valid\" class=\"help-block\">Last Name is required</div>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                    </div>\n                    <!-- <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                    </div> -->\n                    <!-- <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                    </div> -->\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary disabled\">Register</button>\n                        <!-- <img *ngIf=\"loading\" src=\"assets/images/loading.gif\" -->\n                        />\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_table_users_service__ = __webpack_require__("../../../../../src/app/_services/table/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router, usersService, alertService) {
        this.http = http;
        this.router = router;
        this.usersService = usersService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.usersService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // selector: 'app-register',
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_table_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map