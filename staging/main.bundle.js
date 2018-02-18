webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content is-small\">\n  <h1>About</h1>\n  <p>asdflashdfl;asd;fljasf</p>\n  <div class=\"columns\">\n    <div class=\"column is-6\">\n      <div class=\"card\">\n        <div class=\"card-image\">\n          <figure class=\"image is-square\">\n              <img src=\"assets/avatar-kirk.jpg\">\n          </figure>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"media\">\n            <div class=\"media-content\">\n              <h3 class=\"title\">Kirk Paff</h3>\n              <p class=\"subtitle\">CEO</p>\n            </div>\n          </div>\n          <div class=\"content\">\n            Kirk retired from the United States Marine Corps in 2018, after serving as an 0241 Imagery Analyst for over 15 years.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"column is-6\">\n      <div class=\"card\">\n        <div class=\"card-image\">\n          <figure class=\"image is-square\">\n              <img src=\"assets/avatar-jim.jpg\">\n          </figure>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"media\">\n            <div class=\"media-content\">\n              <h3 class=\"title\">Jim Blaney</h3>\n              <p class=\"subtitle\">President</p>\n            </div>\n          </div>\n          <div class=\"content\">\n            <p>\n              Jim has almost 20 years experience in geospatial analysis and development with geospatial information systems (GIS).\n              After serving in the United States Marine Corps as an 0261 Geographic Intelligence Specialist, he went on to complete\n              his Bachelor of Science in Computer Science while working for industry-leading UAS and GIS software development and \n              production companies.\n            </p>\n            <p>\n              In his free time, Jim can be found hidden away in his basement talking to computers (literally), camping and/or hiking\n              in any of the several state or national parks, forests, and trails along the east coast, or at the local firing range.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.sass":
/***/ (function(module, exports) {

module.exports = ".content .subtitle {\n  font-size: 1rem; }\n\n.content.is-small .subtitle {\n  font-size: 0.75rem;\n  text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"section\">\n  <div class=\"container\">\n    <router-outlet></router-outlet>    \n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Volitant Exploitation';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__capabilities_capabilities_component__ = __webpack_require__("./src/app/capabilities/capabilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__capabilities_capabilities_component__["a" /* CapabilitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([{
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
                    }, {
                        path: 'capabilities',
                        component: __WEBPACK_IMPORTED_MODULE_8__capabilities_capabilities_component__["a" /* CapabilitiesComponent */]
                    }, {
                        path: 'about',
                        component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]
                    }, {
                        path: 'contact',
                        component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */]
                    }], {
                    useHash: true
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/capabilities/capabilities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content has-text-justified\">\n  <h1>Precision Orthophotos</h1>\n  <div class=\"columns\">\n    <div class=\"column\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis tortor sit amet sagittis vestibulum. Nullam at viverra sem, hendrerit maximus libero. Nulla fermentum rutrum rhoncus. In sed mi id erat vulputate consequat sed sit amet ex. Nullam nec cursus quam. Maecenas aliquet elit in enim sollicitudin, quis imperdiet libero hendrerit. Nulla ac elementum ex. Donec vitae ornare erat, quis venenatis lacus. Praesent luctus metus cursus dolor molestie vulputate. Donec vel turpis vel ipsum euismod convallis id at velit. Aliquam id vulputate libero. Nunc risus nibh, congue condimentum velit sit amet, semper faucibus justo. Morbi vel lorem sed nulla pellentesque sodales.\n      </p>\n      <p>\n        Donec nec ornare erat. Maecenas et tempor sapien. Quisque posuere risus at lacus euismod, non ullamcorper dolor molestie. Nam non mi id dolor aliquam viverra vel sed massa. Sed dignissim pretium purus sit amet tempor. Praesent iaculis viverra nisi, eu dapibus massa sagittis eu. Praesent malesuada nunc viverra orci tincidunt, vitae sagittis velit pellentesque.\n      </p>\n    </div>\n    <div class=\"column is-one-third\">\n      <figure class=\"image is-3by2\">\n        <img src=\"assets/media-precision-mapping.jpg\">\n      </figure>\n    </div>\n  </div>\n  <h1>3D Visualization</h1>\n  <div class=\"columns\">\n      <div class=\"column is-one-third is-hidden-mobile\">\n          <figure class=\"image is-3by2\">\n            <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n          </figure>\n        </div>\n    <div class=\"column\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis tortor sit amet sagittis vestibulum. Nullam at viverra sem, hendrerit maximus libero. Nulla fermentum rutrum rhoncus. In sed mi id erat vulputate consequat sed sit amet ex. Nullam nec cursus quam. Maecenas aliquet elit in enim sollicitudin, quis imperdiet libero hendrerit. Nulla ac elementum ex. Donec vitae ornare erat, quis venenatis lacus. Praesent luctus metus cursus dolor molestie vulputate. Donec vel turpis vel ipsum euismod convallis id at velit. Aliquam id vulputate libero. Nunc risus nibh, congue condimentum velit sit amet, semper faucibus justo. Morbi vel lorem sed nulla pellentesque sodales.\n      </p>\n      <p>\n        Donec nec ornare erat. Maecenas et tempor sapien. Quisque posuere risus at lacus euismod, non ullamcorper dolor molestie. Nam non mi id dolor aliquam viverra vel sed massa. Sed dignissim pretium purus sit amet tempor. Praesent iaculis viverra nisi, eu dapibus massa sagittis eu. Praesent malesuada nunc viverra orci tincidunt, vitae sagittis velit pellentesque.\n      </p>\n    </div>\n    <div class=\"column is-one-third is-hidden-desktop\">\n      <figure class=\"image is-3by2\">\n        <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n      </figure>\n    </div>\n  </div>\n  <h1>Analytic Products</h1>\n  <h3>Signature Analysis</h3>\n  <div class=\"columns\">\n    <div class=\"column\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis tortor sit amet sagittis vestibulum. Nullam at viverra sem, hendrerit maximus libero. Nulla fermentum rutrum rhoncus. In sed mi id erat vulputate consequat sed sit amet ex. Nullam nec cursus quam. Maecenas aliquet elit in enim sollicitudin, quis imperdiet libero hendrerit. Nulla ac elementum ex. Donec vitae ornare erat, quis venenatis lacus. Praesent luctus metus cursus dolor molestie vulputate. Donec vel turpis vel ipsum euismod convallis id at velit. Aliquam id vulputate libero. Nunc risus nibh, congue condimentum velit sit amet, semper faucibus justo. Morbi vel lorem sed nulla pellentesque sodales.\n      </p>\n      <p>\n        Donec nec ornare erat. Maecenas et tempor sapien. Quisque posuere risus at lacus euismod, non ullamcorper dolor molestie. Nam non mi id dolor aliquam viverra vel sed massa. Sed dignissim pretium purus sit amet tempor. Praesent iaculis viverra nisi, eu dapibus massa sagittis eu. Praesent malesuada nunc viverra orci tincidunt, vitae sagittis velit pellentesque.\n      </p>\n    </div>\n    <div class=\"column is-one-third\">\n      <figure class=\"image is-3by2\">\n        <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n      </figure>\n    </div>\n  </div>\n  <h3>Change Detection</h3>\n  <div class=\"columns\">\n    <div class=\"column is-one-third is-hidden-mobile\">\n      <figure class=\"image is-3by2\">\n        <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n      </figure>\n    </div>\n    <div class=\"column\">\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis tortor sit amet sagittis vestibulum. Nullam at viverra sem, hendrerit maximus libero. Nulla fermentum rutrum rhoncus. In sed mi id erat vulputate consequat sed sit amet ex. Nullam nec cursus quam. Maecenas aliquet elit in enim sollicitudin, quis imperdiet libero hendrerit. Nulla ac elementum ex. Donec vitae ornare erat, quis venenatis lacus. Praesent luctus metus cursus dolor molestie vulputate. Donec vel turpis vel ipsum euismod convallis id at velit. Aliquam id vulputate libero. Nunc risus nibh, congue condimentum velit sit amet, semper faucibus justo. Morbi vel lorem sed nulla pellentesque sodales.\n      </p>\n      <p>\n        Donec nec ornare erat. Maecenas et tempor sapien. Quisque posuere risus at lacus euismod, non ullamcorper dolor molestie. Nam non mi id dolor aliquam viverra vel sed massa. Sed dignissim pretium purus sit amet tempor. Praesent iaculis viverra nisi, eu dapibus massa sagittis eu. Praesent malesuada nunc viverra orci tincidunt, vitae sagittis velit pellentesque.\n      </p>\n    </div>\n    <div class=\"column is-one-third is-hidden-desktop\">\n      <figure class=\"image is-3by2\">\n        <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n      </figure>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/capabilities/capabilities.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/capabilities/capabilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapabilitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapabilitiesComponent = /** @class */ (function () {
    function CapabilitiesComponent() {
    }
    CapabilitiesComponent.prototype.ngOnInit = function () {
    };
    CapabilitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-capabilities',
            template: __webpack_require__("./src/app/capabilities/capabilities.component.html"),
            styles: [__webpack_require__("./src/app/capabilities/capabilities.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CapabilitiesComponent);
    return CapabilitiesComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h1>Volitant Exploitation LLC</h1>\n  <p>\n    17012 Takeaway Ln<br>\n    Dumfries, VA&nbsp;&nbsp;22026\n  </p>\n  <p class=\"is-hidden-desktop\">\n    <a href=\"tel:+19105459159\">\n      <span class=\"icon is-small\">\n        <i class=\"fa fa-phone\"></i>\n      </span>\n      <span>(910) 545-9159</span>\n    </a>\n  </p>\n  <p class=\"is-hidden-mobile\">\n    <span class=\"icon is-small\">\n      <i class=\"fa fa-phone\"></i>\n    </span>\n    <span>(910) 545-9159</span>\n  </p>\n  <p>\n    <a href=\"mailto:info@volitantx.com\">\n      <span class=\"icon is-small\">\n        <i class=\"fa fa-envelope-o\"></i>\n      </span>\n      <span>info</span><span>@</span><span>volitantx</span><span>.com</span>\n    </a>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"content is-size-7 has-text-centered no-print\">\n    <p>\n      <strong>Volitant Exploitation LLC</strong><br>\n      17012 Takeaway Ln<br>\n      Dumfries, VA&nbsp;&nbsp;22026\n    </p>\n    <p>\n      <a href=\"mailto:info@volitantx.com\">\n        <span class=\"icon is-small\">\n          <i class=\"fa fa-envelope-o\"></i>\n        </span>\n        <span>info</span><span>@</span><span>volitantx</span><span>.com</span>\n      </a>\n    </p>\n    <p>\n      <span class=\"tabular\">\n        <span>\n          <span>NAICS</span>\n          <span>xxxxxx</span>\n        </span>\n        <span>\n          <span>DUNS</span>\n          <span>xxxxxxxxx</span>\n        </span>\n      </span>\n    </p>\n  </div>\n  <hr class=\"no-print\">\n  <div class=\"content is-small\">\n    <p class=\"has-text-centered has-text-grey\">\n      &copy;{{ currentYear }} Volitant Exploitation LLC. All rights reserved.\n    </p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 2rem 1.5rem 1.5rem; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"logo is-primary\">\n  <figure class=\"image is-128x128 has-text-centered\">\n    <a [routerLink]=\"['']\">\n      <img src=\"assets/lm-gold-gradient.png\">\n    </a>\n  </figure>\n  <div class=\"has-text-centered\">\n    <span class=\"brandmark large\">\n      <span>Volitant</span><br>\n      <span>Exploitation</span>\n    </span>\n  </div>\n</header>\n<div class=\"hero is-primary no-print\">\n  <div class=\"hero-head\">\n    <nav class=\"navbar\">\n      <div class=\"container\">\n        <div class=\"navbar-brand\">\n          <span class=\"navbar-burger burger\" [class.is-active]=\"isMenu\" (click)=\"toggleMenu()\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </span>\n        </div>\n        <div class=\"navbar-menu\" [class.is-active]=\"isMenu\">\n          <div class=\"navbar-start\">\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['']\" routerLinkActive=\"is-active\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n            </div>\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['capabilities']\" routerLinkActive=\"is-active\">Capabilities</a>\n            </div>\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['about']\" routerLinkActive=\"is-active\">About</a>\n            </div>\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['contact']\" routerLinkActive=\"is-active\">Contact</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/***/ (function(module, exports) {

module.exports = ".logo {\n  padding: 1.25rem 0 0 0; }\n  .logo .image {\n    margin: 0 auto; }\n  @media screen and (max-width: 1023px) {\n    .logo {\n      padding: 3.25rem 0 0 0; } }\n  @media print {\n    .logo {\n      padding: 0; } }\n  .navbar-start {\n  margin-left: auto; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route) {
        this.route = route;
        this.isMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                _this.hideMenu();
            }
        });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.isMenu = !this.isMenu;
    };
    HeaderComponent.prototype.hideMenu = function () {
        this.isMenu = false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content has-text-justified\">\n  <blockquote class=\"has-text-left\">\n    <dl>\n      <dt>\n        <strong>Volitant</strong>\n        <span class=\"pronunciation\">ˈvɒlɪtənt</span>\n      </dt>\n      <i>adj.</i>\n      <dd>\n        Flying or capable of flying; moving about rapidly.\n      </dd>\n    </dl>\n  </blockquote>\n  <!-- Orientation -->\n  <h1>Making Sense of the Environment</h1>\n  <div class=\"columns\">\n    <div class=\"column\">\n      <ul>\n        <li>Commercial use of drones has increased exponentially within the last decade</li>\n        <li>Multiple solution providers exist for processing images and videos to imagery and derived products</li>\n        <li>Many solutions charge premium monthly fees for analytics service provides, which are passed on to the end customer</li>\n        <li>&hellip;</li>\n      </ul>\n    </div>\n  </div>\n  <!-- Situation -->\n  <h1>Providing Expertise to a Growing Industry</h1>\n  <div class=\"columns\">\n    <div class=\"column\">\n      <ul>\n        <li>What/where/when are implied by collection; what/why/how are derived by analysis</li>\n        <li>Learning curve of the applied science, classical training and experience from DoD/USMC</li>\n        <li>Errors and assumptions by &lsquo;hobbyist&rsquo; pilots using off-the-shelf tooling can cost time/money</li>\n        <li>&hellip;</li>\n      </ul>\n    </div>\n    <!-- <div class=\"column is-one-third\">\n      <figure class=\"image is-3by2\">\n        <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n      </figure>\n    </div> -->\n  </div>\n  <!-- Mission -->\n  <h1>Delivering Accurate &amp; Informative Analysis</h1>\n  <div class=\"columns\">\n    <div class=\"column\">\n      <ul>\n        <li>Combined experience of 30 years &mdash; <strong>need to actually do this math</strong></li>\n        <li>Discuss mission-related track record and teamwork in forward environment (specific to time together on the MEU)</li>\n        <li>\n          Providing professionally-tailored analysis to the following industries:\n          <ul>\n            <li>Agricultural</li>\n            <li>Land Management</li>\n            <li>Public Infrastructure</li>\n            <li>Real Estate</li>\n            <li>Environmental Conservation</li>\n            <li>Archeological</li>\n          </ul>\n        </li>\n        <li>&hellip;</li>\n      </ul>\n    </div>\n    <!-- <div class=\"column is-one-third\">\n      <figure class=\"image is-3by2\">\n        <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n      </figure>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map