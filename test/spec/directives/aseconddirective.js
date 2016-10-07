'use strict';

describe('Directive: aSecondDirective', function () {

  // load the directive's module
  beforeEach(module('motospecApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<a-second-directive></a-second-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the aSecondDirective directive');
  }));
});
