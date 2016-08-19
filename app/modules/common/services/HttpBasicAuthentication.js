(function (window, angular) {
'use strict';

angular.module('common').factory('HttpBasicAuthentication', ['Base64', '$http', function (Base64, $http) {

    return {
        setCredentials: function (username, password) {
            var encoded = Base64.encode(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
        },
        clearCredentials: function () {
            document.execCommand("ClearAuthenticationCache");
            $http.defaults.headers.common.Authorization = null;
        }
    };
}]);
})(window, window.angular);