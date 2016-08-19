'use strict';

angular.module('common').directive('addImageProp', ['$timeout', 'utils', function ($timeout,utils) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.on('load', function () {
                $timeout(function() {
                    var w = !utils.isHighDensity() ? $(elem).width() : $(elem).width()/2,
                    h = !utils.isHighDensity() ? $(elem).height() : $(elem).height()/2;
                    $(elem).attr('width',w).attr('height',h);
                })
            });
        }
    };
}]);