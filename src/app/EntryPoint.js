// Class: EntryPoint

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("../hxClasses_stub").default;
var $import = require("../import_stub").default;
function js_Lib() {return require("../js/Lib");}
function externs_angular_PlatformBrowserDynamic() {return require("@angular/platform-browser-dynamic");}
function App() {return require("../App");}

// Constructor

class EntryPoint {
	constructor(){}
	static main() {
		(js_Lib().default).alert("foooo");
		(externs_angular_PlatformBrowserDynamic().platformBrowserDynamic)().bootstrapModule((App().default));
	}
}


// Meta

EntryPoint.__name__ = ["EntryPoint"];
EntryPoint.prototype.__class__ = EntryPoint.prototype.constructor = $hxClasses["EntryPoint"] = EntryPoint;

// Init



// Statics



// Export

exports.default = EntryPoint;