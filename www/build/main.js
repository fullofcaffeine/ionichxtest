webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (14:0)\nYou may need an appropriate loader to handle this file type.\n| \n| // Constructor\n| @Component({\n|   selector: 'page-home',\n|   templateUrl: 'home.html'");

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_Home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pages_home_Home__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__App___default.a,
                __WEBPACK_IMPORTED_MODULE_6__pages_home_Home__["default"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__App___default.a, {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__App___default.a,
                __WEBPACK_IMPORTED_MODULE_6__pages_home_Home__["default"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["StatusBar"],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["SplashScreen"],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Class: App

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = __webpack_require__(268).default;
var $import = __webpack_require__(269).default;
function pages_home_Home() {return __webpack_require__(193);}
var Component = __webpack_require__(0).Component;
var Platform = __webpack_require__(108).Platform;
var StatusBar = __webpack_require__(192).StatusBar;
var SplashScreen = __webpack_require__(189).SplashScreen;

// Constructor

class App {
	constructor(platform, statusBar, splashScreen) {
    alert('foo');
		this.rootPage = (pages_home_Home().default)
		platform.ready().then(function() {
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
	static main() {
	}
}


// Meta
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };



App.annotations = [new Component({templateUrl: 'app.html'})];

App = __decorate([__metadata('design:paramtypes', [Platform, StatusBar, SplashScreen])], App);

App.__name__ = ["App"];
App.prototype.__class__ = App.prototype.constructor = $hxClasses["App"] = App;

console.log(App);

// Init



// Statics



// Export

exports.default = App;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {value: true});

exports.default = {
	Enum: {}
};

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {value: true});

// exports.default = function $import(obj) {
// 	if(obj && obj.__esModule) {
// 		// if(!obj.hasOwnProperty('default')) obj.default = obj;
// 		return obj;
// 	} else { 
// 		var newObj = {};
// 		if (obj != null) {
// 			for (var key in obj) {
// 				if (Object.prototype.hasOwnProperty.call(obj, key))
// 					newObj[key] = obj[key];
// 			}
// 		} 
// 		newObj.default = obj;
// 		return newObj;
// 	}
// }
exports.default = function $import(obj) {
	return obj && obj.__esModule ? obj : {default: obj};
}


/***/ })

},[194]);
//# sourceMappingURL=main.js.map