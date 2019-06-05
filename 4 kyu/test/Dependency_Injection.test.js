describe('Inject dependencies', function() {
  var modules = {
    'app': function(){return 'module app';},
    'login': function(){return 'module login';},
    'i18n': function(){return 'module i18n';}
  };
  
  var di = new DI(modules);

  it('should resolve all dependencies', function () {
    var myFunc = di.inject(function (i18n, login, app) {
      return [i18n(), login(), app()].join(', ');
    });
    Test.assertEquals(myFunc(), 'module i18n, module login, module app');
  });
  
  it('shouldn\'t resolve undefined dependencies', function () {
    var myFuncWithUndefined = di.inject(function (nonExistingVar) {
      return nonExistingVar;
    });
    Test.assertEquals(myFuncWithUndefined(), void(0));
  });
  
  it('shouldn\'t pass any dependencies into the function if such dependencies aren\'t specified', function () {
    var myFuncWithoutDependencies = di.inject(function () {
      return arguments.length;
    });
    Test.assertEquals(myFuncWithoutDependencies(), 0);
  });
  
  it('shouldn\'t handle any nested functions', function () {
    var myFuncWithNested = di.inject(function (app, login, i18n) {
      function nested(d, e, f){};
      var args = Array.prototype.slice.call(arguments, 0);
      return args.length;
    });
    Test.assertEquals(myFuncWithNested(), 3);
  });
});