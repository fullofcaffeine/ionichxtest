// Class: App

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("../hxClasses_stub").default;
var $import = require("../import_stub").default;
function pages_home_Home() {return require("../pages/home/Home");}
var Component = require('@angular/core').Component;
var Platform = require('ionic-angular').Platform;
var StatusBar = require('@ionic-native/status-bar').StatusBar;
var SplashScreen = require('@ionic-native/splash-screen').SplashScreen;

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
