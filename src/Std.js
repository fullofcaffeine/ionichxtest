// Class: Std

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;

// Constructor

class Std {
	constructor(){}
	
}


// Meta

Std.__name__ = ["Std"];
Std.prototype.__class__ = Std.prototype.constructor = $hxClasses["Std"] = Std;

// Init

{
	String.__name__ = true;
	Array.__name__ = true;
};

// Statics



// Export

exports.default = Std;