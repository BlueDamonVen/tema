'use strict';

angular.module('common').filter('absoluteNumber', [function() {
    return function(number) {
        if(number) {
            return Math.abs(number);
        }

        return number;
    };
}]);