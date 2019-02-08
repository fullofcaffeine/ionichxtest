package externs.angular;

@:jsRequire('@angular/platform-browser-dynamic', 'platformBrowserDynamic')
extern class PlatformBrowserDynamic implements Dynamic {
  @:selfCall public function new() {}
}
