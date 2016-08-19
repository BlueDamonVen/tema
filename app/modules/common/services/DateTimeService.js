'use strict';

angular.module('common').factory('DateTimeService', ['config', 'SessionService', function(config, SessionService) {
    var service = {};

    service.now = function(format) {
        var now = moment();
        var timezone = SessionService.getTimezone(true);
        now = moment.parseZone(now.format("YYYY-MM-DD HH:mm") + " " + timezone, "YYYY-MM-DD HH:mm Z");
        return (_.isUndefined(format)) ? now : now.format(this.getFormat(format));
    };

    service.nowUtc = function(format) {
        var now = this.now();
        now.utcOffset('+00:00');
        return (_.isUndefined(format)) ? now : now.format(this.getFormat(format));
    };

    service.getFormat = function(key) {
        return config.date.format[key];
    };

    service.format = function(object, format) {
        if(_.isUndefined(format)) {
            format = 'iso';
        }

        return object.format(this.getFormat(format));
    };

    service.fromFormat = function(string, format) {
        if(_.isUndefined(format)) {
            format = 'iso';
        }

        return moment.parseZone(string, this.getFormat(format));
    };

    service.fromString = function(string) {
        return moment.parseZone(string);
    };

    service.toUserTimeZoneDate = function(utcDateString){
        return moment.utc(utcDateString).utcOffset(SessionService.getTimezoneMinutes()).format(config.date.format.iso);
    };

    service.dateDiff = function( str1, str2 ) {
        var diff = Date.parse( str2 ) - Date.parse( str1 );
        return isNaN( diff ) ? NaN : {
            diff : diff,
            ms : Math.ceil( diff            % 1000 ),
            s  : Math.ceil( diff /     1000 %   60 ),
            m  : Math.ceil( diff /    60000 %   60 ),
            h  : Math.ceil( diff /  3600000 %   24 ),
            d  : Math.ceil( diff / 86400000        )
        };
    };

    service.betweenDate = function(startDt, endDt) {
        var between = [];
        var currentDate = new Date(startDt), end = new Date(endDt);

        while (currentDate <= end) {
            between.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);

            //else if(format === 'days') { between.push(d.getDate()); }
            //else if(format === 'dateString') { between.push(d.toDateString()); }
        }

        return between.sort(function(a,b){
            return  new Date(a).getTime() - new Date(b).getTime();
        });
    };

    //Because not all browser are supporting toLocaleString('en-us', { month: "short" })
    service.getShortMonthName = function (date) {
        return moment(date).format('MMM');
    };

    return service;
}]);