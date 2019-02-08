// Class: App

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function externs_angular_core_Component() {return require("@angular/core");}
function pages_home_Home() {return require("./pages/home/Home");}

// Constructor

class App {
	constructor(platform,statusBar,splashScreen) {
		this.rootPage = (pages_home_Home().default)
		platform.ready().then(function() {
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
	static get annotations() { return annotations; }
	static set annotations(value) { annotations = value; }
	static main() {
	}
}


// Meta

App.__name__ = ["App"];
App.prototype.__class__ = App.prototype.constructor = $hxClasses["App"] = App;

// Init



// Statics

var annotations = [new (externs_angular_core_Component().Component)({ template : "foo"})];

// Export

exports.default = App;