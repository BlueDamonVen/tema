'use strict';

angular.module('common').factory('SessionService', ['config', '$window', '$rootScope', 'orderByFilter',
    function (config, $window, $rootScope, orderByFilter) {

        var service = {};

        service.getUser = function () {
            return ($window.sessionStorage.user !== 'undefined') ? angular.fromJson($window.sessionStorage.user) : undefined;
        };

        service.setUser = function (user) {
            $window.sessionStorage.user = angular.toJson(user);
            // this.setTimezone(user.timezone.offset);
        };

        service.getAccount = function () {
            return ($window.sessionStorage.account !== 'undefined') ? angular.fromJson($window.sessionStorage.account) : undefined;
        };

        service.setAccount = function (account) {
            $window.sessionStorage.account = angular.toJson(account);
        };

        service.getAccountId = function () {
            var account = this.getAccount();
            return (account) ? account.id : undefined;
        };

        service.getToken = function () {
            return $window.sessionStorage.token;
        };

        service.setToken = function (token) {
            $window.sessionStorage.token = token;
        };

        service.getTokenExpiration = function () {
            return $window.sessionStorage.tokenExpiration;
        };

        service.setTokenExpiration = function (tokenExpiration) {
            $window.sessionStorage.tokenExpiration = tokenExpiration;
        };


        return service;
    }]);
