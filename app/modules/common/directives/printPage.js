'use strict';

angular.module('common').directive('printPage', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var message = attrs['printMessage'];
            $(elem).on('click', function(e) {
                e.preventDefault();
                UIkit.modal.confirm(message ? message : 'Do you want to print this page?', function () {
                    // hide sidebar
                    $rootScope.primarySidebarActive = false;
                    $rootScope.primarySidebarOpen = false;
                    // wait for dialog to fully hide
                    setTimeout(function () {
                        window.print();
                    }, 300)
                }, {
                    labels: {
                    'Ok': 'print'
                    }
                });
            });
        }
    };
}]);