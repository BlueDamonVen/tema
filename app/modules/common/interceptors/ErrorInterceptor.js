'use strict';

angular.module('common').factory('ErrorInterceptor', ['$q', '$injector', 'config', function ($q, $injector, config,$location) {
    return {
        'responseError': function(response) {

            if(response.status == 503)
            {
               // Alerts..
            }

            if (_.indexOf( config.logout_codes , response.status) > -1)
            {
                // Alerts...
            }

            else if(response.config.handleErrors !== false) {
                if(_.isNull(response.data)) {
                    response.data = {};
                    response.data.detail = "";
                } else if (!_.isUndefined(response.data.detail)) {
                    // Alert error
                }
            }
            return $q.reject(response);
        }
    };
}]);