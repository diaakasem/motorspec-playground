'use strict';

describe('Service: NewService', function () {

  // load the service's module
  beforeEach(module('motospecApp'));

  // instantiate service
  var NewService;
  beforeEach(inject(function (_NewService_) {
    NewService = _NewService_;
  }));

  it('should do something', function () {
    expect(!!NewService).toBe(true);
  });

  it('should add two numbers', function () {
    expect(NewService.add(1,2)).toEqual(3);
  });

});
