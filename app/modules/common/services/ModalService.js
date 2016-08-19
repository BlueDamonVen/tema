'use strict';

angular.module('common').factory('ModalService', ['$rootScope', '$modal',
    function ($rootScope, $modal) {
        var service = {};
        var modalW;

        var _open = function(content, title, okCallback, cancelCallBack, windowClass, canCancel) {
            var modalScope = $rootScope.$new(true, $rootScope);
            modalScope.view = {title: title, content: content, cancel: canCancel};

            modalW = $modal.open({
                templateUrl: 'app/modules/common/views/modal.html',
                scope: modalScope,
                size: 'lg',
                windowClass: windowClass,
                keyboard: false,
                backdrop: 'static'
            }).result.then(okCallback, cancelCallBack);
        };

        service.info = function(content, title, okCallback) {
            _open(content, (_.isUndefined(title)) ? 'Info' : title, okCallback, undefined, 'modal-info', false);
        };

        service.success = function(content, title, okCallback) {
            _open(content, (_.isUndefined(title)) ? 'Success' : title, okCallback, undefined, 'modal-success', false);
        };

        service.warning = function(content, title, okCallback) {
            _open(content, (_.isUndefined(title)) ? 'Warning' : title, okCallback, undefined, 'modal-warning', false);
        };

        service.error = function(content, title, okCallback) {
            _open(content, (_.isUndefined(title)) ? 'Error' : title, okCallback, undefined, 'modal-error', false);
        };

        service.confirm = function(content, title, okCallback, cancelCallBack) {
            _open(content, (_.isUndefined(title)) ? 'Confirm' : title, okCallback, cancelCallBack, 'modal-confirm', true);
        };

        service.modal = function(config) {
            modalW = $modal.open(config);
            return modalW;
        };

        service.close = function(){
            //modalW.$close();
            modalW.close('closing');
        };

        return service;
    }])
;
