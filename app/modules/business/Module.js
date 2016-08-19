'use strict';

angular.module('business', [
    'ngRoute',
    'ngSanitize',
    'config'
])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('client.businesses', {
                url: 'businesses',
                templateUrl: 'app/modules/business/views/businesses.html',
                controller: 'BusinessesController',
                data: {
                    pageTitle: 'Businesses'
                }                
            });

    }]).run(['$rootScope', '$state', function ($rootScope, $state) {
    }]);
