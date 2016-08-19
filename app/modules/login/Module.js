'use strict';

angular.module('login', [
    'ui.router',
    'config'
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: 'app/modules/login/views/loginView.html',
                    controller: 'loginCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'services',
                                'filters',
                                'directives',
                                'interceptors',
                                'controllers',
                                'lazy_iCheck',
                                'app/modules/login/services/LoginService.js',
                                'app/modules/login/controllers/LoginController.js'
                            ]);
                        }]
                    }
                });

        }
    ])
    .run(['$rootScope', '$state', function ($rootScope, $state) {

    }]);
