'use strict';

angular.module('login').factory('LoginService', ['$q','$resource', '$location', 'config', 'SessionService', 'HttpBasicAuthentication', '$rootScope','$state',
    function ($q, $resource, $location, config, SessionService, HttpBasicAuthentication, $rootScope, $state) {

        var service = {};

        service.resource = $resource(config.api.url + '/oauth/login', {}, {
            'getToken': {
                method: 'POST',
                isArray: false,
                url: config.api.url + '/oauth/login',
                params: {
                    email: '@email',
                    password: '@password'
                }
            }
        });

        service.login = function (email, password) {
            console.log(email);
            console.log(email);
            // var deferred = $q.defer();
            // // HttpBasicAuthentication.setCredentials(email, password);

            // this.resource.getToken({email:email, password:password}, function (data) {
            //     // HttpBasicAuthentication.clearCredentials();
            //     // Intentionally do not resolve promise to prevent inconsistent login process
            //     SessionService.setToken(data.token);
            //     SessionService.setTokenExpiration(data.tokenExpires);
            //     SessionService.setUser(data.user)
            //     // self.hash = data.hash;
            //     self.user = data.user;
            //     // if(!self.validateRoles())
            //     //     service.continueLogin();
            //     $location.path("/dashboard");
            // }, function (error) {
            //     // HttpBasicAuthentication.clearCredentials();
            //     deferred.reject(error);
            // });

            // return deferred.promise;
        };

        service.requestPasswordReset = function (email) {
            var deferred = $q.defer();
            this.resource.requestPasswordReset({email: email}, function (data) {
                deferred.resolve(data)
            });

            return deferred.promise;
        };

        service.verifyPasswordHash = function (email, hash) {
            var deferred = $q.defer()
            this.resource.verifyPasswordHash(
                {'email': email, 'hash': hash}, function (data) {
                    deferred.resolve(data)
                });
            return deferred.promise
        };

        service.resetPasswordWithHash = function (email, hash, password) {
            var deferred = $q.defer();
            this.resource.resetPasswordWithHash(
                {'email': email, 'hash': hash, 'password': password}, function (data) {
                    deferred.resolve(data)
                });
            return deferred.promise
        };

        service.logout = function () {
            //$remember.clearCookie();

            $rootScope.$$listeners.$stateChangeStart=[];
            SessionService.clear();
            $location.path('/login');
        };

        return service;
    }]);
