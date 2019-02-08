// Class: Main

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function externs_angular_PlatformBrowserDynamic() {return require("@angular/platform-browser-dynamic");}
function App() {return require("./App");}

// Constructor

class Main {
	constructor(){}
	static main() {
		(externs_angular_PlatformBrowserDynamic().platformBrowserDynamic)().bootstrapModule((App().default));
	}
}


// Meta

Main.__name__ = ["Main"];
Main.prototype.__class__ = Main.prototype.constructor = $hxClasses["Main"] = Main;

// Init



// Statics



// Export

exports.default = Main;