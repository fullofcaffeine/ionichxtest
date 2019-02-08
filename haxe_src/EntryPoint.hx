import externs.angular.PlatformBrowserDynamic;

// TODO :Fix require paths for main.js
// TODO: Generated tag for component should output the object notation in js format


@:entryPoint
class EntryPoint {
  static function main() {
    js.Lib.alert('foooo');
    new PlatformBrowserDynamic().bootstrapModule(App);
  }
}
