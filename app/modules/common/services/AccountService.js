'use strict';

angular.module('common').factory('AccountService', ['$resource','config', function($resource, config) {
    var service = {};

    service.resource = $resource(config.api.url + '/api/v1.0/account', {}, {
        'getLimits' : {
            method: 'GET',
            isArray: true,
            url: config.api.url + '/api/v1.0/account/:id/limit',
            params: {
                id: '@id'
            }
        },
        'get' : {
            method: 'GET',
            isArray: false,
            url: config.api.url + '/api/v1.0/account/:id',
            params: {
                id: '@id'
            }
        }
    });

    return service;
}]);