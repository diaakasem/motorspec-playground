'use strict';

/**
 * @ngdoc service
 * @name motospecApp.NewService
 * @description
 * # NewService
 * Service in the motospecApp.
 */
angular.module('motospecApp')
  .service('NewService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.add = function(x, y) {
      return x +y ;
    };

  });
