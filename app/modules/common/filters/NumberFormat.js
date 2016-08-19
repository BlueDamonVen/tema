'use strict';

angular.module('common').filter('numberFormat', [function() {
    return function(number) {
        if(number) {
            var abs = Math.abs(number);
            switch(true) {
                case abs >= Math.pow(10, 12):
                    number = (number / Math.pow(10, 12)).toFixed(1)+"T";
                    break;
                case abs < Math.pow(10, 12) && abs >= Math.pow(10, 9):
                    number = (number / Math.pow(10, 9)).toFixed(1)+"B";
                    break;
                case abs < Math.pow(10, 9) && abs >= Math.pow(10, 6):
                    number = (number / Math.pow(10, 6)).toFixed(2)+"M";
                    break;
                case abs < Math.pow(10, 6) && abs >= Math.pow(10, 3):
                    number = (number / Math.pow(10, 3)).toFixed(1)+"K";
                    break;
                case abs < Math.pow(10, 3):
                    number = Number(( Number(number)).toFixed(2));
                    break;
            }
        }

        return number;
    };
}]);