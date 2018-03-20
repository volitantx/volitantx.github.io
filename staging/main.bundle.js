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

module.exports = "<div class=\"columns\">\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n  <div class=\"column\">\n    <div class=\"content\">\n      <h3>The Team</h3>\n    </div>\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile\">\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"assets/avatar-kirk.jpg\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified\">\n                <h4>Kirk Paff</h4>\n                <h6>CEO</h6>\n                <p>\n                  Kirk spent 20 years on active duty in the United States Marine Corps and retired in 2018, having spent \n                  the last 16 years with intelligence and Special Operations Forces. Combat and Service Disabled Veteran. \n                </p>\n                <p>\n                  He is married with four children, and has a passion for all things outdoors &mdash; especially camping \n                  and overlanding. His experience with SOF and love for the outside draws him to the world of commercial \n                  UAS. \n                \n                  Kirk loves providing expert production of UAS-collected imagery and video to support American agriculture, forestry, \n                  fisheries, and climatological studies that offer a unique understanding of our world.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"assets/avatar-jim.jpg\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified\">\n                <h4>Jim Blaney</h4>\n                <h6>President</h6>\n                <p>\n                  Jim has nearly 20 years experience in geospatial analysis and development with geospatial information systems (GIS).\n                  After serving in the United States Marine Corps as an 0261 Geographic Intelligence Specialist, he went on to complete\n                  his Bachelor of Science in Computer Science while working for industry-leading UAS and GIS software development companies.\n                </p>\n                <p>\n                  In his free time, Jim can be found hidden away in his basement talking to computers (literally), camping, hiking, or overlanding\n                  with his wife and daughters (and&#8198;/&#8198;or Kirk) in any of the several state or national parks, forests, \n                  and trails along the east coast.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.sass":
/***/ (function(module, exports) {

module.exports = ".media-content h2 {\n  font-size: 1.5rem; }\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactform_service__ = __webpack_require__("./src/app/contactform.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__capabilities_capabilities_component__ = __webpack_require__("./src/app/capabilities/capabilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__ = __webpack_require__("./src/app/partners/partners.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__capabilities_capabilities_component__["a" /* CapabilitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__partners_partners_component__["a" /* PartnersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([{
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */]
                    }, {
                        path: 'about',
                        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
                    }, {
                        path: 'capabilities',
                        component: __WEBPACK_IMPORTED_MODULE_7__capabilities_capabilities_component__["a" /* CapabilitiesComponent */]
                    }, {
                        path: 'contact',
                        component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */]
                    }], {
                    useHash: true
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__contactform_service__["a" /* ContactFormService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/capabilities/capabilities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n  <div class=\"column\">\n    <div class=\"content\">\n      <h3>Baseline Products</h3>\n    </div>\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile\">\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"assets/media-precision-mapping.jpg\" (click)=\"showModal($event)\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified-touch\">\n                <h4>Precision Orthophotos</h4>\n                <p>\n                  Stitched photos that give a top-down look at the environment, without perspective. We deliver high-quality printable products, and interactive web-based maps.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified-touch\">\n                <h4>Digital Elevation Models</h4>\n                <p>\n                  Digital Elevation Models\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"assets/media-3d-visualization.jpg\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified-touch\">\n                <h4>3D Point Clouds</h4>\n                <p>\n                  3D Point Clouds\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p class=\"call-to-action no-print\">\n        <a class=\"button is-primary is-inverted is-fullwidth\" [routerLink]=\"['contact']\">Request a Quote</a>\n      </p>\n  </div>\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n</div>\n<div class=\"columns\">\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n  <div class=\"column\">\n    <div class=\"content\">\n      <h3>Analytic Products</h3>\n    </div>\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile\">\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"assets/media-signature-analysis.jpg\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified-touch\">\n                <h4>Signature Analysis</h4>\n                <p>\n                  Signature Analysis\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tile is-parent\">\n          <div class=\"tile is-child card\">\n            <div class=\"card-image\">\n              <figure class=\"image is-3by2\">\n                <img src=\"https://bulma.io/images/placeholders/480x320.png\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <div class=\"content has-text-justified-touch\">\n                <h4>Change Detection</h4>\n                <p>\n                  Change Detection\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p class=\"call-to-action no-print\">\n      <a class=\"button is-primary is-inverted is-fullwidth\" [routerLink]=\"['contact']\">Request a Quote</a>\n    </p>\n  </div>\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n</div>\n"

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
    CapabilitiesComponent.prototype.ngAfterViewInit = function () {
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

module.exports = "<div class=\"columns\">\n  <div class=\"column is-2 no-print is-hidden-touch\"></div>\n  <div class=\"column\">\n    <div class=\"content\">\n      <h3>Volitant Exploitation LLC</h3>\n      <p>\n        17012 Takeaway Ln<br>\n        Dumfries, VA&nbsp;&nbsp;22026\n      </p>\n      <p>\n        <a href=\"mailto:info@volitantx.com\">\n          <span class=\"icon is-small\">\n            <i class=\"fa fa-envelope-o\"></i>\n          </span>\n          <span>info</span><span>@</span><span>volitantx</span><span>.com</span>\n        </a>\n      </p>\n    </div>\n  </div>\n  <div class=\"column is-2 no-print is-hidden-touch\"></div>\n</div>\n<div class=\"columns\">\n  <div class=\"column is-2 no-print is-hidden-touch\"></div>\n  <div class=\"column no-print\">\n    <div class=\"content\">\n      <h3>Request a Quote</h3>\n    </div>\n    <div class=\"field\">\n      <label class=\"label\">Name</label>\n      <div class=\"control\">\n        <input type=\"text\" class=\"input\" name=\"name\" #contact>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label class=\"label\">Email</label>\n      <div class=\"control\">\n        <input type=\"email\" class=\"input\" name=\"_replyto\" #contact>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label class=\"label\">Phone</label>\n      <div class=\"control\">\n        <input type=\"tel\" class=\"input\" name=\"phone\" #contact>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label class=\"label\">Message</label>\n      <div class=\"control\">\n        <textarea class=\"textarea\" name=\"message\" #contact></textarea>\n      </div>\n    </div>\n    <div class=\"field is-grouped is-grouped-right is-hidden-touch\">\n      <div class=\"control is-expanded\" [class.is-hidden]=\"!contactSubmitSuccess\">\n        <label class=\"label\">Your request was received. Thank you.</label>\n      </div>\n      <div class=\"control\">\n        <a class=\"button is-primary\" (click)=\"submitContactForm($event)\" [attr.disabled]=\"contactSubmitSuccess ? true : null\" #submit>\n          Submit\n        </a>\n      </div>\n    </div>\n    <div class=\"field is-hidden-desktop\">\n      <div class=\"control is-expanded\">\n        <a class=\"button is-primary is-fullwidth\" (click)=\"submitContactForm($event)\" [attr.disabled]=\"contactSubmitSuccess ? true : null\" #submit>\n          Submit\n        </a>\n      </div>\n      <div class=\"control is-expanded\" [class.is-hidden]=\"!contactSubmitSuccess\">\n        <label class=\"label has-text-centered\">Your request was received. Thank you.</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"column is-2 no-print is-hidden-touch\"></div>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactform_service__ = __webpack_require__("./src/app/contactform.service.ts");
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
    function ContactComponent(service) {
        this.service = service;
        this.contactFields = null;
        this.submitButtons = null;
        this.contactSubmitSuccess = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.clearContactForm = function () {
        this.contactFields.forEach(function (eRef) {
            var e = eRef.nativeElement;
            if (e instanceof HTMLInputElement) {
                e.value = '';
            }
            else if (e instanceof HTMLTextAreaElement) {
                e.value = '';
            }
        });
    };
    ContactComponent.prototype.submitContactForm = function (event) {
        var _this = this;
        if (!this.validateContactForm()) {
            return;
        }
        var fields = {};
        this.contactFields.forEach(function (eRef) {
            var e = eRef.nativeElement;
            var key = e.attributes.getNamedItem('name').value;
            var value = null;
            if (e instanceof HTMLInputElement) {
                value = e.value;
            }
            else if (e instanceof HTMLTextAreaElement) {
                value = e.value;
            }
            fields[key] = value;
        });
        this.submitButtons.forEach(function (eRef) {
            var e = eRef.nativeElement;
            if (!e.classList.contains('is-loading')) {
                e.classList.add('is-loading');
            }
        });
        this.service.submitForm(fields).subscribe(function (result) {
            if (result) {
                _this.clearContactForm();
                _this.contactSubmitSuccess = true;
            }
            else {
                // ?
            }
        }).add(function (_) {
            _this.submitButtons.forEach(function (eRef) {
                var e = eRef.nativeElement;
                if (e.classList.contains('is-loading')) {
                    e.classList.remove('is-loading');
                }
            });
        });
    };
    ContactComponent.prototype.validateContactForm = function () {
        var hasErrors = false;
        this.contactFields.forEach(function (eRef) {
            var e = eRef.nativeElement;
            var value = null;
            if (e instanceof HTMLInputElement) {
                value = e.value;
            }
            else if (e instanceof HTMLTextAreaElement) {
                value = e.value;
            }
            if (value == null || value.length == 0) {
                if (!e.classList.contains('is-danger')) {
                    e.classList.add('is-danger');
                }
                hasErrors = true;
            }
            else {
                if (e.classList.contains('is-danger')) {
                    e.classList.remove('is-danger');
                }
            }
        });
        return !hasErrors;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('contact'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], ContactComponent.prototype, "contactFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('submit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* QueryList */])
    ], ContactComponent.prototype, "submitButtons", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contactform_service__["a" /* ContactFormService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contactform.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactFormService = /** @class */ (function () {
    function ContactFormService(http) {
        this.http = http;
        this.contactForm = 'AKfycbx4o8NDNITD8EdP71m1PMvfyuL596Cdr72fFVz7LsrCk5XVNG8';
    }
    ContactFormService.prototype.submitForm = function (params) {
        var url = "https://script.google.com/macros/s/" + this.contactForm + "/exec";
        url += '?' + new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ fromObject: params }).toString();
        return this.http.jsonp(url, 'callback').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('submitForm')), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (result) { return result['result'] === 'success'; }));
    };
    ContactFormService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ContactFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactFormService);
    return ContactFormService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"columns\">\n    <div class=\"column no-print\">\n      <div class=\"content has-text-right\">\n        <figure class=\"image is-96x96\">\n          <img src=\"assets/veteran-owned.png\">\n        </figure>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"content is-size-7 has-text-centered-touch\">\n        <p>\n          <strong>Volitant Exploitation LLC</strong><br>\n          17012 Takeaway Ln<br>\n          Dumfries, VA&nbsp;&nbsp;22026\n        </p>\n        <p>\n          <a href=\"mailto:info@volitantx.com\">\n            <span class=\"icon is-small\">\n              <i class=\"fa fa-envelope-o\"></i>\n            </span>\n            <span>info</span><span>@</span><span>volitantx</span><span>.com</span>\n          </a>\n        </p>\n        <p class=\"no-print\">\n          <span class=\"tabular\">\n            <span>\n              <span>NAICS</span>\n              <span>xxxxxx</span>\n            </span>\n            <span>\n              <span>DUNS</span>\n              <span>xxxxxxxxx</span>\n            </span>\n          </span>\n        </p>\n      </div>\n    </div>\n  </div>\n  <hr class=\"no-print\">\n  <div class=\"content is-small\">\n    <p class=\"has-text-centered has-text-grey\">\n      &copy;{{ currentYear }} Volitant Exploitation LLC. All rights reserved.\n    </p>\n  </div>\n</footer>"

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

module.exports = "<header class=\"logo is-primary\">\n  <figure class=\"image is-128x128 has-text-centered\">\n    <a [routerLink]=\"['']\">\n      <img src=\"assets/lm-gold-gradient-256.png\">\n    </a>\n  </figure>\n  <div class=\"has-text-centered\">\n    <span class=\"brandmark large\">\n      <span>Volitant</span><br>\n      <span>Exploitation</span>\n    </span>\n  </div>\n</header>\n<div class=\"hero is-primary no-print\">\n  <div class=\"hero-head\">\n    <nav class=\"navbar\">\n      <div class=\"container\">\n        <div class=\"navbar-brand\">\n          <span class=\"navbar-burger burger\" [class.is-active]=\"isMenu\" (click)=\"toggleMenu()\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </span>\n        </div>\n        <div class=\"navbar-menu\" [class.is-active]=\"isMenu\">\n          <div class=\"navbar-start\">\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['']\" routerLinkActive=\"is-active\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n            </div>\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['capabilities']\" routerLinkActive=\"is-active\">Capabilities</a>\n            </div>\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['about']\" routerLinkActive=\"is-active\">About</a>\n            </div>\n            <!-- <div class=\"navbar-item\">\n              <a [routerLink]=\"['partners']\" routerLinkActive=\"is-active\">Partners</a>\n            </div> -->\n            <div class=\"navbar-item\">\n              <a [routerLink]=\"['contact']\" routerLinkActive=\"is-active\">Contact / Quote</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/***/ (function(module, exports) {

module.exports = ".logo {\n  padding: 1.25rem 0 0 0; }\n  .logo .image {\n    margin: 0 auto; }\n  @media screen and (max-width: 1023px) {\n    .logo {\n      padding: 3.25rem 0 0 0; } }\n  @media print {\n    .logo {\n      padding: 1rem 0 0.5rem 0; } }\n  .navbar-start {\n  margin-left: auto; }\n"

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

module.exports = "<div class=\"columns\">\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n  <div class=\"column\">\n    <div class=\"content has-text-justified\">\n      <blockquote>\n        <dl>\n          <dt>\n            <strong>Volitant</strong>\n            <span class=\"pronunciation\">ˈvɒlɪtənt</span>\n          </dt>\n          <i>adj.</i>\n          <dd>\n            Flying or capable of flying; moving about rapidly.\n          </dd>\n        </dl>\n      </blockquote>\n      <h3>UAS Imagery &amp; Video Exploitation</h3>\n      <p>\n        As a professional UAS pilot, licensed hobbyist, or entrepreneurial enthusiast, your primary focus is to turn your investment into real income. There are literally dozens of web-based platforms for uploading and processing your UAS images into high-resolution maps, elevation models, and 3D visualizations.\n      </p>\n      <p>\n        <strong>We're not re-inventing the wheel.</strong>\n      </p>\n      <p>\n        Using a web platform for UAS imagery processing can provide rapid, affordable results, <i>but they produce inconsistent results between subsequent collections.</i> Orthophotos, elevation models, and other derived products will have positional errors, often overlaying at an offset of tens of feet from one another.\n      </p>\n      <p>\n        <strong>Here's where Volitant Exploitation excels:</strong>\n      </p>\n      <ul>\n        <li><strong>Context</strong>. Standalone products are suitable for situational awareness, but comprehensive products containing other foundational data provide crucial context for informed decision-making (e.g., roads, hydrology, forestry, soil composition, etc.)</li>\n        <li><strong>Accuracy</strong>. Change detection, such as erosion mapping, and other comparative products are impossible to produce if two overlapping collections do not align geographically</li>\n        <li><strong>Experience</strong>. We have over 30 years of combined experience in imagery exploitation and geospatial analysis. We have produced hundreds, if not thousands, of analytic and cartographic products in support of real-world operations for the Marine Corps and other expeditionary customers.</li>\n      </ul>\n      <p>\n        <strong>Let us show you the hidden potential of your data</strong>.\n      </p>\n    </div>\n  </div>\n  <div class=\"column is-2 no-print is-hidden-touch is-hidden-desktop-only\"></div>\n</div>\n<div class=\"columns no-print\">\n  <div class=\"column is-2 is-hidden-touch is-hidden-desktop-only\"></div>\n    <div class=\"column\">\n      <p class=\"call-to-action no-print\">\n        <a class=\"button is-primary is-inverted is-fullwidth\" [routerLink]=\"['contact']\">Request a Quote</a>\n      </p>\n    </div>\n  <div class=\"column is-2 is-hidden-touch is-hidden-desktop-only\"></div>\n</div>\n"

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

/***/ "./src/app/partners/partners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h1>Partners</h1>\n</div>\n<article class=\"media\">\n  <figure class=\"media-left\">\n    <p class=\"image is-64x64\">\n      <img src=\"assets/partner-athenas-owl.png\">\n    </p>\n  </figure>\n  <div class=\"media-content\">\n    <div class=\"content\">\n      <p>\n        <strong>Athena's Owl LLC</strong><br>\n        Veteran-operated media production company specializing in aerial services.\n      </p>\n    </div>\n    <nav class=\"level is-mobile\">\n      <div class=\"level-left\">\n        <a href=\"//www.athenas-owl.com\" target=\"_blank\" class=\"level-item\">\n          <span class=\"icon is-small\">\n            <i class=\"fa fa-globe\"></i>\n          </span>&nbsp;\n          <span>Website</span>\n        </a>\n        <a href=\"//www.facebook.com/athenasowlcom\" target=\"_blank\" class=\"level-item\">\n          <span class=\"icon is-small\">\n            <i class=\"fa fa-facebook-official\"></i>\n          </span>&nbsp;\n          <span>Facebook</span>\n        </a>\n        <a href=\"//www.youtube.com/athenasowl\" target=\"_blank\" class=\"level-item\">\n          <span class=\"icon is-small\">\n            <i class=\"fa fa-youtube-play\"></i>\n          </span>&nbsp;\n          <span>YouTube</span>\n        </a>\n        <a href=\"//www.instagram.com/athenasowlcom\" target=\"_blank\" class=\"level-item\">\n          <span class=\"icon is-small\">\n            <i class=\"fa fa-instagram\"></i>\n          </span>&nbsp;\n          <span>Instagram</span>\n        </a>\n      </div>\n    </nav>\n  </div>\n</article>"

/***/ }),

/***/ "./src/app/partners/partners.component.sass":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersComponent; });
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

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-partners',
            template: __webpack_require__("./src/app/partners/partners.component.html"),
            styles: [__webpack_require__("./src/app/partners/partners.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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