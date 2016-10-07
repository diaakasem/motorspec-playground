'use strict';

describe('Controller: XxCtrl', function () {

  // load the controller's module
  beforeEach(module('motospecApp'));

  var XxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XxCtrl = $controller('XxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(XxCtrl.awesomeThings.length).toBe(3);
  });
});
