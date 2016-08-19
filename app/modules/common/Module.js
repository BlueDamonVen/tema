'use strict';

angular.module('common', [
    'ui.router',
    'config'
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .when('/dashboard', '/')
                .otherwise('/');

            $stateProvider
            // -- ERROR PAGES --
                .state("error", {
                    url: "/error",
                    templateUrl: 'app/modules/error/views/error.html'
                })
                .state("error.404", {
                    url: "/404",
                    templateUrl: 'app/modules/error/views/error_404View.html'
                })
                .state("error.500", {
                    url: "/500",
                    templateUrl: 'app/modules/error/views/error_500View.html'
                })
            // -- APP --
                .state("app", {
                    abstract: true,
                    url: "",
                    views: {
                        'main_header': {
                            templateUrl: 'app/modules/common/views/headerView.html',
                            controller: 'main_headerCtrl'
                        },
                        'main_sidebar': {
                            templateUrl: 'app/modules/common/views/main_sidebarView.html',
                            controller: 'main_sidebarCtrl'
                        },
                        '': {
                            templateUrl: 'app/modules/common/views/client-layout.html'
                        }
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'services',
                                'filters',
                                'directives',
                                'interceptors',
                                'controllers',
                                'lazy_uikit',
                                'lazy_selectizeJS',
                                'lazy_switchery',
                                'lazy_prismJS',
                                'lazy_autosize',
                                'lazy_iCheck',
                            ],{ serie: true });
                        }]
                    }
                })
            // -- DASHBOARD --
                .state("app.dashboard", {
                    url: "/",
                    templateUrl: 'app/modules/dashboard/views/dashboardView.html',
                    controller: 'dashboardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                // ocLazyLoad config (app/app.js)
                                'app/modules/dashboard/controllers/dashboardController.js'
                            ], {serie: true} );
                        }]
                    },
                    data: {
                        pageTitle: 'Dashboard'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
        }
    ])
    .run(['$rootScope', '$state', function ($rootScope, $state) {

    }]);
