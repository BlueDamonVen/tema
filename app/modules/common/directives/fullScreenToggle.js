'use strict';

angular.module('common').directive('fullScreenToggle', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            $(elem).on('click', function(e) {
                e.preventDefault();
                screenfull.toggle();
            });
        }
    };
}]);