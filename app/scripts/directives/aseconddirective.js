'use strict';

/**
 * @ngdoc directive
 * @name motospecApp.directive:aSecondDirective
 * @description
 * # aSecondDirective
 */
angular.module('motospecApp')
  .directive('aSecondDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the aSecondDirective directive');
      }
    };
  });
