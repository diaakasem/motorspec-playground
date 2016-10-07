'use strict';

/**
 * @ngdoc directive
 * @name motospecApp.directive:newDirective
 * @description
 * # newDirective
 */
angular.module('motospecApp')
  .directive('newDirective', function () {
    return {
      template: '<div>Hello MotorSpec</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the newDirective directive');
      },
      controller: function($scope, NewService) {
        $scope.x = 'y';
        NewService.add(1, 2);

      }
    };
  });
