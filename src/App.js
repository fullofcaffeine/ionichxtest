// Class: App

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function pages_home_Home() {return require("./pages/home/Home");}

// Constructor

@Component({ templateUrl: 'app.html' })
class App {
	constructor(platform,statusBar,splashScreen) {
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

App.__name__ = ["App"];
App.prototype.__class__ = App.prototype.constructor = $hxClasses["App"] = App;

// Init



// Statics



// Export

exports.default = App;
