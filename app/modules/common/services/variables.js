'use strict';

angular
    .module('common')
    .factory('variables', function () {
        return {
            header__main_height: 48,
            easing_swiftOut: [ 0.4,0,0.2,1 ],
            bez_easing_swiftOut: $.bez([ 0.4,0,0.2,1 ])
        }
    });