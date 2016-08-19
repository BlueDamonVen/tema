'use strict';

angular.module('common').filter('whenEmpty', [function() {
    return function(input, substitution) {
        if(input == null || input == '' || input == undefined) {
            if(_.isUndefined(substitution) || substitution == null) {
                return "--";
            }
            else {
                return substitution;
            }
        }
        else {
            return input;
        }
    };
}]);