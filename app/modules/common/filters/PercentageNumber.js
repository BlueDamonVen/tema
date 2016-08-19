'use strict';

angular.module('common').filter('percentageNumber', [function() {
    return function(number, decimal) {
        if(number) {
            return (number * 100).toFixed(decimal) + '%';
        }

        return number;
    };
}]);