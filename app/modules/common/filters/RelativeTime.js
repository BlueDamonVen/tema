'use strict';

angular.module('common').filter('relativeTime', ['DateTimeService', function(DateTimeService) {
    return function(input, from) {
        if(_.isUndefined(from)) {
            from = DateTimeService.now();
        } else if(_.isString(from)) {
            from = DateTimeService.fromFormat(from);
        }

        if(_.isString(input)) {
            input = DateTimeService.fromFormat(input);
        }

        return input.from(from);
    };
}]);