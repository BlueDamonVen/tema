'use strict';

angular.module('common').filter('moment', ['DateTimeService', function(DateTimeService) {
    return function(input, format) {
        var predefinedFormat = DateTimeService.getFormat(format);
        if(predefinedFormat) {
            format = predefinedFormat;
        }

        if(_.isString(input)) {
            input = DateTimeService.fromFormat(input);
        }

        return (_.isObject(input)) ? input.format(format) : input;
    };
}]);