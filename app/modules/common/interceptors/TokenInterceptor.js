'use strict';

angular.module('common').factory('TokenInterceptor', ['$q', 'config', 'SessionService', '$window', function ($q, config, SessionService, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            var token = SessionService.getToken();
            if (token) {
                config.headers['Access-Token'] = token;
            }
            return config;
        },

        response: function (response) {
            return response || $q.when(response);
        },

        'responseError': function(rejection) {
            // @TODO - Improve this to check against routes vs urls. No time for this now
            var publicUrls = config.urls.public;
            if((rejection.status == 498 || rejection.status == 499) && publicUrls.indexOf($window.location.hash.replace('#', '')) === -1) {
                $window.location = '#' + config.urls.login;
            }

            return $q.reject(rejection);
        }
    };
}]);