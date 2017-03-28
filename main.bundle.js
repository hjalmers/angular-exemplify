webpackJsonp([1,5],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExmplifySourceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExmplifySourceService = (function () {
    function ExmplifySourceService(http) {
        this.http = http;
    }
    ExmplifySourceService.prototype.getSource = function (src) {
        return this.http.get(src)
            .map(function (res) { return res.text(); })
            .catch(this.handleError);
    };
    ExmplifySourceService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    return ExmplifySourceService;
}());
ExmplifySourceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ExmplifySourceService);

var _a;
//# sourceMappingURL=source.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 334;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(344);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Application title!';
        this.externalSources = [{
                name: 'app.module.ts',
                src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.module.ts'
            }, {
                name: 'app.component.ts',
                src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.ts'
            }, {
                name: 'app.component.css',
                src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.css',
                language: 'css'
            }];
        this.signIn = function () {
            console.log('you clicked sign in');
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(354),
        styles: [__webpack_require__(352)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewEncapsulation */].Emulated
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exemplify_exemplify_module__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__exemplify_exemplify_module__["a" /* ExemplifyModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_source_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExemplifyDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], WindowRef);

var ExemplifyDirective = (function () {
    function ExemplifyDirective(el, renderer, winRef, sourceService) {
        this.winRef = winRef;
        this.sourceService = sourceService;
        this.source = 'element';
        this.usePrism = true;
        this.navStyle = 'inline';
        this.keepInputs = false;
        this.visibility = false;
        this.escapeStrings = [];
        this.activeListeners = [];
        this.defaultTexts = {
            heading: "Code:",
            markup: "markup",
            copy: "Copy",
            show: "Show",
            hide: "Hide",
        };
        this.escapeAngularDirectives = [
            '*ngIf', '*ngFor', '*ngPluralCase', '*ngSwitchCase', '*ngSwitchDefault', 'ngClass', 'ngPlural', 'ngStyle', 'ngSwitch', 'ngTemplateOutlet', '[ngIf]', '[ngFor]', '[ngForOf]', '[ngPluralCase]', '[ngSwitchCase]', '[ngSwitchDefault]', 'ngModel'
        ];
        /**
         * Copy to clipboard
         * @param {string} text - text to be copied to clipboard.
         */
        this.copyToClipboard = function (text) {
            if (this.window.clipboardData && this.window.clipboardData.setData) {
                // IE specific code path to prevent textarea being shown while dialog is visible.
                return this.window.clipboardData.setData("Text", text);
            }
            else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea");
                textarea.textContent = text;
                textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    return document.execCommand("copy"); // Security exception may be thrown by some browsers.
                }
                catch (ex) {
                    console.warn("Copy to clipboard failed.", ex);
                    return false;
                }
                finally {
                    document.body.removeChild(textarea);
                }
            }
        };
        this.showCode = function (code, language, forceShow) {
            if (language === void 0) { language = 'markup'; }
            this.copyContent = code;
            if (this.usePrism && this.prism) {
                // remove last used class name (needed to clear class)
                if (this.lastClass) {
                    this.renderer.setElementClass(this.pre, 'language-' + this.lastClass, false);
                    this.renderer.setElementClass(this.code, 'language-' + this.lastClass, false);
                }
                // add classes to element
                this.renderer.setElementClass(this.pre, 'language-' + language, true);
                this.renderer.setElementClass(this.code, 'language-' + language, true);
                this.lastClass = language;
                switch (language) {
                    case 'typescript':
                    case 'javascript':
                    case 'js':
                        language = 'js';
                        break;
                    case 'css':
                        language = 'css';
                        break;
                    default:
                        language = 'markup';
                        break;
                }
                this.code.innerHTML = this.prism.highlight(code, this.prism.languages[language]);
            }
            else {
                this.renderer.setText(this.codeP, code);
            }
            this.toggleVisibility(this.pre, forceShow ? forceShow : this.visibility);
        };
        this.addLink = function (hostElement, name, code, language) {
            var _this = this;
            /** Create link for toggling markup */
            var listItem = this.renderer.createElement(hostElement, 'li');
            this.renderer.setElementClass(listItem, 'nav-item', true);
            var renderElement = this.renderer.createElement(listItem, 'a');
            this.renderer.createText(renderElement, name);
            this.renderer.setElementAttribute(renderElement, 'href', '#');
            this.renderer.setElementClass(renderElement, 'nav-link', true);
            this.renderer.setElementClass(renderElement, 'exemplify-' + name.toLowerCase().replace(/[ ._]/g, '-'), true);
            if (this.activeListeners.length === 0) {
                if (this.visibility) {
                    this.renderer.setElementClass(renderElement, 'active', true);
                }
                this.activeItem = renderElement;
            }
            /** Add click listener */
            var listener = this.renderer.listen(renderElement, 'click', function (event) {
                _this.removeActiveClass();
                _this.renderer.setElementClass(renderElement, 'active', true);
                _this.showCode(code, language, true);
                _this.activeItem = renderElement;
                event.preventDefault();
            });
            this.activeListeners.push(listener);
            return renderElement;
        };
        this.addHide = function (hostElement, navElement) {
            var _this = this;
            /** Create link for toggling markup */
            this.toggleState = this.renderer.createElement(navElement, 'a');
            var toggleState = this.renderer.createText(this.toggleState, this.texts.hide);
            this.renderer.setElementAttribute(this.toggleState, 'href', '#');
            this.renderer.setElementClass(this.toggleState, 'exemplify-hide', true);
            /** Add click listener for toggling markup example */
            this.hideMarkup = this.renderer.listen(this.toggleState, 'click', function (event) {
                event.preventDefault();
                //let content = this.parser.parseFromString(this.code.innerHTML,"text/html").body.childNodes[0].textContent;
                _this.toggleVisibility(toggleState);
            });
            this.activeListeners.push(this.hideMarkup);
        };
        this.addCopy = function (hostElement, navElement) {
            var _this = this;
            /** Create link for copying markup */
            var copy = this.renderer.createElement(navElement, 'a');
            this.renderer.createText(copy, this.texts.copy);
            this.renderer.setElementAttribute(copy, 'href', '#');
            this.renderer.setElementClass(copy, 'exemplify-copy', true);
            /** Add click listener for copying markup example */
            this.copyMarkup = this.renderer.listen(copy, 'click', function (event) {
                event.preventDefault();
                //let content = this.parser.parseFromString(this.code.innerHTML,"text/html").body.childNodes[0].textContent;
                _this.copyToClipboard(_this.copyContent);
            });
            this.activeListeners.push(this.copyMarkup);
        };
        this.getHtmlMarkup = function () {
            /** Create markup example */
            try {
                if (!this.context) {
                    console.log('No context set');
                }
                var markupExampleCode = Reflect.getMetadata('annotations', this.context.constructor);
                if (this.elementId) {
                    markupExampleCode = this.parser.parseFromString(markupExampleCode[0].template, "text/html").getElementById(this.elementId);
                }
                else if (this.exemplifyId) {
                    var selector = '[exemplify="' + this.exemplifyId + '"]';
                    var content = this.parser.parseFromString(markupExampleCode[0].template, "text/html").querySelectorAll(selector);
                    if (content.length > 1) {
                        console.log('Exemplify warning! Multiple elements are using: "' + this.exemplifyId + '" as a identifier for the example, it should be a unique id. Returning first match.');
                    }
                    markupExampleCode = content[0];
                }
                else {
                    console.log('Exemplify warning! No id set for example element, returning first match.');
                    markupExampleCode = this.parser.parseFromString(markupExampleCode[0].template, "text/html").querySelectorAll('[exemplify]')[0];
                }
                if (typeof markupExampleCode === 'undefined') {
                    console.log("Exemplify warning! Can't show example as the component holding the markup couldn't be found!");
                    return;
                }
                if (this.keepInputs !== true) {
                    markupExampleCode.removeAttribute("exemplify");
                    markupExampleCode.removeAttribute("id");
                    markupExampleCode.removeAttribute("[externalsources]");
                    markupExampleCode.removeAttribute("[source]");
                    markupExampleCode.removeAttribute("[target]");
                    markupExampleCode.removeAttribute("[customclass]");
                    markupExampleCode.removeAttribute("[navstyle]");
                    markupExampleCode.removeAttribute("[useprism]");
                    markupExampleCode.removeAttribute("[escapestrings]");
                    markupExampleCode.removeAttribute("[show]");
                    markupExampleCode.removeAttribute("[context]");
                }
                /** Add markup content */
                var markupExampleString = void 0;
                switch (this.source) {
                    case 'child':
                        markupExampleString = markupExampleCode.innerHTML;
                        break;
                    default:
                        markupExampleString = markupExampleCode.outerHTML;
                        break;
                }
                if (this.keepInputs === true) {
                    // keep original format ie. avoid attributes being transformed into lowercase
                    markupExampleString = markupExampleString.replace(/\[keepinputs]=/, '[keepInputs]=').replace(/\[externalsources]=/, '[externalSources]=').replace(/\[customclass]=/, '[customClass]=').replace(/\[navstyle]=/, '[navStyle]=').replace(/\[escapestrings]=/, '[escapeStrings]=');
                }
                if (this.escapeStrings) {
                    // loop through items to and reset their casing, useful for inputs that will be converted to lower case otherwise
                    for (var i = 0; i < this.escapeStrings.length; i++) {
                        var lower = new RegExp('\\' + this.escapeStrings[i].toLowerCase(), "g");
                        markupExampleString = markupExampleString.replace(lower, this.escapeStrings[i]);
                    }
                }
                // remove empty ="" form generated markup
                markupExampleString = markupExampleString.replace(/=""/g, '');
                return markupExampleString;
            }
            catch (error) {
                console.log(error);
                return "";
            }
        };
        this.addCodeContainer = function (hostElement) {
            this.pre = this.renderer.createElement(hostElement, 'pre');
            this.code = this.renderer.createElement(this.pre, 'code');
            this.renderer.setElementClass(this.pre, 'markup-example', true);
            this.codeP = this.renderer.createText(this.code, '');
            this.showCode(this.getHtmlMarkup());
        };
        this.removeListeners = function () {
            for (var i = 0; i < this.activeListeners.length; i++) {
                this.activeListeners[i]();
            }
        };
        this.removeActiveClass = function () {
            if (this.activeItem) {
                this.renderer.setElementClass(this.activeItem, 'active', false);
            }
        };
        this.toggleVisibility = function (element, forceShow) {
            if (forceShow) {
                this.renderer.setElementStyle(this.pre, 'display', 'block');
                this.toggleState.innerHTML = this.texts.hide;
                this.renderer.setElementClass(this.toggleState, 'exemplify-visible', true);
                this.visibility = true;
                return;
            }
            else if (forceShow === false) {
                this.renderer.setElementStyle(this.pre, 'display', 'none');
                this.toggleState.innerHTML = this.texts.show;
                this.renderer.setElementClass(this.toggleState, 'exemplify-visible', false);
                this.visibility = false;
                return;
            }
            if (this.visibility) {
                this.removeActiveClass();
                this.renderer.setElementStyle(this.pre, 'display', 'none');
                this.renderer.setElementClass(this.toggleState, 'exemplify-visible', false);
            }
            else {
                if (this.activeItem) {
                    this.renderer.setElementClass(this.activeItem, 'active', true);
                }
                this.renderer.setElementStyle(this.pre, 'display', 'block');
                this.renderer.setElementClass(this.toggleState, 'exemplify-visible', true);
            }
            this.visibility = !this.visibility;
            this.renderer.setText(element, this.visibility ? this.texts.hide : this.texts.show);
        };
        /**
         *  Extend object function.
         */
        this.extend = function (a, b) {
            for (var key in b)
                if (b.hasOwnProperty(key))
                    a[key] = b[key];
            return a;
        };
        this.hostElement = el.nativeElement;
        this.renderer = renderer;
        this.window = winRef.nativeWindow;
        this.elementId = this.hostElement.getAttribute("id");
        this.parser = new DOMParser();
        this.prism = winRef.nativeWindow.Prism;
    }
    ExemplifyDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (null == this.context)
            throw new Error("Input 'context' is required, add [context]=\"this\" to set example context to current component.");
        this.texts = this.extend(this.defaultTexts, this.texts);
        // add angular directives to the list of strings to escape
        (_a = this.escapeStrings).push.apply(_a, this.escapeAngularDirectives);
        /** Get host element */
        var hostElement;
        if (this.target) {
            hostElement = this.renderer.createElement(this.target, 'div');
        }
        else {
            hostElement = this.renderer.createElement(this.hostElement, 'div');
        }
        this.renderer.setElementClass(hostElement, 'exemplify-wrapper', true);
        if (this.customClass) {
            this.renderer.setElementClass(hostElement, this.customClass, true);
        }
        /** create div element to hold heading, hide/show and copy */
        var func = this.renderer.createElement(hostElement, 'div');
        this.renderer.setElementClass(func, ('exemplify-bar'), true);
        var funcSpan = this.renderer.createElement(func, 'span');
        this.renderer.createText(funcSpan, this.texts.heading);
        this.renderer.setElementClass(funcSpan, ('exemplify-label'), true);
        if (this.externalSources) {
            /** create nav element to hold links */
            var nav_1 = this.renderer.createElement(hostElement, 'ul');
            this.renderer.setElementClass(nav_1, ('nav'), true);
            this.renderer.setElementClass(nav_1, ('nav-' + this.navStyle), true);
            /** Create link for toggling markup */
            this.addLink(nav_1, this.texts.markup, this.getHtmlMarkup());
            var links = [];
            var _loop_1 = function (i) {
                links.push(this_1.sourceService.getSource(this_1.externalSources[i].src));
                this_1.sourceService.getSource(this_1.externalSources[i].src)
                    .subscribe(function (code) {
                    _this.addLink(nav_1, _this.externalSources[i].name, code, _this.externalSources[i].language ? _this.externalSources[i].language : 'typescript');
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.externalSources.length; i++) {
                _loop_1(i);
            }
            // wait until all sources have loaded...
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].forkJoin(links).subscribe(function (res) {
                _this.addCopy(hostElement, func);
                _this.addHide(hostElement, func);
                // ...add code container
                _this.addCodeContainer(hostElement);
            });
        }
        else {
            this.addCopy(hostElement, func);
            this.addHide(hostElement, func);
            // ...add code container
            this.addCodeContainer(hostElement);
        }
        var _a;
    };
    ExemplifyDirective.prototype.ngOnDestroy = function () {
        /** Remove click listeners */
        this.removeListeners();
    };
    return ExemplifyDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], ExemplifyDirective.prototype, "target", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], ExemplifyDirective.prototype, "source", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], ExemplifyDirective.prototype, "customClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], ExemplifyDirective.prototype, "externalSources", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Boolean)
], ExemplifyDirective.prototype, "usePrism", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], ExemplifyDirective.prototype, "navStyle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Boolean)
], ExemplifyDirective.prototype, "keepInputs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('show'),
    __metadata("design:type", Boolean)
], ExemplifyDirective.prototype, "visibility", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], ExemplifyDirective.prototype, "texts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('exemplify'),
    __metadata("design:type", Object)
], ExemplifyDirective.prototype, "exemplifyId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], ExemplifyDirective.prototype, "escapeStrings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", Object)
], ExemplifyDirective.prototype, "context", void 0);
ExemplifyDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: '[exemplify]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer */]) === "function" && _b || Object, WindowRef, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_source_service__["a" /* ExmplifySourceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_source_service__["a" /* ExmplifySourceService */]) === "function" && _c || Object])
], ExemplifyDirective);

var _a, _b, _c;
//# sourceMappingURL=exemplify.directive.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_source_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_exemplify_directive__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExemplifyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExemplifyModule = (function () {
    function ExemplifyModule() {
    }
    return ExemplifyModule;
}());
ExemplifyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__directives_exemplify_directive__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_2__services_source_service__["a" /* ExmplifySourceService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__directives_exemplify_directive__["b" /* ExemplifyDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__directives_exemplify_directive__["b" /* ExemplifyDirective */]]
    })
], ExemplifyModule);

//# sourceMappingURL=exemplify.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, ".btn-custom {\n  background: lightseagreen;\n  border: teal;\n}\n\n.btn-custom:active {\n  background: teal;\n  border: teal;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div class=\"container pb-5\">\n  <br>\n  <h1>\n    Angular Exemplify\n  </h1>\n  <p class=\"lead\">A simple directive for adding code examples based on actual code and markup! Just add <code>exemplify</code> and <code>[context]=\"this\"</code> to your element and you're done:D See <a href=\"https://github.com/hjalmers/angular-exemplify\" target=\"_blank\">docs</a> for more info.</p>\n  <h4 class=\"mt-5\">A really basic example</h4>\n  <p>Lets start with something really simple, by adding the directive <code>exemplify</code> and <code>[context]=\"this\"</code> to our element this is what we'll get.</p>\n  <strong class=\"text-muted\">Example:</strong>\n  <div exemplify=\"basic\" [show]=\"true\" [context]=\"this\">\n    <p>Some content and a button.</p>\n    <button class=\"btn btn-primary mb-4\">Button</button>\n  </div>\n  <p class=\"alert-info alert my-4\">Note that the directive itself and other angular specific attributes added during compilation are removed as we often want to show the code before compilation. However, in some cases we might want to keep the inputs and attributes added to our example element and by passing <code>[keepInputs]=\"true\"</code> to our directive we can achieve just that.</p>\n  <strong class=\"text-muted\">Example:</strong>\n  <div exemplify=\"basicKeepInputs\" [keepInputs]=\"true\" [show]=\"true\" [context]=\"this\">\n    <p>Some other content and another button.</p>\n    <button class=\"btn btn-primary mb-4\">Another button</button>\n  </div>\n  <h4 class=\"mt-5\">The less basic reality</h4>\n  <p>A real app or library is usually more complex and most often our code is split in to multiple files (JavaScript, TypeScript, html, css etc.), which is a good practice for organizing our code but i also poses a problem when we're trying to keep examples up to date. So how do we solve that last problem now that our code is split into multiple files?</p>\n  <p class=\"alert alert-info\">The following example loads external sources that are passed to the directive and presents them within tabs. You can override the css styles directly or pass other nav options to leverage bootstraps default styles using <code>[navStyle]=\"'tabs'\"</code>. We're also targeting another element using <code>[target]=\"formExample\"</code> (the element we want to add attach our example to) and by passing a custom class name <code>[customClass]=\"'card-footer'\"</code> we can alter the appearance.</p>\n  <p>For the sake of demonstrating the concept I've added an example inside another example so the first one is what you want to achieve and the second code block is actually how you'd set it up.</p>\n  <strong class=\"text-muted\">Example:</strong>\n  <div exemplify=\"metaExample\" [keepInputs]=\"true\" [source]=\"'child'\" class=\"mt-2\" [escapeStrings]=\"['#formExample']\" [context]=\"this\">\n  <div class=\"card mb-4\" #formExample>\n    <div class=\"card-block\">\n      <form exemplify=\"formExample\" [target]=\"formExample\" [navStyle]=\"'tabs'\" [customClass]=\"'card-footer'\" [externalSources]=\"externalSources\" [context]=\"this\">\n        <div class=\"form-group row\">\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n          </div>\n        </div>\n        <fieldset class=\"form-group row\">\n          <legend class=\"col-form-legend col-sm-2\">Radios</legend>\n          <div class=\"col-sm-10\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\n                Option one is this and that&mdash;be sure to include why it's great\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\n                Option two can be something else and selecting it will deselect option one\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios3\" value=\"option3\" disabled>\n                Option three is disabled\n              </label>\n            </div>\n          </div>\n        </fieldset>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2\">Checkbox</label>\n          <div class=\"col-sm-10\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"> Check me out\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"offset-sm-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-primary btn-custom\" (click)=\"signIn()\">Sign in</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <strong class=\"text-muted\">Meta code example</strong>\n  </div>\n  <h4 class=\"mt-5\">Escaping template variables, inputs etc.</h4>\n  <p>Without escaping the string <code>#myTemplateVariable</code> this is how or example would turn out.</p>\n  <div exemplify=\"escapingFalseExample\" [show]=\"true\" [context]=\"this\">\n    <div #myTemplateVariable></div>\n  </div>\n  <p class=\"alert alert-info mt-4\">To avoid the above we need let exemplify know which strings to escape. We do this by passing them in an array ex. <code>['#myTemplateVariable','[myCustomInput]','[(myCustomEvent)]']</code>. Note that this is only necessary for camel case strings.</p>\n  <div exemplify=\"escapingExample\" [keepInputs]=\"true\" [escapeStrings]=\"['#myTemplateVariable']\" [show]=\"true\" [context]=\"this\">\n    <div #myTemplateVariable></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ })

},[627]);
//# sourceMappingURL=main.bundle.js.map