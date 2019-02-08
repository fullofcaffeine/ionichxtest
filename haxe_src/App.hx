package;

import externs.angular.core.Component;
import externs.ionicAngular.Platform;
import externs.ionicNative.StatusBar;
import externs.ionicNative.SplashScreen;

import pages.home.Home;

@:Component({templateUrl: 'app.html'})
class App {
	var rootPage = Home;

  static function main() {
  }

	function new(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(function() {
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
}
